/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Product } from '@/types';
// import { Card } from '@/components/ui/Card';
// import { Button } from '@/components/ui/Button';
// import { Input } from '@/components/ui/Input';
// import { X } from 'lucide-react';
// import { ImageUpload } from '@/components/ui/ImageUpload';

// interface ProductModalProps {
//   product: Product | null;
//   isOpen: boolean;
//   onClose: () => void;
//   onSubmit: (data: Partial<Product>) => void;
// }

// export function ProductModal({ product, isOpen, onClose, onSubmit }: ProductModalProps) {
//   const [formData, setFormData] = useState({
//     name: '',
//     price: '',
//     category: 'UPCYCLED_GOODS' as Product['category'],
//     stock: '',
//     description: '',
//     image: ''
//   });

//   useEffect(() => {
//     if (isOpen) {
//       if (product) {
//         setFormData({
//           name: product.name,
//           price: product.price.toString(),
//           category: product.category,
//           stock: product.stock.toString(),
//           description: product.description || '',
//           image: product.image || '',
//         });
//       } else {
//         setFormData({
//           name: '',
//           price: '',
//           category: 'UPCYCLED_GOODS',
//           stock: '',
//           description: '',
//           image: '',
//         });
//       }
//     }
//   }, [product, isOpen]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit({
//       name: formData.name,
//       price: Number(formData.price),
//       category: formData.category,
//       stock: Number(formData.stock),
//       description: formData.description,
//       image: formData.image,
//     });
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-6 text-neutral">
//       <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm" onClick={onClose} />
//       <Card className="w-full max-w-lg relative z-10 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
//         <div className="flex items-center justify-between mb-8">
//           <h3 className="text-2xl font-bold">{product ? 'Edit Produk' : 'Tambah Produk Baru'}</h3>
//           <button 
//             onClick={onClose}
//             className="w-10 h-10 rounded-full hover:bg-bg flex items-center justify-center text-neutral"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6 pb-4">
//           <ImageUpload 
//             label="Gambar Produk"
//             value={formData.image}
//             onChange={(val) => setFormData(prev => ({ ...prev, image: val }))}
//           />

//           <Input 
//             label="Nama Produk" 
//             placeholder="Contoh: Tas Daur Ulang" 
//             value={formData.name}
//             onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
//             required
//           />

//           <div className="space-y-1.5">
//             <label className="text-sm font-medium text-primary-light block">Deskripsi Produk</label>
//             <textarea 
//               className="w-full px-4 py-2.5 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all min-h-[100px]"
//               value={formData.description}
//               onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
//               required
//             />
//           </div>
          
//           <div className="grid grid-cols-2 gap-4">
//             <Input 
//               label="Harga (IDR)" 
//               type="number" 
//               placeholder="0" 
//               value={formData.price}
//               onChange={e => setFormData(prev => ({ ...prev, price: e.target.value }))}
//               required
//             />
//             <Input 
//               label="Stok" 
//               type="number" 
//               placeholder="0" 
//               value={formData.stock}
//               onChange={e => setFormData(prev => ({ ...prev, stock: e.target.value }))}
//               required
//             />
//           </div>

//           <div className="space-y-1.5">
//             <label className="text-sm font-medium text-primary-light block">Kategori</label>
//             <select 
//               className="w-full px-4 py-2.5 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-neutral"
//               value={formData.category}
//               onChange={e => setFormData(prev => ({ ...prev, category: e.target.value as Product['category'] }))}
//             >
//               <option value="UPCYCLED_GOODS">Upcycled Goods</option>
//               <option value="ORGANIC">Organic</option>
//               <option value="ZERO_WASTE">Zero Waste</option>
//             </select>
//           </div>

//           <div className="pt-4 flex gap-3">
//             <Button variant="secondary" className="flex-grow" type="button" onClick={onClose}>Batal</Button>
//             <Button type="submit" className="flex-[2]">Simpan Produk</Button>
//           </div>
//         </form>
//       </Card>
//     </div>
//   );
// }

'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '@/types';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { X } from 'lucide-react';
import { ImageUpload } from '@/components/ui/ImageUpload';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

interface ProductFormData {
  name: string;
  price: string;
  priceUnit: string;
  category: Product['category'];
  stock: string;
  stockLabel: Product['stockLabel'];
  description: string;
  whatsappLink: string;
  image: string;
  imageFile?: File;
}

