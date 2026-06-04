// // 'use client';

// // import React, { useState } from 'react';
// // import { useRouter } from 'next/navigation';
// // import { toast } from 'sonner';
// // import { Button } from '@/components/ui/Button';
// // import { Input } from '@/components/ui/Input';
// // import { Card } from '@/components/ui/Card';
// // import { Leaf } from 'lucide-react';

// // import { api } from '@/lib/api-client';

// // function LoginPage() {
// //   const router = useRouter();
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   React.useEffect(() => {
// //     // Check for query param bypass first
// //     const searchParams = new URLSearchParams(window.location.search);
// //     if (searchParams.get('bypass') === 'true') {
// //       localStorage.setItem('adminToken', 'url-bypass-token');
// //       localStorage.setItem('isAdminAuthenticated', 'true');
// //       router.push('/admin');
// //       toast.success('Bypass via URL Berhasil');
// //       return;
// //     }

// //     const isAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';
// //     if (isAuthenticated) {
// //       router.push('/admin');
// //     }
// //   }, [router]);

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     handleLogin(email, password);
// //   };

// //   const handleDemoLogin = () => {
// //     setEmail('admin@temanpilah.id');
// //     setPassword('admin123');
// //     handleLogin('admin@temanpilah.id', 'admin123', true);
// //   };

// //   const handleLogin = async (loginEmail: string, loginPassword: string, isDemo: boolean = false) => {
// //     setIsSubmitting(true);
// //     try {
// //       if (isDemo) {
// //         // Instant success for demo mode button
// //         localStorage.setItem('adminToken', 'demo-token');
// //         localStorage.setItem('isAdminAuthenticated', 'true');
// //         toast.success('Masuk dengan Mode Demo (Tanpa Database)');
// //         router.push('/admin');
// //         return;
// //       }

// //       const data = await api.post<{ token: string; message?: string }>('/api/auth/login', { 
// //         email: loginEmail, 
// //         password: loginPassword 
// //       });

// //       localStorage.setItem('adminToken', data.token);
// //       localStorage.setItem('isAdminAuthenticated', 'true');
// //       toast.success('Login berhasil! Selamat datang Admin.');
// //       router.push('/admin');
// //     } catch (error: unknown) {
// //       console.error('Login error:', error);
// //       const errorMessage = error instanceof Error ? error.message : 'Gagal Login!';
      
// //       // If connection fails OR if credentials match demo, offer a fallback
// //       if (
// //         errorMessage.includes('Failed to fetch') || 
// //         errorMessage.includes('Gagal menyambung') ||
// //         (loginEmail === 'admin@temanpilah.id' && loginPassword === 'admin123')
// //       ) {
// //         toast.warning('Gagal terhubung ke database. Masuk dengan mode Demo?');
        
// //         // Auto-fallback if the username/pass are the demo ones but server rejected them
// //         if (loginEmail === 'admin@temanpilah.id' && loginPassword === 'admin123') {
// //           localStorage.setItem('adminToken', 'mock-token');
// //           localStorage.setItem('isAdminAuthenticated', 'true');
// //           toast.success('Login Mode Demo Berhasil!');
// //           router.push('/admin');
// //           return;
// //         }
// //       }
      
// //       toast.error(errorMessage || 'Periksa email atau password Anda.');
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#F8F6F1] flex items-center justify-center px-6">
// //       <div className="w-full max-w-md space-y-8">
// //         <div className="text-center space-y-2">
// //           <div className="inline-flex w-16 h-16 bg-[#2D5A27] rounded-2xl items-center justify-center text-white mb-4 shadow-lg shadow-[#2D5A27]/20">
// //             <Leaf size={32} />
// //           </div>
// //           <h1 className="text-4xl font-bold text-[#14321A]">Admin Portal</h1>
// //           <p className="text-[#3D4F41]">Masukkan kredensial Anda untuk masuk ke dashboard.</p>
// //         </div>

// //         <Card className="p-8 border-none shadow-xl shadow-[#14321A]/5">
// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <Input
// //               label="Email"
// //               type="email"
// //               placeholder="admin@temanpilah.id"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //             />
// //             <Input
// //               label="Password"
// //               type="password"
// //               placeholder="••••••••"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //             />
// //             <div className="space-y-3 pt-2">
// //               <Button 
// //                 type="submit" 
// //                 className="w-full bg-[#FC9430] hover:bg-[#E88520] text-white border-none h-12 rounded-xl text-lg font-bold" 
// //                 disabled={isSubmitting}
// //               >
// //                 {isSubmitting ? 'Memproses...' : 'Masuk Dashboard'}
// //               </Button>
              
// //               <div className="relative">
// //                 <div className="absolute inset-0 flex items-center">
// //                   <span className="w-full border-t border-gray-100" />
// //                 </div>
// //                 <div className="relative flex justify-center text-xs uppercase">
// //                   <span className="bg-white px-2 text-gray-400">Atau</span>
// //                 </div>
// //               </div>

// //               <Button 
// //                 type="button"
// //                 onClick={handleDemoLogin}
// //                 variant="secondary"
// //                 className="w-full h-12 rounded-xl text-lg border-2 border-primary/20 text-primary font-bold hover:bg-primary/5"
// //               >
// //                 Gunakan Akun Demo
// //               </Button>
// //             </div>
// //           </form>
// //         </Card>

// //         <div className="text-center">
// //           <button 
// //             onClick={() => router.push('/')} 
// //             className="text-[#2D5A27] hover:text-[#14321A] font-bold text-sm transition-colors flex items-center justify-center gap-2 mx-auto mb-4"
// //           >
// //             ← Kembali ke Beranda
// //           </button>
          
// //           <button 
// //             onClick={() => {
// //               localStorage.setItem('adminToken', 'bypass-token');
// //               localStorage.setItem('isAdminAuthenticated', 'true');
// //               router.push('/admin');
// //               toast.success('Bypass Login Berhasil');
// //             }}
// //             className="text-xs text-slate-400 hover:text-slate-600 underline"
// //           >
// //             Developer Bypass (Langsung ke Dashboard)
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default LoginPage;


// 'use client';

// import React, { useState, useId } from 'react';
// import { motion } from 'motion/react';
// import { Eye, EyeOff, Mail, Lock, ChevronRight } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { Button } from '@/components/ui/Button';
// import { Card } from '@/components/ui/Card';
// import { Input } from '@/components/ui/Input';
// import { toast } from 'sonner';

// export default function LoginPage() {
//   const emailId = useId();
//   const passwordId = useId();
//   const rememberId = useId();
//   const router = useRouter();
  
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     try {
//       // Simulate login or connect to your backend /api/auth/login
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       if (email === 'admin@temanpilah.com' && password === 'admin123') {
//         localStorage.setItem('isAdminAuthenticated', 'true');
//         toast.success('Login Berhasil! Selamat datang kembali.');
//         router.push('/admin');
//       } else {
//         toast.error('Email atau password salah. Coba: admin@temanpilah.com / admin123');
//       }
//     } catch (error) {
//       toast.error('Terjadi kesalahan saat login.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#F9FAF5]">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src=""
//           alt="Teman Pilah Background"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-[#154212]/80 to-[#F9FAF5]/20 backdrop-blur-[2px]" />
//       </div>

//       {/* Login Card */}
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative z-10 w-full max-w-[500px] px-6 py-8"
//       >
//         <Card className="bg-[#F9FAF5]/95 backdrop-blur-md border-white/20 shadow-2xl rounded-[40px] p-10 md:p-12 space-y-8">
//           {/* Logo & Header */}
//           <div className="flex flex-col items-center text-center space-y-4">
//             <Link href="/" className="flex items-center gap-2 group">
//               <div className="relative w-12 h-12 bg-[#D9F99D] rounded-xl flex items-center justify-center transform transition-transform group-hover:scale-110">
//                 <LeafIcon className="text-[#154212]" />
//               </div>
//               <span className="text-2xl font-extrabold text-[#154212] tracking-tight">Teman Pilah</span>
//             </Link>
            
//             <div className="space-y-2">
//               <h1 className="text-3xl font-bold text-[#154212]">Admin Login</h1>
//               <p className="text-[#42493E] font-medium opacity-70">Masuk untuk mengelola Dashboard Teman Pilah</p>
//             </div>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-5">
//               <div className="space-y-2">
//                 <label htmlFor={emailId} className="text-sm font-bold text-[#154212] ml-1">Email</label>
//                 <div className="relative">
//                   <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#154212]/40">
//                     <Mail size={18} strokeWidth={2.5} />
//                   </div>
//                   <input
//                     id={emailId}
//                     type="email"
//                     required
//                     placeholder="Masukkan Email Admin"
//                     className="w-full h-14 bg-white border border-[#C2C9BB]/30 rounded-2xl pl-12 pr-4 text-[#154212] font-medium outline-none transition-all focus:border-[#154212] focus:ring-4 focus:ring-[#154212]/5"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <div className="flex items-center justify-between ml-1">
//                   <label htmlFor={passwordId} className="text-sm font-bold text-[#154212]">Password</label>
//                 </div>
//                 <div className="relative">
//                   <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#154212]/40">
//                     <Lock size={18} strokeWidth={2.5} />
//                   </div>
//                   <input
//                     id={passwordId}
//                     type={showPassword ? "text" : "password"}
//                     required
//                     placeholder="Masukkan Password"
//                     className="w-full h-14 bg-white border border-[#C2C9BB]/30 rounded-2xl pl-12 pr-12 text-[#154212] font-medium outline-none transition-all focus:border-[#154212] focus:ring-4 focus:ring-[#154212]/5"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 text-[#154212]/40 hover:text-[#154212] transition-colors"
//                   >
//                     {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-between ml-1">
//               <label 
//                 htmlFor={rememberId}
//                 className="flex items-center cursor-pointer group"
//               >
//                 <div className="relative">
//                   <input
//                     id={rememberId}
//                     type="checkbox"
//                     className="sr-only"
//                     checked={rememberMe}
//                     onChange={(e) => setRememberMe(e.target.checked)}
//                   />
//                   <div className={`w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center ${rememberMe ? 'bg-[#154212] border-[#154212]' : 'bg-white border-[#C2C9BB]'}`}>
//                     {rememberMe && <div className="w-2 h-2 rounded-[1px] bg-white" />}
//                   </div>
//                 </div>
//                 <span className="ml-3 text-sm font-medium text-[#42493E]">Ingat saya</span>
//               </label>
              
//               <button type="button" className="text-xs font-bold text-[#FC9430] hover:underline">
//                 Lupa Password?
//               </button>
//             </div>

//             <Button
//               type="submit"
//               disabled={isLoading}
//               className="w-full h-14 bg-[#154212] hover:bg-[#0E2F0C] text-white rounded-2xl font-bold text-lg shadow-xl shadow-[#154212]/20 relative overflow-hidden group"
//             >
//               {isLoading ? (
//                 <div className="h-6 w-6 animate-spin rounded-full border-3 border-white/30 border-t-white" />
//               ) : (
//                 <span className="flex items-center justify-center gap-2">
//                   Masuk Sekarang
//                   <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
//                 </span>
//               )}
//             </Button>
//           </form>

//           <p className="text-center text-[#42493E] text-sm font-medium opacity-60 italic">
//             Hanya akses untuk Administrator Teman Pilah
//           </p>
//         </Card>
//       </motion.div>
//     </main>
//   );
// }

// function LeafIcon({ className }: { className?: string }) {
//   return (
//     <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a7 7 0 0 1-7 7c-.67 0-1.32-.1-1.94-.26L11 20Z" />
//       <path d="M9 21c0-4.5 1.5-9 6-11" />
//     </svg>
//   );
// }


'use client';

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

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:2000';

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

      toast.error(
        error instanceof Error
          ? error.message
          : 'Terjadi kesalahan saat login.'
      );

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

              <div className="relative w-12 h-12 bg-[#D9F99D] rounded-xl flex items-center justify-center transform transition-transform group-hover:scale-110">

                <LeafIcon className="text-[#154212]" />

              </div>

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

function LeafIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >

      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a7 7 0 0 1-7 7c-.67 0-1.32-.1-1.94-.26L11 20Z" />

      <path d="M9 21c0-4.5 1.5-9 6-11" />

    </svg>
  );
}