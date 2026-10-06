# stazekrajine.org — informativni sajt (Faza 1 / P1)

Javni, neprofitni informativni sajt Udruženja građana "Staze Krajine" (UG).
Pravno i brendirano odvojen od komercijalne KellyVektor platforme, ali
tehnološki dijeli konvencije iz KellyVektorAI ekosistema (Next.js + Tailwind,
Vercel hosting).

**Cilj Faze 1:** sajt mora biti živ (javno dostupan preko DNS-a) što prije,
jer je to preduslov da vlasnik aktivira Google Workspace (verifikacija
domene) i Google for Nonprofits program.

## Tehnologije

- [Next.js](https://nextjs.org) (App Router), statički generisane stranice (SSG)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
- Hosting: [Vercel](https://vercel.com)

## Lokalni razvoj

```bash
npm install
npm run dev
```

Otvorite [http://localhost:3000](http://localhost:3000).

Provjera prije deploya:

```bash
npm run lint
npm run build
```

## Struktura stranica

| Ruta | Sadržaj |
|---|---|
| `/` | Početna — hero, tri stuba djelovanja |
| `/o-nama` | Misija, vizija, organizaciona struktura, vodstvo, vrijednosti |
| `/projekti` | Projekti i inicijative, grantovi i podrška |
| `/partnerstva` | Kategorije partnera, proces "Kako postati partner" |
| `/clanstvo` | Forma za prijavu interesa (članstvo/volontiranje/partnerstvo/lokacija) i kontakt |
| `/privatnost` | Pravila privatnosti (generički nacrt) |
| `/uslovi-koristenja` | Uslovi korištenja (generički nacrt) |

Centralna konfiguracija (naziv, e-mailovi, pravni podaci, navigacija) nalazi
se u `lib/site-config.ts`.

## Šta treba dopuniti

Sljedeći podaci su i dalje označeni kao `[PLACEHOLDER - popuniti]` u kodu
(trenutno samo u `app/o-nama/page.tsx`, sekcija vodstva/tima) i treba ih
zamijeniti stvarnim informacijama čim budu dostupne:

1. **Dodatni članovi vodstva/tima** — imena, uloge i kratke biografije
   preostalih članova (predsjednik Igor Kelečević je već unesen).

Pravni/registracioni podaci (naziv, JIB, matični broj, broj rješenja,
sjedište, djelatnost) su već popunjeni u `lib/site-config.ts` prema rješenju
APIF Banja Luka.

**Statut (PDF):** postaviti zvanični PDF u `public/dokumenti/statut.pdf`
(vidi `public/dokumenti/README.md`) — link u footeru će automatski raditi.

**Kontakt e-mail:** trenutno se koristi privremena adresa
`stazekrajine@gmail.com` (vidi `contactEmail`/`infoEmail` u
`lib/site-config.ts`). Kada Google Workspace nalog na domeni
`stazekrajine.org` bude aktivan, zamijeniti ovu vrijednost sa zvaničnom
adresom (npr. `info@stazekrajine.org`).

**Forma za prijavu interesa** (`components/ContactForm.tsx`) trenutno
validira unos i otvara e-mail klijent korisnika (`mailto:` fallback) sa
pripremljenom porukom. Slanje direktno na server/e-mail servis (npr. preko
API rute) je planirano za kasniju fazu, nakon aktivacije Workspace-a.

## Deploy na Vercel + povezivanje domene (korak po korak za Igora)

Sajt je spreman za deploy. Ovo su sljedeći koraci — nijedan ne zahtijeva
poznavanje programiranja, samo nekoliko klikova.

### 1. Deploy na Vercel

1. Otvorite [vercel.com](https://vercel.com) i prijavite se (preporučeno:
   prijava preko GitHub naloga — "Continue with GitHub").
2. Kliknite **Add New...** → **Project**.
3. Izaberite GitHub repozitorij `KellyVektorAI/stazekrajine-org` sa liste
   (ako ga ne vidite, kliknite **Adjust GitHub App Permissions** i dodajte
   repozitorij).
4. Vercel će automatski prepoznati da je ovo Next.js projekat — ne treba
   mijenjati nikakva podešavanja (Build Command, Output Directory itd. su
   automatski tačni).
5. Kliknite **Deploy**. Nakon 1-2 minute dobićete privremeni link
   (npr. `stazekrajine-org.vercel.app`) na kojem se sajt može odmah
   pregledati.

### 2. Povezivanje domene `stazekrajine.org` (kupljena na Namecheap-u)

Isti princip kao kod `kellyvektor.tech` i `kellyvektorai.com`:

1. U Vercel-u, u projektu, idite na tab **Settings** → **Domains**.
2. Ukucajte `stazekrajine.org` u polje i kliknite **Add**.
3. Vercel će prikazati DNS zapise koje treba dodati — obično nešto poput:
   - **A zapis**: Name/Host: `@`, Value: `76.76.21.21`
   - **CNAME zapis**: Name/Host: `www`, Value: `cname.vercel-dns.com`

   (Tačne vrijednosti kopirati direktno iz Vercel ekrana — mogu se
   neznatno razlikovati.)
4. Prijavite se na [namecheap.com](https://www.namecheap.com), idite na
   **Domain List** → kliknite **Manage** pored `stazekrajine.org` →
   otvorite tab **Advanced DNS**.
5. Dodajte zapise iz koraka 3 klikom na **Add New Record**:
   - Tip `A Record`, Host `@`, Value (IP adresa iz Vercel-a), TTL `Automatic`
   - Tip `CNAME Record`, Host `www`, Value (vrijednost iz Vercel-a), TTL `Automatic`
6. Sačuvajte izmjene (zeleni kvačica/✓ dugme pored svakog zapisa).
7. Vratite se na Vercel **Domains** stranicu — status će se promijeniti u
   **Valid** nakon što DNS propagacija prođe (obično 10 minuta do nekoliko
   sati, rijetko do 24h).

### 3. Nakon što sajt bude živ na `stazekrajine.org`

- Vlasnik može nastaviti sa aktivacijom **Google Workspace** (verifikacija
  domene traži da domena ima aktivan sajt — ovo je sada ispunjeno) i
  prijavom za **Google for Nonprofits**.
- Nakon aktivacije Workspace-a, zamijeniti privremenu kontakt adresu
  `stazekrajine@gmail.com` u `lib/site-config.ts` sa zvaničnim
  `info@stazekrajine.org` (ili dogovorenom adresom) i ponovo deploy-ovati
  (Vercel to radi automatski nakon svakog push-a na glavnu granu).
