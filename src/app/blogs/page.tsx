"use client";

import React, { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";
import Link from "next/link";
import {
    Calendar,
    User,
    ArrowRight,
    Search,
    Tag,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

// Sample blog data
const blogPosts = [
    {
        id: 1,
        title: "How to Recover Data from a Failed Hard Drive",
        excerpt:
            "Discover the common causes of hard drive failure and the professional steps taken to retrieve your valuable data safely.",
        date: "May 10, 2024",
        author: "Admin",
        category: "Hard Drive",
        image: "/images/headers_img/desktop_laptop.jpg",
        slug: "recover-data-failed-hard-drive",
    },
    {
        id: 2,
        title: "SSD vs HDD: Which is Easier to Recover?",
        excerpt:
            "Understanding the architectural differences between SSDs and HDDs and how they impact the data recovery process.",
        date: "April 28, 2024",
        author: "Technical Expert",
        category: "Comparison",
        image: "/images/headers_img/ssd_recovery.jpg",
        slug: "ssd-vs-hdd-recovery",
    },
    {
        id: 3,
        title: "Common Signs of RAID Failure You Should Know",
        excerpt:
            "RAID systems are robust but not invincible. Learn how to spot early warning signs of RAID array degradation.",
        date: "April 15, 2024",
        author: "Admin",
        category: "RAID Recovery",
        image: "/images/headers_img/raid_server.jpg",
        slug: "common-signs-raid-failure",
    },
    {
        id: 4,
        title: "Protecting Your Business from Data Loss",
        excerpt:
            "A comprehensive guide for small to medium businesses on implementing effective backup strategies and disaster recovery plans.",
        date: "March 22, 2024",
        author: "Business Consultant",
        category: "Data Security",
        image: "/images/headers_img/encrypted_data.jpg",
        slug: "protecting-business-data-loss",
    },
    {
        id: 5,
        title: "The Role of Clean Rooms in Data Recovery",
        excerpt:
            "Why professional data recovery requires a controlled environment and what happens inside a Class 100 Clean Room.",
        date: "March 05, 2024",
        author: "Lab Manager",
        category: "Technology",
        image: "/images/headers_img/data_recovery_clean_room.jpg",
        slug: "role-of-clean-rooms",
    },
    {
        id: 6,
        title: "Recovering Deleted Photos from SD Cards",
        excerpt:
            "Accidentally formatted your camera's SD card? Here is how professional recovery services can bring your memories back.",
        date: "February 18, 2024",
        author: "Admin",
        category: "Flash Recovery",
        image: "/images/headers_img/flash_card_recovery.jpg",
        slug: "recovering-deleted-photos-sd-cards",
    },
    {
        id: 7,
        title: "How to Recover Data from a Failed Hard Drive",
        excerpt:
            "Discover the common causes of hard drive failure and the professional steps taken to retrieve your valuable data safely.",
        date: "May 10, 2024",
        author: "Admin",
        category: "Hard Drive",
        image: "/images/headers_img/desktop_laptop.jpg",
        slug: "recover-data-failed-hard-drive",
    },
];

const categories = [
    "All",
    "Hard Drive",
    "SSD Recovery",
    "RAID Recovery",
    "Data Security",
    "Technology",
    "Flash Recovery",
];

function BlogCard({ post }: { post: (typeof blogPosts)[0] }) {
    return (
        <article className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="relative h-56 overflow-hidden">
                <Link
                    href={`/blogs/${post.slug}`}
                    aria-label={post.title}>
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </Link>
                <div className="absolute top-4 left-4 z-20">
                    <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        {post.category}
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-slate-400 text-xs mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-blue-500" />
                        {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-blue-500" />
                        {post.author}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50">
                    <Link
                        href={`/blogs/${post.slug}`}
                        className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group/link">
                        READ MORE
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeCategory, setActiveCategory] = useState("All");
    const POSTS_PER_PAGE = 6;

    // Filter posts based on category
    const filteredPosts = blogPosts.filter(
        (post) => activeCategory === "All" || post.category === activeCategory,
    );

    // Calculate pagination values
    const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

    // Reset to page 1 when category changes
    const handleCategoryChange = (cat: string) => {
        setActiveCategory(cat);
        setCurrentPage(1);
    };

    return (
        <main className="min-h-screen bg-white">

            {/* Hero Section */}
            <PageHeader
                title="Blogs"
                backgroundImage="/images/who_we_are/about_us_banner.jpg"
                breadcrumb={[{ label: "HOME", href: "/" }, { label: "BLOGS" }]}
            />

            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Filter and Search Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                        <div className="flex flex-wrap justify-center md:justify-start gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => handleCategoryChange(cat)}
                                    className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${activeCategory === cat
                                            ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                                            : "bg-white text-slate-500 border border-slate-200 hover:border-blue-400 hover:text-blue-600 cursor-pointer"
                                        }`}>
                                    {cat.toUpperCase()}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full md:w-80">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="w-full bg-white border border-slate-200 rounded-full py-3 px-6 pr-12 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                            />
                            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        </div>
                    </div>

                    {/* Blog Content */}
                    {currentPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {currentPosts.map((post) => (
                                <BlogCard key={post.id} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 bg-slate-50/50 rounded-3xl border-2 border-dashed border-slate-200 text-center px-6">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                                <ArrowRight className="w-6 h-6 text-slate-300" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">
                                No More Blogs Found
                            </h3>
                            <p className="text-slate-500 text-sm max-w-xs">
                                We haven&apos;t published any articles in this category yet. Please
                                check back later for more updates!
                            </p>
                            <button
                                onClick={() => handleCategoryChange("All")}
                                className="mt-6 text-blue-600 text-sm font-bold hover:text-blue-700 transition-colors flex items-center gap-2">
                                View All Categories
                            </button>
                        </div>
                    )}

                    {/* Pagination - Only show if more than 1 page exists */}
                    {totalPages > 1 && (
                        <div className="mt-16 flex flex-wrap justify-center items-center gap-2">
                            {/* Previous Button */}
                            <button
                                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all border border-slate-200 ${currentPage === 1
                                        ? "text-slate-200 cursor-not-allowed"
                                        : "text-slate-400 hover:border-blue-500 hover:text-blue-600 cursor-pointer"
                                    }`}>
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {/* Dynamic Page Numbers */}
                            {(() => {
                                const windowSize = 5;
                                let startPage = Math.max(1, currentPage - 2);
                                const endPage = Math.min(totalPages, startPage + windowSize - 1);

                                if (endPage - startPage < windowSize - 1) {
                                    startPage = Math.max(1, endPage - windowSize + 1);
                                }

                                const pages = [];
                                for (let i = startPage; i <= endPage; i++) {
                                    pages.push(i);
                                }

                                return pages.map((num) => (
                                    <button
                                        key={num}
                                        onClick={() => setCurrentPage(num)}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${currentPage === num
                                                ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                                                : "bg-white border border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-600"
                                            }`}>
                                        {num}
                                    </button>
                                ));
                            })()}

                            {/* Next Button */}
                            <button
                                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                                disabled={currentPage === totalPages}
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all border border-slate-200 ${currentPage === totalPages
                                        ? "text-slate-200 cursor-not-allowed"
                                        : "text-slate-400 hover:border-blue-500 hover:text-blue-600 cursor-pointer"
                                    }`}>
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter / CTA Section */}
            {/* <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Stay Updated with Data Recovery Tips</h2>
          <p className="text-blue-100 mb-8 text-lg">Subscribe to our newsletter to receive the latest insights on data protection and recovery techniques.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-grow bg-white/10 border border-white/20 rounded-xl py-4 px-6 text-white placeholder:text-blue-200 focus:outline-none focus:bg-white/20 transition-all"
            />
            <button className="bg-white text-blue-600 font-black px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
              SUBSCRIBE NOW
            </button>
          </form>
        </div>
      </section> */}

        </main>
    );
}
