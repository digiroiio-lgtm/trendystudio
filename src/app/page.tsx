"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/lib/constants";
import ProductCard from "@/components/ui/ProductCard";

function CategoryCard({ category, index }: { category: typeof CATEGORIES[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
    >
      <Link
        href={`/collections?category=${category.slug}`}
        className="group block relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100"
      >
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <h3 className="text-white font-bold text-base sm:text-xl mb-1 leading-tight">{category.name}</h3>
          <span className="text-white/70 text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
            Shop now <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  href,
  linkLabel = "View all",
}: {
  eyebrow: string;
  title: string;
  href: string;
  linkLabel?: string;
}) {
  return (
    <div className="flex items-end justify-between mb-10">
      <div>
        <p className="text-xs font-semibold text-[#7C3AED] uppercase tracking-widest mb-2">
          {eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F0F0F]">
          {title}
        </h2>
      </div>
      <Link
        href={href}
        className="hidden sm:flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#7C3AED] transition-colors"
      >
        {linkLabel} <ArrowRight size={16} />
      </Link>
    </div>
  );
}

export default function HomePage() {
  const keyboardProducts = PRODUCTS.filter((p) => p.category === "keyboards");
  const accessoryProducts = PRODUCTS.filter((p) => p.category === "accessories");
  const audioProducts = PRODUCTS.filter((p) => p.category === "audio");

  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* Hero — Category Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16">
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold text-[#7C3AED] uppercase tracking-widest mb-4"
          >
            Premium Workspace Essentials
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0F0F0F] leading-[1.05] mb-5"
          >
            Your workspace,
            <br />
            <span className="text-[#7C3AED]">elevated.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#6B7280] text-lg sm:text-xl max-w-xl leading-relaxed"
          >
            Curated tools for creators, developers, and deep work enthusiasts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center gap-4 mt-8"
          >
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-6 py-3.5 rounded-2xl transition-colors duration-200 text-sm"
            >
              Shop All <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#0F0F0F] font-medium text-sm transition-colors"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {CATEGORIES.map((category, i) => (
            <CategoryCard key={category.slug} category={category} index={i} />
          ))}
        </div>
      </section>

      {/* Featured Keyboards */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          eyebrow="Featured Collection"
          title="Mechanical Keyboards"
          href="/collections?category=keyboards"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {keyboardProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Editorial Banner */}
      <section className="w-full bg-[#0F0F0F] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-[#7C3AED] text-xs font-semibold uppercase tracking-widest mb-6">
              Upgrade Your Workspace
            </p>
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] mb-8">
              Work better.
              <br />
              <span className="text-[#7C3AED]">Feel better.</span>
            </h2>
            <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Every item in our collection is selected for its quality, design, and ability to elevate your daily workflow.
            </p>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-8 py-4 rounded-2xl transition-colors duration-200"
            >
              Shop All Collections <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Desk Accessories */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          eyebrow="Desk Essentials"
          title="Workspace Accessories"
          href="/collections?category=accessories"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {accessoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Lifestyle Banners */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-gray-100"
          >
            <Image
              src="https://images.unsplash.com/photo-1593642632632-9c8dfccbcbb7?w=800&q=80"
              alt="Desk Setup"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute left-6 sm:left-8 top-1/2 -translate-y-1/2">
              <p className="text-white/70 text-sm mb-1">Ceramics & Lifestyle</p>
              <h3 className="text-white text-2xl sm:text-3xl font-black mb-4 leading-tight">
                The Details<br />Matter
              </h3>
              <Link
                href="/collections?category=ceramics"
                className="inline-flex items-center gap-2 bg-white text-[#0F0F0F] text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Explore <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-gray-100"
          >
            <Image
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
              alt="Audio"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute left-6 sm:left-8 top-1/2 -translate-y-1/2">
              <p className="text-white/70 text-sm mb-1">Premium Audio</p>
              <h3 className="text-white text-2xl sm:text-3xl font-black mb-4 leading-tight">
                Sound for<br />Deep Work
              </h3>
              <Link
                href="/collections?category=audio"
                className="inline-flex items-center gap-2 bg-white text-[#0F0F0F] text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Listen <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audio Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          eyebrow="Sound Design"
          title="Audio"
          href="/collections?category=audio"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {audioProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="w-full bg-[#F3F0FF] py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#7C3AED] text-xs font-semibold uppercase tracking-widest mb-6">
              Our Philosophy
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F0F0F] tracking-tight leading-tight mb-8">
              Designed for creators,<br />
              thinkers, builders,<br />
              and deep work.
            </h2>
            <p className="text-[#6B7280] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              We believe that the tools you use shape how you think and create. Every product in our collection is chosen because it&apos;s beautiful, functional, and built to last.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#7C3AED] font-semibold hover:gap-3 transition-all duration-200"
            >
              Our story <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-10 sm:p-14 text-center shadow-sm border border-gray-100"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F0F0F] mb-3">
            Stay in the loop
          </h2>
          <p className="text-[#6B7280] mb-8 max-w-md mx-auto leading-relaxed">
            New drops, curated picks, workspace inspiration, and early access to limited editions.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all"
            />
            <button
              type="submit"
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-6 py-3.5 rounded-2xl transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[#9CA3AF] text-xs mt-4">No spam. Unsubscribe anytime.</p>
        </motion.div>
      </section>
    </div>
  );
}
