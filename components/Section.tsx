import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-forest-100 bg-forest-50">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8">
        <span className="inline-block rounded-full bg-forest-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-forest-700">
          {eyebrow}
        </span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-forest-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-forest-700">{description}</p>
      </div>
    </section>
  );
}

export function Section({
  title,
  description,
  children,
  tone = "default",
}: {
  title?: string;
  description?: string;
  children: ReactNode;
  tone?: "default" | "muted";
}) {
  return (
    <section className={tone === "muted" ? "bg-forest-50" : undefined}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        {title && (
          <h2 className="text-2xl font-bold tracking-tight text-forest-900 sm:text-3xl">
            {title}
          </h2>
        )}
        {description && (
          <p className="mt-3 max-w-2xl text-forest-700">{description}</p>
        )}
        <div className={title ? "mt-10" : undefined}>{children}</div>
      </div>
    </section>
  );
}
