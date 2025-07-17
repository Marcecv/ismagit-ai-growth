import { ScrollArea } from "@/components/ui/scroll-area";

export const PrivacyPolicy = () => {
  return (
    <ScrollArea className="h-[600px] pr-4">
      <div className="space-y-6 text-sm leading-relaxed">
        <div>
          <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-4">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
          </p>
        </div>

        <section>
          <h2 className="text-lg font-semibold mb-3">1. Titolare del Trattamento</h2>
          <p>
            Il Titolare del trattamento dei dati personali è <strong>Ismagit</strong>, con sede legale in 
            Via Ippocrate 327, Terni (TR), Italia.
          </p>
          <p className="mt-2">
            <strong>Contatti:</strong><br />
            Email: <a href="mailto:team@ismagit.it" className="text-primary hover:underline">team@ismagit.it</a><br />
            Sito web: <a href="https://ismagit.com" className="text-primary hover:underline">ismagit.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">2. Tipologie di Dati Raccolti</h2>
          <p>I dati personali che possiamo raccogliere includono:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Dati identificativi:</strong> nome, cognome, indirizzo email, numero di telefono</li>
            <li><strong>Dati aziendali:</strong> nome dell'azienda, settore di attività, dimensioni aziendali</li>
            <li><strong>Dati tecnici:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine visitate</li>
            <li><strong>Dati di marketing:</strong> preferenze di comunicazione, interazioni con i nostri contenuti</li>
            <li><strong>Cookie e tecnologie simili:</strong> dati raccolti automaticamente durante la navigazione</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">3. Finalità e Base Giuridica del Trattamento</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">3.1 Esecuzione del Contratto</h3>
              <p>Trattiamo i vostri dati per fornire i nostri servizi di automazione marketing basati su IA, inclusi:</p>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Erogazione dei servizi richiesti</li>
                <li>Gestione dell'account cliente</li>
                <li>Supporto tecnico e assistenza clienti</li>
                <li>Fatturazione e gestione pagamenti</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">3.2 Interesse Legittimo</h3>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Miglioramento dei nostri servizi e sviluppo di nuove funzionalità</li>
                <li>Analisi statistiche e di performance</li>
                <li>Sicurezza e prevenzione frodi</li>
                <li>Marketing diretto per prodotti e servizi simili</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">3.3 Consenso</h3>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Invio di comunicazioni promozionali via email</li>
                <li>Utilizzo di cookie non essenziali</li>
                <li>Profilazione per marketing personalizzato</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">3.4 Obbligo Legale</h3>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Adempimenti fiscali e contabili</li>
                <li>Rispetto di normative settoriali</li>
                <li>Conservazione documenti per finalità di legge</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">4. Modalità di Raccolta Dati</h2>
          <p>I dati vengono raccolti attraverso:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Moduli di contatto e registrazione sul sito web</li>
            <li>Interazioni dirette (email, telefonate, chat)</li>
            <li>Utilizzo della piattaforma e dei servizi</li>
            <li>Cookie e tecnologie di tracciamento</li>
            <li>Fonti pubbliche e partner commerciali (solo con consenso)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">5. Condivisione dei Dati con Terzi</h2>
          <p>I vostri dati possono essere condivisi con:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Fornitori di servizi cloud:</strong> per hosting e infrastruttura tecnica</li>
            <li><strong>Processori di pagamento:</strong> per gestire transazioni finanziarie</li>
            <li><strong>Servizi di email marketing:</strong> per l'invio di comunicazioni autorizzate</li>
            <li><strong>Strumenti di analisi:</strong> per statistiche e miglioramento servizi</li>
            <li><strong>Consulenti legali e fiscali:</strong> per adempimenti normativi</li>
            <li><strong>Autorità competenti:</strong> quando richiesto dalla legge</li>
          </ul>
          <p className="mt-2">
            Tutti i terzi sono vincolati da accordi di protezione dati e trattano le informazioni 
            solo per le finalità specificate.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">6. Trasferimenti Internazionali</h2>
          <p>
            Alcuni nostri fornitori di servizi potrebbero essere localizzati al di fuori dell'UE. 
            In tali casi, garantiamo che il trasferimento avvenga solo verso Paesi che offrono 
            un livello adeguato di protezione o attraverso garanzie appropriate come:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Decisioni di adeguatezza della Commissione Europea</li>
            <li>Clausole contrattuali standard</li>
            <li>Certificazioni e codici di condotta approvati</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">7. Periodo di Conservazione</h2>
          <p>I dati vengono conservati per i seguenti periodi:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Dati contrattuali:</strong> per tutta la durata del rapporto + 10 anni</li>
            <li><strong>Dati di marketing:</strong> fino alla revoca del consenso o 2 anni dall'ultimo contatto</li>
            <li><strong>Dati tecnici:</strong> massimo 24 mesi</li>
            <li><strong>Cookie:</strong> secondo le impostazioni specifiche (da 24 ore a 24 mesi)</li>
            <li><strong>Documenti fiscali:</strong> 10 anni come previsto dalla normativa</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">8. I Vostri Diritti</h2>
          <p>In qualità di interessato, avete il diritto di:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Accesso:</strong> ottenere conferma del trattamento e copia dei vostri dati</li>
            <li><strong>Rettifica:</strong> correggere dati inesatti o incompleti</li>
            <li><strong>Cancellazione:</strong> richiedere la rimozione dei dati (diritto all'oblio)</li>
            <li><strong>Limitazione:</strong> limitare il trattamento in specifiche circostanze</li>
            <li><strong>Portabilità:</strong> ricevere i dati in formato strutturato e trasferirli</li>
            <li><strong>Opposizione:</strong> opporvi al trattamento basato su interesse legittimo</li>
            <li><strong>Revoca consenso:</strong> revocare il consenso in qualsiasi momento</li>
            <li><strong>Reclamo:</strong> presentare reclamo al Garante Privacy</li>
          </ul>
          <p className="mt-2">
            Per esercitare i vostri diritti, contattate: 
            <a href="mailto:team@ismagit.it" className="text-primary hover:underline ml-1">team@ismagit.it</a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">9. Sicurezza dei Dati</h2>
          <p>Implementiamo misure tecniche e organizzative appropriate per proteggere i vostri dati:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Crittografia dei dati in transito e a riposo</li>
            <li>Controlli di accesso e autenticazione multi-fattore</li>
            <li>Monitoraggio continuo e sistemi di rilevamento intrusioni</li>
            <li>Backup regolari e piani di disaster recovery</li>
            <li>Formazione continua del personale sulla privacy</li>
            <li>Valutazioni periodiche di sicurezza e penetration testing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">10. Cookie e Tecnologie di Tracciamento</h2>
          <p>Il nostro sito utilizza diversi tipi di cookie:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Cookie essenziali:</strong> necessari per il funzionamento del sito</li>
            <li><strong>Cookie di performance:</strong> per analizzare l'utilizzo del sito</li>
            <li><strong>Cookie di marketing:</strong> per personalizzare pubblicità e contenuti</li>
          </ul>
          <p className="mt-2">
            Potete gestire le preferenze cookie attraverso le impostazioni del browser o 
            il banner cookie presente sul sito.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">11. Minori</h2>
          <p>
            I nostri servizi non sono destinati a minori di 16 anni. Non raccogliamo 
            consapevolmente dati personali da minori. Se venissimo a conoscenza di aver 
            raccolto dati di un minore, procederemo immediatamente alla cancellazione.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">12. Modifiche alla Privacy Policy</h2>
          <p>
            Questa Privacy Policy può essere aggiornata periodicamente. Le modifiche sostanziali 
            verranno comunicate attraverso il sito web o via email. La data di ultimo aggiornamento 
            è indicata in testa al documento.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">13. Contatti</h2>
          <p>
            Per qualsiasi domanda relativa a questa Privacy Policy o al trattamento 
            dei vostri dati personali, potete contattarci:
          </p>
          <div className="mt-2 p-4 bg-muted rounded-lg">
            <p><strong>Ismagit</strong></p>
            <p>Via Ippocrate 327, Terni (TR), Italia</p>
            <p>Email: <a href="mailto:team@ismagit.it" className="text-primary hover:underline">team@ismagit.it</a></p>
            <p>Sito: <a href="https://ismagit.com" className="text-primary hover:underline">ismagit.com</a></p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">14. Autorità di Controllo</h2>
          <p>
            In caso di controversie, potete rivolgervi al Garante per la Protezione 
            dei Dati Personali:
          </p>
          <div className="mt-2 p-4 bg-muted rounded-lg">
            <p><strong>Garante per la Protezione dei Dati Personali</strong></p>
            <p>Piazza di Monte Citorio, 121 - 00186 Roma</p>
            <p>Tel: +39 06 69677 1</p>
            <p>Email: garante@gpdp.it</p>
            <p>Sito: <a href="https://www.garanteprivacy.it" className="text-primary hover:underline">www.garanteprivacy.it</a></p>
          </div>
        </section>
      </div>
    </ScrollArea>
  );
};