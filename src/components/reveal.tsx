"use client";

import { useReveal } from "@/lib/use-reveal";

type RevealProps = {
  className?: string;
  children: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
};

export default function Reveal({ className = "", children, ref }: RevealProps) {
  const innerRef = useReveal<HTMLDivElement>();

  return (
    <div ref={ref ?? innerRef} className={`rv ${className}`}>
      {children}
    </div>
  );
}