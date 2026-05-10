"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Download } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/lib/constants";
import ProductCard from "@/components/ui/ProductCard";

// ─── Reusable helpers ─────────────────────────────────────────────────────────

function CategoryCard({ category, index }: { category: typeof CATEGORIES[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <h3 className="text-white font-bold text-sm sm:text-base mb-0.5 leading-tight">{category.name}</h3>
          <p className="text-white/60 text-xs hidden sm:block">{category.description}</p>
          <span className="text-white/70 text-xs flex items-center gap-1 mt-1.5 group-hover:gap-2 transition-all duration-200">
            Shop <ArrowRight size={12} />
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
  description,
}: {
  eyebrow: string;
  title: string;
  href: string;
  linkLabel?: string;
  description?: string;
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
        {description && (
          <p className="text-[#6B7280] text-sm mt-2 max-w-md">{description}</p>
        )}
      </div>
      <Link
        href={href}
        className="hidden sm:flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#7C3AED] transition-colors flex-shrink-0 ml-8"
      >
        {linkLabel} <ArrowRight size={16} />
      </Link>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const keyboardProducts = PRODUCTS.filter((p) => p.category === "keyboards").slice(0, 4);
  const workspaceProducts = PRODUCTS.filter((p) => p.category === "workspace").slice(0, 4);
  const productivityProducts = PRODUCTS.filter((p) => p.category === "productivity").slice(0, 4);
  const creatorProducts = PRODUCTS.filter((p) => p.category === "creator-gear").slice(0, 4);
  const lifestyleProducts = PRODUCTS.filter((p) => p.category === "lifestyle").slice(0, 4);
  const digitalProducts = PRODUCTS.filter((p) => p.category === "digital");

  const newDrops = PRODUCTS.filter((p) => p.isNew).slice(0, 4);
  const editorsPicks = [
    PRODUCTS.find((p) => p.id === "3")!, // Keychron K3 Pro
    PRODUCTS.find((p) => p.id === "11")!, // Ergotron Monitor Arm
    PRODUCTS.find((p) => p.id === "21")!, // Blue Yeti X
    PRODUCTS.find((p) => p.id === "28")!, // Fellow Kettle
    PRODUCTS.find((p) => p.id === "10")!, // Sony headphones
    PRODUCTS.find((p) => p.id === "23")!, // MX Master 3S
    PRODUCTS.find((p) => p.id === "27")!, // Yield Mug
    PRODUCTS.find((p) => p.id === "32")!, // Topo mat
  ].filter(Boolean);

  const under100 = PRODUCTS.filter((p) => p.price < 100 && !p.isDigital).slice(0, 4);

  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16">
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold text-[#7C3AED] uppercase tracking-widest mb-4"
          >
            The Premium Workspace Ecosystem
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
            Curated tools for creators, developers, and deep work enthusiasts — from keyboards to candles.
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
        {/* Category Grid — 4 cols on lg, 2 on sm */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {CATEGORIES.map((category, i) => (
            <CategoryCard key={category.slug} category={category} index={i} />
          ))}
        </div>
      </section>

      {/* ── New Drops ─────────────────────────────────────────────────────── */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          eyebrow="Just Landed"
          title="New Drops"
          href="/collections?filter=new"
          description="The latest additions to the collection — fresh, curated, and ready to upgrade your space."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {newDrops.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ── Editorial Banner: Deep Work ───────────────────────────────────── */}
      <section className="w-full bg-[#0F0F0F] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#7C3AED] text-xs font-semibold uppercase tracking-widest mb-6">
                Built for Deep Work
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6">
                Tools that help
                <br />
                <span className="text-[#7C3AED]">you focus.</span>
              </h2>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-10">
                From the keyboard you type on to the kettle you brew with — every item shapes your environment. We curate the best tools for deep, distraction-free work.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/collections?category=productivity"
                  className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-6 py-3.5 rounded-2xl transition-colors duration-200 text-sm"
                >
                  Productivity Tools <ArrowRight size={16} />
                </Link>
                <Link
                  href="/collections?category=workspace"
                  className="inline-flex items-center gap-2 border border-[#2A2A2A] hover:border-[#7C3AED] text-[#9CA3AF] hover:text-white font-semibold px-6 py-3.5 rounded-2xl transition-colors duration-200 text-sm"
                >
                  Workspace Tech
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 gap-3"
            >
              {productivityProducts.slice(0, 4).map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group bg-[#1A1A1A] rounded-2xl p-4 hover:bg-[#222] transition-colors"
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-3 bg-[#111]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                      sizes="200px"
                      unoptimized
                    />
                  </div>
                  <p className="text-white text-xs font-semibold leading-snug line-clamp-2">{product.name}</p>
                  <p className="text-[#7C3AED] text-xs font-bold mt-1">${product.price}</p>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Editor's Picks ────────────────────────────────────────────────── */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          eyebrow="Curated Selection"
          title="Editor's Picks"
          href="/collections?filter=bestseller"
          description="Hand-selected by our team of workspace enthusiasts — the best of the best across every category."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {editorsPicks.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ── Workspace Tech ────────────────────────────────────────────────── */}
      <section className="w-full bg-[#F8F8F7] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Desk Tech"
            title="Workspace Essentials"
            href="/collections?category=workspace"
            description="Monitor arms, docks, lighting, and desk tech to build your ideal setup."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {workspaceProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Keyboards ─────────────────────────────────────────────────────── */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          eyebrow="Tactile Typing"
          title="Mechanical Keyboards"
          href="/collections?category=keyboards"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {keyboardProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ── Lifestyle Banners ─────────────────────────────────────────────── */}
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
              src="https://images.unsplash.com/photo-1608181831718-c9fdc9a86f14?w=800&q=80"
              alt="Lifestyle"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 to-transparent" />
            <div className="absolute left-6 sm:left-8 top-1/2 -translate-y-1/2">
              <p className="text-white/70 text-xs mb-1.5">Ambient & Lifestyle</p>
              <h3 className="text-white text-2xl sm:text-3xl font-black mb-4 leading-tight">
                Set the<br />mood.
              </h3>
              <Link
                href="/collections?category=lifestyle"
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
              src="https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=800&q=80"
              alt="Creator Gear"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 to-transparent" />
            <div className="absolute left-6 sm:left-8 top-1/2 -translate-y-1/2">
              <p className="text-white/70 text-xs mb-1.5">Creator Setups</p>
              <h3 className="text-white text-2xl sm:text-3xl font-black mb-4 leading-tight">
                Built for<br />creators.
              </h3>
              <Link
                href="/collections?category=creator-gear"
                className="inline-flex items-center gap-2 bg-white text-[#0F0F0F] text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Creator Gear <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Creator Gear ──────────────────────────────────────────────────── */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          eyebrow="For Developers, Designers & Founders"
          title="Creator Gear"
          href="/collections?category=creator-gear"
          description="Studio-grade microphones, webcams, stream decks, and mice for the creators who build things."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {creatorProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ── Under $100 ────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#F3F0FF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Budget-Friendly Picks"
            title="Under $100"
            href="/collections"
            description="Premium tools that won't break the bank — great entry points into the TRENDY STUDIO ecosystem."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {under100.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Lifestyle ─────────────────────────────────────────────────────── */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          eyebrow="Ambient & Aspirational"
          title="Lifestyle"
          href="/collections?category=lifestyle"
          description="Candles, ceramics, coffee, and the ambient objects that make your space feel alive."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {lifestyleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ── Digital Products ──────────────────────────────────────────────── */}
      <section className="w-full bg-[#0F0F0F] py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#7C3AED] text-xs font-semibold uppercase tracking-widest mb-4">
              Instant Access
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Digital Downloads
            </h2>
            <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">
              Notion templates, icon packs, wallpapers, and productivity systems — download instantly.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {digitalProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group block bg-[#1A1A1A] border border-[#222] hover:border-[#7C3AED]/50 rounded-2xl p-5 transition-all duration-200 hover:bg-[#1E1E1E]"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-[#111]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="300px"
                      unoptimized
                    />
                  </div>
                  {product.isNew && (
                    <span className="inline-block bg-[#7C3AED] text-white text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wider mb-2">
                      NEW
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="inline-block bg-white/10 text-white/80 text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wider mb-2">
                      BESTSELLER
                    </span>
                  )}
                  <h3 className="text-white font-semibold text-sm leading-snug mb-1 group-hover:text-[#A78BFA] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[#6B7280] text-xs leading-relaxed mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">${product.price}</span>
                    <span className="text-[#7C3AED] text-xs flex items-center gap-1 font-medium">
                      <Download size={12} /> Instant
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/collections?category=digital"
              className="inline-flex items-center gap-2 border border-[#2A2A2A] hover:border-[#7C3AED] text-[#9CA3AF] hover:text-white font-medium px-6 py-3 rounded-2xl transition-colors text-sm"
            >
              Browse all digital products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Brand Story ───────────────────────────────────────────────────── */}
      <section className="w-full bg-[#F3F0FF] py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Zap size={14} className="text-[#7C3AED]" />
              <p className="text-[#7C3AED] text-xs font-semibold uppercase tracking-widest">
                Our Philosophy
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F0F0F] tracking-tight leading-tight mb-8">
              Designed for creators,<br />
              thinkers, builders,<br />
              and deep work.
            </h2>
            <p className="text-[#6B7280] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              We believe the tools you use shape how you think and create. Every product in our collection is chosen because it&apos;s beautiful, functional, and built to last.
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

      {/* ── Newsletter ────────────────────────────────────────────────────── */}
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
            New drops, curated picks, workspace inspiration, and early access to digital downloads.
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
