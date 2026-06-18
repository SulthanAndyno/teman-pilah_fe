'use client';

import { getBaseUrl } from '../../lib/api-config';
import React from 'react';
import {
  ClipboardList,
  Package,
  GraduationCap,
  Image as ImageIcon,
  MoreVertical,
} from 'lucide-react';

const BASE_URL = getBaseUrl();

export default function AdminDashboard() {
  const [stats, setStats] = React.useState({
    programs: 0,
    products: 0,
    education: 0,
    gallery: 0,
  });
  const [activities, setActivities] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchStats = async () => {
      try {
        const [newsRes, productsRes, educationRes, galleryRes] = await Promise.all([
          fetch(`${BASE_URL}/api/news`).catch(() => null),
          fetch(`${BASE_URL}/api/products`).catch(() => null),
          fetch(`${BASE_URL}/api/education`).catch(() => null),
          fetch(`${BASE_URL}/api/gallery`).catch(() => null),
        ]);
        
        let programsCount = 0;
        let productsCount = 0;
        let educationCount = 0;
        let galleryCount = 0;
        let newActivities: any[] = [];

        if (newsRes && newsRes.ok) {
          const newsData = await newsRes.json();
          programsCount = newsData.data?.length || 0;
          
          const mappedNews = (newsData.data || []).map((n: any) => ({
            id: 'news-' + n.id,
            title: `Program baru diterbitkan: ${n.title}`,
            date: n.createdAt ? new Date(n.createdAt).toLocaleDateString('id-ID', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Hari Ini',
            status: 'SUKSES',
            iconBg: 'bg-[#FDF2F2]', // Pinkish empty square
            rawDate: n.createdAt ? new Date(n.createdAt).getTime() : 0,
          }));
          newActivities = [...newActivities, ...mappedNews];
        }

        if (productsRes && productsRes.ok) {
          const productsData = await productsRes.json();
          productsCount = productsData.data?.length || 0;
          
          const mappedProducts = (productsData.data || []).map((p: any) => ({
            id: 'prod-' + p.id,
            title: `Produk diperbarui: ${p.name}`,
            date: p.createdAt ? new Date(p.createdAt).toLocaleDateString('id-ID', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Hari Ini',
            status: 'SUKSES',
            iconBg: 'bg-[#FEF3C7]', // Yellow empty square
            rawDate: p.createdAt ? new Date(p.createdAt).getTime() : 0,
          }));
          newActivities = [...newActivities, ...mappedProducts];
        }

        if (educationRes && educationRes.ok) {
          const educationData = await educationRes.json();
          educationCount = educationData.data?.length || 0;
          
          const mappedEducation = (educationData.data || []).map((e: any) => ({
            id: 'edu-' + e.id,
            title: `Konten edukasi diterbitkan: ${e.title}`,
            date: e.createdAt ? new Date(e.createdAt).toLocaleDateString('id-ID', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Hari Ini',
            status: 'SUKSES',
            iconBg: 'bg-[#DCFCE7]', // Greenish empty square
            rawDate: e.createdAt ? new Date(e.createdAt).getTime() : 0,
          }));
          newActivities = [...newActivities, ...mappedEducation];
        }

        if (galleryRes && galleryRes.ok) {
          const galleryData = await galleryRes.json();
          galleryCount = galleryData.data?.length || 0;
          
          const mappedGallery = (galleryData.data || []).map((g: any) => ({
            id: 'gal-' + g.id,
            title: `Item galeri diunggah`,
            date: g.createdAt ? new Date(g.createdAt).toLocaleDateString('id-ID', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Hari Ini',
            status: 'SUKSES',
            iconBg: 'bg-[#F3E8FF]', // Purple empty square
            rawDate: g.createdAt ? new Date(g.createdAt).getTime() : 0,
          }));
          newActivities = [...newActivities, ...mappedGallery];
        }

        // Load CRUD activities recorded in localStorage
        const stored = localStorage.getItem('admin_activities');
        const localActivities = stored ? JSON.parse(stored) : [];
        newActivities = [...newActivities, ...localActivities];
        
        newActivities.sort((a, b) => b.rawDate - a.rawDate);
        setActivities(newActivities.slice(0, 10)); // Take top 10 recent activities

        setStats({
          programs: programsCount,
          products: productsCount,
          education: educationCount,
          gallery: galleryCount
        });
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      }
    };

    fetchStats();
  }, []);

  const currentCards = [
    {
      id: 'total-programs',
      title: 'TOTAL PROGRAM',
      value: stats.programs.toString(),
      icon: ClipboardList,
      iconBg: 'bg-[#FDF2F2]',
      iconColor: 'text-[#E02424]',
    },
    {
      id: 'total-products',
      title: 'TOTAL PRODUK',
      value: stats.products.toString(),
      icon: Package,
      iconBg: 'bg-[#FEF3C7]',
      iconColor: 'text-[#D97706]',
    },
    {
      id: 'total-education',
      title: 'TOTAL EDUKASI',
      value: stats.education.toString(),
      icon: GraduationCap,
      iconBg: 'bg-[#DCFCE7]',
      iconColor: 'text-[#059669]',
    },
    {
      id: 'total-gallery',
      title: 'TOTAL GALERI',
      value: stats.gallery.toString(),
      icon: ImageIcon,
      iconBg: 'bg-[#F3E8FF]',
      iconColor: 'text-[#7C3AED]',
    },
  ];

  return (
    <div className="flex flex-col gap-6 sm:gap-10" data-debug="true">
      {/* HEADER SECTION */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#1B361F] tracking-tight">
          Overview Dashboard
        </h1>
        <p className="text-sm sm:text-base text-[#42493E] font-medium">
          Selamat datang kembali! Berikut adalah perkembangan Teman Pilah hari ini.
        </p>
      </div>

      {/* METRIC CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {currentCards.map((card) => (
          <div key={card.id} className="bg-white rounded-[16px] sm:rounded-[24px] p-4 sm:p-8 border border-[#C2C9BB]/30 shadow-sm flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-8 transition-all hover:shadow-md">
            <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${card.iconBg} ${card.iconColor} flex items-center justify-center flex-shrink-0`}>
              <card.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <p className="text-[9px] sm:text-[11px] font-bold text-[#72796E] tracking-widest uppercase">{card.title}</p>
              <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-extrabold text-[#1B361F] leading-tight">{card.value}</h2>
            </div>
          </div>
        ))}
      </section>

      {/* RECENT ACTIVITY TABLE */}
      <section className="bg-white rounded-[16px] sm:rounded-[24px] border border-[#C2C9BB]/30 shadow-sm overflow-hidden mb-10">
        <div className="px-4 sm:px-8 py-4 sm:py-6 border-b border-[#C2C9BB]/20 flex items-center justify-between">
          <h2 className="text-base sm:text-xl font-bold text-[#1B361F]">Aktivitas Terbaru</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#F4F5F2] border-b border-[#C2C9BB]/20">
                <th className="px-4 sm:px-8 py-3 text-[10px] font-bold text-[#72796E] uppercase tracking-widest min-w-[240px]">Aktivitas</th>
                <th className="px-4 sm:px-8 py-3 text-[10px] font-bold text-[#72796E] uppercase tracking-widest min-w-[120px]">Tanggal</th>
                <th className="px-4 sm:px-8 py-3 text-[10px] font-bold text-[#72796E] uppercase tracking-widest min-w-[100px]">Status</th>
                <th className="px-4 sm:px-8 py-3 text-[10px] font-bold text-[#72796E] uppercase tracking-widest w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#C2C9BB]/10">
              {activities.length > 0 ? (
                activities.map((row) => {
                  const isProgram = row.id.includes('news') || row.id.includes('program');
                  const isProduct = row.id.includes('prod');
                  const isGallery = row.id.includes('gal');
                  const Icon = isProgram ? ClipboardList : isProduct ? Package : isGallery ? ImageIcon : GraduationCap;
                  const iconColor = isProgram ? 'text-[#E02424]' : isProduct ? 'text-[#D97706]' : isGallery ? 'text-[#7C3AED]' : 'text-[#059669]';
                  return (
                    <tr key={row.id} className="hover:bg-[#F9FAF5]/50 transition-colors">
                      <td className="px-4 sm:px-8 py-3 sm:py-5">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${row.iconBg} ${iconColor} flex items-center justify-center flex-shrink-0`}>
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <span className="font-bold text-[#1B361F] text-xs sm:text-sm">{row.title}</span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-8 py-4 sm:py-5 text-[#42493E] font-medium text-xs">
                        {row.date}
                      </td>
                      <td className="px-4 sm:px-8 py-4 sm:py-5">
                        <span className={`px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-black tracking-widest ${
                          row.status === 'SUKSES' || row.status === 'SUCCESS' ? 'bg-[#E3F2E7] text-[#2F6F1E]' : 'bg-[#FEF3C7] text-[#92400E]'
                        }`}>
                          {row.status === 'SUCCESS' ? 'SUKSES' : row.status}
                        </span>
                      </td>
                      <td className="px-4 sm:px-8 py-4 sm:py-5">
                        <button className="text-[#C2C9BB] hover:text-[#42493E]">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 sm:px-8 py-8 text-center text-[#72796E] text-sm">
                    Belum ada aktivitas terbaru.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
