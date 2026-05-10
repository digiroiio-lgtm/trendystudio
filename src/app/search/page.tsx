"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";
import ProductCard from "@/components/ui/ProductCard";

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const results = query.length > 1
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-black text-[#0F0F0F] mb-8 tracking-tight">Search</h1>

        {/* Search Input */}
        <div className="relative max-w-2xl mb-12">
          <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#6B7280]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search keyboards, accessories, audio..."
            autoFocus
            className="w-full py-4 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all shadow-sm"
            style={{ paddingLeft: "3.25rem", paddingRight: "1.5rem" }}
          />
        </div>

        {/* Results */}
        {query.length > 1 ? (
          results.length > 0 ? (
            <div>
              <p className="text-sm text-[#6B7280] mb-6">
                {results.length} result{results.length !== 1 ? "s" : ""} for &quot;{query}&quot;
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {results.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-5xl mb-4">🔍</p>
              <h2 className="text-2xl font-bold text-[#0F0F0F] mb-2">No results found</h2>
              <p className="text-[#6B7280]">
                We couldn&apos;t find anything for &quot;{query}&quot;. Try a different search term.
              </p>
            </div>
          )
        ) : (
          <div className="text-center py-16">
            <p className="text-[#6B7280] text-lg">Start typing to search our collection...</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {PRODUCTS.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center"><p className="text-[#6B7280]">Loading...</p></div>}>
      <SearchContent />
    </Suspense>
  );
}
