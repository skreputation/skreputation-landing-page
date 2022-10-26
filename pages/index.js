import Head from 'next/head';
import Hero from '../components/shared/Hero';
import Footer from '../components/shared/Footer';
import Features from '../components/shared/Features';
import DescriptionCard from '../components/shared/DescriptionCard';

export default function Home() {
  return (
    <div className="w-full h-full bg-white">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SKreputation</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Notus Design System PRO by Creative Tim | Premium UI Kit and Admin for Tailwind CSS" />
        <link rel="shortcut icon" href="./assets/img/favicon.ico" />
        <link rel="apple-touch-icon" sizes="76x76" href="./assets/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="./assets/styles/tailwind.min.css" />
        <link rel="stylesheet" href="./assets/styles/highlight.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <body class="text-blueGray-700 antialiased">
        <div class="bg-white docs-components-wrapper">
          <Hero />

          <Features
            subtitle="riprendi in mano la tua vita"
            title="Difendi e potenzia la tua reputazione digitale "
            description="Se sei atterrato su questa pagina, molto probabilmente stai subendo qualche situazione spiacevole per colpa di contenuti presenti online e per questo motivo di seguito troverai informazioni utili al tuo bisogno specifico ma per qualsiasi informazione puoi raggiungermi anche per telefono."
            cards={[
              {
                tailwindColor: 'red',
                icon: 'fa-award',
                title: 'Cancellazione Rapida',
                description: 'Puoi ottienere la cancellazione dei contenuti web che danneggiano la tua reputazione, immagine ed il prestigio online.',
              },
              {
                tailwindColor: 'lightBlue',
                icon: 'fa-retweet',
                title: 'Eliminazione materiali dannosi',
                description:
                  'Puoi richiedere il nostro servizio innovativo di rimozione dei contenuti negativi per ottenere la cancellazione di foto, video, siti web, blog, articoli di giornale, di informazioni personali, di account digitali come i social network attraverso il diritto all’oblio ed altre tecniche avanzate di digital marketing',
              },
              {
                tailwindColor: 'emerald',
                icon: 'fa-fingerprint',
                title: 'Guidato passo passo',
                description: 'Verrai seguito dal nostro team di specialisti al fine di ottenere il risultato desiderato',
              },
            ]}
          />

          <DescriptionCard
            descTitle="Perchè difendere la reputazione online con SKReputation?"
            desc1="SKReputation è una delle pochissime realtà specializzate nella difesa della Reputazione online di Aziende e Persone. Il nostro network è formato da grandi professionisti."
            desc2="Ogni giorno cooperano per tutelare l’immagine e la reputazione di centinaia di clienti in Italia, Europa ed America.  "
            descFooter="Consulenza e Formazione continua"
            imageCard="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
            cardTitle="Una delle poche realtà in Italia"
            cardDesc="I clienti che si rivolgono a SKReputations, possono contare sul valore aggiunto di essere seguiti dalla figura dell’E-Reputation Manager, ovvero il manager della reputazione online dei clienti.Questa figura professionale è specializzata nella costruzione dell’identità digitale e nella cura, difesa della reputazione e presenza digitale di persone ed aziende."
          />
          <DescriptionCard
            descTitle="Quando è possibile cancellare un contenuto dal web?"
            desc1="Quando vi è un’esigenza di cancellare dal web articoli relativi a fatti passati che non rappresentano più l’identità e la realtà attuale e che provocano danni gravi e perpetui alla reputazione. "
            desc2="Alla serenità della persona vittima di un’esposizione forzata di eventi che non hanno più pertinenza e che possono essere dimenticati grazie alla normativa Italiana ed Europea del diritto all’oblio."
            descFooter="Richiedi ora una rimozione di link e salva la tua immagine"
            imageCard="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
            cardTitle="Quali contenuti puoi rimuovere dal web?"
            cardDesc="puoi richiedere la rimozione di articoli di giornale, news, articoli blog,
            puoi richiedere di anonimizzare o cancellare i tuoi dati personali come nome e cognome.
            Puoi richiedere la cancellazione di foto e video che non hanno il consenso al pubblico utilizzo."
            reverse
          />

          {/* TREND BANNER */}
          <div className="w-full">
            <section className="relative block">
              <div className="bg-blueGray-900 py-24">
                <div className="container mx-auto px-4">
                  <div className="mb-12 flex flex-wrap -mx-4 justify-center">
                    <div className="px-4 relative w-full lg:w-8/12 text-center">
                      <h6 className="mb-2 font-bold uppercase text-blueGray-200">Trend sulla rimozione</h6>
                      <h3 className="text-3xl font-bold mt-3 mb-1 text-white">Contenuti dal web 2014-19</h3>
                      <p className="mt-2 mb-4 text-xl leading-relaxed text-white opacity-75">
                        Secondo le fonti ufficiali di Google, i richiedenti alla rimozione di contenuti negativi dai motori di ricerca dal 2014 al
                        2019 sono circa 70.000. I contenuti soggetti a rimozione sono 300.000 ed il ritmo di richieste aumenta del 60% ogni 12 mesi.
                      </p>
                      <p className="mt-2 mb-4 text-xl leading-relaxed text-white opacity-75">
                        Il dato più interessante però, è che il 36% dei contenuti e richiedenti sono stati registrati dal 2018 con l’entrata in vigore
                        del GDPR che rafforza il diritto all’oblio, ovvero il diritto ad essere dimenticati dal web.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pointer-events-none overflow-hidden h-70-px bg-blueGray-900" style={{ transform: 'translateZ(0px)' }}>
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  fill="#f1f5f9"
                  x="0"
                  y="0"
                >
                  <polygon className="text-blueGray-100 fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg>
              </div>
            </section>
          </div>

          <DescriptionCard
            descTitle="E' possibile richiedere la cancellazione di foto e video?"
            desc1="Puoi richiedere la rimozione delle immagini ed i video che ti ritraggono.  "
            desc2="Come ogni caso, è necessario studiare la strategia adeguata e comprendere se è stata firmata una liberatoria riconoscendo un compenso oppure un titolo di gratuità. "
            descFooter="Richiedi ora una rimozione di foto e video"
            imageCard="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
            cardTitle="Una nostra storia"
            cardDesc="Per esempio è capitato di poter aiutare ragazze che in passato hanno partecipato a concorsi di bellezza oppure sui social hanno pubblicato foto o video che sono state ripresi da altri soggetti, anche da YouTube, e poi si sono sposati ed i mariti gelosi volevano che la ragazza in questione cancellasse tutte le sue immagini e suoi video passati.  "
          />
          <DescriptionCard
            descTitle="Le banche controllano la reputazione online degli imprenditori e politici prima di concedere un fido?"
            desc1="La reputazione digitale della persona e dell’azienda diventa sempre più importante poichè condiziona in modo preponderante gli eventi della vita di tutti i soggetti. Alcuni esempi sono gli imprenditori, i politici oppure i personaggi pubblici che esposti mediaticamente, hanno una massiccia quantità di informazioni sul web."
            desc2=" Le banche prima di decidere se attivare un prestito, un fido ed altre tipologie di atti fiduciari, utilizzano un reparto speciale con tecnologie avanzate per esaminare la reputazione online di ogni richiedente e cliente per prendere infine una decisione.  "
            descFooter="Proteggi la tua reputazione come imprenditore, richiedi ora una consulenza"
            imageCard="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
            cardTitle="Proteggere la propria indole imprenditoriale"
            cardDesc="Succede spesso di vedere imprenditori non ottenere fidi bancari per via di notizie diffamanti sul web a loro carico ed è per questo che è importante intervenire per proteggere la reputazione online. "
            reverse
          />

          {/* TREND BANNER */}
          <div className="w-full">
            <section className="relative block">
              <div className="bg-blueGray-900 py-24">
                <div className="container mx-auto px-4">
                  <div className="mb-12 flex flex-wrap -mx-4 justify-center">
                    <div className="px-4 relative w-full lg:w-8/12 text-center">
                      <h6 className="mb-2 font-bold uppercase text-blueGray-200">Reputazione online negativa?</h6>
                      <h3 className="text-3xl font-bold mt-3 mb-1 text-white">Niente visto e porto d'armi</h3>
                      <p className="mt-2 mb-4 text-xl leading-relaxed text-white opacity-75">
                        Un altro esempio proviene dagli Stati Uniti, dove facciamo spesso consulenza per la brand reputation di aziende, per ricevere
                        il porto d’armi le forze dell’ordine esaminano i social network del richiedente per intuire se il soggetto è nello stato
                        psicologico per poter brandire un’arma da fuoco in modo equilibrato e non pericoloso per la società.
                      </p>
                      <p className="mt-2 mb-4 text-xl leading-relaxed text-white opacity-75">
                        Allo stesso modo, le autorità ed i servizi segreti degli Stati Uniti per rilasciare il visto americano, mettono sotto esame i
                        social network ed ovviamente la reputazione digitale del soggetto che richiede la cittadinanza.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pointer-events-none overflow-hidden h-70-px bg-blueGray-900" style={{ transform: 'translateZ(0px)' }}>
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  fill="#f1f5f9"
                  x="0"
                  y="0"
                >
                  <polygon className="text-blueGray-100 fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg>
              </div>
            </section>
          </div>

          <div className="w-full">
            <section className="relative block">
              <div className="w-full pointer-events-none overflow-hidden h-70-px bg-blueGray-100" style={{ transform: 'translateZ(0px)' }}>
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  fill="#0f172a"
                  x="0"
                  y="0"
                >
                  <polygon className="text-blueGray-900 fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg>
              </div>
              <div className="bg-blueGray-900 py-24">
                <div className="container mx-auto px-4">
                  <div className="mb-12 flex flex-wrap -mx-4 justify-center">
                    <div className="px-4 relative w-full lg:w-8/12 text-center">
                      <h6 className="mb-2 font-bold uppercase text-blueGray-200">On the coastline</h6>
                      <h3 className="text-3xl font-bold mt-3 mb-1 text-white">We are missing the summer</h3>
                      <p className="mt-2 mb-4 text-xl leading-relaxed text-white opacity-75">
                        We're waiting for the weather to warm up so that we can go to the coastline. We really miss the summertime, our second home
                        the coastline.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-12 justify-center">
                    <div className="w-full lg:w-3/12 px-4 text-center">
                      <div className="text-blueGray-900 bg-white p-3 w-12 h-12 shadow-lg rounded-full inline-flex items-center justify-center">
                        <i className="fas fa-medal text-xl"></i>
                      </div>
                      <h6 className="text-white text-xl mt-5 font-semibold">Excelent Services</h6>
                      <p className="text-blueGray-500 mt-2 mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </p>
                    </div>
                    <div className="w-full lg:w-3/12 px-4 text-center">
                      <div className="text-blueGray-900 bg-white p-3 w-12 h-12 shadow-lg rounded-full inline-flex items-center justify-center">
                        <i className="fas fa-poll text-xl"></i>
                      </div>
                      <h6 className="text-white text-xl mt-5 font-semibold">Grow your market</h6>
                      <p className="text-blueGray-500 mt-2 mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </p>
                    </div>
                    <div className="w-full lg:w-3/12 px-4 text-center">
                      <div className="text-blueGray-900 bg-white p-3 w-12 h-12 shadow-lg rounded-full inline-flex items-center justify-center">
                        <i className="fas fa-lightbulb text-xl"></i>
                      </div>
                      <h6 className="text-white text-xl mt-5 font-semibold">Launch time</h6>
                      <p className="text-blueGray-500 mt-2 mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="w-full">
            <section className="relative block py-24 bg-blueGray-900">
              <div className="container mx-auto px-4">
                <div className="mb-12 flex flex-wrap -mx-4 justify-center">
                  <div className="px-4 relative w-full lg:w-8/12 text-center">
                    <span className="text-teal-500 bg-teal-200 text-xs font-bold inline-block py-1 uppercase last:mr-0 mr-1 leading-tight rounded px-2">
                      Message us
                    </span>
                    <h3 className="text-3xl font-bold mt-3 mb-1 text-white">Type in the bellow form</h3>
                    <p className="mt-2 mb-4 text-xl leading-relaxed text-white opacity-75">
                      They say there's no future for the street rascals, nothing for them, leave them to fall. But it isn't always how you would like
                      it to be, especially when you do nothing for yourself.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                      <div className="flex-auto p-5 lg:p-10">
                        <h4 className="text-2xl font-semibold">Want to work with us?</h4>
                        <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">Complete this form and we will get back to you in 24 hours.</p>
                        <div className="mt-8">
                          <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-500 text-xs font-bold mb-2 ml-1">Full Name</label>
                            <input
                              placeholder="Full Name"
                              type="text"
                              className="px-3 py-3 placeholder-blueGray-400 text-blueGray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 border-transparent"
                            />
                          </div>
                          <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-500 text-xs font-bold mb-2 ml-1">Email</label>
                            <input
                              placeholder="Email"
                              type="email"
                              className="px-3 py-3 placeholder-blueGray-400 text-blueGray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 border-transparent"
                            />
                          </div>
                          <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-500 text-xs font-bold mb-2 ml-1">Message</label>
                            <textarea
                              placeholder="Type a message..."
                              type="textarea"
                              rows="4"
                              cols="80"
                              className="px-3 py-3 placeholder-blueGray-400 text-blueGray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 border-transparent"
                            ></textarea>
                          </div>
                        </div>
                        <div className="text-center mt-6">
                          <button className="text-xs px-4 py-2 shadow hover:shadow-md text-white bg-blueGray-800 border-blueGray-800 active:bg-blueGray-900 active:border-blueGray-900 rounded outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <Footer />
        </div>
      </body>
    </div>
  );
}
