import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Sun, Moon, Menu, X, Clock, DollarSign, TrendingUp } from 'lucide-react';
import { PrivacyPolicyModal } from '@/components/PrivacyPolicyModal';
import { CookiePolicyModal } from '@/components/CookiePolicyModal';
import { CookieBanner } from '@/components/CookieBanner';

// --- Main Components ---

// Definisci i link di navigazione fuori dal componente per evitare che vengano ricreati a ogni render
const navLinks = [
    { id: 'vantaggi', href: '#vantaggi-strategici', label: 'Vantaggi' },
    { id: 'servizi', href: '#servizi', label: 'Servizi' },
    { id: 'chi-sono', href: 'https://www.linkedin.com/in/marcelo-cavaldid/', label: 'Chi sono', external: true },
    { id: 'contatti', href: 'https://cal.com/marcecv/30min', label: 'Contattami', external: true },
];

const featureTabsData = [
    {
        id: 'team',
        title: 'Libera il Potenziale del Tuo Team',
        content: [
            { subtitle: 'Risparmio di tempo', text: 'Automatizza le attività ripetitive e libera il tuo team per concentrarsi sulla strategia e la creatività.' },
            { subtitle: 'Efficienza Operativa', text: 'Riduci i costi operativi e ottimizza i processi, trasformando le ore di lavoro in risultati misurabili.' }
        ]
    },
    {
        id: 'marketing',
        title: 'Moltiplica i Tuoi Risultati di Marketing',
        content: [
            { subtitle: 'Aumento dei Guadagni', text: 'Genera più lead qualificati, aumenta le conversioni e massimizza il valore di ogni cliente con strategie IA-driven.' },
            { subtitle: 'Decisioni Intelligenti', text: 'Ottieni insight predittivi e prendi decisioni basate su dati concreti, superando la concorrenza.' }
        ]
    },
    {
        id: 'scalability',
        title: 'Scalabilità Senza Limiti',
        content: [
            { subtitle: 'Crescita Sostenibile', text: 'Progetto soluzioni IA flessibili che crescono con il tuo business, mantenendo alte le performance e sotto controllo i costi.' },
            { subtitle: 'Innovazione Continua', text: "Rimani all'avanguardia nel mercato, adottando le tecnologie più avanzate per il tuo marketing." }
        ]
    }
];

const logos = [
    "https://ik.imagekit.io/mcv/11.png?updatedAt=1752661447457",
    "https://ik.imagekit.io/mcv/5.png?updatedAt=1752661443340",
    "https://ik.imagekit.io/mcv/8.png?updatedAt=1752661443326",
    "https://ik.imagekit.io/mcv/9.png?updatedAt=1752661443299",
    "https://ik.imagekit.io/mcv/10.png?updatedAt=1752661443306",
    "https://ik.imagekit.io/mcv/4.png?updatedAt=1752661443208",
    "https://ik.imagekit.io/mcv/6.png?updatedAt=1752661443191",
    "https://ik.imagekit.io/mcv/7.png?updatedAt=1752661443126",
    "https://ik.imagekit.io/mcv/3.png?updatedAt=1752661443069",
    "https://ik.imagekit.io/mcv/1.png?updatedAt=1752661443060",
    "https://ik.imagekit.io/mcv/2.png?updatedAt=1752661443061"
];

