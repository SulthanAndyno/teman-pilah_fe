// lib/api/education.ts
// Disesuaikan 100% dengan backend teman-pilah (port 2000)

import { getBaseUrl } from '../api-config';
import { Education } from "@/types";
import { logAdminActivity } from '@/lib/utils';

export const BASE_URL = getBaseUrl();

// Helper to get full thumbnail URL
export function getThumbnailUrl(imagePath?: string | null): string {
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

export const educationApi = {
  /**
   * GET /api/education
   */
  async getAll(): Promise<Education[]> {
    const res = await fetch(`${BASE_URL}/api/education?limit=100`, {
      cache: "no-store",
    });
    const body = await handleResponse<PaginatedResponse<Education>>(res);
    return body.data;
  },

  /**
   * POST /api/education
   */
  async create(data: FormData): Promise<Education> {
    const res = await fetch(`${BASE_URL}/api/education`, {
      method: "POST",
      headers: authHeader(),
      body: data,
    });
    const body = await handleResponse<SingleResponse<Education>>(res);
    try {
      const title = data.get('title') as string || 'Education Content';
      logAdminActivity(`Created education content: ${title}`, 'bg-[#DCFCE7]');
    } catch (e) {
      console.error(e);
    }
    return body.data;
  },

  /**
   * PATCH /api/education/:id
   */
  async update(id: string, data: FormData): Promise<Education> {
    const res = await fetch(`${BASE_URL}/api/education/${id}`, {
      method: "PATCH",
      headers: authHeader(),
      body: data,
    });
    const body = await handleResponse<SingleResponse<Education>>(res);
    try {
      const title = data.get('title') as string || body.data.title || 'Education Content';
      logAdminActivity(`Updated education content: ${title}`, 'bg-[#DCFCE7]');
    } catch (e) {
      console.error(e);
    }
    return body.data;
  },

  /**
   * DELETE /api/education/:id
   */
  async delete(id: string, title?: string): Promise<void> {
    const res = await fetch(`${BASE_URL}/api/education/${id}`, {
      method: "DELETE",
      headers: { ...authHeader(), "Content-Type": "application/json" },
    });
    await handleResponse<unknown>(res);
    try {
      const display = title ? `: ${title}` : ` (ID: ${id})`;
      logAdminActivity(`Deleted education content${display}`, 'bg-[#DCFCE7]');
    } catch (e) {
      console.error(e);
    }
  },
};
