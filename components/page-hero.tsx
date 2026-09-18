import Image from "next/image";

export default function PageHero({
  eyebrow,
  heading,
  image,
  imageAlt,
  subheading,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  image: string;
  imageAlt: string;
  subheading?: string;
}) {
  return (
    <section className="border-b border-sage-100">
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="flex items-center">
          <div className="px-6 py-14 md:px-14 md:py-20 max-w-xl">
            <p className="eyebrow text-sm mb-5">{eyebrow}</p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.15] text-ink">
              {heading}
            </h1>
            {subheading && (
              <p className="mt-6 text-ink/75 leading-relaxed max-w-prose">
                {subheading}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
