'use client';

import React from 'react';
import {
  Newspaper,
  Package,
  FolderKanban,
  Users,
  ArrowUpRight,
} from 'lucide-react';

const summaryCards = [
  {
    id: 'total-news',
    title: 'TOTAL NEWS',
    value: '24',
    icon: Newspaper,
    trend: '12%',
    trendColor: 'text-[#154212]',
    trendBg: 'bg-[#dff3dd]',
  },
  {
    id: 'total-products',
    title: 'TOTAL PRODUCTS',
    value: '15',
    icon: Package,
    trend: '8%',
    trendColor: 'text-[#904d00]',
    trendBg: 'bg-[#fff1db]',
  },
  {
    id: 'total-programs',
    title: 'TOTAL PROGRAMS',
    value: '8',
    icon: FolderKanban,
    trend: 'Stable',
    trendColor: 'text-[#60233e]',
    trendBg: 'bg-[#f6e3ea]',
  },
  {
    id: 'total-users',
    title: 'TOTAL USERS',
    value: '120',
    icon: Users,
    trend: '24%',
    trendColor: 'text-[#154212]',
    trendBg: 'bg-[#dff3dd]',
  },
];

const activityRows = [
  {
    id: 1,
    title: 'New product added: Recycled Tote',
    date: 'Oct 24, 2023',
    admin: 'Sarah Johnson',
    status: 'SUCCESS',
    statusBg: 'bg-[#dff3dd]',
    statusText: 'text-[#154212]',
  },
  {
    id: 2,
    title: 'News published: Eco-Summit 2024',
    date: 'Oct 23, 2023',
    admin: 'Michael Chen',
    status: 'SUCCESS',
    statusBg: 'bg-[#dff3dd]',
    statusText: 'text-[#154212]',
  },
  {
    id: 3,
    title: 'User permissions updated',
    date: 'Oct 23, 2023',
    admin: 'Sarah Johnson',
    status: 'PENDING',
    statusBg: 'bg-[#fff1db]',
    statusText: 'text-[#904d00]',
  },
  {
    id: 4,
    title: 'Deprecated program archived',
    date: 'Oct 22, 2023',
    admin: 'Admin Root',
    status: 'SUCCESS',
    statusBg: 'bg-[#dff3dd]',
    statusText: 'text-[#154212]',
  },
  {
    id: 5,
    title: 'New partner verified: GreenSpace',
    date: 'Oct 21, 2023',
    admin: 'Michael Chen',
    status: 'SUCCESS',
    statusBg: 'bg-[#dff3dd]',
    statusText: 'text-[#154212]',
  },
  {
    id: 6,
    title: 'User registered: Amelia W.',
    date: 'Oct 20, 2023',
    admin: 'System',
    status: 'SUCCESS',
    statusBg: 'bg-[#dff3dd]',
    statusText: 'text-[#154212]',
  },
];

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-8">
      {/* HEADER */}
      <div className="flex flex-col gap-2">
        <h1 className="text-[32px] font-bold leading-[38px] text-[#154212]">
          Overview Dashboard
        </h1>
        <p className="text-base leading-[25px] text-[#42493e]">
          Welcome back! Here&apos;s what&apos;s happening with Teman Pilah today.
        </p>
      </div>

      {/* SUMMARY CARDS */}
      <section
        aria-label="Dashboard summary metrics"
        className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
      >
        {summaryCards.map((card) => {
          const Icon = card.icon;

          return (
            <article
              key={card.id}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0px_2px_12px_#0000000a]"
            >
              {/* TOP */}
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3f4ef]">
                  <Icon
                    size={28}
                    className="text-[#2d5a27]"
                  />
                </div>

                <div
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 ${card.trendBg}`}
                >
                  <ArrowUpRight
                    size={14}
                    className={card.trendColor}
                  />
                  <span
                    className={`text-sm font-medium ${card.trendColor}`}
                  >
                    {card.trend}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="mt-8 flex flex-col gap-1">
                <span className="text-base tracking-[0.8px] text-[#42493e]">
                  {card.title}
                </span>
                <h2 className="text-[40px] font-bold leading-[60px] text-[#1a1c19]">
                  {card.value}
                </h2>
              </div>
            </article>
          );
        })}
      </section>

      {/* RECENT ACTIVITY */}
      <section className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0px_2px_12px_#0000000a]">
        {/* TABLE HEADER */}
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
          <h2 className="text-xl font-semibold text-[#1a1c19]">
            Recent Activity
          </h2>
          <button
            type="button"
            className="text-base font-bold text-[#60233e] transition-opacity hover:opacity-70"
          >
            View All Activities
          </button>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          {/* COLUMN HEADER */}
          <div className="min-w-[900px] border-b border-neutral-200 bg-[#f3f4ef]">
            <div className="grid grid-cols-[2fr_1fr_1fr_140px] px-6 py-4">
              <div className="text-sm font-bold tracking-[0.8px] text-[#72796e]">
                ACTIVITY
              </div>
              <div className="text-sm font-bold tracking-[0.8px] text-[#72796e]">
                DATE
              </div>
              <div className="text-sm font-bold tracking-[0.8px] text-[#72796e]">
                ADMIN
              </div>
              <div className="text-sm font-bold tracking-[0.8px] text-[#72796e]">
                STATUS
              </div>
            </div>
          </div>

          {/* ROWS */}
          <div className="min-w-[900px]">
            {activityRows.map((activity) => (
              <article
                key={activity.id}
                className="grid grid-cols-[2fr_1fr_1fr_140px] items-center border-b border-neutral-200 px-6 py-5 last:border-none"
              >
                {/* ACTIVITY */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3f4ef]">
                    <div className="h-3 w-3 rounded-full bg-[#2d5a27]" />
                  </div>
                  <span className="text-base font-semibold text-[#1a1c19]">
                    {activity.title}
                  </span>
                </div>

                {/* DATE */}
                <div className="text-base text-[#42493e]">
                  {activity.date}
                </div>

                {/* ADMIN */}
                <div className="text-base text-[#42493e]">
                  {activity.admin}
                </div>

                {/* STATUS */}
                <div>
                  <div
                    className={`inline-flex rounded-full px-3 py-1 ${activity.statusBg}`}
                  >
                    <span
                      className={`text-xs font-bold tracking-[0px] ${activity.statusText}`}
                    >
                      {activity.status}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
