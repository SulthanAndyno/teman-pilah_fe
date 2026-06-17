'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';
import { getImageUrl } from '@/lib/api/Products';
import { Package } from 'lucide-react';

type ProductCatalogProps = {
  products: Product[]
}

function formatWhatsAppLink(input?: string | null): string {
  if (!input) return 'https://wa.me/628123456789'; //nomor wa
  
  const trimmed = input.trim();
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }
  
  let cleanNumber = trimmed.replace(/\D/g, '');
  if (cleanNumber.startsWith('08')) {
    cleanNumber = '62' + cleanNumber.substring(1);
  } else if (cleanNumber.startsWith('8') && cleanNumber.length >= 9 && cleanNumber.length <= 13) {
    cleanNumber = '62' + cleanNumber;
  }
  
  return `https://wa.me/${cleanNumber}`;
}

export function ProductCatalog({ products }: ProductCatalogProps) {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_LIMIT = 4;
  const displayedProducts = showAll ? products : products.slice(0, INITIAL_LIMIT);

  return (
    <section id="katalog" className="py-24 bg-[#F3F4EF]">
      <div className="max-w-[1440px] 2xl:px-12 mx-auto px-6 space-y-16">
        
        {/* HEADER - Match Education styling */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#1B3022]">
            Katalog Produk Daur Ulang
          </h2>
          <p className="text-[17px] text-[#616b5a] leading-relaxed">
            Dukung komunitas dengan membeli produk hasil karya daur ulang yang kreatif dan bermanfaat.
          </p>
        </div>

        {/* CARDS GRID */}
        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-6 bg-white rounded-[32px] border border-[#F0F2EB] text-center max-w-md mx-auto w-full shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
            <div className="w-16 h-16 bg-[#F3F4EF] rounded-2xl flex items-center justify-center text-[#1B3022] mb-4">
              <Package size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#1B3022] mb-2">Produk Tidak Tersedia</h3>
            <p className="text-[#616b5a] text-sm leading-relaxed">
              Saat ini katalog produk daur ulang belum tersedia. Silakan kembali lagi nanti untuk melihat produk kreatif kami.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-[32px] overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-[#F0F2EB] flex flex-col transition-transform hover:-translate-y-1 duration-300"
                >
                  {/* Image Section - Match Education style */}
                  <div className="bg-[#f6f7f4] aspect-[4/3] flex items-center justify-center overflow-hidden p-0 m-3 rounded-[24px] relative">
                    {product.image ? (
                      <img
                        src={getImageUrl(product.image)}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-[24px]"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-black p-8">
                        <svg className="w-35 h-auto opacity-90 max-w-[120px]" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="5" y="5" width="90" height="70" rx="6" />
                          <circle cx="70" cy="25" r="7" />
                          <path d="M5 65 L35 35 L55 55 L75 30 L95 60 L95 75 L5 75 Z" fill="currentColor" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Content Section - Perfectly structured with equal spacing */}
                  <div className="p-6 pt-4 flex flex-col flex-1">
                    <h4 className="text-[20px] font-bold text-[#1B3022] leading-tight mb-2 line-clamp-2 h-[48px] flex items-center">
                      {product.name}
                    </h4>
                    <p className="text-[14px] text-[#616b5a] leading-relaxed line-clamp-2 mb-3 min-h-[40px]">
                      {product.description ? product.description.split('.')[0] + '.' : ''}
                    </p>
                    <p className="text-[16px] font-extrabold text-[#27532B] mb-5 mt-auto">
                      {formatPrice(product.price)}
                    </p>

                    <div className="mt-auto">
                      <a
                        href={formatWhatsAppLink(product.whatsappLink)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block"
                      >
                        <Button
                          className="w-full rounded-full py-4 bg-[#DBF9E8] hover:bg-[#cceed9] text-[#1B3022] font-bold flex items-center justify-center gap-2 border-none shadow-none"
                          variant="secondary"
                        >
                          <img src="/product/chat.png" alt="WhatsApp" className="h-5 w-5 object-contain" />
                          <span className="text-[15px]">Pesan via WhatsApp</span>
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {products.length > INITIAL_LIMIT && (
              <div className="flex justify-center pt-2">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="rounded-full border-2 border-[#1B3022] px-8 py-3.5 text-[15px] font-bold text-[#1B3022] transition-colors hover:bg-[#1B3022] hover:text-white"
                >
                  {showAll ? 'Sembunyikan' : 'Tampilkan Semua'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}


