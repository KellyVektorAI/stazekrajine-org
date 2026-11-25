import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Kolačići i vanjske usluge",
  description: "Informacije o tehničkoj pohrani, YouTube videu, hostingu i vanjskim povezanim servisima na StazeKrajine.org.",
};

const sections: LegalSection[] = [
  { title: "1. Kolačići i slične tehnologije", paragraphs: [
    "Kolačići su male datoteke koje preglednik može čuvati radi tehničkog rada sajta, sigurnosti ili — kada je posebno omogućeno — analitike i marketinga. Sličnu svrhu može imati lokalna pohrana preglednika.",
    "Ne tvrdimo da su marketinški ili analitički kolačići aktivni bez potvrde produkcijske konfiguracije. Hosting i zaštitni sistemi mogu postaviti tehničke kolačiće neophodne za rad."
  ] },
  { title: "2. Ugrađeni YouTube video", paragraphs: [
    "Na stranici „O nama“ može se prikazati YouTube video kroz domenu youtube-nocookie.com. Režim poboljšane privatnosti ne garantuje da nema nikakve komunikacije ili obrade tehničkih podataka na strani pružaoca videa.",
    "Video se učitava tek kada posjetilac odabere njegov prikaz. Pokretanjem videa pristajete na povezivanje sa servisom treće strane; njegovi uslovi i politika privatnosti primjenjuju se na tu funkciju."
  ] },
  { title: "3. Vanjske poveznice", paragraphs: [
    "Linkovi mogu voditi na KrajinaTour.ba, KrajinaTour.org, KellyVektor.tech i druge partnere. Kada pređete na drugi sajt, njegova pravila privatnosti i tehnologije mogu biti drugačiji od naših."
  ] },
  { title: "4. Kako upravljati podacima?", paragraphs: [
    "U postavkama preglednika možete pregledati, ograničiti ili obrisati kolačiće i podatke sajta. To može uticati na neke funkcije. Dodatno, možete jednostavno ne otvarati vanjske video sadržaje.",
    "Ako u budućnosti uključimo neobavezno praćenje koje zahtijeva saglasnost, obezbijedićemo odgovarajući izbor prije uključivanja i način za kasnije povlačenje."
  ] },
  { title: "5. Kontakt", paragraphs: [
    "Za informacije o tehnologijama sajta i obradi podataka pišite na stazekrajine@gmail.com. Pogledajte i Politiku privatnosti."
  ] }
];

export default function KolaciciPage() {
  return <LegalDocument title="Kolačići i vanjske usluge" description="Transparentno o tehničkoj pohrani, ugrađenim sadržajima i pravima posjetilaca." sections={sections} />;
}
