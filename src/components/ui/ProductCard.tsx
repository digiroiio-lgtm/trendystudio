"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingBag, Heart } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/constants";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col"
    >
      <Link href={`/products/${product.slug}`} className="flex flex-col h-full">
        {/* Image */}
        <div
          className="relative aspect-square w-full bg-[#F3F4F6] rounded-2xl overflow-hidden mb-4 flex-shrink-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={isHovered ? product.hoverImage : product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            unoptimized
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="bg-[#7C3AED] text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider">
                NEW
              </span>
            )}
            {product.isBestseller && (
              <span className="bg-[#0F0F0F] text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider">
                BESTSELLER
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-green-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider">
                SALE
              </span>
            )}
          </div>

          {/* Wishlist */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white"
          >
            <Heart
              size={14}
              className={isWishlisted ? "fill-red-500 text-red-500" : "text-[#6B7280]"}
            />
          </button>

          {/* Quick Add */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-3 left-3 right-3"
          >
            <button
              onClick={(e) => e.preventDefault()}
              className="w-full bg-[#0F0F0F]/90 backdrop-blur-sm hover:bg-[#7C3AED] text-white text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200"
            >
              <ShoppingBag size={13} />
              Quick Add
            </button>
          </motion.div>
        </div>

        {/* Info */}
        <div className="px-1 flex flex-col flex-1">
          <p className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-widest mb-1">
            {product.brand}
          </p>
          <h3 className="text-sm font-semibold text-[#0F0F0F] mb-1.5 group-hover:text-[#7C3AED] transition-colors duration-200 leading-snug">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-2 mt-auto">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={11}
                  className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-200 fill-gray-200"}
                />
              ))}
            </div>
            <span className="text-[11px] text-[#6B7280]">({product.reviewCount})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-[#0F0F0F]">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-[#6B7280] line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
