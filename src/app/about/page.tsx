import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const values = [
  {
    title: "Curated Quality",
    description: "Every product is hand-selected by our team of workspace enthusiasts. If it doesn't meet our standards, it doesn't make the cut.",
  },
  {
    title: "Creator-First",
    description: "We build for the people who build. Developers, designers, writers, and makers — this is your store.",
  },
  {
    title: "Minimal Aesthetic",
    description: "Clean lines, thoughtful design, purposeful function. We believe less is more when it comes to workspace tools.",
  },
  {
    title: "Built to Last",
    description: "We favor quality over quantity. The tools in our collection are built to serve you for years, not months.",
  },
];

const team = [
  { name: "Alex Chen", role: "Founder & Creative Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Mia Torres", role: "Head of Product", image: "https://images.unsplash.com/photo-1494790108755-2616b25e3c8d?w=400&q=80" },
  { name: "James Park", role: "Brand & Community", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
];

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-[#FAFAFA]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold text-[#7C3AED] uppercase tracking-widest mb-4">Our Story</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0F0F0F] tracking-tight leading-tight mb-8">
            Built for the
            <br />
            <span className="text-[#7C3AED]">way you work.</span>
          </h1>
          <p className="text-[#6B7280] text-xl leading-relaxed mb-8">
            TRENDY STUDIO started as a personal quest to find the perfect workspace tools. We were tired of sifting through hundreds of mediocre products to find the few truly exceptional ones.
          </p>
          <p className="text-[#6B7280] text-xl leading-relaxed">
            So we did the work for you. Every keyboard, every accessory, every piece of audio gear in our store has been tested, used, and genuinely loved by our team.
          </p>
        </div>
      </section>

      {/* Image Banner */}
      <section className="relative h-96 sm:h-[500px] overflow-hidden mb-20">
        <Image
          src="https://images.unsplash.com/photo-1593642632632-9c8dfccbcbb7?w=1600&q=80"
          alt="Workspace"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-4xl sm:text-6xl font-black tracking-tight text-center">
            Your space.<br />Your rules.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-[#7C3AED] uppercase tracking-widest mb-4">What We Stand For</p>
          <h2 className="text-4xl font-black text-[#0F0F0F] tracking-tight">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#7C3AED]/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 bg-[#F3F0FF] rounded-2xl flex items-center justify-center mb-4">
                <span className="text-[#7C3AED] font-black text-lg">{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-[#0F0F0F] mb-3">{value.title}</h3>
              <p className="text-[#6B7280] leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#F3F0FF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-[#7C3AED] uppercase tracking-widest mb-4">The People</p>
            <h2 className="text-4xl font-black text-[#0F0F0F] tracking-tight">Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="font-bold text-[#0F0F0F]">{member.name}</h3>
                <p className="text-sm text-[#6B7280]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl font-black text-[#0F0F0F] mb-4">Ready to upgrade?</h2>
        <p className="text-[#6B7280] mb-8 max-w-md mx-auto">Explore our curated collection of workspace essentials.</p>
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-8 py-4 rounded-2xl transition-colors duration-200"
        >
          Shop Now <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
