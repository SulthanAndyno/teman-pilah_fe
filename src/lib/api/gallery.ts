import { getBaseUrl } from '../api-config';
import { Gallery } from "@/types";
import { logAdminActivity } from '@/lib/utils';

export const BASE_URL = getBaseUrl();

// Helper to get full gallery image URL
export function getGalleryImageUrl(imagePath?: string | null): string {
  if (!imagePath) return "";
  if (imagePath.startsWith("http")) return imagePath;
  return `${BASE_URL}/${imagePath}`;
}

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

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(
      (body as { message?: string }).message ?? `HTTP ${res.status}`,
    );
  }
  return res.json() as Promise<T>;
}

function authHeader(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const token = localStorage.getItem("token") ?? "";
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export const galleryApi = {
  /**
   * GET /api/gallery
   */
  async getAll(): Promise<Gallery[]> {
    const res = await fetch(`${BASE_URL}/api/gallery?limit=100`, {
      cache: "no-store",
    });
    const body = await handleResponse<PaginatedResponse<Gallery>>(res);
    return body.data;
  },

  /**
   * POST /api/gallery
   */
  async create(data: FormData): Promise<Gallery> {
    const res = await fetch(`${BASE_URL}/api/gallery`, {
      method: "POST",
      headers: authHeader(),
      body: data,
    });
    const body = await handleResponse<SingleResponse<Gallery>>(res);
    try {
      logAdminActivity(`Created gallery item`, 'bg-[#DCFCE7]');
    } catch (e) {
      console.error(e);
    }
    return body.data;
  },

  /**
   * PATCH /api/gallery/:id
   */
  async update(id: string, data: FormData): Promise<Gallery> {
    const res = await fetch(`${BASE_URL}/api/gallery/${id}`, {
      method: "PATCH",
      headers: authHeader(),
      body: data,
    });
    const body = await handleResponse<SingleResponse<Gallery>>(res);
    try {
      logAdminActivity(`Updated gallery item`, 'bg-[#DCFCE7]');
    } catch (e) {
      console.error(e);
    }
    return body.data;
  },

  /**
   * DELETE /api/gallery/:id
   */
  async delete(id: string): Promise<void> {
    const res = await fetch(`${BASE_URL}/api/gallery/${id}`, {
      method: "DELETE",
      headers: { ...authHeader(), "Content-Type": "application/json" },
    });
    await handleResponse<unknown>(res);
    try {
      logAdminActivity(`Deleted gallery item (ID: ${id})`, 'bg-[#DCFCE7]');
    } catch (e) {
      console.error(e);
    }
  },
};
