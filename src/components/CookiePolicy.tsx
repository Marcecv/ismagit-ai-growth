import React from 'react';

export const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 text-foreground">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-primary">Cookie Policy</h1>
        <p className="text-sm text-muted-foreground">
          Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">1. Informazioni generali</h2>
        <p className="text-sm leading-relaxed">
          Il presente documento descrive la Cookie Policy di <strong>ismagit</strong> (il "Sito"), 
          di proprietà di ismagit, con sede in Via Ippocrate 327, Terni (TR), Italia. 
          Per qualsiasi domanda relativa a questa policy, è possibile contattarci all'indirizzo 
          email <a href="mailto:team@ismagit.it" className="text-primary hover:underline">team@ismagit.it</a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">2. Cosa sono i cookie</h2>
        <p className="text-sm leading-relaxed">
          I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell'utente 
          quando visita un sito web. Permettono al sito di riconoscere il dispositivo e memorizzare 
          alcune informazioni sulle preferenze o azioni passate dell'utente.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">3. Tipologie di cookie utilizzati</h2>
        
        <div className="space-y-6">
          <div className="border border-border rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-2">Cookie Necessari</h3>
            <p className="text-sm mb-2">
              Questi cookie sono essenziali per il funzionamento del sito e non possono essere disabilitati.
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Cookie di sessione per l'autenticazione</li>
              <li>• Cookie per le preferenze di consenso</li>
              <li>• Cookie di sicurezza per prevenire attacchi CSRF</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-2">
              <strong>Base giuridica:</strong> Interesse legittimo (Art. 6(1)(f) GDPR)
            </p>
          </div>

          <div className="border border-border rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-2">Cookie di Performance</h3>
            <p className="text-sm mb-2">
              Raccolgono informazioni su come gli utenti utilizzano il sito per migliorarne le prestazioni.
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Google Analytics per statistiche anonime</li>
              <li>• Monitoraggio delle prestazioni del sito</li>
              <li>• Analisi del comportamento degli utenti</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-2">
              <strong>Base giuridica:</strong> Consenso (Art. 6(1)(a) GDPR)
            </p>
          </div>

          <div className="border border-border rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-2">Cookie di Marketing</h3>
            <p className="text-sm mb-2">
              Utilizzati per fornire pubblicità personalizzata e misurare l'efficacia delle campagne.
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Cookie di remarketing di Google Ads</li>
              <li>• Cookie di tracking per campagne pubblicitarie</li>
              <li>• Cookie per la personalizzazione dei contenuti</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-2">
              <strong>Base giuridica:</strong> Consenso (Art. 6(1)(a) GDPR)
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">4. Servizi di terze parti</h2>
        <div className="space-y-4">
          <div className="border border-border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Google Analytics</h3>
            <p className="text-sm mb-2">
              Utilizzato per analizzare il traffico del sito web e comprendere come gli utenti interagiscono con i nostri contenuti.
            </p>
            <p className="text-xs text-muted-foreground">
              <strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a>
            </p>
          </div>

          <div className="border border-border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Google Ads</h3>
            <p className="text-sm mb-2">
              Utilizzato per mostrare annunci pubblicitari personalizzati e misurare l'efficacia delle campagne.
            </p>
            <p className="text-xs text-muted-foreground">
              <strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a>
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">5. I tuoi diritti</h2>
        <p className="text-sm leading-relaxed">
          In conformità al GDPR, hai i seguenti diritti riguardo ai tuoi dati personali:
        </p>
        <ul className="text-sm space-y-2 ml-4">
          <li>• <strong>Diritto di accesso:</strong> Puoi richiedere informazioni sui dati che trattiamo</li>
          <li>• <strong>Diritto di rettifica:</strong> Puoi richiedere la correzione di dati inesatti</li>
          <li>• <strong>Diritto di cancellazione:</strong> Puoi richiedere la cancellazione dei tuoi dati</li>
          <li>• <strong>Diritto di limitazione:</strong> Puoi richiedere la limitazione del trattamento</li>
          <li>• <strong>Diritto alla portabilità:</strong> Puoi ricevere i tuoi dati in formato strutturato</li>
          <li>• <strong>Diritto di opposizione:</strong> Puoi opporti al trattamento per motivi legittimi</li>
          <li>• <strong>Diritto di revoca del consenso:</strong> Puoi revocare il consenso in qualsiasi momento</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">6. Gestione dei cookie</h2>
        <p className="text-sm leading-relaxed">
          Puoi gestire le tue preferenze sui cookie in qualsiasi momento attraverso:
        </p>
        <ul className="text-sm space-y-2 ml-4">
          <li>• Il banner dei cookie che appare alla prima visita</li>
          <li>• Le impostazioni del tuo browser web</li>
          <li>• Il centro preferenze accessibile dal footer del sito</li>
        </ul>
        
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Come disabilitare i cookie nel browser:</h3>
          <ul className="text-sm space-y-1">
            <li>• <strong>Chrome:</strong> Impostazioni &gt; Privacy e sicurezza &gt; Cookie</li>
            <li>• <strong>Firefox:</strong> Preferenze &gt; Privacy e sicurezza &gt; Cookie</li>
            <li>• <strong>Safari:</strong> Preferenze &gt; Privacy &gt; Cookie</li>
            <li>• <strong>Edge:</strong> Impostazioni &gt; Privacy &gt; Cookie</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">7. Conservazione dei dati</h2>
        <p className="text-sm leading-relaxed">
          I cookie vengono conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti:
        </p>
        <ul className="text-sm space-y-2 ml-4">
          <li>• <strong>Cookie necessari:</strong> Per la durata della sessione o fino a 1 anno</li>
          <li>• <strong>Cookie di performance:</strong> Fino a 2 anni</li>
          <li>• <strong>Cookie di marketing:</strong> Fino a 2 anni</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">8. Sicurezza</h2>
        <p className="text-sm leading-relaxed">
          Implementiamo misure tecniche e organizzative appropriate per proteggere i dati personali 
          raccolti tramite cookie contro accessi non autorizzati, alterazioni, divulgazioni o distruzioni.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">9. Modifiche alla Cookie Policy</h2>
        <p className="text-sm leading-relaxed">
          Ci riserviamo il diritto di modificare questa Cookie Policy in qualsiasi momento. 
          Le modifiche saranno comunicate pubblicando la nuova versione su questa pagina 
          con indicazione della data di ultimo aggiornamento.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">10. Contatti</h2>
        <div className="text-sm space-y-2">
          <p><strong>Titolare del trattamento:</strong> ismagit</p>
          <p><strong>Indirizzo:</strong> Via Ippocrate 327, Terni (TR), Italia</p>
          <p><strong>Email:</strong> <a href="mailto:team@ismagit.it" className="text-primary hover:underline">team@ismagit.it</a></p>
        </div>
        <p className="text-sm leading-relaxed mt-4">
          Per qualsiasi domanda o richiesta relativa a questa Cookie Policy o al trattamento 
          dei tuoi dati personali, non esitare a contattarci utilizzando le informazioni sopra indicate.
        </p>
      </section>
    </div>
  );
};