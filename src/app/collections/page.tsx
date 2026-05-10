"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";
import ProductCard from "@/components/ui/ProductCard";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "newest", label: "Newest" },
];

function CollectionsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const filterParam = searchParams.get("filter");

  const [activeCategory, setActiveCategory] = useState(categoryParam || "all");
  const [sortBy, setSortBy] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(500);
  const [showFilters, setShowFilters] = useState(false);

  const allCategories = [
    { name: "All", slug: "all" },
    { name: "Keyboards", slug: "keyboards" },
    { name: "Accessories", slug: "accessories" },
    { name: "Audio", slug: "audio" },
  ];

  const filteredProducts = useMemo(() => {
    let products = [...PRODUCTS];

    if (activeCategory !== "all") {
      products = products.filter((p) => p.category === activeCategory);
    }

    if (filterParam === "new") {
      products = products.filter((p) => p.isNew);
    } else if (filterParam === "bestseller") {
      products = products.filter((p) => p.isBestseller);
    }

    products = products.filter((p) => p.price <= maxPrice);

    switch (sortBy) {
      case "price-asc":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        products.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        products.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        products = products.filter((p) => p.isNew).concat(products.filter((p) => !p.isNew));
        break;
    }

    return products;
  }, [activeCategory, sortBy, maxPrice, filterParam]);

  const categoryLabel = allCategories.find((c) => c.slug === activeCategory)?.name || "All";

  return (
    <div className="w-full min-h-screen bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#6B7280] mb-8">
          <Link href="/" className="hover:text-[#0F0F0F] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#0F0F0F] font-medium">Collections</span>
          {activeCategory !== "all" && (
            <>
              <span>/</span>
              <span className="text-[#0F0F0F] font-medium capitalize">{categoryLabel}</span>
            </>
          )}
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-black text-[#0F0F0F] tracking-tight mb-3">
            {filterParam === "new" ? "New Arrivals" : filterParam === "bestseller" ? "Bestsellers" : `${categoryLabel} Collection`}
          </h1>
          <p className="text-[#6B7280]">{filteredProducts.length} products</p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {/* Category pills */}
          <div className="flex flex-wrap items-center gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.slug
                    ? "bg-[#0F0F0F] text-white"
                    : "bg-white border border-gray-200 text-[#6B7280] hover:border-gray-300"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-3">
            {/* Filter button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-[#6B7280] hover:border-gray-300 transition-colors"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-full pl-4 pr-9 py-2 text-sm font-medium text-[#6B7280] hover:border-gray-300 focus:outline-none focus:border-[#7C3AED] transition-colors cursor-pointer"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white rounded-2xl border border-gray-100 p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Filters</h3>
              <button onClick={() => setShowFilters(false)}>
                <X size={18} className="text-[#6B7280]" />
              </button>
            </div>
            <div>
              <label className="text-sm font-medium text-[#6B7280] block mb-2">
                Max Price: ${maxPrice}
              </label>
              <input
                type="range"
                min={0}
                max={500}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full max-w-xs accent-[#7C3AED]"
              />
              <div className="flex justify-between text-xs text-[#6B7280] max-w-xs mt-1">
                <span>$0</span>
                <span>$500</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-[#6B7280] text-lg">No products found.</p>
            <button
              onClick={() => { setActiveCategory("all"); setMaxPrice(500); }}
              className="mt-4 text-[#7C3AED] font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center"><p className="text-[#6B7280]">Loading...</p></div>}>
      <CollectionsContent />
    </Suspense>
  );
}
