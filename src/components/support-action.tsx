"use client";

import { useSupportModal, type SupportModalType } from "./support-modal";

export default function SupportAction({
  type,
  className,
  children,
}: {
  type: SupportModalType;
  className?: string;
  children?: React.ReactNode;
}) {
  const { open } = useSupportModal();

  return (
    <button type="button" className={className} onClick={() => open(type)}>
      {children}
    </button>
  );
}