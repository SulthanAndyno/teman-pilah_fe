// lib/api/products.ts
// Disesuaikan 100% dengan backend teman-pilah (port 2000)
//
// Catatan penting dari source backend:
// ✓ Base path  : /api/products
// ✓ Update     : PATCH /:id  (bukan PUT)
// ✓ GET /       : paginated response { status, data: [], meta: {} }
// ✓ POST/PATCH  : butuh JWT Bearer token (authenticate middleware)
// ✓ Gambar      : disimpan sebagai "uploads/products/xxx.png" (path relatif)
//                 → gunakan getImageUrl() untuk menampilkan di <img>

import { getBaseUrl } from '../api-config';
import { Product } from '@/types';
import { logAdminActivity } from '@/lib/utils';

export const BASE_URL = getBaseUrl();

// ─── Helper: bangun URL gambar penuh ─────────────────────────────────────────
export function getImageUrl(imagePath?: string | null): string {
  if (!imagePath) return '';
  if (imagePath.startsWith('http')) return imagePath;
  // "uploads/products/xxx.png" → "http://localhost:2000/uploads/products/xxx.png"
  return `${BASE_URL}/${imagePath}`;
}

// ─── Tipe response dari backend ──────────────────────────────────────────────

interface PaginatedResponse<T> {
  status: string;
  message: string;
  data: T[];
  meta: { total: number; page: number; limit: number; totalPages: number };
}

interface SingleResponse<T> {
  status: string;
  message: string;
  data: T;
}

// ─── Helper internal ─────────────────────────────────────────────────────────

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(
      (body as { message?: string }).message ?? `HTTP ${res.status}`,
    );
  }
  return res.json() as Promise<T>;
}

/** Ambil JWT dari localStorage (disimpan setelah login admin) */
function authHeader(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const token = localStorage.getItem('token') ?? '';
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// ─── Product API ──────────────────────────────────────────────────────────────

export const productApi = {
  /**
   * GET /api/products
   * Backend returns paginated response — kita extract array data-nya saja.
   */
  async getAll(): Promise<Product[]> {
    // Ambil semua dengan limit besar agar landing page & admin dapat semua data
    const res = await fetch(`${BASE_URL}/api/products?limit=100`, {
      cache: 'no-store',
    });
    const body = await handleResponse<PaginatedResponse<Product>>(res);
    return body.data;
  },

  /**
   * POST /api/products
   * Butuh auth token. Body: multipart/form-data dengan field `image`.
   */
  async create(data: FormData): Promise<Product> {
    const res = await fetch(`${BASE_URL}/api/products`, {
      method: 'POST',
      headers: authHeader(), // JANGAN set Content-Type, biarkan browser isi boundary
      body: data,
    });
    const body = await handleResponse<SingleResponse<Product>>(res);
    try {
      const name = data.get('name') as string || 'Product';
      logAdminActivity(`Created product: ${name}`, 'bg-[#FEF3C7]');
    } catch (e) {
      console.error(e);
    }
    return body.data;
  },

  /**
   * PATCH /api/products/:id  ← backend pakai PATCH, bukan PUT
   * Semua field opsional. Butuh auth token.
   */
  async update(id: string, data: FormData): Promise<Product> {
    const res = await fetch(`${BASE_URL}/api/products/${id}`, {
      method: 'PATCH',
      headers: authHeader(),
      body: data,
    });
    const body = await handleResponse<SingleResponse<Product>>(res);
    try {
      const name = data.get('name') as string || body.data.name || 'Product';
      logAdminActivity(`Updated product: ${name}`, 'bg-[#FEF3C7]');
    } catch (e) {
      console.error(e);
    }
    return body.data;
  },

  /**
   * DELETE /api/products/:id
   * Butuh auth token. Backend juga hapus file gambar dari disk otomatis.
   */
  async delete(id: string, name?: string): Promise<void> {
    const res = await fetch(`${BASE_URL}/api/products/${id}`, {
      method: 'DELETE',
      headers: { ...authHeader(), 'Content-Type': 'application/json' },
    });
    await handleResponse<unknown>(res);
    try {
      const display = name ? `: ${name}` : ` (ID: ${id})`;
      logAdminActivity(`Deleted product${display}`, 'bg-[#FEF3C7]');
    } catch (e) {
      console.error(e);
    }
  },
};