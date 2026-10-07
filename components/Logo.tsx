import Link from "next/link";
import Image from "next/image";

export function TrailMark({ className = "h-16 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/dokumenti/logo.svg"
      alt="Staze Krajine Logo"
      width={300}
      height={100}
      className={`object-contain ${className}`}
      priority
    />
  );
}

export function Logo({ className = "h-16 w-auto" }: { className?: string }) {
  return (
    <Link
      href="/"
      className="flex items-center text-forest-900 transition-opacity hover:opacity-80"
    >
      <TrailMark className={className} />
    </Link>
  );
}
