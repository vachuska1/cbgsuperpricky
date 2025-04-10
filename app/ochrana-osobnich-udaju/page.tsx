import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PersonalDataProtection() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header with gradient background */}
      <div className="gradient-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-white text-2xl font-bold">
              CBG EasyPan<sup>®</sup>
            </Link>
            <Button asChild variant="outline" className="bg-white/20 hover:bg-white/30 text-white border-white">
              <Link href="/">Zpět na hlavní stránku</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Ochrana osobních údajů</h1>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Úvod</h2>
          <p>
          Společnost EKOSTAT a.s., se sídlem Mánesova 459/46, 370 01 České Budějovice, IČO: 28131070, zapsaná v obchodním rejstříku vedeném Krajským soudem v Českých Budějovicích, oddíl B, vložka 1954 (dále jen „Správce“), zpracovává osobní údaje v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 ze dne 27. dubna 2016 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů a o zrušení směrnice 95/46/ES (obecné nařízení o ochraně osobních údajů) (dále jen „GDPR“) a dalšími právními předpisy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Rozsah zpracování osobních údajů</h2>
          <p>
            Správce zpracovává osobní údaje, které jste mu poskytli prostřednictvím kontaktního formuláře na webových
            stránkách superpricky.cz. Jedná se o následující údaje:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Jméno a příjmení</li>
            <li>E-mailová adresa</li>
            <li>Telefonní číslo</li>
            <li>Obsah zprávy</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Účel zpracování osobních údajů</h2>
          <p>Správce zpracovává Vaše osobní údaje pro následující účely:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Zodpovězení Vašeho dotazu nebo požadavku</li>
            <li>Komunikace s Vámi ohledně produktů a služeb</li>
            <li>Plnění zákonných povinností</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Doba zpracování osobních údajů</h2>
          <p>
            Správce zpracovává Vaše osobní údaje po dobu nezbytně nutnou k naplnění účelu zpracování, nejdéle však po
            dobu 3 let od jejich poskytnutí, pokud neexistuje jiný zákonný důvod pro jejich další zpracování.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Příjemci osobních údajů</h2>
          <p>
            Správce nepředává Vaše osobní údaje třetím stranám, s výjimkou případů, kdy je to nezbytné pro splnění
            zákonných povinností nebo pro ochranu oprávněných zájmů Správce.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Vaše práva</h2>
          <p>V souvislosti se zpracováním Vašich osobních údajů máte následující práva:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Právo na přístup k osobním údajům</li>
            <li>Právo na opravu nepřesných nebo neúplných osobních údajů</li>
            <li>Právo na výmaz osobních údajů</li>
            <li>Právo na omezení zpracování osobních údajů</li>
            <li>Právo na přenositelnost údajů</li>
            <li>Právo vznést námitku proti zpracování</li>
            <li>Právo odvolat souhlas se zpracováním osobních údajů</li>
            <li>Právo podat stížnost u dozorového úřadu</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Kontaktní údaje</h2>
          <p>
            V případě jakýchkoliv dotazů nebo žádostí týkajících se zpracování Vašich osobních údajů se můžete obrátit
            na Správce:
          </p>
          <p className="mb-4">
            Ekostat a.s.
            <br />
            Mánesova 459/46
            <br />
            37001 České Budějovice
            <br />
            Česká Republika
          </p>
          <p className="mb-4">
            E-mail:{" "}
            <a href="mailto:vachuska@ekostat.cz" className="text-blue-600 hover:underline">
              vachuska@ekostat.cz
            </a>
            <br />
            Telefon: +420 602 305 209
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Závěrečná ustanovení</h2>
          <p>
            Tato informace o zpracování osobních údajů je platná a účinná od 1. 1. 2023. Správce si vyhrazuje právo tuto
            informaci kdykoliv aktualizovat.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} SuperPricky.cz - Ekostat a.s. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </main>
  )
}
