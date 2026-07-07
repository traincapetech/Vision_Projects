import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Menu, X, ArrowRight, Phone, Mail, MapPin,
  Factory, Building2, Microscope, Heart, Shield, Award,
  Users, CheckCircle, FlaskConical, Zap, ArrowUpRight,
  HardHat, ChevronRight, Star
} from "lucide-react";

const DISPLAY = "'Barlow Condensed', sans-serif";
const MONO = "'JetBrains Mono', monospace";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Factory,
    title: "Industrial Engineering",
    description: "Process plants, utilities, and manufacturing facilities engineered to exacting standards with full lifecycle support.",
    tags: ["Process Design", "Plant Layout", "Utility Systems"],
  },
  {
    icon: FlaskConical,
    title: "Pharmaceutical Engineering",
    description: "GMP-compliant facilities for API manufacturing, formulation plants, and biotech operations with regulatory expertise.",
    tags: ["GMP Design", "Clean Rooms", "Validation"],
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description: "Retail complexes, office towers, and mixed-use developments built for lasting performance and LEED certification.",
    tags: ["Structural", "MEP Systems", "LEED"],
  },
  {
    icon: Microscope,
    title: "Laboratory Engineering",
    description: "Research, analytical, and testing laboratories with precision environmental controls and BSL compliance.",
    tags: ["BSL Compliance", "HVAC", "Fume Hoods"],
  },
  {
    icon: Heart,
    title: "Healthcare Infrastructure",
    description: "Hospitals, clinics, and diagnostic centers designed for patient safety, NABH standards, and operational efficiency.",
    tags: ["NABH Standards", "Infection Control", "Medical Gas"],
  },
  {
    icon: Zap,
    title: "Infrastructure & Civil",
    description: "Water treatment, roads, institutional projects, and urban utilities across India with end-to-end execution.",
    tags: ["Structural", "Water Treatment", "Roads"],
  },
];

const industries = [
  { name: "Pharmaceuticals & Biotech", image: "1532187863486-abf9dbad1b69", icon: FlaskConical, count: "80+ projects" },
  { name: "Industrial Manufacturing", image: "1504307651254-35680f356dfd", icon: Factory, count: "120+ projects" },
  { name: "Commercial & Retail", image: "1486325212027-8081e485255e", icon: Building2, count: "95+ projects" },
  { name: "Healthcare & Hospitals", image: "1551190822-a9333d879b1f", icon: Heart, count: "60+ projects" },
  { name: "Research Laboratories", image: "1579154204601-01588f351e67", icon: Microscope, count: "70+ projects" },
  { name: "Infrastructure & Utilities", image: "1504307651254-35680f356dfd", icon: Zap, count: "85+ projects" },
];

const projects = [
  {
    title: "Sunrise API Manufacturing Plant",
    category: "Pharmaceutical",
    location: "Hyderabad, Telangana",
    area: "12,400 m²",
    year: "2023",
    image: "1532187863486-abf9dbad1b69",
    description: "GMP-compliant API facility with multi-product synthesis, solvent recovery, and effluent treatment.",
  },
  {
    title: "Nexus Commercial Complex",
    category: "Commercial",
    location: "Mumbai, Maharashtra",
    area: "45,000 m²",
    year: "2022",
    image: "1486325212027-8081e485255e",
    description: "Premium mixed-use development with integrated MEP, smart building systems, and LEED Gold certification.",
  },
  {
    title: "BioTech Research Campus",
    category: "Laboratory",
    location: "Pune, Maharashtra",
    area: "8,200 m²",
    year: "2023",
    image: "1581594549595-35f6edc7b762",
    description: "BSL-2 research campus with precision-controlled environments, specialized exhaust, and central utilities.",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 22, suffix: "+", label: "Years of Experience" },
  { value: 150, suffix: "+", label: "Satisfied Clients" },
  { value: 6, suffix: "", label: "Industry Sectors" },
];

