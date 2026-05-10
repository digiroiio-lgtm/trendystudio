"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";
import ProductCard from "@/components/ui/ProductCard";

export default function WishlistPage() {
  const [wishlist] = useState(PRODUCTS.slice(0, 4));

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-black text-[#0F0F0F] tracking-tight mb-1">Wishlist</h1>
            <p className="text-[#6B7280]">{wishlist.length} saved items</p>
          </div>
          <Link
            href="/collections"
            className="flex items-center gap-2 text-sm font-medium text-[#7C3AED] hover:gap-3 transition-all"
          >
            Browse more <ArrowRight size={16} />
          </Link>
        </div>

        {wishlist.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="w-20 h-20 bg-[#F3F0FF] rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={32} className="text-[#7C3AED]" />
            </div>
            <h2 className="text-2xl font-bold text-[#0F0F0F] mb-2">Your wishlist is empty</h2>
            <p className="text-[#6B7280] mb-8">Save items you love to find them later.</p>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-6 py-3 rounded-2xl transition-colors"
            >
              Browse Collections <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
