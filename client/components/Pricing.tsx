import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  GaugeCircle,
  Radar,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import {
  BillingCycle,
  PricingCard,
  PricingPlan,
} from "./PricingCard";
import { cn } from "@/lib/utils";

const featureCatalog = [
  "Mission control dashboard",
  "Automated anomaly alerts",
  "Live crew collaboration",
  "Predictive orbit analytics",
  "Unlimited integrations",
  "24/7 priority mission support",
];

const pricingPlans: PricingPlan[] = [
  {
    id: "launch",
    name: "Launch",
    tagline: "Perfect for founding teams charting their first expeditions.",
    limit: "Up to 5 crew seats",
    prices: {
      monthly: 29,
      yearly: {
        total: 299,
        monthlyEquivalent: 24.92,
      },
    },
    cta: "Choose Launch",
    support: "Standard mission support",
    accentColor: "rgba(99, 102, 241, 0.85)",
    accentGlow: "rgba(99, 102, 241, 0.45)",
    accentGradient:
      "linear-gradient(135deg, rgba(99,102,241,0.95) 0%, rgba(56,189,248,0.55) 100%)",
    includedFeatures: [
      "Mission control dashboard",
      "Automated anomaly alerts",
      "Live crew collaboration",
    ],
  },
  {
    id: "orbit",
    name: "Orbit",
    tagline: "Scale coordination across squads with predictive insights.",
    limit: "Up to 15 crew seats",
    prices: {
      monthly: 59,
      yearly: {
        total: 599,
        monthlyEquivalent: 49.92,
      },
    },
    cta: "Choose Orbit",
    support: "Priority support queue",
    accentColor: "rgba(56, 189, 248, 0.85)",
    accentGlow: "rgba(56, 189, 248, 0.45)",
    accentGradient:
      "linear-gradient(135deg, rgba(56,189,248,0.85) 0%, rgba(16,185,129,0.45) 100%)",
    includedFeatures: [
      "Mission control dashboard",
      "Automated anomaly alerts",
      "Live crew collaboration",
      "Predictive orbit analytics",
    ],
  },
  {
    id: "lunar",
    name: "Lunar",
    tagline: "Advanced automations with AI copilots and deep analytics.",
    limit: "Unlimited crew seats",
    prices: {
      monthly: 109,
      yearly: {
        total: 1049,
        monthlyEquivalent: 87.42,
      },
    },
    cta: "Choose Lunar",
    support: "Dedicated flight engineer",
    accentColor: "rgba(236, 72, 153, 0.88)",
    accentGlow: "rgba(236, 72, 153, 0.5)",
    accentGradient:
      "linear-gradient(135deg, rgba(236,72,153,0.95) 0%, rgba(139,92,246,0.55) 100%)",
    highlight: true,
    includedFeatures: [
      "Mission control dashboard",
      "Automated anomaly alerts",
      "Live crew collaboration",
      "Predictive orbit analytics",
      "Unlimited integrations",
    ],
  },
  {
    id: "nova",
    name: "Nova",
    tagline: "Enterprise-grade governance for planetary-scale operations.",
    limit: "Dedicated command cluster",
    prices: {
      monthly: 189,
      yearly: {
        total: 1799,
        monthlyEquivalent: 149.92,
      },
    },
    cta: "Contact for Nova",
    support: "Always-on command center",
    accentColor: "rgba(251, 191, 36, 0.85)",
    accentGlow: "rgba(251, 191, 36, 0.45)",
    accentGradient:
      "linear-gradient(135deg, rgba(251,191,36,0.9) 0%, rgba(248,113,113,0.5) 100%)",
    includedFeatures: [
      "Mission control dashboard",
      "Automated anomaly alerts",
      "Live crew collaboration",
      "Predictive orbit analytics",
      "Unlimited integrations",
      "24/7 priority mission support",
    ],
  },
];

const heroMetrics = [
  { label: "Trusted teams", value: "1,400+" },
  { label: "Mission uptime", value: "99.99%" },
  { label: "Avg ROI", value: "4.5x" },
];

type FeatureHighlight = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  iconClass: string;
};

