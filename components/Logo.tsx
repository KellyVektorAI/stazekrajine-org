import Link from "next/link";
import Image from "next/image";

export function TrailMark({ className = "h-24 w-auto sm:h-28" }: { className?: string }) {
  return (
    <Image
      src="/dokumenti/logo.svg"
      alt="Staze Krajine Logo"
      width={400}
      height={150}
      className={`object-contain ${className}`}
      priority
    />
  );
}

export function Logo({ className = "h-24 w-auto sm:h-28" }: { className?: string }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 text-forest-900 transition-opacity hover:opacity-80"
    >
      <TrailMark className={className} />
      <div className="flex flex-col justify-center">
        <span className="text-xl font-bold tracking-tight text-forest-900 leading-tight">
          Staze Krajine
        </span>
        <span className="text-xs font-medium text-forest-700/80">
          Udruženje građana
        </span>
      </div>
    </Link>
  );
}
