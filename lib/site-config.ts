// Centralna konfiguracija sajta — ovdje se mijenjaju opšti podaci koji se
// koriste na više mjesta (navigacija, footer, kontakt, SEO).
//
// Pravni/registracioni podaci (JIB, matični broj, broj rješenja, sjedište)
// su zvanični, preuzeti iz rješenja APIF Banja Luka. Podaci o vodstvu/timu
// još uvijek nisu dostupni i ostaju označeni kao "[PLACEHOLDER - popuniti]"
// dok ih vlasnik ne dostavi — vidi README.md, sekcija "Šta treba dopuniti".

export const siteConfig = {
  name: 'Udruženje građana "STAZE KRAJINE"',
  shortName: "Staze Krajine",
  url: "https://stazekrajine.org",
  description:
    'Udruženje građana "Staze Krajine" razvija, promoviše i digitalizuje održivi turizam u regiji Krajina, Bosna i Hercegovina. Mapiramo staze, povezujemo lokalne zajednice i gradimo moderne digitalne alate za očuvanje prirode.',
  // Privremena kontakt e-mail adresa dok Google Workspace ne bude aktivan na
  // domeni stazekrajine.org — zamijeniti sa info@/kontakt@stazekrajine.org
  // nakon aktivacije Workspace-a.
  contactEmail: "stazekrajine@gmail.com",
  infoEmail: "stazekrajine@gmail.com",
  address: "Kolubarska 13, Banja Luka, Bosna i Hercegovina",
  registrationNumber: "F-1-46/20 (APIF Banja Luka)",
  taxId: "4404626940003",
  registrationBody:
    "Agencija za posredničke, informatičke i finansijske usluge (APIF) Banja Luka",
  registrationId: "11195415",
  activity:
    "Djelatnosti ostalih organizacija na bazi učlanjenja, d.n. (šifra 94.99)",
  statuteUrl: "/dokumenti/statut.pdf", // [PLACEHOLDER] — postaviti stvarni PDF Statuta u /public/dokumenti
};

export const navigation = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/projekti", label: "Projekti" },
  { href: "/partnerstva", label: "Partnerstva" },
  { href: "/clanstvo", label: "Članstvo i kontakt" },
];

export const interestTypes = [
  "Članstvo",
  "Volontiranje",
  "Partnerstvo",
  "Prijava lokacije/staze",
] as const;
