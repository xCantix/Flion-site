import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  LineChart,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const business = {
  name: "Flion",
  tagline: "Research and consulting for strategic business growth.",
  description:
    "Flion LLC provides professional research, consulting, and strategic advisory services focused on informed decision-making and long-term business growth.",
  phone: "(555) 123-4567",
  email: "contact@flion.com",
  location: "United States",
};

const services = [
  {
    icon: LineChart,
    title: "Strategic Research",
    description:
      "In-depth research and analysis designed to support informed business and investment decisions.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Consulting",
    description:
      "Professional consulting services focused on operational planning, growth strategy, and organizational direction.",
  },
  {
    icon: BarChart3,
    title: "Market Analysis",
    description:
      "Research-backed insights and reporting to help clients better understand trends, markets, and opportunities.",
  },
];

const strengths = [
  "Research-backed analysis and reporting",
  "Clear communication and professional guidance",
  "Strategic planning focused on measurable outcomes",
  "A polished, client-focused consulting experience",
];

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-600 text-white shadow-lg shadow-amber-500/20">
              <Sparkles size={22} />
            </div>
            <div>
              <span className="block text-xl font-black tracking-tight">
                {business.name}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                Research & Consulting
              </span>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-stone-600 md:flex">
            <a href="#strategy" className="hover:text-amber-700">
              Approach
            </a>
            <a href="#services" className="hover:text-amber-700">
              Services
            </a>
            <a href="#about" className="hover:text-amber-700">
              About
            </a>
            <a href="#contact" className="hover:text-amber-700">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-stone-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-amber-700"
          >
            Schedule a Consultation
          </a>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 py-24 md:py-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.14),transparent_34%)]" />
          <div className="absolute left-1/2 top-0 -z-10 h-full w-px bg-gradient-to-b from-amber-300/50 via-stone-200 to-transparent" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-800 shadow-sm">
                <ShieldCheck size={16} />
                Professional research and advisory services
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-stone-950 md:text-7xl">
                {business.tagline}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                {business.description}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 px-7 py-3 font-bold text-white shadow-lg shadow-amber-500/25 transition hover:scale-[1.02]"
                >
                  Start a Conversation <ArrowRight size={18} />
                </a>
                <a
                  href="#strategy"
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-7 py-3 font-semibold text-stone-950 transition hover:border-amber-400 hover:text-amber-700"
                >
                  Our Approach
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-2xl shadow-stone-200/80"
            >
              <div className="rounded-[1.5rem] bg-stone-950 p-7 text-white">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-stone-400">Research Overview</p>
                    <h2 className="text-2xl font-bold">Strategic insight</h2>
                  </div>
                  <div className="rounded-full bg-amber-400/15 px-3 py-1 text-sm font-semibold text-amber-300">
                    Strategic
                  </div>
                </div>

                <div className="mb-8 rounded-3xl bg-white/5 p-5">
                  <div className="mb-4 flex items-end justify-between">
                    <div>
                      <p className="text-sm text-stone-400">Research Focus</p>
                      <p className="text-4xl font-black text-amber-300">
                        2026
                      </p>
                    </div>
                    <TrendingUp className="text-amber-300" size={34} />
                  </div>
                  <div className="flex h-28 items-end gap-2">
                    {[35, 48, 42, 64, 58, 74, 88].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-xl bg-gradient-to-t from-amber-700 to-amber-300"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Industry research",
                    "Business strategy",
                    "Operational consulting",
                  ].map((text) => (
                    <div
                      key={text}
                      className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"
                    >
                      <CheckCircle2 className="text-amber-300" size={21} />
                      <span className="font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="strategy" className="px-6 py-20">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-stone-200 bg-white p-8 shadow-xl shadow-stone-200/60 md:p-12">
            <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-700">
                  Research & Consulting
                </p>
                <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                  Research-driven insight for modern businesses.
                </h2>
              </div>
              <p className="text-lg leading-8 text-stone-600">
                Flion LLC delivers research and consulting services built around
                clarity, strategic thinking, and measurable business outcomes.
                The company focuses on professional communication, informed
                analysis, and long-term client relationships.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-700">
                Services
              </p>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Built for informed business decisions.
              </h2>
              <p className="mt-4 text-stone-600">
                Professional research, consulting, and advisory services
                tailored to support long-term business strategy and operational
                growth.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-lg shadow-stone-200/70 transition hover:-translate-y-1 hover:border-amber-300"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="mt-3 leading-7 text-stone-600">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-stone-950 p-8 text-white shadow-2xl shadow-stone-300/60 md:grid-cols-2 md:p-12">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                Why Choose Flion
              </p>
              <h2 className="text-4xl font-black tracking-tight">
                Professional insight backed by strategy and research.
              </h2>
              <p className="mt-5 leading-8 text-stone-300">
                Flion LLC is presented with a clean, professional identity
                focused on credibility, strategic insight, and long-term client
                trust. The layout is designed to scale alongside future
                services, resources, and company growth.
              </p>
            </div>

            <div className="grid gap-4">
              {strengths.map((strength) => (
                <div
                  key={strength}
                  className="flex items-start gap-3 rounded-2xl bg-white/5 p-4"
                >
                  <CheckCircle2
                    className="mt-1 shrink-0 text-amber-300"
                    size={20}
                  />
                  <span className="text-stone-200">{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-20">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-8 text-stone-950 shadow-2xl shadow-amber-200/50 md:p-12">
            <div className="text-center">
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Let’s build smarter strategies together.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
                Connect with Flion LLC to discuss research services, consulting
                opportunities, or strategic business initiatives.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <a
                href={`tel:${business.phone}`}
                className="rounded-2xl border border-stone-200 bg-white p-5 text-center font-semibold transition hover:border-amber-300 hover:text-amber-700"
              >
                <Phone className="mx-auto mb-2" />
                {business.phone}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="rounded-2xl border border-stone-200 bg-white p-5 text-center font-semibold transition hover:border-amber-300 hover:text-amber-700"
              >
                <Mail className="mx-auto mb-2" />
                {business.email}
              </a>
              <div className="rounded-2xl border border-stone-200 bg-white p-5 text-center font-semibold">
                <MapPin className="mx-auto mb-2" />
                {business.location}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white px-6 py-8 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </footer>
    </div>
  );
}
