"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { socialLinks, footerLinks } from "@/config/siteConfig";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    // socialLinks & footerLinks now imported from data/siteConfig

    return (
        <footer className="border-t border-gray-200/80 bg-[#f5f3ee] dark:border-gray-700/60 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr,0.8fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
                                <span className="text-base font-semibold">H</span>
                            </div>
                            <span className="text-sm font-semibold tracking-[-0.02em] text-gray-950 dark:text-white">
                                Hicham Mahboub
                            </span>
                        </div>
                        <p className="max-w-md text-sm leading-6 text-gray-600 dark:text-gray-400">
                            Built with precision and attention to detail.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">
                            Connect
                        </h3>
                        <div className="flex flex-col gap-2">
                            {socialLinks.map((link, idx) => (
                                <a
                                    key={`${link.label}-${idx}`}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-700 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">
                            Legal
                        </h3>
                        <div className="flex flex-col gap-2">
                            {footerLinks.map((link, idx) => (
                                <Link
                                    key={`${link.label}-${idx}`}
                                    href={link.href}
                                    className="text-sm text-gray-700 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-12 border-t border-gray-200/80 pt-8 text-sm text-gray-600 dark:border-gray-700/60 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <p>© {currentYear} Hicham Mahboub</p>
                    <p>Built with precision and attention to detail.</p>
                </motion.div>
            </div>
        </footer>
    );
}