const featureHighlights: FeatureHighlight[] = [
  {
    title: "Real-time telemetry fusion",
    description:
      "Stream every signal into a single console with anomaly detection tuned for deep-space operations and rapid response playbooks.",
    icon: Radar,
    accent: "bg-gradient-to-br from-cyan-500/20 via-cyan-500/5 to-transparent",
    iconClass: "text-cyan-200",
  },
  {
    title: "Predictive automation",
    description:
      "Launch autonomous workflows that learn from each mission, recommending optimal burn windows and rerouting before risks emerge.",
    icon: GaugeCircle,
    accent: "bg-gradient-to-br from-indigo-500/20 via-indigo-500/5 to-transparent",
    iconClass: "text-indigo-200",
  },
  {
    title: "Enterprise-grade defenses",
    description:
      "Zero-trust encryption, regional isolation, and compliance monitors keep every artifact protected across sovereign spaceports.",
    icon: ShieldCheck,
    accent: "bg-gradient-to-br from-purple-500/20 via-purple-500/5 to-transparent",
    iconClass: "text-purple-200",
  },
];

type BillingToggleProps = {
  billingCycle: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
};

function BillingToggle({ billingCycle, onChange }: BillingToggleProps) {
  const options: { value: BillingCycle; label: string; sublabel?: string }[] = [
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly", sublabel: "Save 20%" },
  ];

  return (
    <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 p-1 shadow-lg shadow-indigo-500/10">
      {options.map((option) => {
        const active = option.value === billingCycle;

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.value)}
            className={cn(
              "relative mx-0.5 flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300",
              active
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-indigo-500/30"
                : "text-slate-200 hover:text-white",
            )}
          >
            {option.label}
            {option.sublabel ? (
              <span className="rounded-full bg-white/15 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-cyan-100">
                {option.sublabel}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <div className="relative isolate">
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 bg-[radial-gradient(circle,_rgba(99,102,241,0.35),_transparent_68%)]" />
          <div className="absolute -left-28 top-48 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.22),_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-24 right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(236,72,153,0.22),_transparent_72%)] blur-3xl" />
        </div>
        <div className="container flex flex-col items-center justify-center pt-24 pb-16 text-center sm:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-1 text-xs font-medium uppercase tracking-[0.5em] text-slate-200">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            Orbit pricing
          </span>
          <h1 className="mt-6 max-w-4xl font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Pricing engineered for missions of every scale
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            Launch faster, automate mission-critical workflows, and keep your fleet in sync with intelligent copilots built for deep-space operations.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <BillingToggle billingCycle={billingCycle} onChange={setBillingCycle} />
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Save 20% when you commit annually
            </p>
          </div>
          <div className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            {heroMetrics.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-5 text-left backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                  {label}
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="container relative pb-6">
        <div className="relative -mx-6 rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:mx-0 sm:p-10 lg:p-12">
          <div className="absolute inset-x-12 top-0 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                billingCycle={billingCycle}
                features={featureCatalog}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="container mt-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {featureHighlights.map(({ title, description, icon: Icon, accent, iconClass }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100",
                  accent,
                )}
              />
              <Icon className={cn("relative z-10 h-10 w-10", iconClass)} />
              <h3 className="relative z-10 mt-6 font-heading text-2xl font-semibold text-white">
                {title}
              </h3>
              <p className="relative z-10 mt-4 text-sm leading-6 text-slate-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="container mt-24 mb-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-white/[0.05] p-10 text-center shadow-orbit backdrop-blur-xl md:p-14">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute inset-y-0 left-1/2 h-[160%] w-[2px] -translate-x-1/2 rotate-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
            <div className="absolute -top-40 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.25),_transparent_70%)] blur-3xl" />
          </div>
          <div className="relative flex flex-col items-center gap-6 text-center">
            <h2 className="max-w-3xl font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Need custom mission control?
            </h2>
            <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
              Our orbital strategists will craft a deployment tailored to your fleet. From compliance to on-premise clusters, we guide your mission end to end.
            </p>
            <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
              <a
                href="mailto:mission@nebula.studio"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/40 transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
              >
                Email mission control
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/45 hover:text-white"
              >
                Compare plans
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
