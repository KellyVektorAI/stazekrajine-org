"use client";

import { useState, type FormEvent } from "react";
import { interestTypes, siteConfig } from "@/lib/site-config";

type Status = "idle" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    interest: interestTypes[0] as string,
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setStatus("error");
      return;
    }

    // NAPOMENA: Slanje e-maila/backend integracija dolazi kasnije (npr. API
    // ruta + e-mail servis nakon aktivacije Google Workspace-a). Za sada
    // forma validira unos i nudi "mailto:" fallback da poruka odmah stigne
    // na kontakt e-mail udruženja.
    const subject = encodeURIComponent(`Prijava interesa — ${values.interest}`);
    const body = encodeURIComponent(
      `Ime i prezime / organizacija: ${values.name}\n` +
        `E-mail: ${values.email}\n` +
        `Telefon: ${values.phone || "—"}\n` +
        `Tip interesa: ${values.interest}\n\n` +
        `Poruka:\n${values.message}`,
    );

    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
    setStatus("success");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Ime i prezime / Naziv organizacije" required>
          <input
            required
            name="name"
            value={values.name}
            onChange={handleChange}
            type="text"
            placeholder="npr. Amina Hodžić ili Udruženje XY"
            className={inputClass}
          />
        </Field>

        <Field label="E-mail" required>
          <input
            required
            name="email"
            value={values.email}
            onChange={handleChange}
            type="email"
            placeholder="ime@primjer.com"
            className={inputClass}
          />
        </Field>

        <Field label="Telefon (opciono)">
          <input
            name="phone"
            value={values.phone}
            onChange={handleChange}
            type="tel"
            placeholder="+387 ..."
            className={inputClass}
          />
        </Field>

        <Field label="Tip interesa" required>
          <select
            name="interest"
            value={values.interest}
            onChange={handleChange}
            className={inputClass}
          >
            {interestTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Poruka" required>
        <textarea
          required
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={5}
          placeholder="Recite nam kako biste željeli da se uključite..."
          className={inputClass}
        />
      </Field>

      <button
        type="submit"
        className="rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold text-sand-50 transition-colors hover:bg-[#ff8e29]"
      >
        Pošalji prijavu
      </button>

      {status === "success" && (
        <p className="rounded-xl bg-forest-100 px-4 py-3 text-sm text-forest-800">
          Hvala! Otvorili smo vam e-mail klijent sa pripremljenom porukom na{" "}
          <strong>{siteConfig.contactEmail}</strong>. Ukoliko se e-mail klijent nije
          automatski otvorio, molimo pišite nam direktno na navedenu adresu.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-xl bg-clay-400/10 px-4 py-3 text-sm text-clay-600">
          Molimo popunite ime, e-mail i poruku prije slanja.
        </p>
      )}
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-forest-200 bg-white px-4 py-2.5 text-sm text-forest-900 placeholder:text-forest-400 focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-200";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-medium text-forest-800">
      {label} {required && <span className="text-clay-500">*</span>}
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
