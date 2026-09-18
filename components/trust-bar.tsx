import { BrainCircuit, Waves, Leaf, MonitorSmartphone, type LucideIcon } from "lucide-react";
import { therapist } from "@/lib/therapist";

const icons: Record<string, LucideIcon> = {
  "brain-circuit": BrainCircuit,
  waves: Waves,
  leaf: Leaf,
  "monitor-smartphone": MonitorSmartphone,
};

export default function TrustBar() {
  return (
    <section aria-label="Areas of expertise" className="border-y border-sage-100 bg-cream/60">
      <div className="section-shell py-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {therapist.trustBar.map((item) => {
          const Icon = icons[item.icon] ?? Leaf;
          return (
            <div
              key={item.title}
              className="flex flex-col items-center text-center gap-3 bg-white rounded-card-sm border border-sage-100 py-6 px-4 shadow-card hover:-translate-y-0.5 transition-transform"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-sage-50 text-sage-600">
                <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold text-ink/85 leading-snug">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}