export function ProductModal({ product, isOpen, onClose, onSubmit }: ProductModalProps) {
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    price: '',
    priceUnit: '/pcs',
    category: 'UPCYCLED_GOODS',
    stock: '',
    stockLabel: 'IN_STOCK',
    description: '',
    whatsappLink: '',
    image: '',
  });

  useEffect(() => {
    if (isOpen) {
      if (product) {
        setFormData({
          name: product.name,
          price: product.price.toString(),
          priceUnit: product.priceUnit || '/pcs',
          category: product.category,
          stock: product.stock.toString(),
          stockLabel: product.stockLabel || 'IN_STOCK',
          description: product.description || '',
          whatsappLink: product.whatsappLink || '',
          image: product.image || '',
        });
      } else {
        setFormData({
          name: '',
          price: '',
          priceUnit: '/pcs',
          category: 'UPCYCLED_GOODS',
          stock: '',
          stockLabel: 'IN_STOCK',
          description: '',
          whatsappLink: '',
          image: '',
        });
      }
    }
  }, [product, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create FormData for backend
    const data = new FormData();
    data.append('name', formData.name);
    data.append('category', formData.category);
    data.append('price', formData.price);
    data.append('priceUnit', formData.priceUnit);
    data.append('stock', formData.stock);
    data.append('stockLabel', formData.stockLabel);
    data.append('description', formData.description);
    data.append('whatsappLink', formData.whatsappLink);
    
    if (formData.imageFile) {
      data.append('image', formData.imageFile);
    }

    // Since we need to pass this back to onSubmit which might expect a Partial<Product>
    // But our api client can handle FormData
    // Let's pass the FormData directly if possible, or adapt it.
    // For now, I'll pass the FormData to onSubmit
    (onSubmit as any)(data);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 text-neutral">
      <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm" onClick={onClose} />
      <Card className="w-full max-w-lg relative z-10 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold">{product ? 'Edit Produk' : 'Tambah Produk Baru'}</h3>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-bg flex items-center justify-center text-neutral"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 pb-4 px-1">
          <ImageUpload 
            label="Gambar Produk"
            value={formData.image}
            onChange={(val, file) => setFormData(prev => ({ ...prev, image: val, imageFile: file }))}
          />

          <div className="grid grid-cols-2 gap-4">
            <Input 
              label="Nama Produk" 
              placeholder="Contoh: Tas Daur Ulang" 
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
            />
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-primary-light block">Kategori</label>
              <select 
                className="w-full px-4 py-2.5 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-neutral"
                value={formData.category}
                onChange={e => setFormData(prev => ({ ...prev, category: e.target.value as Product['category'] }))}
              >
                <option value="UPCYCLED_GOODS">Upcycled Goods</option>
                <option value="ORGANIC">Organic</option>
                <option value="ZERO_WASTE">Zero Waste</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-primary-light block">Deskripsi Produk (Opsional)</label>
            <textarea 
              className="w-full px-4 py-2.5 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all min-h-[100px]"
              value={formData.description}
              onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Jelaskan detail produk..."
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex gap-2 items-end">
              <div className="flex-[2]">
                <Input 
                  label="Harga" 
                  type="number" 
                  placeholder="50000" 
                  value={formData.price}
                  onChange={e => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  required
                />
              </div>
              <div className="flex-1">
                <Input 
                  label="Unit" 
                  placeholder="/pcs" 
                  value={formData.priceUnit}
                  onChange={e => setFormData(prev => ({ ...prev, priceUnit: e.target.value }))}
                />
              </div>
            </div>
            <div className="flex gap-2 items-end">
              <div className="flex-[2]">
                <Input 
                  label="Stok" 
                  type="number" 
                  placeholder="10" 
                  value={formData.stock}
                  onChange={e => setFormData(prev => ({ ...prev, stock: e.target.value }))}
                  required
                />
              </div>
              <div className="flex-1">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-primary-light block text-xs">Label</label>
                  <select 
                    className="w-full px-2 py-2.5 bg-white border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-neutral text-xs"
                    value={formData.stockLabel}
                    onChange={e => setFormData(prev => ({ ...prev, stockLabel: e.target.value as Product['stockLabel'] }))}
                  >
                    <option value="IN_STOCK">In Stock</option>
                    <option value="BULK_AVAILABLE">Bulk</option>
                    <option value="OUT_OF_STOCK">Empty</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <Input 
            label="Link WhatsApp (Opsional)" 
            placeholder="https://wa.me/..." 
            value={formData.whatsappLink}
            onChange={e => setFormData(prev => ({ ...prev, whatsappLink: e.target.value }))}
          />

          <div className="pt-4 flex gap-3">
            <Button variant="secondary" className="flex-grow" type="button" onClick={onClose}>Batal</Button>
            <Button type="submit" className="flex-[2]">Simpan Produk</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
