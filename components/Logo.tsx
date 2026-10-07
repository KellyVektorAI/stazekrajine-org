import Link from "next/link";
import Image from "next/image";

export function TrailMark({ className = "h-16 w-auto sm:h-20" }: { className?: string }) {
  return (
    <Image
      src="/dokumenti/logo.svg"
      alt="Staze Krajine Logo"
      width={300}
      height={100}
      className={`${className} object-contain`}
      priority
    />
  );
}

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center -my-3 text-forest-900 transition-opacity hover:opacity-80"
    >
      <TrailMark className="h-16 w-auto sm:h-20" />
    </Link>
  );
}
