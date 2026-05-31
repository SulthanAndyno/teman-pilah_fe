import React from 'react';
import { CalendarDays, Building, Recycle, Users, BookOpen, Tag, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function DetailProgramPage({ params }: Props) {
  const { slug } = await params;

  let program = null;

  try {
    const res = await fetch('http://localhost:2000/api/news', { cache: 'no-store' });
    const json = await res.json();
    
    // Find the matching program (check slug first, fallback to id)
    program = (json.data || []).find(
      (item: any) => item.slug === slug || item.id?.toString() === slug
    );
  } catch (error) {
    console.error('Failed to fetch program details:', error);
  }

  if (!program) {
    notFound();
  }

  // Format Dates
  const startDate = program.publishDate ? new Date(program.publishDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : '';
  const endDate = program.endDate ? new Date(program.endDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : '';
  const dateRange = startDate && endDate ? `${startDate} - ${endDate}` : (startDate || 'Tanggal Belum Ditentukan');

  const imageUrl = program.imageUrl ? `http://localhost:2000/${program.imageUrl}` : (program.image || `https://picsum.photos/seed/${program.id}/2000/1000`);

  return (
    <div className="pt-[88px] min-h-screen bg-[#FAFAF8]">
      <div className="max-w-[1440px] 2xl:px-12 mx-auto px-6 lg:px-8 py-8 md:py-12">
        
        {/* BACK BUTTON */}
        <div className="mb-8">
          <Link 
            href="/#program" 
            className="inline-flex items-center text-[14px] font-medium text-[#72796E] hover:text-[#2A3426] transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Kembali ke Daftar Program
          </Link>
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap gap-3 mb-8">
          {program.tags && program.tags.length > 0 ? (
            program.tags.map((tag: string, index: number) => (
              <span key={index} className="flex items-center gap-2 px-3 py-1.5 bg-[#e4f0e9] text-[#166534] rounded-md text-[11px] font-bold tracking-wider uppercase">
                <Tag size={14} /> {tag}
              </span>
            ))
          ) : (
            <span className="flex items-center gap-2 px-3 py-1.5 bg-[#e4f0e9] text-[#166534] rounded-md text-[11px] font-bold tracking-wider uppercase">
              <BookOpen size={14} /> Edukasi
            </span>
          )}
        </div>

        {/* TITLE */}
        <h1 className="text-[32px] md:text-[40px] font-bold text-[#1a2f1d] leading-tight mb-6">
          {program.title}
        </h1>

        {/* METADATA */}
        <div className="flex flex-wrap items-center gap-4 text-[14px] text-[#616b5a] font-medium mb-10">
          <div className="flex items-center gap-2">
            <CalendarDays size={18} />
            <span>{dateRange}</span>
          </div>
          {program.partnership && (
            <>
              <div className="hidden sm:block w-[1.5px] h-4 bg-[#d1d5db]"></div>
              <div className="flex items-center gap-2">
                <Building size={18} />
                <span>{program.partnership}</span>
              </div>
            </>
          )}
        </div>

        {/* HERO IMAGE */}
        <div className="w-full aspect-[2.2/1] rounded-[24px] overflow-hidden mb-8 bg-[#e0e5db] relative shadow-sm">
          <img 
            src={imageUrl} 
            alt={program.title} 
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* HIGHLIGHT BOX / SUMMARY */}
        {program.summary && (
          <div className="bg-[#f4f2ea] rounded-[24px] p-6 md:p-8 mb-12 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#ecebe1]">
            <p className="text-[#42493E] text-[16px] md:text-[17px] leading-relaxed font-medium">
              {program.summary}
            </p>
          </div>
        )}

        {/* BODY CONTENT */}
        <div className="text-[#42493E] text-[15px] md:text-[16px] leading-[1.8] tracking-wide relative">
          <style>{`
            .program-content ul { list-style-type: disc !important; padding-left: 1.5rem !important; margin: 1rem 0 !important; }
            .program-content ol { list-style-type: decimal !important; padding-left: 1.5rem !important; margin: 1rem 0 !important; }
            .program-content blockquote { border-left: 4px solid #C2C9BB !important; padding-left: 1rem !important; color: #72796E !important; font-style: italic !important; margin: 1.5rem 0 !important; }
            .program-content a { color: #2D5A27 !important; text-decoration: underline !important; }
            .program-content p { margin-bottom: 1rem; }
            .program-content h1, .program-content h2, .program-content h3 { font-weight: bold; color: #1a2f1d; margin-top: 1.5rem; margin-bottom: 0.75rem; }
          `}</style>
          {program.content ? (
            <div className="program-content" dangerouslySetInnerHTML={{ __html: program.content }} />
          ) : (
            <p>Konten program belum tersedia.</p>
          )}
        </div>

      </div>
    </div>
  );
}
