"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Newsreader, Geist, Hanken_Grotesk } from "next/font/google";
import { Menu, X, ChevronRight, School, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";
import "./globals.css";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Awards & Honours", path: "/awards&honours" },
  { label: "Consultancy", path: "/consultancy" },
  { label: "Gallery", path: "/gallery" },
  { label: "Publications", path: "/publications" },
  { label: "Reports", path: "/reports" },
  { label: "Students", path: "/students" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <html
      lang="en"
      className={cn(
        "h-full", 
        "antialiased", 
        "scroll-smooth",
        newsreader.variable, 
        hanken.variable, 
        geist.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col bg-[#fdfdfd] text-slate-900 font-hanken pt-16">        
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200/80 z-50 transition-all duration-300">
          <div className=" h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4 group">
              <Landmark className="w-5 h-5 text-indigo-600 transition-transform group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="font-newsreader font-bold text-lg  text-fg ">
                  Dr. Koushik Roy
                </span>
                <span className="text-[10px] text-primary-fg font-medium tracking-wider uppercase font-hanken -mt-0.5">
                  IIT Patna
                </span>
              </div>
            </Link>
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={cn(
                      "px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all font-hanken uppercase tracking-wide",
                      isActive
                        ? "bg-indigo-50 text-fg font-bold"
                        : "text-slate-600 hover:text-fg hover:font-bold hover:bg-slate-50"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
        <div
          className={cn(
            "fixed inset-0 top-16 bg-white z-40 lg:hidden transform transition-transform duration-300 ease-in-out border-t border-slate-100",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="p-4 space-y-1 bg-slate-50/50 h-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium font-hanken uppercase transition-colors",
                    isActive
                      ? "bg-indigo-50 text-fg font-bold"
                      : "text-slate-700 hover:bg-slate-100 hover:font-bold hover:text-fg"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <ChevronRight className={cn("w-4 h-4 text-slate-400", isActive && "text-fg")} />
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <main className="flex-grow w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
          {children}
        </main>

        <footer className="bg-slate-900 text-slate-400 font-sans text-xs border-t border-slate-800 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-slate-800 rounded-xl text-indigo-400">
                <School className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-center md:text-left">
                <span className="text-white font-newsreader text-base font-semibold tracking-wide">
                  Dr. Koushik Roy
                </span>
                <span className="text-slate-400 text-xs font-hanken mt-0.5">
                  Civil & Environmental Engineering Department, IIT Patna
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right font-hanken text-slate-500">
              <p>© {new Date().getFullYear()} All Rights Reserved.</p>
              <p className="text-[11px] tracking-wide">
                Created by <span className="text-slate-300">Shreya</span> 
              </p>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}