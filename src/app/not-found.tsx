import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-8xl font-black text-[#0F0F0F] mb-4">404</h1>
        <p className="text-xl font-semibold text-[#0F0F0F] mb-2">Page not found</p>
        <p className="text-[#6B7280] mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-6 py-3 rounded-2xl transition-colors"
        >
          Back to Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