const reasons = [
  "End-to-end engineering from concept to commissioning",
  "In-house multidisciplinary teams: Civil, Structural, MEP, Process",
  "Proven GMP and regulatory compliance expertise",
  "Transparent project management with digital reporting",
  "ISO 9001:2015 certified quality management system",
  "25+ senior engineers with sector-specific domain expertise",
];

const testimonials = [
  {
    quote: "Vision Projects delivered our pharmaceutical facility on time and within budget, with zero compliance issues during FDA inspection. Their GMP expertise is unmatched.",
    author: "Rajesh Mehta",
    title: "VP Operations, Sunrise Pharmaceuticals",
    rating: 5,
  },
  {
    quote: "The level of technical detail and site management discipline from the Vision Projects team gave us complete confidence throughout the project lifecycle.",
    author: "Ananya Krishnan",
    title: "Director of Projects, BioTech India Ltd.",
    rating: 5,
  },
  {
    quote: "From pre-feasibility to commissioning, their integrated engineering approach saved us significant time and cost on our greenfield manufacturing plant.",
    author: "Suresh Nair",
    title: "CEO, Precision Industries Pvt. Ltd.",
    rating: 5,
  },
];

function useCounter(target: number, isInView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);
  return count;
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCounter(value, inView);
  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-black text-primary mb-1" style={{ fontFamily: DISPLAY }}>
        {count}{suffix}
      </div>
      <div className="text-sm font-medium tracking-widest uppercase text-muted-foreground" style={{ fontFamily: MONO }}>
        {label}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px w-8 bg-primary" />
      <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary" style={{ fontFamily: MONO }}>
        {children}
      </span>
    </div>
  );
}

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary flex items-center justify-center">
            <HardHat size={18} className="text-white" />
          </div>
          <div>
            <div className="text-sm font-black tracking-[0.12em] uppercase text-foreground leading-none" style={{ fontFamily: DISPLAY }}>
              Vision Projects
            </div>
            <div className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground leading-none mt-0.5" style={{ fontFamily: MONO }}>
              Engineering Services
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+919999999999" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Phone size={14} />
            <span style={{ fontFamily: MONO }}>+91 99999 99999</span>
          </a>
          <button
            onClick={() => scrollTo("#contact")}
            className="bg-primary text-primary-foreground text-sm font-semibold px-5 py-2 hover:bg-amber-600 transition-colors tracking-wide cursor-pointer"
          >
            Get a Quote
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-left text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="bg-primary text-primary-foreground text-sm font-semibold px-5 py-3 text-center hover:bg-amber-600 transition-colors"
          >
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0
       bg-[#060A11]
       "
       >
        <img
          src="https://cdn.mos.cms.futurecdn.net/HFUAjfbamNhbM8dsNSQW3D-1024-80.jpg.webp"
          alt="Industrial engineering facility"
          className="w-full h-full object-cover opacity-30"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#060A11] via-[#060A11]/80 to-transparent" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#060A11] via-transparent to-transparent" /> */}
      </div>

      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px)`
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px w-8 bg-primary" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary" style={{ fontFamily: MONO }}>
            Engineering Excellence Since 2002
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="sm:text-7xl lg:text-8xl xl:text-[110px] font-black uppercase text-foreground leading-none tracking-tight max-w-4xl"
          style={{ fontFamily: DISPLAY }}
        >
          Precision
          <br />
          <span className="text-primary">Engineering</span>
          <br />
          For Complex
          <br />
          Challenges
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed"
        >
          Vision Projects delivers end-to-end engineering solutions across pharmaceutical, industrial, commercial, laboratory, healthcare, and infrastructure sectors — from concept through commissioning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="flex items-center gap-3 bg-primary text-primary-foreground font-semibold px-8 py-4 hover:bg-amber-600 transition-colors text-sm tracking-wide group cursor-pointer"
          >
            Start a Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("#projects")}
            className="flex items-center gap-3 border border-border text-foreground font-medium px-8 py-4 hover:border-primary hover:text-primary transition-colors text-sm tracking-wide cursor-pointer"
          >
            View Our Work
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 flex flex-wrap gap-8"
        >
          {["ISO 9001:2015 Certified", "GMP Compliant", "NABH Approved"].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-xs text-muted-foreground" style={{ fontFamily: MONO }}>
              <CheckCircle size={12} className="text-primary" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x divide-border">
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <FadeUp>
          <SectionLabel>Our Services</SectionLabel>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <h2
              className="text-5xl lg:text-6xl font-black uppercase text-gray-900 leading-none max-w-lg"
              style={{ fontFamily: DISPLAY }}
            >
              Engineering Services
              <br />
              Across Sectors
            </h2>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed lg:text-right">
              Multidisciplinary in-house capability across Civil, Structural, MEP, Process, and Project Management.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeUp key={service.title} delay={i * 0.07}>
                <div
                  className="bg-white p-8 h-full cursor-default group transition-all duration-300 hover:bg-gray-950"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-10 h-10 flex items-center justify-center transition-colors duration-300 ${hovered === i ? "bg-primary" : "bg-gray-100"}`}>
                      <Icon size={18} className={hovered === i ? "text-white" : "text-gray-600"} />
                    </div>
                    <span className="text-xs text-gray-300 font-medium" style={{ fontFamily: MONO }}>
                      0{i + 1}
                    </span>
                  </div>
                  <h3
                    className={`text-2xl font-bold uppercase leading-tight mb-3 transition-colors duration-300 ${hovered === i ? "text-white" : "text-gray-900"}`}
                    style={{ fontFamily: DISPLAY }}
                  >
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-5 transition-colors duration-300 ${hovered === i ? "text-gray-400" : "text-gray-500"}`}>
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-medium px-2 py-1 tracking-wider uppercase transition-colors duration-300 ${hovered === i ? "bg-white/10 text-gray-300" : "bg-gray-100 text-gray-500"}`}
                        style={{ fontFamily: MONO }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section id="industries" className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <FadeUp>
          <SectionLabel>Industries We Serve</SectionLabel>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <h2
              className="text-5xl lg:text-6xl font-black uppercase text-foreground leading-none max-w-lg"
              style={{ fontFamily: DISPLAY }}
            >
              Six Sectors.
              <br />
              One Standard
              <br />
              <span className="text-primary">Of Excellence.</span>
            </h2>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Deep domain expertise built over two decades of project execution across India's most demanding industries.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <FadeUp key={industry.name} delay={i * 0.07}>
                <div className="relative overflow-hidden group cursor-default aspect-[4/3] bg-card">
                  <img
                    src={`https://images.unsplash.com/photo-${industry.image}?w=600&h=450&fit=crop&auto=format`}
                    alt={industry.name}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060A11] via-[#060A11]/40 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 bg-primary/20 border border-primary/30 flex items-center justify-center">
                        <Icon size={16} className="text-primary" />
                      </div>
                      <ArrowUpRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold uppercase text-foreground leading-tight mb-1"
                        style={{ fontFamily: DISPLAY }}
                      >
                        {industry.name}
                      </h3>
                      <span className="text-xs text-primary" style={{ fontFamily: MONO }}>
                        {industry.count}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <FadeUp>
          <SectionLabel>Featured Projects</SectionLabel>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <h2
              className="text-5xl lg:text-6xl font-black uppercase text-gray-900 leading-none"
              style={{ fontFamily: DISPLAY }}
            >
              Our Work
              <br />
              Speaks for Itself
            </h2>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors self-start lg:self-auto">
              View All Projects <ChevronRight size={14} />
            </button>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeUp key={project.title} delay={i * 0.1}>
              <div className="group cursor-default flex flex-col h-full">
                <div className="relative overflow-hidden aspect-[16/10] bg-gray-100">
                  <img
                    src={`https://images.unsplash.com/photo-${project.image}?w=600&h=375&fit=crop&auto=format`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="bg-gray-900 text-white text-[10px] font-medium px-2 py-1 tracking-wider uppercase"
                      style={{ fontFamily: MONO }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="flex-1 border border-gray-200 border-t-0 p-6 flex flex-col">
                  <h3
                    className="text-2xl font-bold uppercase text-gray-900 leading-tight mb-3 group-hover:text-amber-600 transition-colors"
                    style={{ fontFamily: DISPLAY }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-xs text-gray-400 flex flex-col gap-1" style={{ fontFamily: MONO }}>
                      <span className="flex items-center gap-1.5"><MapPin size={10} /> {project.location}</span>
                      <span>{project.area} · {project.year}</span>
                    </div>
                    <ArrowUpRight size={16} className="text-gray-300 group-hover:text-amber-500 transition-colors" />
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section id="about" className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeUp>
            <SectionLabel>Why Vision Projects</SectionLabel>
            <h2
              className="text-5xl lg:text-6xl font-black uppercase text-foreground leading-none mb-6"
              style={{ fontFamily: DISPLAY }}
            >
              Trusted by India's
              <br />
              Leading Industries
              <br />
              <span className="text-primary">For 22 Years</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md">
              We combine deep technical expertise with rigorous project discipline to deliver complex engineering projects on schedule, within budget, and to the highest compliance standards.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Award size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">ISO 9001:2015</div>
                  <div className="text-xs text-muted-foreground">Quality Certified</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Shield size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">GMP Compliant</div>
                  <div className="text-xs text-muted-foreground">Pharma Certified</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Users size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">250+ Team</div>
                  <div className="text-xs text-muted-foreground">Engineering Experts</div>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="bg-card border border-border p-8">
              <div className="text-sm font-medium text-muted-foreground mb-6 tracking-wider uppercase" style={{ fontFamily: MONO }}>
                Our Advantage
              </div>
              <div className="flex flex-col gap-0">
                {reasons.map((reason, i) => (
                  <div
                    key={reason}
                    className="flex items-start gap-4 py-4 border-b border-border last:border-b-0"
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-primary/15 flex items-center justify-center mt-0.5">
                      <CheckCircle size={12} className="text-primary" />
                    </div>
                    <span className="text-sm text-foreground leading-snug">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <FadeUp>
          <SectionLabel>Client Testimonials</SectionLabel>
          <h2
            className="text-5xl lg:text-6xl font-black uppercase text-gray-900 leading-none mb-16"
            style={{ fontFamily: DISPLAY }}
          >
            What Our Clients Say
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeUp key={t.author} delay={i * 0.1}>
              <div className="border border-gray-200 p-8 h-full flex flex-col group hover:border-amber-400 transition-colors duration-300">
                <div className="flex gap-0.5 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-sm text-gray-600 leading-relaxed flex-1 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t border-gray-100 pt-5">
                  <div className="text-sm font-semibold text-gray-900">{t.author}</div>
                  <div className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: MONO }}>
                    {t.title}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <div className="text-xs font-medium tracking-[0.2em] uppercase text-amber-200 mb-4" style={{ fontFamily: MONO }}>
              Ready to Build?
            </div>
            <h2
              className="text-4xl lg:text-5xl font-black uppercase text-white leading-none"
              style={{ fontFamily: DISPLAY }}
            >
              Let's Engineer
              <br />
              Your Next Project
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-3 bg-white text-gray-900 font-semibold px-8 py-4 hover:bg-gray-100 transition-colors text-sm tracking-wide group cursor-pointer"
            >
              Get in Touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("#projects")}
              className="flex items-center gap-3 border-2 border-white/30 text-white font-medium px-8 py-4 hover:border-white/60 transition-colors text-sm tracking-wide cursor-pointer"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", company: "", service: "", message: "" });
    }, 2000);
  };

  const inputClass = "w-full bg-secondary border border-border text-foreground text-sm px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <section id="contact" className="bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeUp>
            <SectionLabel>Get in Touch</SectionLabel>
            <h2
              className="text-5xl lg:text-6xl font-black uppercase text-foreground leading-none mb-6"
              style={{ fontFamily: DISPLAY }}
            >
              Start Your
              <br />
              Engineering
              <br />
              <span className="text-primary">Journey Here</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-sm">
              Tell us about your project and our team will get back to you within 24 hours with an initial assessment.
            </p>
            <div className="flex flex-col gap-5">
              {[
                { icon: Phone, label: "+91 99999 99999", sub: "Mon–Sat, 9am–6pm IST" },
                { icon: Mail, label: "enquiries@visionprojects.in", sub: "We reply within 24 hours" },
                { icon: MapPin, label: "Mumbai | Hyderabad | Pune", sub: "Pan-India Project Execution" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={14} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5" style={{ fontFamily: MONO }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            {submitted ? (
              <div className="bg-secondary border border-border p-10 flex flex-col items-center justify-center text-center h-full min-h-80">
                <div className="w-12 h-12 bg-primary/15 border border-primary/30 flex items-center justify-center mb-5">
                  <CheckCircle size={22} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold uppercase text-foreground mb-2" style={{ fontFamily: DISPLAY }}>
                  Enquiry Received
                </h3>
                <p className="text-sm text-muted-foreground">
                  Thank you for reaching out. Our engineering team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-secondary border border-border p-8 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    className={inputClass}
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                  <input
                    className={inputClass}
                    placeholder="Email Address *"
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <input
                  className={inputClass}
                  placeholder="Company Name"
                  value={form.company}
                  onChange={e => setForm({ ...form, company: e.target.value })}
                />
                <select
                  className={`${inputClass} appearance-none`}
                  value={form.service}
                  onChange={e => setForm({ ...form, service: e.target.value })}
                >
                  <option value="" className="bg-card">Select Service Type</option>
                  <option value="industrial" className="bg-card">Industrial Engineering</option>
                  <option value="pharma" className="bg-card">Pharmaceutical Engineering</option>
                  <option value="commercial" className="bg-card">Commercial Projects</option>
                  <option value="lab" className="bg-card">Laboratory Engineering</option>
                  <option value="healthcare" className="bg-card">Healthcare Infrastructure</option>
                  <option value="civil" className="bg-card">Infrastructure & Civil</option>
                </select>
                <textarea
                  className={`${inputClass} resize-none h-32`}
                  placeholder="Describe your project requirements *"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 bg-primary text-primary-foreground font-semibold py-4 hover:bg-amber-600 transition-colors text-sm tracking-wide group mt-2 cursor-pointer"
                >
                  Submit Enquiry
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-muted-foreground text-center" style={{ fontFamily: MONO }}>
                  Your information is kept confidential
                </p>
              </form>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060A11] border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-primary flex items-center justify-center">
                <HardHat size={18} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-black tracking-[0.12em] uppercase text-foreground leading-none" style={{ fontFamily: DISPLAY }}>
                  Vision Projects
                </div>
                <div className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground leading-none mt-0.5" style={{ fontFamily: MONO }}>
                  Engineering Services
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              Delivering precision engineering solutions across India's most demanding industrial, pharmaceutical, and commercial sectors since 2002.
            </p>
            <div className="flex gap-4">
              {["ISO 9001:2015", "GMP Certified", "NABH Approved"].map((b) => (
                <span key={b} className="text-[9px] border border-border text-muted-foreground px-2 py-1 tracking-wider uppercase" style={{ fontFamily: MONO }}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-5" style={{ fontFamily: MONO }}>
              Services
            </div>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.title}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-5" style={{ fontFamily: MONO }}>
              Company
            </div>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Projects", href: "#projects" },
                { label: "Industries", href: "#industries" },
                { label: "Contact Us", href: "#contact" },
                { label: "Careers", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-3" style={{ fontFamily: MONO }}>
              Contact
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p style={{ fontFamily: MONO }}>
                +91 99999 99999
              </p>
              <p className="text-xs">
                enquiries@visionprojects.in
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground" style={{ fontFamily: MONO }}>
            © {new Date().getFullYear()} Vision Projects Engineering Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((link) => (
              <button key={link} className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" style={{ fontFamily: MONO }}>
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(217,119,6,0.4); border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(217,119,6,0.7); }
      `}</style>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <IndustriesSection />
      <ProjectsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
