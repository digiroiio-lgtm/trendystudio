"use client";

import { useState } from "react";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag, Heart, ChevronDown, ChevronUp, ArrowLeft, Check } from "lucide-react";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";
import ProductCard from "@/components/ui/ProductCard";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

function AccordionItem({ title, children }: AccordionItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-semibold text-[#0F0F0F]">{title}</span>
        {open ? <ChevronUp size={18} className="text-[#6B7280]" /> : <ChevronDown size={18} className="text-[#6B7280]" />}
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="pb-5 text-[#6B7280] text-sm leading-relaxed"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}

interface PageParams {
  slug: string;
}

export default function ProductPage({ params }: { params: Promise<PageParams> }) {
  const { slug } = use(params);
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const images = [product.image, product.hoverImage, product.image, product.hoverImage];
  const recommended = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#6B7280] mb-8">
          <Link href="/" className="hover:text-[#0F0F0F] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/collections" className="hover:text-[#0F0F0F] transition-colors">Collections</Link>
          <span>/</span>
          <span className="text-[#0F0F0F] font-medium">{product.name}</span>
        </nav>

        <Link href="/collections" className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#0F0F0F] transition-colors mb-8">
          <ArrowLeft size={16} /> Back to collections
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-[#F3F4F6] rounded-3xl overflow-hidden">
              <Image
                src={images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                unoptimized
              />
              {product.isNew && (
                <div className="absolute top-4 left-4 bg-[#7C3AED] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  NEW
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative aspect-square bg-[#F3F4F6] rounded-2xl overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === i ? "border-[#7C3AED]" : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="100px"
                    unoptimized
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info - Sticky */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest mb-2">
                {product.brand}
              </p>
              <h1 className="text-3xl font-black text-[#0F0F0F] mb-4 tracking-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-200"}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-[#6B7280]">({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-black text-[#0F0F0F]">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-[#6B7280] line-through">${product.originalPrice}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-[#0F0F0F]">
                    <Check size={14} className="text-[#7C3AED]" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-[#6B7280]">Quantity</span>
                <div className="flex items-center border border-gray-200 rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2.5 hover:bg-gray-50 transition-colors rounded-l-xl text-lg"
                  >
                    −
                  </button>
                  <span className="px-4 py-2.5 font-medium min-w-[40px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2.5 hover:bg-gray-50 transition-colors rounded-r-xl text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-sm transition-all duration-200 ${
                    added
                      ? "bg-green-500 text-white"
                      : "bg-[#7C3AED] hover:bg-[#6D28D9] text-white"
                  }`}
                >
                  {added ? (
                    <><Check size={18} /> Added!</>
                  ) : (
                    <><ShoppingBag size={18} /> Add to Cart — ${product.price * quantity}</>
                  )}
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-2xl border border-gray-200 hover:border-red-200 hover:bg-red-50 transition-colors">
                  <Heart size={18} className="text-[#6B7280] hover:text-red-500" />
                </button>
              </div>

              <p className="text-xs text-[#6B7280] text-center mt-4">
                Free shipping on orders over $100 · Easy 30-day returns
              </p>
            </div>

            {/* Accordion */}
            <div className="mt-6 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <AccordionItem title="Features & Specs">
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check size={14} className="text-[#7C3AED]" /> {f}
                    </li>
                  ))}
                </ul>
              </AccordionItem>
              <AccordionItem title="Shipping">
                <p>Free standard shipping on orders over $100. Express shipping available at checkout. We ship worldwide.</p>
              </AccordionItem>
              <AccordionItem title="Warranty">
                <p>All products come with a 1-year manufacturer warranty. Extended warranty available at checkout.</p>
              </AccordionItem>
              <AccordionItem title="Materials">
                <p>We source only premium materials. All keyboard frames are CNC aluminum or high-quality ABS/PC unless otherwise noted.</p>
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Recommended */}
        {recommended.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-black text-[#0F0F0F] mb-8">You might also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {recommended.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
