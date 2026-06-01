'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProgramsAdminPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/admin/news');
  }, [router]);

  return (
    <div className="flex h-[50vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#2D5A27] border-t-transparent" />
    </div>
  );
}
