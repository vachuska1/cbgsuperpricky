import { Header } from "@/components/header"
import { ImageSlider } from "@/components/image-slider"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ContactBar } from "@/components/ContactBar"

// Placeholder images for the sliders
const descriptionImages = Array.from(
  { length: 16 },
  (_, i) => `/Description/Description${i + 1}.jpg?height=400&width=600&text=Description${i + 1}`,
)
const presentationImages = Array.from(
  { length: 14 },
  (_, i) => `/Presentation/Presentation${i + 1}.png?height=400&width=600&text=Presentation${i + 1}`,
)
const sustainabilityImages = Array.from(
  { length: 13 },
  (_, i) => `/Sustainability/Sustainability${i + 1}.jpg?height=400&width=600&text=Sustainability${i + 1}`,
)
const trafficImages = Array.from({ length: 5 }, (_, i) => `/Traffic/Traffic${i + 1}.jpg?height=400&width=600&text=Traffic${i + 1}`)

export default function Home() {
  return (
    <div className="root-container">
    <main className="min-h-screen flex flex-col">
      {/* Hero Section with Gradient Background */}
      <section className="gradient-background">
        <Header />
      </section>

      {/* Popis systému */}
      <section id="popis-systemu" className="section-gradient-1 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              CBG EasyPan<sup>®</sup>
            </h2>
            <p className="text-xl text-white mt-2">Systémové řešení pro nejrychlejší výstavbu protipožárních příček</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <p className="mb-4">
                Protipožární kompozitní sendvičový panel CBG EasyPan<sup>®</sup> 100 se zabudovanými kovovými profily je
                nejmodernějším řešením pro rychlé budování lehkých nenosných příček. Systém příček CBG EasyPan
                <sup>®</sup> 100 je ultralehké, rychlé a efektivní řešení pro vytvoření protipožární izolované nenosné
                příčky s plošnou hmotností pouze 17,5 kg/m². Díky použití patentované technologie ve výrobním procesu,
                která dává produktu endotermické vlastnosti, má systém vysoké protipožární schopnosti. Systém se skládá
                z kompozitních sendvičových panelů na bázi čedičových výrobků se zabudovanými kovovými profily,
                podlahovými a stropními kovovými CBG EasyPan<sup>®</sup> profily. Po montáži a jemném vyplnění spár
                nevyžaduje taková příčka žádné další úpravy jako například broušení a lze ji ihned natírat, tapetovat
                nebo obkládat. Panely CBG EasyPan<sup>®</sup> 100 jsou nehořlavé (A2) dle EN-13 501, odolávají
                mechanickému zatížení dle DIN-4103 a jsou dodávány jako kompletní sada pro vybudování požárního oddělení
                místností v budovách s požadavky na požární odolnost. Systém CBG EasyPan<sup>®</sup> byl testován a
                schválen až do tříd požární ochrany E-90/120, El-90/120, EW-90/120. Systém lze použít téměř ve všech
                kategoriích budov, včetně veřejných budov, hotelů, nemocnic, ale také v obytných a kancelářských
                prostorách.
              </p>
            </div>

            <div className="h-[400px]">
              <ImageSlider images={descriptionImages} alt="Popis systému" />
            </div>
          </div>
        </div>
      </section>

      {/* Montáž */}
      <section id="montaz" className="section-gradient-2 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="h-[400px] order-2 md:order-1">
              <ImageSlider images={presentationImages} alt="Montáž" />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4">Montáž</h2>
              <p className="mb-6">
                Modulární konstrukce rychle proveditelné protipožární příčky se zvukovými a tepelně-izolačními
                vlastnostmi CBG EasyPan<sup>®</sup> 100 umožňuje snadnou montáž i demontáž jednotlivých panelů a prvků
                celého systému během i po skončení doby užívání, při technické kontrole a v případě potřeby oprav.
                Jednotlivé prvky systému mohou být znovu opakovatelně použity při stavbě jiných objektů.
              </p>

              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ncmGkDvDSKk"
                  title="Montáž CBG EasyPan"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Udržitelnost */}
      <section id="udrzitelnost" className="section-gradient-3 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">Udržitelnost</h2>
              <h3 className="text-xl font-semibold mb-2 text-white">Systémové řešení pro udržitelnost</h3>
              <p className="mb-4 text-white">
                Produkty od CBG Composites GmbH jsou téměř 100% přírodního původu. Používané technologické procesy
                nejsou škodlivé pro lidské zdraví nebo životní prostředí. Hotové výrobky nejsou škodlivé pro zdraví nebo
                životní prostředí. Při používání našich produktů nedochází k žádnému úniku škodlivých látek. Dosahujeme
                téměř 100% možné recyklovatelnosti většiny našich produktů, znovupoužitelnosti a cirkularity vybraných
                klíčových produktů.
              </p>
            </div>

            <div className="h-[400px]">
              <ImageSlider images={sustainabilityImages} alt="Udržitelnost" />
            </div>
          </div>
        </div>
      </section>

{/* Příklad ze stavby – Hudební škola Lisabon */}
<section id="hudebni-skola" className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      {/* Obrázky vlevo */}
      <div className="w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
        <ImageSlider images={[
          "/Show/Show_1.jpg",
          "/Show/Show_2.jpg",
          "/Show/Show_3.jpg",
          "/Show/Show_4.jpg",
          "/Show/Show_5.jpg",
          "/Show/Show_6.jpg",
          "/Show/Show_7.jpg"
        ]} alt="Hudební škola Lisabon" />
      </div>

      {/* Text napravo */}
      <div>
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Fotogalerie z montáže</h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Hudební škola Lisabon</h3>
        <p className="mb-4 text-gray-600">
          Systém CBG EasyPan<sup>®</sup> byl úspěšně použit při výstavbě hudební školy v Lisabonu. Díky jeho nízké hmotnosti,
          jednoduché montáži a výborným akustickým vlastnostem byl ideální volbou pro vytvoření protipožárních oddělení mezi učebnami
          a koncertními sály. Projekt potvrdil efektivitu a kvalitu tohoto řešení v reálných podmínkách moderní výstavby.
        </p>
      </div>

    </div>
  </div>
</section>




      {/* Certifikace */}
      <section id="certifikace" className="section-gradient-4 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">Certifikace</h2>
              <p className="mb-6 text-white">
                Certifikace výrobku CBG EasyPan<sup>®</sup> 100 - ETA Evropské technické posouzení
              </p>
              <p className="mb-6 text-white">
                Unikátní příčky CBG EasyPan<sup>®</sup> 100 mají veškerou dokumentaci pro uvedení na trh a splňují
                nejnáročnější požadavky zákazníků.
              </p>
            </div>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <Link href="/Certification/ER_220649.pdf" className="text-blue hover:underline hover:text-blue-200">
                    Zpráva o vyhodnocení výrobku CBG EasyPan<sup>®</sup> 100
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <Link href="/Certification/ETA_220649.pdf" className="text-blue hover:underline hover:text-blue-200">
                    Evropské technické posouzení výrobku CBG EasyPan<sup>®</sup> 100
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Balení a přeprava */}
      <section id="baleni-a-preprava" className="section-gradient-1 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="h-[400px] order-2 md:order-1">
              <ImageSlider images={trafficImages} alt="Balení a přeprava" />
            </div>

            <div className="order-1 md:order-2 text-white">
              <h2 className="text-3xl font-bold mb-4">Balení a přeprava</h2>
              <p>
                Panely CBG EasyPan<sup>®</sup> 100 se balí po 11 panelech, balených ve fólii do speciálních dřevěných
                nevratných palet, které umožňují stohování až 3 palet vertikálně na sebe. Dopravu pro odběratele
                organizujeme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakty */}
      <section id="kontakty" className="section-gradient-2 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Kontakty</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Korespondenční adresa a laboratoř</h3>
                <p>
                  Mayerova 1067
                  <br />
                  34101 Horažďovice
                  <br />
                  Česká Republika
                </p>
              </div>

              <div className="mb-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Sídlo společnosti</h3>
                <p>
                  Ekostat a.s.
                  <br />
                  IČO: 28131070
                  <br />
                  Mánesova 459/46
                  <br />
                  37001 České Budějovice
                  <br />
                  Česká Republika
                </p>
              </div>

              <div className="text-white">
                <h3 className="text-xl font-semibold mb-2">Odpovědné osoby</h3>
                <p className="mb-2">
                  Dr. Stanislav Pohořal: +420 603 570 572
                  <br />
                  <a href="mailto:pohoral@ekostat.cz" className="text-blue-600 hover:underline">
                    pohoral@ekostat.cz
                  </a>
                </p>
                <p>
                  Ing. Václav Vachuška, Ph.D.: +420 602 305 209
                  <br />
                  <a href="mailto:obchod@ekostat.cz" className="text-blue-600 hover:underline">
                    obchod@ekostat.cz
                  </a>
                </p>
              </div>
            </div>

            <div>
              <Card className="bg-white/90">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Kontaktní formulář</h3>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} SuperPricky.cz - Ekostat a.s. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </main>
    <ContactBar />
    </div>    
  )
}
