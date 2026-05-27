import { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    Calendar,
    User,
    Clock,
    ChevronRight,
    Share2,
    Tag,
    MessageCircle,
} from "lucide-react";

// Sample blog data (keeping it consistent with the list page)
const blogPosts = [
    {
        id: 1,
        title: "How to Recover Data from a Failed Hard Drive",
        description:
            "Learn the professional steps and common causes behind hard drive failures and how data can be safely retrieved.",
        date: "May 10, 2024",
        author: "Admin",
        category: "Hard Drive",
        image: "/images/headers_img/desktop_laptop.jpg",
        slug: "recover-data-failed-hard-drive",
        readTime: "8 min read",
        content: `
      <p>Hard drive failure is one of the most common issues faced by computer users today. Whether it's a mechanical failure, electronic damage, or logical corruption, losing access to your data can be a stressful experience.</p>
      
      <h2>Common Causes of Hard Drive Failure</h2>
      <p>Before diving into the recovery process, it's important to understand why hard drives fail. The most common reasons include:</p>
      <ul>
        <li><strong>Mechanical Failure:</strong> The read/write heads or the motor that spins the platters can fail.</li>
        <li><strong>Electronic Damage:</strong> Power surges or faulty power supplies can damage the drive's controller board.</li>
        <li><strong>Logical Corruption:</strong> File system errors, accidental formatting, or virus attacks.</li>
        <li><strong>Physical Damage:</strong> Dropping the laptop or external drive.</li>
      </ul>

      <h2>The Professional Recovery Process</h2>
      <p>When you send your drive to a professional service like DSS, we follow a strict protocol to ensure the highest success rate:</p>
      <ol>
        <li><strong>Evaluation:</strong> We diagnose the exact cause of failure in our Class 100 Clean Room.</li>
        <li><strong>Cloning:</strong> We create a sector-by-sector image of your drive to work on a copy, preserving the original media.</li>
        <li><strong>Reconstruction:</strong> Our experts use advanced software and hardware tools to reconstruct the data from the clone.</li>
        <li><strong>Verification:</strong> We verify the integrity of the recovered files.</li>
      </ol>

      <blockquote>
        "Data recovery is not just about software; it's about understanding the physics of storage media."
      </blockquote>

      <p>If you suspect your hard drive is failing—for example, if you hear clicking or grinding noises—shut it down immediately. Continuing to power a failing drive can cause permanent data loss.</p>
    `,
    },
    {
        id: 2,
        title: "SSD vs HDD: Which is Easier to Recover?",
        description:
            "A detailed comparison between SSD and HDD architecture and how it affects the success rate of data recovery.",
        date: "April 28, 2024",
        author: "Technical Expert",
        category: "Comparison",
        image: "/images/headers_img/ssd_recovery.jpg",
        slug: "ssd-vs-hdd-recovery",
        readTime: "6 min read",
        content: `
      <p>As technology evolves, many users have switched from traditional Hard Disk Drives (HDD) to Solid State Drives (SSD). While SSDs are faster and more durable, they present unique challenges when it comes to data recovery.</p>
      
      <h2>Understanding the Architecture</h2>
      <p>HDDs store data on spinning magnetic platters. When a file is deleted, the data remains on the platter until overwritten. SSDs, however, use NAND flash memory and a feature called TRIM.</p>

      <h2>The TRIM Factor</h2>
      <p>When you delete a file on an SSD with TRIM enabled, the operating system tells the drive that the data blocks are no longer needed. The SSD's controller then actively clears those blocks to maintain performance. This makes recovering "deleted" files from an SSD significantly harder than from an HDD.</p>

      <h2>Success Rates</h2>
      <p>In cases of physical failure, HDDs often have a higher recovery success rate because parts can be swapped (like the heads or PCB). SSD failures often involve complex controller issues or encryption, which require specialized laboratory tools to bypass.</p>
    `,
    },
    {
        id: 3,
        title: "Common Signs of RAID Failure You Should Know",
        description:
            "RAID systems provide redundancy but can still fail. Learn the early warning signs to prevent catastrophic data loss.",
        date: "April 15, 2024",
        author: "Admin",
        category: "RAID Recovery",
        image: "/images/headers_img/raid_server.jpg",
        slug: "common-signs-raid-failure",
        readTime: "10 min read",
        content: `
      <p>RAID (Redundant Array of Independent Disks) systems are designed to provide data protection and performance. However, even the most robust RAID 5 or RAID 6 arrays can fail.</p>

      <h2>Early Warning Signs</h2>
      <ul>
        <li><strong>Slow Performance:</strong> If your server is taking longer than usual to access files.</li>
        <li><strong>Frequent Rebuilds:</strong> If the RAID controller keeps reporting a "degraded" state.</li>
        <li><strong>Strange Noises:</strong> Clicking or grinding from one or more drives in the array.</li>
        <li><strong>SMART Errors:</strong> Disk monitoring tools reporting pre-failure conditions.</li>
      </ul>

      <p>The biggest mistake in RAID management is ignoring a single drive failure. In a RAID 5 array, you can lose one drive without losing data. But if a second drive fails during the rebuild process, the entire array can be lost.</p>
    `,
    },
    {
        id: 4,
        title: "Protecting Your Business from Data Loss",
        description:
            "Implement a robust backup and disaster recovery plan to ensure your business remains operational despite hardware failures.",
        date: "March 22, 2024",
        author: "Business Consultant",
        category: "Data Security",
        image: "/images/headers_img/encrypted_data.jpg",
        slug: "protecting-business-data-loss",
        readTime: "7 min read",
        content: `
      <p>Data is the lifeblood of modern business. From customer records to financial data, losing access for even a few days can be catastrophic.</p>
      
      <h2>The 3-2-1 Backup Rule</h2>
      <p>Every business should follow the 3-2-1 rule for data protection:</p>
      <ol>
        <li>Keep <strong>3</strong> copies of your data (1 primary and 2 backups).</li>
        <li>Store backups on <strong>2</strong> different media types (e.g., local server and cloud).</li>
        <li>Keep <strong>1</strong> copy off-site (for protection against fire or theft).</li>
      </ol>

      <p>Beyond backups, having a professional data recovery partner on speed dial ensures that if your backups fail, you still have a way to retrieve your critical assets.</p>
    `,
    },
];

