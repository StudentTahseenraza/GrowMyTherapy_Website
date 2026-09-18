import { Cormorant_Garamond, Caveat, Nunito_Sans } from "next/font/google";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-clone-serif",
  weight: ["400", "500", "600"],
});

const script = Caveat({
  subsets: ["latin"],
  variable: "--font-clone-script",
  weight: ["500", "600"],
});

const body = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-clone-body",
  weight: ["400", "500", "600", "700"],
});

export default function CloneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${serif.variable} ${script.variable} ${body.variable} bg-[#F7F4EE] text-[#33403D]`}
      style={{ fontFamily: "var(--font-clone-body)" }}
    >
      {children}
    </div>
  );
}
