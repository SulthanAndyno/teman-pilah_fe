'use client';

import { getBaseUrl } from '../../lib/api-config';
import React, { useState, useId } from 'react';
import { motion } from 'motion/react';
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ChevronRight,
} from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

import { toast } from 'sonner';

const BASE_URL = getBaseUrl();

export default function LoginPage() {

  const emailId = useId();

  const passwordId = useId();

  const rememberId = useId();

  const router = useRouter();

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const [showPassword, setShowPassword] =
    useState(false);

  const [rememberMe, setRememberMe] =
    useState(false);

  const [isLoading, setIsLoading] =
    useState(false);

  // =========================
  // LOGIN
  // =========================
  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setIsLoading(true);

    try {

      const res = await fetch(
        `${BASE_URL}/api/auth/login`,
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      console.log(data);

      if (!res.ok) {

        throw new Error(
          data.message || 'Login gagal'
        );

      }

      // =========================
      // SIMPAN JWT TOKEN
      // =========================
      localStorage.setItem(
        'token',
        data.data.token
      );

      // =========================
      // STATUS LOGIN
      // =========================
      localStorage.setItem(
        'isAdminAuthenticated',
        'true'
      );

      localStorage.setItem(
        'adminEmail',
        email
      );

      toast.success(
        'Login berhasil!'
      );

      router.push('/admin');

    } catch (error) {

      console.error(error);

      let errMsg = 'Terjadi kesalahan saat login.';
      if (error instanceof Error) {
        if (error.message.toLowerCase().includes('failed to fetch')) {
          errMsg = 'Email/password salah';
        } else {
          errMsg = error.message;
        }
      }

      toast.error(errMsg);

    } finally {

      setIsLoading(false);

    }
  };

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#F9FAF5]">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">

        <Image
          src="/login/login.png"
          alt="Teman Pilah Background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#154212]/80 to-[#F9FAF5]/20 backdrop-blur-[2px]" />

      </div>

      {/* LOGIN CARD */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
        }}
        className="relative z-10 w-full max-w-[500px] px-6 py-8"
      >

        <Card className="bg-[#F9FAF5]/95 backdrop-blur-md border-white/20 shadow-2xl rounded-[40px] p-10 md:p-12 space-y-8">

          {/* HEADER */}
          <div className="flex flex-col items-center text-center space-y-4">

            <Link
              href="/"
              className="flex items-center gap-2 group"
            >

              <img
                src="/logo.png"
                alt="Logo Teman Pilah"
                className="h-12 w-12 rounded-full object-cover transform transition-transform group-hover:scale-110"
              />

              <span className="text-2xl font-extrabold text-[#154212] tracking-tight">
                Teman Pilah
              </span>

            </Link>

            <div className="space-y-2">

              <h1 className="text-3xl font-bold text-[#154212]">
                Admin Login
              </h1>

              <p className="text-[#42493E] font-medium opacity-70">
                Masuk untuk mengelola Dashboard Teman Pilah
              </p>

            </div>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div className="space-y-5">

              {/* EMAIL */}
              <div className="space-y-2">

                <label
                  htmlFor={emailId}
                  className="text-sm font-bold text-[#154212] ml-1"
                >
                  Email
                </label>

                <div className="relative">

                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#154212]/40">

                    <Mail
                      size={18}
                      strokeWidth={2.5}
                    />

                  </div>

                  <input
                    id={emailId}
                    type="email"
                    required
                    placeholder="Masukkan Email Admin"
                    className="w-full h-14 bg-white border border-[#C2C9BB]/30 rounded-2xl pl-12 pr-4 text-[#154212] font-medium outline-none transition-all focus:border-[#154212] focus:ring-4 focus:ring-[#154212]/5"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />

                </div>

              </div>

              {/* PASSWORD */}
              <div className="space-y-2">

                <div className="flex items-center justify-between ml-1">

                  <label
                    htmlFor={passwordId}
                    className="text-sm font-bold text-[#154212]"
                  >
                    Password
                  </label>

                </div>

                <div className="relative">

                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#154212]/40">

                    <Lock
                      size={18}
                      strokeWidth={2.5}
                    />

                  </div>

                  <input
                    id={passwordId}
                    type={
                      showPassword
                        ? 'text'
                        : 'password'
                    }
                    required
                    placeholder="Masukkan Password"
                    className="w-full h-14 bg-white border border-[#C2C9BB]/30 rounded-2xl pl-12 pr-12 text-[#154212] font-medium outline-none transition-all focus:border-[#154212] focus:ring-4 focus:ring-[#154212]/5"
                    value={password}
                    onChange={(e) =>
                      setPassword(
                        e.target.value
                      )
                    }
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#154212]/40 hover:text-[#154212] transition-colors"
                  >

                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}

                  </button>

                </div>

              </div>

            </div>

            {/* REMEMBER */}
            <div className="flex items-center justify-between ml-1">

              <label
                htmlFor={rememberId}
                className="flex items-center cursor-pointer group"
              >

                <div className="relative">

                  <input
                    id={rememberId}
                    type="checkbox"
                    className="sr-only"
                    checked={rememberMe}
                    onChange={(e) =>
                      setRememberMe(
                        e.target.checked
                      )
                    }
                  />

                  <div
                    className={`w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center ${
                      rememberMe
                        ? 'bg-[#154212] border-[#154212]'
                        : 'bg-white border-[#C2C9BB]'
                    }`}
                  >

                    {rememberMe && (
                      <div className="w-2 h-2 rounded-[1px] bg-white" />
                    )}

                  </div>

                </div>

                <span className="ml-3 text-sm font-medium text-[#42493E]">
                  Ingat saya
                </span>

              </label>

              <button
                type="button"
                className="text-xs font-bold text-[#FC9430] hover:underline"
              >
                Lupa Password?
              </button>

            </div>

            {/* BUTTON */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-[#154212] hover:bg-[#0E2F0C] text-white rounded-2xl font-bold text-lg shadow-xl shadow-[#154212]/20 relative overflow-hidden group"
            >

              {isLoading ? (

                <div className="h-6 w-6 animate-spin rounded-full border-3 border-white/30 border-t-white" />

              ) : (

                <span className="flex items-center justify-center gap-2">

                  Masuk Sekarang

                  <ChevronRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />

                </span>

              )}

            </Button>

          </form>

          <p className="text-center text-[#42493E] text-sm font-medium opacity-60 italic">
            Hanya akses untuk Administrator Teman Pilah
          </p>

        </Card>

      </motion.div>

    </main>
  );
}