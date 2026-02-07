import { useState } from "react"
import { Calendar } from "lucide-react"

interface PricingCardsProps {
  onSubscribe?: () => void;
}

export default function PricingCards({ onSubscribe }: PricingCardsProps) {
  const [premiumService, setPremiumService] = useState(0)
  const [basicService, setBasicService] = useState(0)

  const LightCheckIcon = ({ className = "" }: { className?: string }) => (
    <svg className={`w-4 h-4 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )

  const DarkCheckIcon = ({ className = "" }: { className?: string }) => (
    <svg className={`w-4 h-4 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )

  const premiumOptions = [
    { service: "Corte + Barba", price: "R$199,90" },
    { service: "Corte", price: "R$129,90" },
    { service: "Barba", price: "R$129,90" },
  ]

  const basicOptions = [
    { service: "Corte + Barba", price: "R$169,90" },
    { service: "Corte", price: "R$109,90" },
    { service: "Barba", price: "R$109,90" },
  ]

  const premiumFeatures = ["Uso ilimitado", "Segunda a Sábado", "10% off em produtos", "Sem fidelidade"]
  const basicFeatures = ["Uso ilimitado", "Segunda a Quarta", "10% off em produtos", "Sem fidelidade"]

  const ServiceSelector = ({
    options,
    selected,
    onChange,
    isDark = false,
  }: {
    options: { service: string; price: string }[]
    selected: number
    onChange: (i: number) => void
    isDark?: boolean
  }) => (
    <div className="flex flex-col gap-2">
      {options.map((opt, i) => (
        <button
          key={opt.service}
          onClick={() => onChange(i)}
          className={[
            "flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-all duration-200 border",
            selected === i
              ? isDark
                ? "bg-neutral-100/10 border-neutral-100/30 text-neutral-100"
                : "bg-neutral-900/5 border-neutral-900/20 text-neutral-900"
              : isDark
              ? "border-neutral-700/50 text-neutral-400 hover:border-neutral-500"
              : "border-neutral-200 text-neutral-500 hover:border-neutral-400",
          ].join(" ")}
        >
          <span>{opt.service}</span>
          <span className="font-semibold">{opt.price}<span className="text-xs font-normal opacity-60">/mês</span></span>
        </button>
      ))}
    </div>
  )

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Light (Basic) Card */}
        <div className="relative flex flex-col rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
          <div className="p-8 pb-0">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">Basic</h3>
                <p className="text-sm text-neutral-500 mt-1">
                  Ideal para quem vai de segunda a quarta.
                </p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border border-neutral-200">
                Econômico
              </span>
            </div>

            <div className="mt-4 mb-6">
              <ServiceSelector
                options={basicOptions}
                selected={basicService}
                onChange={setBasicService}
              />
            </div>

            <button
              onClick={onSubscribe}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-neutral-900 text-white font-medium text-sm hover:bg-neutral-800 transition-colors duration-200 mb-6"
            >
              Assinar Agora
              <Calendar className="w-4 h-4" />
            </button>
          </div>

          <div className="border-t border-neutral-100 p-8 pt-6 mt-auto">
            <ul className="space-y-3">
              {basicFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-neutral-600">
                  <LightCheckIcon className="text-neutral-900 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dark (Premium) Card */}
        <div className="relative flex flex-col rounded-2xl border border-neutral-700/50 bg-neutral-900 shadow-xl overflow-hidden ring-1 ring-neutral-700/30">
          <div className="p-8 pb-0">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-neutral-100">Premium</h3>
                <p className="text-sm text-neutral-400 mt-1">
                  Para quem quer liberdade total.
                </p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-100/10 text-neutral-300 border border-neutral-600/50">
                Mais Popular
              </span>
            </div>

            <div className="mt-4 mb-6">
              <ServiceSelector
                options={premiumOptions}
                selected={premiumService}
                onChange={setPremiumService}
                isDark
              />
            </div>

            <button
              onClick={onSubscribe}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-neutral-100 text-neutral-900 font-medium text-sm hover:bg-white transition-colors duration-200 mb-6"
            >
              Assinar Agora
              <Calendar className="w-4 h-4" />
            </button>
          </div>

          <div className="border-t border-neutral-700/30 p-8 pt-6 mt-auto">
            <ul className="space-y-3">
              {premiumFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-neutral-400">
                  <DarkCheckIcon className="text-neutral-100 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
