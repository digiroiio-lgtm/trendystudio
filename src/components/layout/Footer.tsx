import Link from "next/link";
import { Globe, Share2, Tv, Rss } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-0.5 mb-4">
              <span className="text-2xl font-black text-white tracking-tight">TRENDY</span>
              <span className="text-2xl font-black text-[#8B5CF6] tracking-tight">STUDIO</span>
            </Link>
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs">
              Premium workspace essentials curated for creators, developers, designers, and deep work enthusiasts.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-[#1A1A1A] hover:bg-[#7C3AED] flex items-center justify-center transition-colors duration-200">
                <Globe size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-xl bg-[#1A1A1A] hover:bg-[#7C3AED] flex items-center justify-center transition-colors duration-200">
                <Share2 size={16} />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-xl bg-[#1A1A1A] hover:bg-[#7C3AED] flex items-center justify-center transition-colors duration-200">
                <Tv size={16} />
              </a>
              <a href="#" aria-label="RSS" className="w-9 h-9 rounded-xl bg-[#1A1A1A] hover:bg-[#7C3AED] flex items-center justify-center transition-colors duration-200">
                <Rss size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#9CA3AF] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-12 border-t border-[#1F1F1F]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-base font-semibold mb-1">Stay in the loop</h3>
              <p className="text-sm text-[#9CA3AF]">New drops, curated picks, and workspace inspiration.</p>
            </div>
            <form className="flex gap-2 flex-1 max-w-sm">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#7C3AED] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-[#1F1F1F] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#6B7280]">
            © {new Date().getFullYear()} TRENDY STUDIO. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-[#6B7280] hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-sm text-[#6B7280] hover:text-white transition-colors">Terms</Link>
            <Link href="/cookies" className="text-sm text-[#6B7280] hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
