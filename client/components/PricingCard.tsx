import { Check, Minus } from "lucide-react";
import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

export type BillingCycle = "monthly" | "yearly";

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  limit: string;
  prices: {
    monthly: number;
    yearly: {
      total: number;
      monthlyEquivalent: number;
    };
  };
  cta: string;
  support: string;
  accentColor: string;
  accentGlow: string;
  accentGradient: string;
  highlight?: boolean;
  includedFeatures: string[];
}

interface PricingCardProps {
  plan: PricingPlan;
  billingCycle: BillingCycle;
  features: string[];
}

const primaryCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const secondaryCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export function PricingCard({ plan, billingCycle, features }: PricingCardProps) {
  const activePrice =
    billingCycle === "monthly"
      ? plan.prices.monthly
      : plan.prices.yearly.total;

  const savings = Math.max(
    plan.prices.monthly * 12 - plan.prices.yearly.total,
    0,
  );

  const glowStyle: CSSProperties = {
    borderColor: plan.accentColor,
    boxShadow: plan.highlight
      ? `0 60px 120px -60px ${plan.accentGlow}`
      : `0 40px 110px -70px ${plan.accentGlow}`,
  };

  const overlayStyle: CSSProperties = {
    background: `radial-gradient(120% 100% at 50% 0%, ${plan.accentGlow} 0%, transparent 75%)`,
  };

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col gap-8 overflow-hidden rounded-3xl border bg-white/[0.035] p-8 backdrop-blur-2xl transition duration-300 hover:-translate-y-1",
        plan.highlight
          ? "bg-white/[0.065] shadow-orbit"
          : "shadow-[0_35px_120px_-90px_rgba(10,12,25,0.75)]",
      )}
      style={glowStyle}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition duration-500 group-hover:opacity-100"
        style={overlayStyle}
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          {plan.highlight ? (
            <span className="w-fit rounded-full border border-white/20 bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white">
              Most popular
            </span>
          ) : null}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-white">
              {plan.name}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {plan.tagline}
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-baseline gap-2 text-white">
            <span className="text-5xl font-semibold tracking-tight">
              {primaryCurrency.format(activePrice)}
            </span>
            <span className="text-xs uppercase tracking-[0.5em] text-slate-400">
              {billingCycle === "monthly" ? "per month" : "per year"}
            </span>
          </div>
          <p className="mt-2 text-sm text-slate-300">{plan.limit}</p>
          <p className="mt-3 text-xs text-slate-400">
            {billingCycle === "monthly"
              ? `Switch to yearly to save ${primaryCurrency.format(savings)}.`
              : `Equivalent to ${secondaryCurrency.format(plan.prices.yearly.monthlyEquivalent)} per month.`}
          </p>
        </div>
      </div>
      <div className="flex-1">
        <ul className="space-y-3">
          {features.map((feature) => {
            const included = plan.includedFeatures.includes(feature);

            return (
              <li key={feature} className="flex items-start gap-3">
                <span
                  className={cn(
                    "mt-1 flex h-7 w-7 items-center justify-center rounded-full border text-xs transition",
                    included
                      ? "border-transparent bg-white/18 text-white"
                      : "border-white/18 text-slate-500",
                  )}
                >
                  {included ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <Minus className="h-3.5 w-3.5" />
                  )}
                </span>
                <span
                  className={cn(
                    "text-sm leading-6",
                    included
                      ? "text-slate-100"
                      : "text-slate-500 line-through decoration-white/30",
                  )}
                >
                  {feature}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
          {plan.support}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          style={{
            backgroundImage: plan.accentGradient,
            boxShadow: `0 18px 45px -25px ${plan.accentGlow}`,
          }}
        >
          {plan.cta}
        </a>
      </div>
    </article>
  );
}
