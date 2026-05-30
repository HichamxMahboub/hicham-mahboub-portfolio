"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navItems } from "@/config/siteConfig";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // navItems imported from data/siteConfig

    return (
        <motion.nav
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "border-b border-gray-200/80 bg-[#f5f3ee]/90 backdrop-blur-md dark:border-gray-700/60 dark:bg-gray-900/85" : "bg-transparent"}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-black text-white shadow-soft-lg dark:bg-white dark:text-black">
                        <span className="text-base font-semibold">H</span>
                    </div>
                    <div className="hidden sm:block">
                        <div className="text-sm font-semibold tracking-[-0.02em] text-gray-950 dark:text-white">
                            Hicham Mahboub
                        </div>
                        <div className="text-xs text-gray-500">Full Stack Engineer</div>
                    </div>
                </Link>

                <div className="hidden items-center gap-10 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`relative text-sm font-medium transition-colors ${isScrolled ? "text-gray-700 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white" : "text-gray-800 hover:text-gray-950 dark:text-gray-200 dark:hover:text-white"}`}
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gray-950 transition-all duration-300 hover:w-full dark:bg-white" />
                        </Link>
                    ))}
                </div>

                <button
                    className="inline-flex items-center justify-center rounded-full border border-gray-300/70 bg-white/70 p-2 text-gray-900 transition hover:bg-white dark:border-gray-700 dark:bg-gray-800/70 dark:text-white md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="space-y-1.5">
                        <div
                            className={`h-0.5 w-5 bg-current transition-all ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
                        />
                        <div
                            className={`h-0.5 w-5 bg-current transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`}
                        />
                        <div
                            className={`h-0.5 w-5 bg-current transition-all ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                        />
                    </div>
                </button>
            </div>

            {isMobileMenuOpen && (
                <motion.div
                    className="border-t border-gray-200/80 bg-[#f5f3ee]/95 px-4 py-4 backdrop-blur-md dark:border-gray-700/60 dark:bg-gray-900/95 md:hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                >
                    <div className="mx-auto flex max-w-7xl flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-base font-medium text-gray-800 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
