import { useState, useEffect } from "react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import roselieLogo from "@/imports/roselia_logo.jpg";
import prod1 from "@/imports/prod1.jpg";
import prod2 from "@/imports/prod2.jpg";

const ORDER_FORM_URL = "https://forms.google.com/your-order-form-url";

function RosePattern({ opacity = 0.06 }: { opacity?: number }) {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="rose-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <g stroke="#b07a72" strokeWidth="0.8" fill="none">
            <circle cx="60" cy="55" r="8" />
            <circle cx="60" cy="55" r="14" />
            <circle cx="60" cy="55" r="20" />
            <path d="M60 35 Q70 45 60 55 Q50 45 60 35Z" />
            <path d="M80 55 Q70 65 60 55 Q70 45 80 55Z" />
            <path d="M60 75 Q50 65 60 55 Q70 65 60 75Z" />
            <path d="M40 55 Q50 45 60 55 Q50 65 40 55Z" />
            <path d="M74 41 Q72 54 60 55 Q62 42 74 41Z" />
            <path d="M74 69 Q62 68 60 55 Q72 56 74 69Z" />
            <path d="M46 69 Q48 56 60 55 Q58 68 46 69Z" />
            <path d="M46 41 Q58 42 60 55 Q48 54 46 41Z" />
            <path d="M60 75 Q58 90 55 100" />
            <path d="M58 85 Q48 82 46 90 Q54 88 58 85Z" />
            <path d="M57 92 Q62 88 68 92 Q63 95 57 92Z" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#rose-pattern)" />
    </svg>
  );
}

function RosePatternB({ opacity = 0.05 }: { opacity?: number }) {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="rose-pattern-b" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
          <g stroke="#9b6b8a" strokeWidth="0.7" fill="none">
            <circle cx="80" cy="72" r="10" />
            <circle cx="80" cy="72" r="18" />
            <path d="M80 48 Q93 60 80 72 Q67 60 80 48Z" />
            <path d="M104 72 Q92 85 80 72 Q92 59 104 72Z" />
            <path d="M80 96 Q67 84 80 72 Q93 84 80 96Z" />
            <path d="M56 72 Q68 59 80 72 Q68 85 56 72Z" />
            <path d="M80 96 Q78 112 74 124" />
            <path d="M77 107 Q65 103 63 113 Q73 110 77 107Z" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#rose-pattern-b)" />
    </svg>
  );
}

function RoseGoldButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 px-8 py-3.5 rounded-sm relative overflow-hidden group transition-all duration-300 " +
    "font-['Jost'] tracking-widest uppercase text-sm text-white cursor-pointer " +
    className;

  const inner = (
    <>
      <span
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(135deg, #b07a72 0%, #c9908a 30%, #d4a59e 50%, #b07a72 70%, #8c5c55 100%)",
        }}
      />
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(135deg, #c9908a 0%, #e8c4be 35%, #c9908a 60%, #a06862 100%)",
        }}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {inner}
      </a>
    );
  }
  return <div className={base}>{inner}</div>;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Our Story", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "How to Order", href: "#how-to-order" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-full overflow-hidden border-2 flex items-center justify-center"
            style={{ borderColor: "#b07a72" }}
          >
            <ImageWithFallback
              src={roselieLogo}
              alt="Roselia Beauty Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className="font-['Playfair_Display'] text-xl tracking-wide hidden sm:block"
            style={{ color: "#2c2628" }}
          >
            Roselia
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-['Jost'] text-sm tracking-widest uppercase transition-colors duration-200 hover:opacity-100"
              style={{ color: "#2c2628", opacity: 0.7 }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#b07a72";
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#2c2628";
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7";
              }}
            >
              {l.label}
            </a>
          ))}
          <RoseGoldButton href={ORDER_FORM_URL} className="py-2.5 px-6 text-xs">
            Order Now
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </RoseGoldButton>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "#2c2628" }} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} style={{ background: "#2c2628" }} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "#2c2628" }} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t px-6 py-6 flex flex-col gap-5" style={{ borderColor: "rgba(176,122,114,0.18)" }}>
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-['Jost'] text-sm tracking-widest uppercase"
              style={{ color: "#2c2628" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <RoseGoldButton href={ORDER_FORM_URL} className="self-start py-2.5 px-6 text-xs">
            Order Now
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </RoseGoldButton>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(150deg, #fdf0f3 0%, #f8e6ec 40%, #f0dde8 100%)" }}
    >
      <RosePattern opacity={0.07} />
      <div
        className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #d4a59e 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #c9b8d8 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="relative z-10">
          <p
            className="font-['Jost'] text-xs tracking-[0.25em] uppercase mb-6"
            style={{ color: "#b07a72" }}
          >
            Women's Beauty & Care
          </p>
          <h1
            className="font-['Playfair_Display'] mb-6 leading-tight"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#2c2628", fontWeight: 500 }}
          >
            Discover Your
            <br />
            <em>Effortless</em> Beauty.
          </h1>
          <p
            className="font-['Jost'] text-lg mb-10 max-w-md"
            style={{ color: "#2c2628", opacity: 0.65, fontWeight: 300, lineHeight: 1.8 }}
          >
            Sophisticated tools for modern self-care, by Roselia.
          </p>
          <div className="flex flex-wrap gap-4">
            <RoseGoldButton href={ORDER_FORM_URL}>
              Order Now
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </RoseGoldButton>
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-8 py-3.5 font-['Jost'] text-sm tracking-widest uppercase border transition-all duration-200 hover:bg-rose-50"
              style={{ color: "#b07a72", borderColor: "#b07a72" }}
            >
              View Products
            </a>
          </div>

          <div className="mt-12 flex gap-8 flex-wrap">
            {[
              { label: "Premium Quality" },
              { label: "Fast Delivery" },
              { label: "Secure Ordering" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2">
                <span style={{ color: "#b07a72", fontSize: "0.55rem" }}>◆</span>
                <span className="font-['Jost'] text-xs tracking-widest uppercase" style={{ color: "#2c2628", opacity: 0.5 }}>
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex justify-center">
          <div className="relative w-full max-w-[460px]">
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/5" }}>
              <ImageWithFallback
                src={prod1}
                alt="Roselia beauty tools lifestyle shot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-8 w-40 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <ImageWithFallback
                src={prod2}
                alt="Roselia nail care device"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full border opacity-30 pointer-events-none"
              style={{ borderColor: "#b07a72", borderWidth: "1px" }}
            />
            <div
              className="absolute -top-8 -right-8 w-40 h-40 rounded-full border opacity-15 pointer-events-none"
              style={{ borderColor: "#b07a72", borderWidth: "1px" }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, transparent, #b07a72)" }} />
        <span className="font-['Jost'] text-xs tracking-widest uppercase" style={{ color: "#b07a72", opacity: 0.6 }}>Scroll</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden" style={{ background: "#ffffff" }}>
      <RosePatternB opacity={0.05} />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <p className="font-['Jost'] text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#b07a72" }}>
          Our Story
        </p>
        <h2
          className="font-['Playfair_Display'] mb-8"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#2c2628", fontWeight: 500 }}
        >
          Crafted for Confidence.
        </h2>
        <div className="w-16 h-px mx-auto mb-8" style={{ background: "#b07a72", opacity: 0.45 }} />
        <p
          className="font-['Jost'] text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: "#2c2628", opacity: 0.68, fontWeight: 300 }}
        >
          At Roselia, we believe beauty is about confidence and care. We design sophisticated grooming tools to bring the salon experience into the comfort of your home.
        </p>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { num: "2+", label: "Signature Products" },
            { num: "100%", label: "Salon-Grade Quality" },
            { num: "∞", label: "Happy Customers" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="font-['Playfair_Display'] mb-2"
                style={{ fontSize: "2.2rem", color: "#b07a72", fontWeight: 600 }}
              >
                {s.num}
              </div>
              <div className="font-['Jost'] text-xs tracking-widest uppercase" style={{ color: "#2c2628", opacity: 0.5 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductSpot({
  id,
  imageFirst,
  imageSrc,
  imageAlt,
  badge,
  headline,
  price,
  subheader,
  bullets,
  description,
  bg,
}: {
  id: string;
  imageFirst: boolean;
  imageSrc: string;
  imageAlt: string;
  badge?: string;
  headline: string;
  price: string;
  subheader?: string;
  bullets: string[];
  description?: string;
  bg: string;
}) {
  const image = (
    <div className="flex justify-center items-center">
      <div className="relative">
        <div
          className="rounded-2xl overflow-hidden shadow-xl"
          style={{ width: "min(380px, 100%)", aspectRatio: "3/4" }}
        >
          <ImageWithFallback
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        {badge && (
          <div
            className="absolute top-4 right-4 px-4 py-1.5 font-['Jost'] text-xs tracking-widest uppercase text-white rounded-sm"
            style={{ background: "#b07a72" }}
          >
            {badge}
          </div>
        )}
        <div
          className="absolute -z-10 rounded-full pointer-events-none"
          style={{
            width: "110%",
            height: "110%",
            top: "-5%",
            left: "-5%",
            background: "radial-gradient(circle, rgba(176,122,114,0.1) 0%, transparent 70%)",
          }}
        />
      </div>
    </div>
  );

  const text = (
    <div className="flex flex-col justify-center py-4">
      <p className="font-['Jost'] text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "#b07a72" }}>
        Product Spotlight
      </p>
      <h2
        className="font-['Playfair_Display'] mb-4 leading-tight"
        style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#2c2628", fontWeight: 500 }}
      >
        {headline}
      </h2>
      <div className="mb-5">
        <span
          className="font-['Playfair_Display']"
          style={{ fontSize: "2rem", color: "#b07a72", fontWeight: 600 }}
        >
          {price} {price !== "-" && "MAD"}
        </span>
      </div>
      {subheader && (
        <p className="font-['Jost'] text-base mb-5" style={{ color: "#2c2628", opacity: 0.63, fontWeight: 300, lineHeight: 1.75 }}>
          {subheader}
        </p>
      )}
      <ul className="space-y-3 mb-6">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <span style={{ color: "#b07a72", marginTop: "3px", fontSize: "0.5rem", flexShrink: 0 }}>◆</span>
            <span className="font-['Jost'] text-sm" style={{ color: "#2c2628", opacity: 0.72 }}>
              {b}
            </span>
          </li>
        ))}
      </ul>
      {description && (
        <p className="font-['Jost'] text-sm italic mb-8" style={{ color: "#2c2628", opacity: 0.5 }}>
          {description}
        </p>
      )}
      <RoseGoldButton href={ORDER_FORM_URL} className="self-start">
        Fill Order Form
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </RoseGoldButton>
    </div>
  );

  return (
    <section id={id} className="relative py-24 overflow-hidden" style={{ background: bg }}>
      <RosePattern opacity={0.045} />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {imageFirst ? <>{image}{text}</> : <>{text}{image}</>}
        </div>
      </div>
    </section>
  );
}

function HowToOrder() {
  const steps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      ),
      step: "01",
      title: "Choose Your Product",
      desc: "Browse our curated collection and select the Roselia tool that's right for you.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
      ),
      step: "02",
      title: "Fill Out the Google Form",
      desc: "Our secure Google Form captures your shipping details and order preferences.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
      ),
      step: "03",
      title: "We Confirm & Ship",
      desc: "Our team personally confirms your order and dispatches it with care.",
    },
  ];

  return (
    <section id="how-to-order" className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #f8eef2 0%, #f0e4ed 100%)" }}>
      <RosePatternB opacity={0.06} />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-['Jost'] text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#b07a72" }}>
            Simple Process
          </p>
          <h2
            className="font-['Playfair_Display'] mb-6"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#2c2628", fontWeight: 500 }}
          >
            How to Order
          </h2>
          <div className="w-16 h-px mx-auto mb-6" style={{ background: "#b07a72", opacity: 0.45 }} />
          <p
            className="font-['Jost'] text-sm max-w-lg mx-auto"
            style={{ color: "#2c2628", opacity: 0.6, fontWeight: 300, lineHeight: 1.85 }}
          >
            Since we prioritize a personalized experience, clicking 'Order' will securely redirect you to our Google Form to capture your shipping details.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-white rounded-2xl p-8 text-center shadow-sm border transition-all duration-300 hover:shadow-md"
              style={{ borderColor: "rgba(176,122,114,0.12)" }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "linear-gradient(135deg, #f8eef2, #f0dde6)" }}
              >
                <span style={{ color: "#b07a72" }}>{s.icon}</span>
              </div>
              <div
                className="font-['Playfair_Display'] text-3xl mb-2"
                style={{ color: "rgba(176,122,114,0.18)", fontWeight: 600 }}
              >
                {s.step}
              </div>
              <h3
                className="font-['Playfair_Display'] mb-3"
                style={{ fontSize: "1.1rem", color: "#2c2628", fontWeight: 500 }}
              >
                {s.title}
              </h3>
              <p className="font-['Jost'] text-sm" style={{ color: "#2c2628", opacity: 0.58, fontWeight: 300, lineHeight: 1.75 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <RoseGoldButton href={ORDER_FORM_URL}>
            Start Your Order
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </RoseGoldButton>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const details = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.63 5.08 2 2 0 0 1 3.6 2.87h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z"/></svg>
      ),
      label: "Phone / WhatsApp",
      value: "0771520279",
      href: "tel:0771520279",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      ),
      label: "Location",
      value: "Morocco",
      href: undefined,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      ),
      label: "Support Hours",
      value: "24/24h 7/7j",
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="relative py-28 overflow-hidden" style={{ background: "#ffffff" }}>
      <RosePattern opacity={0.05} />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-['Jost'] text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#b07a72" }}>
            Reach Out
          </p>
          <h2
            className="font-['Playfair_Display'] mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#2c2628", fontWeight: 500 }}
          >
            Get in Touch
          </h2>
          <div className="w-16 h-px mx-auto" style={{ background: "#b07a72", opacity: 0.45 }} />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {details.map((d) => (
            <div
              key={d.label}
              className="flex items-start gap-5 p-7 rounded-2xl border transition-all duration-200 hover:shadow-sm"
              style={{ borderColor: "rgba(176,122,114,0.15)", background: "#fdf8f9" }}
            >
              <div
                className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #f8eef2, #eddde7)" }}
              >
                <span style={{ color: "#b07a72" }}>{d.icon}</span>
              </div>
              <div>
                <p className="font-['Jost'] text-xs tracking-widest uppercase mb-1" style={{ color: "#b07a72", opacity: 0.8 }}>
                  {d.label}
                </p>
                {d.href ? (
                  <a
                    href={d.href}
                    className="font-['Jost'] text-sm transition-colors duration-200 hover:text-rose-500"
                    style={{ color: "#2c2628" }}
                  >
                    {d.value}
                  </a>
                ) : (
                  <p className="font-['Jost'] text-sm" style={{ color: "#2c2628", opacity: 0.72 }}>
                    {d.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#2c2628" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full overflow-hidden border"
              style={{ borderColor: "rgba(176,122,114,0.4)" }}
            >
              <ImageWithFallback
                src={roselieLogo}
                alt="Roselia"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-['Playfair_Display'] text-base" style={{ color: "rgba(255,255,255,0.75)" }}>
              Roselia.store
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/roselia.store__/"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200"
              style={{ borderColor: "rgba(176,122,114,0.3)", color: "rgba(255,255,255,0.55)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#d4a59e";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#b07a72";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(176,122,114,0.3)";
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="font-['Jost'] text-xs" style={{ color: "rgba(255,255,255,0.22)" }}>
              Orders processed securely via Google Forms.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="antialiased" style={{ fontFamily: "'Jost', sans-serif" }}>
      <Header />
      <main>
        <Hero />
        <About />
        <div id="products" />
        <ProductSpot
          id="product-facial"
          imageFirst={true}
          imageSrc={prod1}
          imageAlt="Roselia 2-in-1 Facial & Eyebrow Precision Hair Remover"
          badge="Bestseller"
          headline="2-in-1 Facial & Eyebrow Precision."
          price="-"
          bullets={[
            "Precision Brows & Nose Hair",
            "Flawless Facial Canvas",
            "Body Smoothness",
          ]}
          description="Safe, Fast, and Effective."
          bg="#ffffff"
        />
        <ProductSpot
          id="product-nail"
          imageFirst={false}
          imageSrc={prod2}
          imageAlt="Roselia Salon Nail Care Device"
          headline="Salon Nails, at Your Fingertips."
          price="-"
          subheader="Achieve a flawless, feminine look in your home. Say goodbye to rough skin."
          bullets={[
            "Professional Grind, Smooth & Buff",
            "Built-in LED Light",
            "Cordless & Rechargeable",
          ]}
          bg="linear-gradient(135deg, #f9eef5 0%, #f0e5f0 100%)"
        />
        <HowToOrder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
