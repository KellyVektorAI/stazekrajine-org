import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description: "Zaštita ličnih podataka pri kontaktu, članstvu, volontiranju i korištenju sajta Udruženja građana Staze Krajine.",
};

const sections: LegalSection[] = [
  { title: "1. Ko je odgovoran za podatke?", paragraphs: [
    "Kontrolor podataka za vlastite aktivnosti na ovom sajtu je Udruženje građana „STAZE KRAJINE“, Kolubarska 13, Banja Luka, Bosna i Hercegovina, JIB 4404626940003, matični broj 11195415. Kontakt za privatnost: stazekrajine@gmail.com.",
    "Kompanija „Kelly Vektor AI“ d.o.o. je zasebno pravno lice i tehnološki partner na određenim projektima. Samo partnerstvo ne znači automatsko dijeljenje korisničkih podataka; uloge i eventualna obrada za konkretnu uslugu određuju se zasebno."
  ] },
  { title: "2. Koje podatke obrađujemo?", bullets: [
    "Kada nam pišete e-mailom: ime ili naziv organizacije, vašu adresu, sadržaj poruke, eventualni telefon i priloge koje sami pošaljete.",
    "Kod interesovanja za članstvo, volontiranje, partnerstvo ili prijavu staze: vrstu interesovanja i podatke potrebne da razmotrimo i odgovorimo na inicijativu.",
    "Kod pristupa sajtu: ograničene tehničke i sigurnosne podatke, kao što su IP adresa, datum zahtjeva i podaci preglednika, koje mogu obrađivati hosting i mrežni servisi.",
    "Kada aktivirate ugrađeni video ili slijedite link druge platforme: relevantni podaci mogu biti obrađeni prema pravilima odredišne usluge."
  ] },
  { title: "3. Kako radi obrazac za članstvo?", paragraphs: [
    "Obrazac na stranici „Članstvo i kontakt“ trenutno priprema poruku i otvara e-mail aplikaciju na vašem uređaju (mailto). Podaci iz obrasca se u toj verziji ne šalju automatski na server udruženja. Poruka nam stiže tek ako je korisnik sam pošalje kroz svoj e-mail program.",
    "Slanje interesovanja ne znači automatski prijem u članstvo, prihvatanje partnerstva ili potvrdu učešća u projektu."
  ] },
  { title: "4. Zašto obrađujemo podatke?", paragraphs: [
    "Obrada služi da odgovorimo na upite, razmotrimo zahtjeve za članstvo i volontiranje, dogovorimo saradnju, evidentiramo dostavljene prijedloge i zaštitimo sajt. Odgovarajući pravni osnov može biti postupanje po vašem zahtjevu, saglasnost, zakonska obaveza ili legitimni interes kada je zakonom dopušten.",
    "Podaci se ne koriste za neobavezni marketing bez odgovarajućeg pravnog osnova. Ne šaljite osjetljive podatke, identifikacione dokumente ili druge nepotrebne informacije putem javnog obrasca."
  ] },
  { title: "5. Kome podaci mogu biti dostupni?", paragraphs: [
    "Ovlaštenim osobama udruženja i, kada je neophodno, pružaocima hostinga, tehničke podrške i e-mail usluga u mjeri potrebnoj za uslugu. Neke platforme imaju infrastrukturu izvan Bosne i Hercegovine; tada se moraju ispuniti odgovarajući zakonski uslovi za prijenos i zaštitu.",
    "Podatke ne prodajemo. Podaci se mogu dostaviti institucijama kada postoji pravna obaveza ili za konkretnu saradnju uz odgovarajući osnov i obavještenje."
  ] },
  { title: "6. Kolačići i vanjski sadržaji", paragraphs: [
    "Sajt može koristiti tehničke funkcije hostinga, a stranica „O nama“ uključuje video sadržaj sa YouTube servisa u režimu poboljšane privatnosti (youtube-nocookie.com). To ne isključuje sve mrežne zahtjeve niti obradu tehničkih podataka od pružaoca videa.",
    "Detalji se nalaze na zasebnoj stranici „Kolačići i vanjske usluge“. Eventualni neobavezni analitički ili marketinški alati zahtijevaju tehničku provjeru i odgovarajući izbor korisnika prije aktivacije."
  ] },
  { title: "7. Koliko dugo čuvamo podatke?", paragraphs: [
    "Poruke i prijave interesa zadržavamo samo dok su potrebne za komunikaciju, vođenje relevantne aktivnosti ili ispunjavanje zakonskih obaveza. Rokovi za računovodstvene ili formalne članske evidencije mogu biti drugačiji i uređuju se posebnim pravilima i zakonima.",
    "Rokove čuvanja tehničkih logova i podataka koje vodi e-mail ili hosting pružalac potrebno je potvrditi u konfiguraciji tih servisa; ne navodimo neprovjeren jedinstveni rok."
  ] },
  { title: "8. Vaša prava", paragraphs: [
    "U skladu sa Zakonom o zaštiti ličnih podataka Bosne i Hercegovine možete zatražiti pristup, ispravku, brisanje, ograničenje obrade, prenosivost gdje je primjenjiva, uložiti prigovor i povući saglasnost za obradu zasnovanu na saglasnosti.",
    "Za ostvarivanje prava pišite na stazekrajine@gmail.com. Takođe se možete obratiti Agenciji za zaštitu ličnih podataka u Bosni i Hercegovini."
  ] },
  { title: "9. Povezani portali i izmjene politike", paragraphs: [
    "KrajinaTour.ba je urednički turistički vodič, KrajinaTour.org interaktivna turistička platforma, a KellyVektor.tech poslovni portal tehnološkog partnera. Svaki povezani portal može imati zasebnog kontrolora i vlastitu politiku privatnosti.",
    "Politiku ažuriramo kada se promijene funkcije sajta, tokovi podataka ili relevantni propisi. Datum revizije nalazi se iznad ovog teksta."
  ] }
];

export default function PrivatnostPage() {
  return <LegalDocument title="Politika privatnosti" description="Kako Udruženje građana „Staze Krajine“ postupa s podacima posjetilaca, zainteresovanih članova, volontera i partnera." sections={sections} />;
}
