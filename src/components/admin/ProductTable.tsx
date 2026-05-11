'use client';

import { Product } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatPrice, cn } from '@/lib/utils';
import { Edit2, Trash2, ShoppingBag } from 'lucide-react';

interface ProductTableProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export function ProductTable({ products, onEdit, onDelete }: ProductTableProps) {
  return (
    <Card padding="none" className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-bg/50 border-b border-border">
            <tr>
              <th className="px-6 py-4 font-bold text-primary">Info Produk</th>
              <th className="px-6 py-4 font-bold text-primary">Kategori</th>
              <th className="px-6 py-4 font-bold text-primary">Harga</th>
              <th className="px-6 py-4 font-bold text-primary group">Stok <Badge className="ml-2">Live</Badge></th>
              <th className="px-6 py-4 font-bold text-primary text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-bg/20 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img src={product.image} className="w-12 h-12 rounded-lg object-cover bg-bg" alt={product.name} />
                    <span className="font-medium text-primary">{product.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge variant="default" className="bg-primary/5 text-primary border-primary/10">
                    {product.category}
                  </Badge>
                </td>
                <td className="px-6 py-4 font-medium">{formatPrice(product.price)}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      'w-2 h-2 rounded-full',
                      product.stock > 10 ? 'bg-green-500' : 'bg-red-500'
                    )} />
                    {product.stock} pcs
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-2">
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="text-primary hover:bg-primary/10"
                      onClick={() => onEdit(product)}
                    >
                      <Edit2 size={18} />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="text-red-500 hover:bg-red-50/50"
                      onClick={() => onDelete(product.id)}
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {products.length === 0 && (
          <div className="py-20 text-center space-y-4">
            <div className="w-16 h-16 bg-bg rounded-full flex items-center justify-center mx-auto text-neutral">
              <ShoppingBag size={32} />
            </div>
            <div>
              <p className="font-bold text-primary">Produk tidak ditemukan</p>
              <p className="text-sm text-neutral">Coba gunakan kata kunci pencarian lain.</p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
