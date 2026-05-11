'use client';

import { News } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Calendar, Edit2, Trash2 } from 'lucide-react';

interface NewsTableProps {
  newsList: News[];
  onEdit: (news: News) => void;
  onDelete: (id: string) => void;
}

export function NewsTable({ newsList, onEdit, onDelete }: NewsTableProps) {
  return (
    <div className="grid gap-6">
      {newsList.map((news) => (
        <Card key={news.id} padding="none" className="flex flex-col md:flex-row overflow-hidden group">
          <div className="w-full md:w-48 h-48 md:h-auto overflow-hidden">
            <img 
              src={news.image} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              alt={news.title}
            />
          </div>
          <div className="flex-grow p-6 flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Badge variant={news.status === 'published' ? 'success' : 'default'}>
                  {news.status}
                </Badge>
                <span className="text-sm text-neutral flex items-center gap-1">
                  <Calendar size={14} /> {news.date}
                </span>
              </div>
              <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                {news.title}
              </h4>
              <p className="text-neutral text-sm line-clamp-2">
                {news.content}
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <Badge variant="accent">{news.category}</Badge>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost" onClick={() => onEdit(news)}>
                  <Edit2 size={18} />
                </Button>
                <Button size="icon" variant="ghost" className="text-red-500" onClick={() => onDelete(news.id)}>
                  <Trash2 size={18} />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
      {newsList.length === 0 && (
        <div className="py-20 text-center border-2 border-dashed border-border rounded-[40px]">
          <p className="text-neutral">Belum ada berita yang ditulis.</p>
        </div>
      )}
    </div>
  );
}
