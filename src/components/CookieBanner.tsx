import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Cookie, Settings, X } from 'lucide-react';

interface CookieConsent {
  necessary: boolean;
  performance: boolean;
  marketing: boolean;
  timestamp: number;
}

const COOKIE_CONSENT_KEY = 'ismagit_cookie_consent';

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    performance: false,
    marketing: false,
    timestamp: Date.now()
  });

  useEffect(() => {
    // Check if user has already given consent
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      try {
        const parsedConsent = JSON.parse(savedConsent);
        setConsent(parsedConsent);
      } catch (error) {
        console.error('Error parsing saved consent:', error);
        setShowBanner(true);
      }
    }
  }, []);

  const saveConsent = (newConsent: CookieConsent) => {
    const consentWithTimestamp = {
      ...newConsent,
      timestamp: Date.now()
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentWithTimestamp));
    setConsent(consentWithTimestamp);
    setShowBanner(false);
    setShowPreferences(false);
    
    // Initialize analytics and marketing scripts based on consent
    if (newConsent.performance) {
      initializeAnalytics();
    }
    if (newConsent.marketing) {
      initializeMarketing();
    }
  };

  const initializeAnalytics = () => {
    // Initialize Google Analytics or other analytics services
    console.log('Analytics initialized');
  };

  const initializeMarketing = () => {
    // Initialize marketing pixels and tracking
    console.log('Marketing tracking initialized');
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      performance: true,
      marketing: true,
      timestamp: Date.now()
    });
  };

  const rejectNonEssential = () => {
    saveConsent({
      necessary: true,
      performance: false,
      marketing: false,
      timestamp: Date.now()
    });
  };

  const handlePreferenceChange = (category: keyof Omit<CookieConsent, 'timestamp'>, value: boolean) => {
    setConsent(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const savePreferences = () => {
    saveConsent(consent);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4" style={{ backgroundColor: '#171717' }}>
        <div className="max-w-4xl mx-auto">
          <div className="p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-sm text-white/90 leading-relaxed">
                  Utilizziamo cookie necessari per il funzionamento del sito e cookie opzionali per analisi e marketing.
                </p>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  onClick={acceptAll} 
                  className="bg-white text-black hover:bg-white/90 px-4 py-2 text-sm"
                >
                  Accetta tutti
                </Button>
                <Button 
                  onClick={rejectNonEssential}
                  className="border border-white text-white hover:bg-white/10 px-4 py-2 text-sm"
                  style={{ backgroundColor: '#171717' }}
                >
                  Rifiuta
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowPreferences(true)}
                  className="border border-white text-white hover:bg-white/10 px-4 py-2 text-sm"
                  style={{ backgroundColor: '#171717' }}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Personalizza
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="max-w-2xl" style={{ backgroundColor: '#171717', borderColor: '#333' }}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Preferenze Cookie
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground">
              Gestisci le tue preferenze sui cookie. I cookie necessari sono sempre attivi 
              per garantire il corretto funzionamento del sito.
            </p>
            
            <div className="space-y-4">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between p-4 border border-border rounded-lg">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">Cookie Necessari</h4>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Sempre attivi</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Essenziali per il funzionamento del sito web, includono autenticazione e sicurezza.
                  </p>
                </div>
                <Switch checked={true} disabled />
              </div>

              {/* Performance Cookies */}
              <div className="flex items-start justify-between p-4 border border-border rounded-lg">
                <div className="flex-1 space-y-2">
                  <h4 className="font-semibold">Cookie di Performance</h4>
                  <p className="text-sm text-muted-foreground">
                    Raccolgono informazioni anonime su come utilizzi il sito per aiutarci a migliorarlo.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Include: Google Analytics, monitoraggio prestazioni
                  </p>
                </div>
                <Switch
                  checked={consent.performance}
                  onCheckedChange={(checked) => handlePreferenceChange('performance', checked)}
                />
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between p-4 border border-border rounded-lg">
                <div className="flex-1 space-y-2">
                  <h4 className="font-semibold">Cookie di Marketing</h4>
                  <p className="text-sm text-muted-foreground">
                    Utilizzati per personalizzare la pubblicità e misurare l'efficacia delle campagne.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Include: Google Ads, pixel di tracking, remarketing
                  </p>
                </div>
                <Switch
                  checked={consent.marketing}
                  onCheckedChange={(checked) => handlePreferenceChange('marketing', checked)}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button variant="outline" onClick={() => setShowPreferences(false)}>
                Annulla
              </Button>
              <Button onClick={savePreferences}>
                Salva Preferenze
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

// Hook to access cookie consent status
export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (savedConsent) {
      try {
        setConsent(JSON.parse(savedConsent));
      } catch (error) {
        console.error('Error parsing saved consent:', error);
      }
    }
  }, []);

  return consent;
};