const solutionsData = [
    {
        id: 'partnership',
        title: 'Partnership AI',
        content: {
            mainTitle: "Dalla Strategia all'Implementazione, Sempre al Tuo Fianco",
            text: "Non è una semplice consulenza, ma un vero percorso di trasformazione digitale dove sono al tuo fianco in ogni fase, sia strategica che operativa.\nAnalizzo i tuoi processi aziendali, individuo insieme a te le aree dove l'intelligenza artificiale e gli agenti AI possono portare il massimo impatto, e progetto un'infrastruttura cloud personalizzata per integrare strumenti, automazioni e agenti intelligenti.\nLa differenza? Non mi limito a suggerire: sono io stesso a implementare e configurare le soluzioni, garantendo risultati concreti, rapidi e misurabili."
        }
    },
    {
        id: 'box-ai',
        title: 'Box AI Marketing',
        content: {
            mainTitle: 'Automazioni Immediate per il Tuo Business Digitale',
            text: "Scegli la semplicità e la velocità delle nostre box AI: sistemi standardizzati, subito operativi, pensati per automatizzare le principali attività di marketing digitale.\n\nOgni box risolve un'esigenza specifica, con automazioni e agenti AI già pronti all'uso:",
            list: [
                { title: "Box Content (LinkedIn, Instagram, Facebook, Video)", description: "Crea automaticamente post, caroselli, immagini e video professionali per i tuoi canali social, con pochi click e senza sforzo." },
                { title: "Box Gestione CMS (WordPress, Wix, Shopify) e CRM (HubSpot, Zoho, Pipedrive, ecc.)", description: "Automatizza la gestione dei clienti e dei contenuti su tutte le principali piattaforme, ottimizzando ogni fase del customer journey e integrando i tuoi strumenti preferiti." },
                { title: "Box Lead Nurturing", description: "Genera e invia newsletter e contenuti personalizzati ai tuoi lettori o abbonati in modo completamente automatico, migliorando la relazione e la fidelizzazione." }
            ]
        }
    }
];

// Componente per il cursore lampeggiante
const BlinkingCursor = () => (
    <span className="animate-blink" aria-hidden="true">_</span>
);

