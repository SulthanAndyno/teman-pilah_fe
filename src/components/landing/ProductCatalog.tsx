'use client';

import { motion } from 'motion/react';
import { Card } from '@/components/ui/Card';
// import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MessageCircle } from 'lucide-react';
// import { products } from '@/data/products';
import { Product } from '@/types';
// import { formatPrice } from '@/lib/utils';

type ProductCatalogProps = {
  products: Product[]
}
export function ProductCatalog({products}:ProductCatalogProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="katalog" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-[#1B3022]">Katalog Produk Daur Ulang</h2>
          <p className="text-xl text-[#3D4F41] leading-relaxed font-medium">
            Dukung komunitas dengan membeli produk hasil karya daur ulang yang kreatif dan bermanfaat.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product) => (
            <motion.div key={product.id} {...fadeInUp} className="w-70 h-98.75 [395px]">
              <Card padding="none" className="w-full h-full overflow-hidden flex flex-col border-none rounded-3xl bg-white shadow-none transition-transform hover:scale-[1.01] relative gap-y-4">
                 {/* Image Section - Flush with top and sides */}
                <div className="w-full h-48 shrink-0 bg-[#F1F3F2] flex items-center justify-center overflow-hidden">
                  {product.imageUrl ? (
                    <img 
                      src={`http://localhost:2000/${product.imageUrl}`} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-black">
                      <svg className="w-35 h-auto opacity-90" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="5" width="90" height="70" rx="6" />
                        <circle cx="70" cy="25" r="7" />
                        <path d="M5 65 L35 35 L55 55 L75 30 L95 60 L95 75 L5 75 Z" fill="currentColor" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="px-5 pb-6 grow flex-col text-left">
                  <div className="grow space-y-2">
                    <h4 className="text-lg font-bold text-[#14321A] leading-tight">{product.name}</h4>
                    <p className="text-[#3D4F41] text-sm font-medium leading-relaxed line-clamp-2">
                      {product.description.split('.')[0]}.
                    </p>
                  </div>
                  <div className="mt-4">
                    <Button 
                      className="w-full rounded-full py-3 bg-[#DBF9E8] hover:bg-[#cceed9] text-[#1B3022] font-bold flex items-center justify-center gap-2 border-none shadow-none" 
                      variant="secondary"
                    >
                      <MessageCircle size={20} className="text-[#1B3022]" />
                      <span className="text-sm">Pesan via WhatsApp</span>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


