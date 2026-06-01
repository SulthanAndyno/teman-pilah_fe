'use client';

import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { getThumbnailUrl } from '@/lib/api/education';

interface DownloadPdfButtonProps {
  content: {
    title: string;
    overview?: string;
    description: string;
    publishDate?: string;
    createdAt?: string;
    tags?: string[];
    slug: string;
    thumbnail?: string;
  };
}

export function DownloadPdfButton({ content }: DownloadPdfButtonProps) {
  const handleDownload = () => {
    // Open a temporary blank window
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Mohon izinkan pop-up browser untuk mengunduh materi.');
      return;
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

    const heroImageUrl = content.thumbnail
      ? getThumbnailUrl(content.thumbnail)
      : 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=2000';

    // Write a beautifully-styled, print-optimized document layout with cover image
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>${content.title}</title>
          <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet">
          <style>
            body {
              font-family: 'Plus Jakarta Sans', sans-serif;
              color: #2A3426;
              line-height: 1.8;
              padding: 40px;
              max-width: 800px;
              margin: 0 auto;
              background-color: #ffffff;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .header {
              border-bottom: 2px solid #E5E7EB;
              padding-bottom: 20px;
              margin-bottom: 25px;
            }
            .logo-row {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 12px;
            }
            .logo {
              font-size: 13px;
              font-weight: 800;
              color: #2D5A27;
              text-transform: uppercase;
              letter-spacing: 1.5px;
            }
            .logo-site {
              font-size: 12px;
              color: #72796E;
              font-weight: 500;
            }
            .title {
              font-size: 30px;
              font-weight: 800;
              color: #1A2F1D;
              line-height: 1.3;
              margin: 10px 0 15px 0;
            }
            .meta {
              font-size: 12px;
              color: #72796E;
              font-weight: 500;
            }
            .hero-image-container {
              width: 100%;
              height: 320px;
              overflow: hidden;
              border-radius: 20px;
              margin-bottom: 30px;
              border: 1px solid #E5E7EB;
              background-color: #F1F3F2;
            }
            .hero-image {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .overview {
              background-color: #F4F6F2;
              border-left: 5px solid #2D5A27;
              padding: 24px;
              font-family: 'Playfair Display', Georgia, serif;
              font-size: 17px;
              font-style: italic;
              color: #1A2F1D;
              margin-bottom: 35px;
              border-radius: 0 12px 12px 0;
              line-height: 1.7;
            }
            .content {
              font-size: 15px;
              color: #374151;
            }
            .content p {
              margin-bottom: 1.5rem;
            }
            .content ul {
              list-style-type: disc !important;
              padding-left: 1.5rem !important;
              margin: 1rem 0 !important;
            }
            .content ol {
              list-style-type: decimal !important;
              padding-left: 1.5rem !important;
              margin: 1rem 0 !important;
            }
            .content li {
              margin-bottom: 0.5rem;
            }
            .content blockquote {
              border-left: 3px solid #C2C9BB;
              padding-left: 1.25rem;
              color: #6B7280;
              font-style: italic;
              margin: 1.5rem 0;
            }
            .content a {
              color: #2D5A27;
              text-decoration: underline;
            }
            .footer {
              margin-top: 60px;
              border-top: 1px solid #E5E7EB;
              padding-top: 20px;
              font-size: 11px;
              color: #9CA3AF;
              text-align: center;
              letter-spacing: 0.5px;
            }
            @media print {
              body {
                padding: 0;
                margin: 0;
              }
              @page {
                margin: 20mm;
              }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo-row">
              <div class="logo">Teman Pilah — Pusat Edukasi</div>
              <div class="logo-site">temanpilah.com</div>
            </div>
            <h1 class="title">${content.title}</h1>
            <div class="meta">Dipublikasikan pada: ${formattedDate} | URL: temanpilah.com/edukasi/${content.slug}</div>
          </div>
          
          <div class="hero-image-container">
            <img src="${heroImageUrl}" alt="Hero Thumbnail" class="hero-image" />
          </div>
          
          ${content.overview ? `<div class="overview">"${content.overview}"</div>` : ''}
          
          <div class="content">
            ${content.description}
          </div>
          
          <div class="footer">
            © ${new Date().getFullYear()} Teman Pilah. Seluruh hak cipta dilindungi undang-undang.
          </div>

          <script>
            window.onload = function() {
              // Wait a small duration to ensure the hero image is completely rendered
              setTimeout(function() {
                window.print();
                setTimeout(function() {
                  window.close();
                }, 500);
              }, 500);
            };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <Button 
      onClick={handleDownload}
      className="bg-[#1a2f1d] hover:bg-[#234926] text-white rounded-full px-7 py-[26px] text-[15px] font-bold flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-md"
    >
      <Download size={20} />
      Download Materi Edukasi Lengkap
    </Button>
  );
}