// Componente Header (Menu di navigazione)
const Header = ({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const [activeTab, setActiveTab] = useState(navLinks[0].id);
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
    const tabsRef = useRef<(HTMLAnchorElement | null)[]>([]);

    useLayoutEffect(() => {
        const activeTabIndex = navLinks.findIndex(tab => tab.id === activeTab);
        const activeTabEl = tabsRef.current[activeTabIndex];
        if (activeTabEl) {
            setPillStyle({
                left: activeTabEl.offsetLeft,
                width: activeTabEl.offsetWidth,
            });
        }
    }, [activeTab]);

    const handleNavClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
        if (!link.external) {
            e.preventDefault();
            setActiveTab(link.id);
            const targetElement = document.querySelector(link.href);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const logoLight = "https://ik.imagekit.io/mcv/LOGO%20ROBOT%20MINIMALISTA%20(5).png?updatedAt=1752617790720";
    const logoDark = "https://ik.imagekit.io/mcv/LOGO%20ROBOT%20MINIMALISTA%20(1).png?updatedAt=1752241858230";

    return (
        <header className={`sticky top-0 z-50 w-full shadow-md transition-colors duration-500 ${theme === 'light' ? 'bg-white/80 backdrop-blur-sm' : 'bg-black/80 backdrop-blur-sm'}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo o Nome del Sito */}
                    <a href="#" className="flex-shrink-0">
                        <img 
                            src={theme === 'light' ? logoLight : logoDark} 
                            alt="Logo del sito" 
                            className="h-10 w-auto transition-all duration-500"
                            onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://placehold.co/100x40/cccccc/ffffff?text=Logo'; }}
                        />
                    </a>

                    {/* Menu per Desktop con effetto scorrimento */}
                    <nav className={`hidden md:flex items-center relative p-1 rounded-xl ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`}>
                        <div
                            className="absolute bg-cyan-500 h-9 rounded-lg transition-all duration-300 ease-in-out"
                            style={pillStyle}
                        />
                        {navLinks.map((link, index) => (
                            <a 
                                key={link.id} 
                                href={link.href} 
                                ref={el => tabsRef.current[index] = el}
                                onClick={(e) => handleNavClick(e, link)}
                                target={link.external ? '_blank' : '_self'}
                                rel={link.external ? 'noopener noreferrer' : ''}
                                className={`relative z-10 px-5 py-1.5 rounded-lg text-sm font-semibold transition-colors duration-300 ${activeTab === link.id ? 'text-white' : (theme === 'light' ? 'text-gray-600 hover:text-black' : 'text-gray-300 hover:text-white')}`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4">
                        {/* Pulsante per cambiare tema */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${theme === 'light' ? 'text-gray-700 hover:bg-gray-200 focus:ring-cyan-500 focus:ring-offset-white' : 'text-gray-300 hover:bg-gray-800 focus:ring-cyan-400 focus:ring-offset-black'}`}
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
                        </button>
                        
                        {/* Pulsante Menu per Mobile */}
                        <div className="md:hidden">
                             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-md ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Menu a tendina per Mobile */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4">
                        <nav className="flex flex-col space-y-4">
                             {navLinks.map((link) => (
                                <a key={link.id} href={link.href} className={`block px-4 py-2 rounded-md font-semibold ${theme === 'light' ? 'text-gray-800 hover:bg-gray-100' : 'text-gray-200 hover:bg-gray-800'}`}>
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

// Componente Hero (Sezione principale)
const Hero = ({ theme }: { theme: string }) => {
    const [activeFeatureTab, setActiveFeatureTab] = useState(featureTabsData[0].id);
    const activeContent = featureTabsData.find(tab => tab.id === activeFeatureTab);
    
    const [activeSolutionTab, setActiveSolutionTab] = useState(solutionsData[0].id);
    const activeSolutionContent = solutionsData.find(tab => tab.id === activeSolutionTab)?.content;

    return (
        <section className="container mx-auto px-6 pt-8 md:pt-16 pb-12 md:pb-20">
            {/* Blocco testo principale allineato a sinistra */}
            <div className="flex justify-start">
                <div className="max-w-3xl text-left">
                    <h1 className={`text-5xl md:text-7xl font-medium leading-tight transition-colors duration-500 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                        Il Tuo Partner per la Crescita<br />
                        <span className="text-cyan-500 dark:text-cyan-400">Intelligente con IA<BlinkingCursor /></span>
                    </h1>
                    <p className={`text-base md:text-lg mt-8 transition-colors duration-500 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                        Automatizza marketing e processi aziendali con l'intelligenza artificiale: meno tempo sprecato, più risultati misurabili, grazie a soluzioni personalizzate e operative da subito.
                    </p>
                    {/* Pulsante Prenota una chiamata */}
                    <div className="mt-8">
                        <a href="https://cal.com/marcecv/30min" target="_blank" rel="noopener noreferrer" className={`animated-border-btn ${theme === 'light' ? 'light-mode' : 'dark-mode'}`}>
                           <span className="btn-text">Prenota una chiamata</span>
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Sezione "Le sfide da superare" allineata al centro */}
            <div className="mt-20 text-center">
                <div className={`inline-block border text-sm font-medium px-4 py-1 rounded-md ${theme === 'light' ? 'border-cyan-500/40 text-cyan-700' : 'border-cyan-500/40 text-cyan-400'}`}>
                    Le sfide da superare
                </div>
                <h2 className={`mt-4 text-2xl md:text-3xl font-medium tracking-tight ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
                    Perché l'Intelligenza Artificiale può essere la leva strategica per la crescita del tuo business
                </h2>
            </div>

            {/* Sezione dei 3 box informativi */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Box 1: Tempo */}
                <div className={`info-box rounded-lg p-6 md:p-8 text-center shadow-lg border transition-all duration-300 hover:shadow-cyan-400/20 hover:-translate-y-2 ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-neutral-900 border-neutral-700'}`}>
                    <div className="flex flex-col items-center">
                        <Clock className={`w-10 h-10 md:w-12 md:h-12 mb-4 ${theme === 'light' ? 'text-cyan-600' : 'text-cyan-400'}`} />
                        <h3 className={`text-lg md:text-xl font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>Tempo</h3>
                    </div>
                    <p className={`mt-4 text-sm md:text-base ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                        Il tuo team spreca ore preziose in attività ripetitive invece di concentrarsi su ciò che conta davvero.
                    </p>
                </div>

                {/* Box 2: Costi */}
                <div className={`info-box rounded-lg p-6 md:p-8 text-center shadow-lg border transition-all duration-300 hover:shadow-cyan-400/20 hover:-translate-y-2 ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-neutral-900 border-neutral-700'}`}>
                    <div className="flex flex-col items-center">
                        <DollarSign className={`w-10 h-10 md:w-12 md:h-12 mb-4 ${theme === 'light' ? 'text-cyan-600' : 'text-cyan-400'}`} />
                        <h3 className={`text-lg md:text-xl font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>Costi</h3>
                    </div>
                    <p className={`mt-4 text-sm md:text-base ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                        I costi operativi aumentano, ma i risultati non crescono allo stesso ritmo: ogni inefficienza pesa sui margini.
                    </p>
                </div>

                {/* Box 3: Scalabilità */}
                <div className={`info-box rounded-lg p-6 md:p-8 text-center shadow-lg border transition-all duration-300 hover:shadow-cyan-400/20 hover:-translate-y-2 ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-neutral-900 border-neutral-700'}`}>
                    <div className="flex flex-col items-center">
                        <TrendingUp className={`w-10 h-10 md:w-12 md:h-12 mb-4 ${theme === 'light' ? 'text-cyan-600' : 'text-cyan-400'}`} />
                        <h3 className={`text-lg md:text-xl font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>Scalabilità</h3>
                    </div>
                    <p className={`mt-4 text-sm md:text-base ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                        Quando il business cresce, i processi manuali diventano un freno: senza automazione, scalare significa solo più lavoro e più stress.
                    </p>
                </div>
            </div>

            {/* Sezione "Vantaggi Strategici" */}
            <div id="vantaggi-strategici" className="mt-24 text-center">
                <div className={`inline-block border text-sm font-medium px-4 py-1 rounded-md ${theme === 'light' ? 'border-cyan-500/40 text-cyan-700' : 'border-cyan-500/40 text-cyan-400'}`}>
                    Vantaggi Strategici
                </div>
                <h2 className={`mt-4 text-2xl md:text-3xl font-medium tracking-tight ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
                    In Cosa Posso Aiutarti
                </h2>
            </div>

            {/* Nuova Sezione Interattiva */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Colonna Sinistra: Titoli Selezionabili */}
                <div className="md:col-span-1 flex flex-col relative border-l-2 border-neutral-200 dark:border-neutral-800">
                    {featureTabsData.map((tab, index) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveFeatureTab(tab.id)}
                            className={`w-full p-6 text-left transition-all duration-300 relative ${
                                index !== featureTabsData.length - 1 ? 'border-b-2 border-neutral-200 dark:border-neutral-800' : ''
                            }`}
                        >
                             {activeFeatureTab === tab.id && (
                                <div className="absolute left-[-2px] top-0 bottom-0 w-0.5 bg-cyan-500"></div>
                            )}
                            <h4 className={`font-semibold text-lg ${activeFeatureTab === tab.id ? 'text-cyan-500' : (theme === 'light' ? 'text-gray-500 hover:text-black' : 'text-gray-400 hover:text-white')}`}>{tab.title}</h4>
                        </button>
                    ))}
                </div>

                {/* Colonna Destra: Contenuto */}
                <div className="md:col-span-2 pl-4 md:pl-12 content-fade-in" key={activeFeatureTab}>
                    {activeContent && activeContent.content.map((item, index) => (
                        <div key={index} className={index > 0 ? 'mt-6' : ''}>
                            <h5 className={`text-lg font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>{item.subtitle}</h5>
                            <p className={`mt-1 text-base ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Sezione Carosello Loghi */}
            <div className="mt-24 text-center">
                 <h3 className={`text-lg font-medium mb-8 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                    Utilizzo costantemente alcuni tra i migliori strumenti sul mercato.
                </h3>
                <div className="relative w-full max-w-5xl mx-auto overflow-hidden scroll-mask">
                    <div className="flex animate-scroll">
                        {[...logos, ...logos, ...logos].map((logo, index) => (
                            <img key={index} src={logo} alt={`Logo ${index + 1}`} className="h-12 md:h-16 w-auto mx-6 md:mx-12 flex-shrink-0" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Sezione Scegli la Soluzione */}
            <div id="servizi" className="mt-24">
                <div className="text-center mb-12">
                     <h2 className={`text-2xl md:text-3xl font-medium tracking-tight ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
                        Scegli la Soluzione per Te
                    </h2>
                </div>
                <div className="flex justify-center mb-8">
                    <div className={`flex p-1 rounded-xl ${theme === 'light' ? 'bg-gray-200' : 'bg-neutral-800'}`}>
                        {solutionsData.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveSolutionTab(tab.id)}
                                className={`px-8 py-3 rounded-lg text-base font-semibold transition-colors duration-300 ${
                                    activeSolutionTab === tab.id
                                        ? `bg-cyan-500 text-white`
                                        : (theme === 'light' ? 'text-gray-600 hover:bg-gray-300' : 'text-gray-400 hover:bg-neutral-700')
                                }`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>
                </div>
                <div className={`rounded-xl p-8 md:p-12 transition-all duration-500 content-fade-in ${theme === 'light' ? 'bg-gray-100' : 'bg-neutral-900'}`} key={activeSolutionTab}>
                    {activeSolutionContent && (
                        <>
                            <h3 className={`text-2xl font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>{activeSolutionContent.mainTitle}</h3>
                            <p className={`mt-4 whitespace-pre-line text-base ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                {activeSolutionContent.text}
                            </p>
                            {activeSolutionContent.list && (
                                <ul className="mt-6 space-y-4">
                                    {activeSolutionContent.list.map((item, index) => {
                                        return (
                                            <li key={index} className={`flex items-start text-base ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                                <span className="text-cyan-500 mr-3 mt-1">&#10003;</span>
                                                <div>
                                                    <span className={`font-semibold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>{item.title}:</span>
                                                    <span className="ml-1">{item.description}</span>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </>
                    )}
                </div>
            </div>

        </section>
    );
};

// Componente Footer (Piè di pagina)
const Footer = ({ theme }: { theme: string }) => {
    const logoDark = "https://ik.imagekit.io/mcv/LOGO%20ROBOT%20MINIMALISTA%20(1).png?updatedAt=1752241858230";
    return (
        <footer id="contatti" className="relative overflow-hidden pt-16 pb-8 bg-neutral-900">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-4">
                        <img src={logoDark} alt="Logo" className="h-12 mb-6" />
                        <a href="https://cal.com/marcecv/30min" target="_blank" rel="noopener noreferrer" className="animated-border-btn cta bg-cyan-500 text-white">
                           <span className="btn-text">Prenota una chiamata</span>
                        </a>
                    </div>
                    <div className="md:col-span-8 grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-white mb-4">Menu</h4>
                            <ul className="space-y-2">
                                {navLinks.map(link => (
                                    <li key={link.id}>
                                        <a href={link.href} 
                                           target={link.external ? '_blank' : '_self'}
                                           rel={link.external ? 'noopener noreferrer' : ''}
                                           className="text-gray-400 hover:text-white transition-colors">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4">Normative</h4>
                            <ul className="space-y-2">
                                <li>
                                    <PrivacyPolicyModal>
                                        <button className="text-gray-400 hover:text-white transition-colors text-left">
                                            Privacy Policy
                                        </button>
                                    </PrivacyPolicyModal>
                                </li>
                                <li>
                                    <CookiePolicyModal>
                                        <button className="text-gray-400 hover:text-white transition-colors text-left">
                                            Cookie Policy
                                        </button>
                                    </CookiePolicyModal>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-neutral-800 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} ismagit. Tutti i diritti riservati.</p>
                </div>
            </div>
            <div className="absolute right-0 top-0 h-full flex items-start pt-20 pr-2 md:pr-4 pointer-events-none">
                <span className="vertical-text text-4xl font-black text-cyan-400 opacity-50">
                    ismagit<span className="animate-blink text-cyan-500">_</span>
                </span>
            </div>
        </footer>
    );
};

// Componente principale dell'applicazione
export default function Index() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme;
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'dark';
    });

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div 
            className={`min-h-screen transition-colors duration-500 font-poppins ${theme === 'light' ? 'bg-white' : 'bg-black'}`}
        >
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero theme={theme} />
            </main>
            <Footer theme={theme} />
            
            {/* Cookie Banner */}
            <CookieBanner />
        </div>
    );
}
