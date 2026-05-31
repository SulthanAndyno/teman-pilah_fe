'use client';

import { Program } from '@/types';
import { getImageUrl } from '@/lib/utils';
import { Edit2, Trash2 } from 'lucide-react';
import Link from 'next/link';

interface ProgramTableProps {
  programs: Program[];
  onEdit: (program: Program) => void;
  onDelete: (id: string) => void;
}

export function ProgramTable({ programs, onEdit, onDelete }: ProgramTableProps) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#c2c9bb] bg-white shadow-[0px_1px_2px_#0000000d]">
      <div className="overflow-x-auto">
        {/* TABLE HEADER */}
        <div className="grid grid-cols-[1fr_120px_1fr_120px] border-b border-[#c2c9bb] bg-[#f3f4ef]">
          <div className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
            TITLE
          </div>
          <div className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
            IMAGE
          </div>
          <div className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
            DESCRIPTION
          </div>
          <div className="px-6 py-4 text-right text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
            ACTIONS
          </div>
        </div>

        {/* TABLE BODY */}
        <div className="divide-y divide-[#c2c9bb]">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="grid grid-cols-[1fr_120px_1fr_120px] items-center hover:bg-[#f9faf5] transition-colors"
            >
              <div className="px-6 py-6">
                <span className="text-sm font-bold text-[#1a1c19]">
                  {program.title}
                </span>
              </div>

              <div className="px-6 py-4">
                <div className="h-14 w-14 rounded-lg border border-[#e0e3db] overflow-hidden bg-[#f3f4ef]">
                  <img
                    src={getImageUrl(program.image)}
                    alt={program.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="px-6 py-4">
                <p className="text-sm text-[#42493e] line-clamp-2">
                  {program.description}
                </p>
              </div>

              <div className="flex items-center justify-end gap-3 px-6 py-4">
                <Link 
                  href={`/admin/programs/${program.id}/edit`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f4ef] text-[#1a1c19] transition-colors hover:bg-[#e0e3db]"
                  title="Edit"
                >
                  <Edit2 size={18} />
                </Link>
                <button 
                  onClick={() => onDelete(program.id)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffdad6] text-[#410002] transition-colors hover:bg-[#ffb4ab]"
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}

          {programs.length === 0 && (
            <div className="py-20 text-center text-[#72796e]">
              Belum ada program yang ditambahkan.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
