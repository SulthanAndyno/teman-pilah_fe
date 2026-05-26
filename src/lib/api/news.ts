// import { News } from '@/types';

// export const BASE_URL =
//   process.env.NEXT_PUBLIC_API_URL ??
//   'http://localhost:2000';

// interface ApiResponse<T> {
//   status: string;
//   message: string;
//   data: T;
// }

// interface PaginatedResponse<T> {
//   status: string;
//   message: string;
//   data: T[];
// }

// async function handleResponse<T>(
//   res: Response
// ): Promise<T> {

//   if (!res.ok) {

//     const body =
//       await res.json().catch(
//         () => ({})
//       );

//     throw new Error(
//       body.message ||
//       `HTTP ${res.status}`
//     );
//   }

//   return res.json();
// }

// function authHeader() {

//   if (
//     typeof window ===
//     'undefined'
//   ) {
//     return {};
//   }

//   const token =
//     localStorage.getItem(
//       'token'
//     ) || '';

//   return token
//     ? {
//         Authorization: `Bearer ${token}`,
//       }
//     : {};
// }

// export const newsApi = {

//   // =========================
//   // GET ALL NEWS
//   // =========================

//   async getAll(): Promise<News[]> {

//     const res = await fetch(
//       `${BASE_URL}/api/news`,
//       {
//         cache: 'no-store',
//       }
//     );

//     const body =
//       await handleResponse<
//         PaginatedResponse<News>
//       >(res);

//     return body.data;
//   },

//   // =========================
//   // CREATE NEWS
//   // =========================

//   async create(
//     data: any
//   ): Promise<News> {

//     const formData =
//       new FormData();

//     // BASIC FIELDS
//     formData.append(
//       'title',
//       data.title || ''
//     );

//     formData.append(
//       'content',
//       data.content || ''
//     );

//     formData.append(
//       'category',
//       data.category || ''
//     );

//     formData.append(
//       'status',
//       data.status || 'PUBLISHED'
//     );

//     formData.append(
//       'slug',
//       data.slug ||
//         data.title
//           ?.toLowerCase()
//           .replace(/\s+/g, '-')
//     );

//     formData.append(
//       'summary',
//       data.summary ||
//         data.content?.slice(0, 120)
//     );

//     formData.append(
//       'visibility',
//       data.visibility ||
//         'PUBLIC'
//     );

//     // AUTHORS
//     if (
//       Array.isArray(data.authors)
//     ) {

//       data.authors.forEach(
//         (author: string) => {

//           formData.append(
//             'authors',
//             author
//           );

//         }
//       );
//     }

//     // TAGS
//     if (
//       Array.isArray(data.tags)
//     ) {

//       data.tags.forEach(
//         (tag: string) => {

//           formData.append(
//             'tags',
//             tag
//           );

//         }
//       );
//     }

//     // =========================
//     // IMAGE FILE
//     // =========================

//     if (data.imageFile) {

//       formData.append(
//         'image',
//         data.imageFile
//       );

//     }

//     const res = await fetch(
//       `${BASE_URL}/api/news`,
//       {
//         method: 'POST',

//         headers: {
//           ...authHeader(),
//         },

//         body: formData,
//       }
//     );

//     const body =
//       await handleResponse<
//         ApiResponse<News>
//       >(res);

//     return body.data;
//   },

//   // =========================
//   // UPDATE NEWS
//   // =========================

//   async update(
//     id: string,
//     data: any
//   ): Promise<News> {

//     const formData =
//       new FormData();

//     // BASIC FIELDS
//     formData.append(
//       'title',
//       data.title || ''
//     );

//     formData.append(
//       'content',
//       data.content || ''
//     );

//     formData.append(
//       'category',
//       data.category || ''
//     );

//     formData.append(
//       'status',
//       data.status || 'PUBLISHED'
//     );

//     formData.append(
//       'slug',
//       data.slug ||
//         data.title
//           ?.toLowerCase()
//           .replace(/\s+/g, '-')
//     );

//     formData.append(
//       'summary',
//       data.summary ||
//         data.content?.slice(0, 120)
//     );

//     formData.append(
//       'visibility',
//       data.visibility ||
//         'PUBLIC'
//     );

//     // AUTHORS
//     if (
//       Array.isArray(data.authors)
//     ) {

//       data.authors.forEach(
//         (author: string) => {

//           formData.append(
//             'authors',
//             author
//           );

//         }
//       );
//     }

//     // TAGS
//     if (
//       Array.isArray(data.tags)
//     ) {

//       data.tags.forEach(
//         (tag: string) => {

//           formData.append(
//             'tags',
//             tag
//           );

//         }
//       );
//     }

//     // =========================
//     // IMAGE FILE
//     // =========================

//     if (data.imageFile) {

//       formData.append(
//         'image',
//         data.imageFile
//       );

//     }

//     const res = await fetch(
//       `${BASE_URL}/api/news/${id}`,
//       {
//         method: 'PATCH',

//         headers: {
//           ...authHeader(),
//         },