// Helper to get post by slug
export async function getPost(slug: string) {
    return blogPosts.find((p) => p.slug === slug);
}

// Required for 'output: export' with dynamic routes
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return {
            title: "Post Not Found | Data Storage Solutions",
        };
    }

    return {
        title: `${post.title} | Data Storage Solutions`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            images: [post.image],
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [post.image],
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    // Structured Data (JSON-LD) for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        image: post.image,
        author: {
            "@type": "Person",
            name: post.author,
        },
        publisher: {
            "@type": "Organization",
            name: "Data Storage Solutions",
            logo: {
                "@type": "ImageObject",
                url: "https://datastoragesolutions.in/images/data_recovery_logo.webp",
            },
        },
        datePublished: post.date,
        description: post.description,
    };

    const recentPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
    const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />


            <PageHeader
                title="Blog Details"
                backgroundImage={post.image}
                breadcrumb={[
                    { label: "HOME", href: "/" },
                    { label: "BLOGS", href: "/blogs" },
                    { label: post.category.toUpperCase() },
                ]}
            />

            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Main Content Area */}
                        <article className="lg:w-2/3">
                            {/* Post Meta */}
                            <div className="flex flex-wrap items-center gap-6 mb-8 text-slate-500 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                        {post.author[0]}
                                    </div>
                                    <span className="font-bold text-slate-900">
                                        {post.author}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-blue-500" />
                                    {post.date}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-blue-500" />
                                    {post.readTime}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Tag className="w-4 h-4 text-blue-500" />
                                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="text-center text-[2rem] md:text-[2.6rem] 2xl:text-[3.4rem] font-bold text-[#1a1a2e] leading-tight mb-14 2xl:mb-20 max-w-3xl 2xl:max-w-5xl mx-auto">
                                {post.title}
                            </h1>

                            {/* Featured Image */}
                            <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl shadow-slate-200 ring-1 ring-slate-100">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Content */}
                            <div
                                className="prose prose-slate prose-lg max-w-none font-open-sans
                prose-headings:font-montserrat prose-headings:font-black prose-headings:text-[#0f172a] prose-headings:tracking-tight
                prose-p:text-slate-600 prose-p:leading-[1.8] prose-p:text-[18px] 2xl:prose-p:text-[22px]
                prose-li:text-slate-600 prose-li:text-[18px] 2xl:prose-li:text-[22px]
                prose-strong:text-[#0f172a] prose-strong:font-bold
                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50/50 prose-blockquote:p-8 prose-blockquote:rounded-r-3xl prose-blockquote:italic prose-blockquote:text-slate-700
                prose-img:rounded-3xl prose-img:shadow-lg
                text-slate-600"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            {/* Share and Tags */}
                            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-slate-900 font-bold">
                                        Share this post:
                                    </span>
                                    <div className="flex gap-2">
                                        <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer">
                                            <Share2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium">
                                        #DataRecovery
                                    </span>
                                    <span className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium">
                                        #ITSecurity
                                    </span>
                                    <span className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium">
                                        #TechTips
                                    </span>
                                </div>
                            </div>

                            {/* Leave a Reply Form */}
                            <div className="mt-16 pt-12 border-t border-slate-100">
                                <h3 className="text-3xl font-bold text-slate-900 mb-2">Leave a Reply</h3>
                                <p className="text-slate-500 text-sm mb-10">Your email address will not be published. Required fields are marked *</p>
                                
                                <form className="space-y-6">
                                    <div className="space-y-2">
                                        <label htmlFor="comment" className="block text-xs font-black text-slate-600 uppercase tracking-wider">Comment *</label>
                                        <textarea 
                                            id="comment" 
                                            rows={8} 
                                            required
                                            className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900"
                                        ></textarea>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="block text-xs font-black text-slate-600 uppercase tracking-wider">Name *</label>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                required
                                                className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900" 
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-xs font-black text-slate-600 uppercase tracking-wider">Email *</label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                required
                                                className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900" 
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="website" className="block text-xs font-black text-slate-600 uppercase tracking-wider">Website</label>
                                        <input 
                                            type="url" 
                                            id="website" 
                                            className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900" 
                                        />
                                    </div>

                                    <div className="flex items-start gap-3 py-2">
                                        <input 
                                            type="checkbox" 
                                            id="save-info" 
                                            className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" 
                                        />
                                        <label htmlFor="save-info" className="text-sm text-slate-500 cursor-pointer select-none">
                                            Save my name, email, and website in this browser for the next time I comment.
                                        </label>
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="bg-[#004B9B] hover:bg-[#003d82] text-white font-black px-10 py-4 rounded-xl transition-all shadow-lg shadow-[0_8px_24px_rgba(0,75,155,0.3)] hover:shadow-[0_12px_32px_rgba(0,75,155,0.45)] hover:-translate-y-0.5 cursor-pointer"
                                    >
                                        POST COMMENT
                                    </button>
                                </form>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:w-1/3 space-y-12">
                            {/* Recent Posts */}
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                                    Recent Posts
                                </h3>
                                <div className="space-y-6">
                                    {recentPosts.map((rp) => (
                                        <Link
                                            key={rp.id}
                                            href={`/blogs/${rp.slug}`}
                                            className="group flex gap-4">
                                            <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden">
                                                <Image
                                                    src={rp.image}
                                                    alt={rp.title}
                                                    fill
                                                    className="object-cover transition-transform group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                                                    {rp.title}
                                                </h4>
                                                <span className="text-[11px] text-slate-400 mt-1 uppercase font-bold tracking-widest">
                                                    {rp.date}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                                    Categories
                                </h3>
                                <div className="flex flex-col gap-3">
                                    {categories.map((cat) => (
                                        <Link
                                            key={cat}
                                            href="/blogs"
                                            className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-500 hover:text-blue-600 transition-all group">
                                            <span className="text-sm font-bold text-slate-700 group-hover:text-blue-600">
                                                {cat}
                                            </span>
                                            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Widget */}
                            <div className="relative bg-blue-600 rounded-3xl p-8 overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
                                <div className="relative z-10 text-center">
                                    <h3 className="text-2xl font-black text-white mb-4">
                                        Lost Your Critical Data?
                                    </h3>
                                    <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                                        Don&apos;t panic. Our experts are here to help you 24/7. Get
                                        a free consultation today.
                                    </p>
                                    <Link
                                        href="/contacts"
                                        className="inline-block w-full bg-white text-blue-600 font-black py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20">
                                        CONTACT US NOW
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

        </main>
    );
}
