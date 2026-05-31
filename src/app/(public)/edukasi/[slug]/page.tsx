import React from 'react';
import { notFound } from 'next/navigation';
import { CalendarDays, Link as LinkIcon, Download, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { educationApi, getThumbnailUrl } from '@/lib/api/education';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DynamicEducationDetail({ params }: PageProps) {
  const { slug } = await params;
  
  let content = null;
  try {
    const allEducation = await educationApi.getAll();
    content = allEducation.find((item) => item.slug === slug);
  } catch (error) {
    console.error('Failed to fetch education article:', error);
  }

  if (!content) {
    notFound();
  }

  const formattedDate = content.publishDate 
    ? new Date(content.publishDate).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    : content.createdAt 
    ? new Date(content.createdAt).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    : '-';

  return (
    <div className="pt-[88px] min-h-screen bg-[#FAFAF8]">
      {/* CONTAINED WRAPPER - Matches Navbar and Footer limits */}
      <div className="mx-auto max-w-[1440px] 2xl:px-12 px-6 lg:px-8 py-10 flex flex-col gap-8">
        
        {/* BACK BUTTON */}
        <div>
          <a
            href="/#edukasi"
            className="inline-flex items-center gap-2.5 text-[15px] font-bold text-[#616b5a] hover:text-[#1a2f1d] transition-colors group"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1 text-[#616b5a] group-hover:text-[#1a2f1d]" />
            <span>Kembali ke Pusat Edukasi</span>
          </a>
        </div>

        {/* HERO IMAGE / THUMBNAIL - Aligned & Contained */}
        <div className="w-full h-[250px] md:h-[480px] relative overflow-hidden bg-[#e0e5db] rounded-[32px] border border-[#e5e7e0] shadow-sm">
          {content.thumbnail ? (
            <img
              src={getThumbnailUrl(content.thumbnail)}
              alt={content.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=2000"
              alt="Edukasi Lingkungan"
              className="w-full h-full object-cover opacity-90"
            />
          )}
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
        </div>

        {/* ARTICLE CONTENT */}
        <div className="w-full px-0 py-4 md:py-6">
          
          {/* TAGS */}
          {content.tags && content.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {content.tags.map((tag: string, index: number) => (
                <span key={index} className="px-4 py-1.5 bg-[#DCFCE7] text-[#166534] rounded-full text-[13px] font-bold tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* TITLE */}
          <h1 className="text-[32px] md:text-[44px] font-extrabold text-[#1a2f1d] leading-tight mb-6">
            {content.title}
          </h1>

          {/* METADATA */}
          <div className="flex flex-wrap items-center gap-6 text-[14px] text-[#616b5a] font-medium mb-10 pb-8 border-b border-[#e5e7e0]">
            <div className="flex items-center gap-2">
              <CalendarDays size={18} className="text-[#8c9685]" />
              <span>Dipublikasikan pada: {formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <LinkIcon size={18} className="text-[#8c9685]" />
              <span>temanpilah.com/edukasi/{content.slug}</span>
            </div>
          </div>

          {/* OVERVIEW */}
          {content.overview && (
            <div className="bg-[#E8F5E9] border-l-[6px] border-[#1a2f1d] p-6 md:p-8 mb-12 rounded-r-2xl">
              <p className="text-[#1a2f1d] font-bold text-[18px] md:text-[20px] leading-relaxed italic">
                "{content.overview}"
              </p>
            </div>
          )}

          {/* BODY TEXT / RICH TEXT DESCRIPTION */}
          <div className="space-y-6 text-[#42493E] text-[16px] md:text-[17px] leading-[1.8] tracking-wide editor-content">
            <style>{`
              .editor-content ul { list-style-type: disc !important; padding-left: 1.5rem !important; margin: 1rem 0 !important; }
              .editor-content ol { list-style-type: decimal !important; padding-left: 1.5rem !important; margin: 1rem 0 !important; }
              .editor-content blockquote { border-left: 3px solid #C2C9BB !important; padding-left: 1rem !important; color: #72796E !important; font-style: italic !important; margin: 1rem 0 !important; }
              .editor-content a { color: #2D5A27 !important; text-decoration: underline !important; }
              .editor-content p { margin-bottom: 1.25rem !important; }
            `}</style>
            <div dangerouslySetInnerHTML={{ __html: content.description }} />
          </div>

          {/* BOTTOM BUTTON */}
          <div className="mt-14 mb-8">
            <Button className="bg-[#1a2f1d] hover:bg-[#234926] text-white rounded-full px-7 py-[26px] text-[15px] font-bold flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-md">
              <Download size={20} />
              Download Materi Edukasi Lengkap
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