//         body: formData,
//       }
//     );

//     const body =
//       await handleResponse<
//         ApiResponse<News>
//       >(res);

//     return body.data;
//   },

//   // =========================
//   // DELETE NEWS
//   // =========================

//   async delete(
//     id: string
//   ): Promise<void> {

//     const res = await fetch(
//       `${BASE_URL}/api/news/${id}`,
//       {
//         method: 'DELETE',

//         headers:
//           authHeader(),
//       }
//     );

//     await handleResponse(res);
//   },
// };

import { News } from '@/types';

export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  'http://localhost:2000';

interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}

interface PaginatedResponse<T> {
  status: string;
  message: string;
  data: T[];
}

async function handleResponse<T>(
  res: Response
): Promise<T> {

  if (!res.ok) {

    const body =
      await res.json().catch(
        () => ({})
      );

    throw new Error(
      body.message ||
      `HTTP ${res.status}`
    );
  }

  return res.json();
}

function authHeader() {

  if (
    typeof window ===
    'undefined'
  ) {
    return {};
  }

  const token =
    localStorage.getItem(
      'token'
    ) || '';

  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
}

export const newsApi = {

  // =========================
  // GET ALL NEWS
  // =========================

  async getAll(): Promise<News[]> {

    const res = await fetch(
      `${BASE_URL}/api/news`,
      {
        cache: 'no-store',
      }
    );

    const body =
      await handleResponse<
        PaginatedResponse<News>
      >(res);

    return body.data;
  },

  // =========================
  // CREATE NEWS
  // =========================

  async create(
    data: any
  ): Promise<News> {

    const formData =
      new FormData();

    // BASIC FIELDS
    formData.append(
      'title',
      data.title || ''
    );

    formData.append(
      'content',
      data.content || ''
    );

    formData.append(
      'category',
      data.category || ''
    );

    formData.append(
      'status',
      data.status || 'PUBLISHED'
    );

    formData.append(
      'slug',
      data.slug ||
        data.title
          ?.toLowerCase()
          .replace(/\s+/g, '-')
    );

    formData.append(
      'summary',
      data.summary ||
        data.content?.slice(0, 120)
    );

    formData.append(
      'visibility',
      data.visibility ||
        'PUBLIC'
    );

    // AUTHORS
    if (
      Array.isArray(data.authors)
    ) {

      data.authors.forEach(
        (author: string) => {

          formData.append(
            'authors',
            author
          );

        }
      );
    }

    // TAGS
    if (
      Array.isArray(data.tags)
    ) {

      data.tags.forEach(
        (tag: string) => {

          formData.append(
            'tags',
            tag
          );

        }
      );
    }

    // =========================
    // IMAGE FILE
    // =========================

    if (data.imageFile) {

      formData.append(
        'imageUrl',
        data.imageFile
      );

    }

    const res = await fetch(
      `${BASE_URL}/api/news`,
      {
        method: 'POST',

        headers: {
          ...authHeader(),
        },

        body: formData,
      }
    );

    const body =
      await handleResponse<
        ApiResponse<News>
      >(res);

    return body.data;
  },

  // =========================
  // UPDATE NEWS
  // =========================

  async update(
    id: string,
    data: any
  ): Promise<News> {

    const formData =
      new FormData();

    // BASIC FIELDS
    formData.append(
      'title',
      data.title || ''
    );

    formData.append(
      'content',
      data.content || ''
    );

    formData.append(
      'category',
      data.category || ''
    );

    formData.append(
      'status',
      data.status || 'PUBLISHED'
    );

    formData.append(
      'slug',
      data.slug ||
        data.title
          ?.toLowerCase()
          .replace(/\s+/g, '-')
    );

    formData.append(
      'summary',
      data.summary ||
        data.content?.slice(0, 120)
    );

    formData.append(
      'visibility',
      data.visibility ||
        'PUBLIC'
    );

    // AUTHORS
    if (
      Array.isArray(data.authors)
    ) {

      data.authors.forEach(
        (author: string) => {

          formData.append(
            'authors',
            author
          );

        }
      );
    }

    // TAGS
    if (
      Array.isArray(data.tags)
    ) {

      data.tags.forEach(
        (tag: string) => {

          formData.append(
            'tags',
            tag
          );

        }
      );
    }

    // =========================
    // IMAGE FILE
    // =========================

    if (data.imageFile) {

      formData.append(
        'imageUrl',
        data.imageFile
      );

    }

    const res = await fetch(
      `${BASE_URL}/api/news/${id}`,
      {
        method: 'PATCH',

        headers: {
          ...authHeader(),
        },

        body: formData,
      }
    );

    const body =
      await handleResponse<
        ApiResponse<News>
      >(res);

    return body.data;
  },

  // =========================
  // DELETE NEWS
  // =========================

  async delete(
    id: string
  ): Promise<void> {

    const res = await fetch(
      `${BASE_URL}/api/news/${id}`,
      {
        method: 'DELETE',

        headers:
          authHeader(),
      }
    );

    await handleResponse(res);
  },
};