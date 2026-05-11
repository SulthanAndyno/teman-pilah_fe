'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '@/types';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { X } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<Product>) => void;
}

export function ProductModal({ product, isOpen, onClose, onSubmit }: ProductModalProps) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState<Product['category']>('UPCYCLED_GOODS');
  const [stock, setStock] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price.toString());
      setCategory(product.category);
      setStock(product.stock.toString());
    } else {
      setName('');
      setPrice('');
      setCategory('UPCYCLED_GOODS');
      setStock('');
    }
  }, [product, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      price: Number(price),
      category,
      stock: Number(stock),
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm" onClick={onClose} />
      <Card className="w-full max-w-lg relative z-10 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold">{product ? 'Edit Produk' : 'Tambah Produk Baru'}</h3>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-bg flex items-center justify-center text-neutral"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input 
            label="Nama Produk" 
            placeholder="Contoh: Tas Daur Ulang" 
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          
          <div className="grid grid-cols-2 gap-4">
            <Input 
              label="Harga (IDR)" 
              type="number" 
              placeholder="0" 
              value={price}
              onChange={e => setPrice(e.target.value)}
              required
            />
            <Input 
              label="Stok" 
              type="number" 
              placeholder="0" 
              value={stock}
              onChange={e => setStock(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-primary-light block">Kategori</label>
            <select 
              className="w-full px-4 py-2.5 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-neutral"
              value={category}
              onChange={e => setCategory(e.target.value as any)}
            >
              <option value="UPCYCLED_GOODS">Upcycled Goods</option>
              <option value="ORGANIC">Organic</option>
              <option value="ZERO_WASTE">Zero Waste</option>
            </select>
          </div>

          <div className="pt-4 flex gap-3">
            <Button variant="secondary" className="flex-grow" type="button" onClick={onClose}>Batal</Button>
            <Button type="submit" className="flex-[2]">Simpan Produk</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
