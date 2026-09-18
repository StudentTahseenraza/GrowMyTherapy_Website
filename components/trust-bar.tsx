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
      <div className="section-shell py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {therapist.trustBar.map((item) => {
          const Icon = icons[item.icon] ?? Leaf;
          return (
            <div key={item.title} className="flex flex-col items-center text-center gap-3">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-sage-600 shadow-card">
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
