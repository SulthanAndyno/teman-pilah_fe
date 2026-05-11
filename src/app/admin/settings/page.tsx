'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { User, Bell, Lock, Globe } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export default function AdminSettings() {
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Pengaturan berhasil disimpan');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-6 p-8 bg-white border border-border rounded-[40px]">
        <div className="w-24 h-24 rounded-[30px] bg-primary text-white flex items-center justify-center text-3xl font-bold border-4 border-white shadow-xl">
          AU
        </div>
        <div>
          <h3 className="text-2xl font-bold text-primary">Admin User</h3>
          <p className="text-neutral mb-3">admin@temanpilah.id</p>
          <Badge variant="success">Verified Administrator</Badge>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <aside className="md:col-span-1 space-y-2">
          {[
            { icon: User, name: 'Profil', active: true },
            { icon: Lock, name: 'Keamanan', active: false },
            { icon: Bell, name: 'Notifikasi', active: false },
            { icon: Globe, name: 'Regional', active: false },
          ].map((item) => (
            <button 
              key={item.name}
              className={cn(
                'w-full flex items-center gap-3 p-3 rounded-xl transition-all font-medium',
                item.active ? 'bg-primary text-white' : 'text-neutral hover:bg-bg'
              )}
            >
              <item.icon size={20} />
              {item.name}
            </button>
          ))}
        </aside>

        <section className="md:col-span-2">
          <Card className="space-y-8">
            <div>
              <h4 className="text-xl font-bold border-b border-border pb-4 mb-6">Informasi Akun</h4>
              <form onSubmit={handleSave} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Nama Depan" defaultValue="Admin" />
                  <Input label="Nama Belakang" defaultValue="User" />
                </div>
                <Input label="Email" defaultValue="admin@temanpilah.id" disabled />
                <Input label="Role" defaultValue="Super Admin" disabled />
                <div className="pt-4">
                  <Button type="submit">Simpan Perubahan</Button>
                </div>
              </form>
            </div>

            <div>
              <h4 className="text-xl font-bold border-b border-border pb-4 mb-6 text-red-500">Area Bahaya</h4>
              <Card className="bg-red-50/30 border-red-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-red-700">Nonaktifkan Akun</p>
                  <p className="text-sm text-red-600/70">Akun Anda tidak akan bisa diakses lagi.</p>
                </div>
                <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                  Nonaktifkan
                </Button>
              </Card>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
