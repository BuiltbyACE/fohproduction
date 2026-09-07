import type { SVGProps } from "react";

function Svg({
  children,
  strokeWidth = 1.8,
  ...props
}: Omit<SVGProps<SVGSVGElement>, "strokeWidth"> & {
  strokeWidth?: string | number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function HeartMarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M12 20c-3.5-2.6-6-5.6-6-8.5C6 8.6 8.2 7 10 7c1.3 0 2 .8 2 .8S13.7 7 15 7c1.8 0 4 1.6 4 4.5 0 2.9-2.5 5.9-6 8.5Z" />
      <path d="M12 6.5v-2M9.5 4.5h5" />
    </Svg>
  );
}

export function ArrowDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg strokeWidth={2.2} {...props}>
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </Svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg strokeWidth={2.2} {...props}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </Svg>
  );
}

export function ArrowPrevIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg strokeWidth={2.2} {...props}>
      <path d="M15 18l-6-6 6-6" />
    </Svg>
  );
}

export function ArrowNextIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg strokeWidth={2.2} {...props}>
      <path d="M9 18l6-6-6-6" />
    </Svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </Svg>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </Svg>
  );
}

export function InfoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </Svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2Z" />
    </Svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </Svg>
  );
}

export function AtIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </Svg>
  );
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </Svg>
  );
}

export function HealthIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </Svg>
  );
}

export function EducationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </Svg>
  );
}

export function AwardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M6 3h12l4 6-10 12L2 9l4-6Z" />
      <path d="M12 3l2.5 4.6L12 21m0 0L9.5 7.6 12 3" />
      <path d="M2 9h20" />
    </Svg>
  );
}

export function SparkleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2L12 3Z" />
    </Svg>
  );
}

export function UserGroupIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </Svg>
  );
}

export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M12 20c-3.5-2.6-6-5.6-6-8.5C6 8.6 8.2 7 10 7c1.3 0 2 .8 2 .8S13.7 7 15 7c1.8 0 4 1.6 4 4.5 0 2.9-2.5 5.9-6 8.5Z" />
    </Svg>
  );
}