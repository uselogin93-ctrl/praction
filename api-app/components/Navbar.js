"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "View Directory", href: "/view" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-2xl flex items-center gap-8 transition-all hover:border-white/20">
        <div className="flex items-center gap-2 mr-4">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
            <span className="text-white font-bold text-xs">MG</span>
          </div>
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 hidden sm:block">
            MongoConnect
          </span>
        </div>

        <ul className="flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? "bg-white text-slate-900 shadow-lg shadow-white/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-4 h-4 w-[1px] bg-white/10 hidden sm:block"></div>

        <div className="hidden sm:flex items-center gap-4 ml-4">
          <button className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-widest">
            v1.0
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
