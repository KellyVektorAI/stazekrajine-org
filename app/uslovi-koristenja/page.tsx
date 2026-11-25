import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Uslovi korištenja",
  description: "Uslovi upotrebe informativnog sajta Udruženja građana Staze Krajine, projektnih materijala i obrazaca za iskazivanje interesa.",
};

const sections: LegalSection[] = [
  { title: "1. Namjena i izdavač sajta", paragraphs: [
    "Sajt stazekrajine.org predstavlja aktivnosti, misiju, projekte, članstvo i mogućnosti saradnje Udruženja građana „STAZE KRAJINE“ iz Banje Luke. Ovo je neprofitni informativni sajt, a ne samostalni servis za naplatu putovanja, rezervacija ili donacija.",
    "Podaci o udruženju i kontakt navedeni su u footeru i na stranici „Članstvo i kontakt“."
  ] },
  { title: "2. Tačnost i razvoj projekata", paragraphs: [
    "Objave o projektima, mapiranju staza, edukaciji i digitalizaciji mogu predstavljati inicijative, razvojne ciljeve ili prijedloge. Njihovo prikazivanje ne znači da je projekat finansiran, ugovoren ili u potpunosti realizovan, osim kada je to izričito potvrđeno.",
    "Nastojimo održavati ažurne informacije, ali okolnosti na terenu, planovi i dostupnost partnera mogu se mijenjati."
  ] },
  { title: "3. Članstvo, volontiranje i partnerstva", paragraphs: [
    "Obrazac za prijavu interesa priprema e-mail poruku u aplikaciji korisnika; nije sistem za automatsku registraciju članova. Interesovanje postaje formalni zahtjev tek kada ga udruženje primi i obradi u skladu sa statutom i internim odlukama.",
    "Niti prijava interesa niti dostavljanje prijedloga staze ne garantuju članstvo, ugovor o partnerstvu, naknadu, objavu lokacije ili finansijsku podršku."
  ] },
  { title: "4. Intelektualna svojina", paragraphs: [
    "Prava na tekstove, fotografije, video zapise, vizuelni identitet, softver i projektne dokumente pripadaju njihovim stvarnim autorima ili drugim nosiocima prava. Materijali preuzeti uz dozvolu ili licencu trećih lica ostaju pod tim uslovima.",
    "Bez prethodnog dopuštenja nije dozvoljeno neovlašteno komercijalno preuzimanje zaštićenih materijala. Kontaktirajte udruženje radi dogovora o korištenju sadržaja."
  ] },
  { title: "5. Posjeta prirodi i informacije o stazama", paragraphs: [
    "Opis staza ili destinacija nije sigurnosna garancija. Prije polaska provjerite vremensku prognozu, pristup terenu, stanje signalizacije, preporuke lokalnih vodiča i pravila zaštićenih područja.",
    "Ništa u ovim uslovima ne ograničava prava korisnika ili odgovornost koju nije dopušteno ograničiti zakonom."
  ] },
  { title: "6. Povezani servisi i partneri", paragraphs: [
    "KrajinaTour.ba sadrži turističke vodiče i partnerske preporuke; KrajinaTour.org pruža interaktivno planiranje; KellyVektor.tech predstavlja zasebnu tehnološku kompaniju i njene komercijalne usluge.",
    "Prelaskom na vanjski servis primjenjuju se njegova pravila. Organizacija ne odgovara automatski za rezervacije, plaćanja, sadržaje ili pravne obaveze trećih strana."
  ] },
  { title: "7. Privatnost i vanjski sadržaji", paragraphs: [
    "Obradu ličnih podataka uređuje Politika privatnosti. Ugrađeni video i drugi vanjski sadržaji mogu slati tehničke zahtjeve njihovim pružaocima, kako je objašnjeno u pravilima o kolačićima."
  ] },
  { title: "8. Izmjene i kontakt", paragraphs: [
    "Sadržaj i uslovi mogu se dopunjavati zbog novih projekata, tehničkih ili zakonskih promjena. Za pitanja, primjedbe i zahtjeve koristite stazekrajine@gmail.com. Primjenjuju se relevantni propisi Bosne i Hercegovine."
  ] }
];

export default function UsloviKoristenjaPage() {
  return <LegalDocument title="Uslovi korištenja" description="Pravila pristupa sadržaju, iskazivanja interesa za članstvo i razumijevanja projekata udruženja." sections={sections} />;
}
