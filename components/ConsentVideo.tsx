"use client";

import { useState } from "react";

export function ConsentVideo({ videoId, title }: { videoId: string; title: string }) {
  const [allowed, setAllowed] = useState(false);
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-forest-100 bg-forest-900 shadow-md">
      {allowed ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=1&rel=0`}
          title={title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center text-sand-50">
          <p className="max-w-lg text-base font-semibold sm:text-xl">Video: {title}</p>
          <p className="max-w-lg text-sm leading-relaxed text-sand-100">
            Aktiviranjem videa uspostavlja se veza sa YouTube servisom, koji može obraditi tehničke podatke o vašoj posjeti.
          </p>
          <button type="button" onClick={() => setAllowed(true)} className="rounded-full bg-sand-50 px-6 py-3 text-sm font-semibold text-forest-900 hover:bg-sand-100">
            Prikaži video
          </button>
        </div>
      )}
    </div>
  );
}
