import { useState, useEffect } from 'react';

type Language = 'it' | 'en' | 'es';

const translations = {
  it: {
    // Header/Navigation
    advantages: 'Vantaggi',
    services: 'Servizi',
    whoAmI: 'Chi sono',
    contactMe: 'Contattami',
    
    // Hero Section
    heroTitle: 'Il Tuo Partner per la Crescita',
    heroTitleHighlight: 'Intelligente con IA',
    heroDescription: 'Automatizza marketing e processi aziendali con l\'intelligenza artificiale: meno tempo sprecato, più risultati misurabili, grazie a soluzioni personalizzate e operative da subito.',
    bookCall: 'Prenota una chiamata',
    
    // Challenges Section
    challengesToOvercome: 'Le sfide da superare',
    whyAI: 'Perché l\'Intelligenza Artificiale può essere la leva strategica per la crescita del tuo business',
    
    // Info Boxes
    time: 'Tempo',
    timeDescription: 'Il tuo team spreca ore preziose in attività ripetitive invece di concentrarsi su ciò che conta davvero.',
    costs: 'Costi',
    costsDescription: 'I costi operativi aumentano, ma i risultati non crescono allo stesso ritmo: ogni inefficienza pesa sui margini.',
    scalability: 'Scalabilità',
    scalabilityDescription: 'Quando il business cresce, i processi manuali diventano un freno: senza automazione, scalare significa solo più lavoro e più stress.',
    
    // Strategic Advantages
    strategicAdvantages: 'Vantaggi Strategici',
    howCanIHelp: 'In Cosa Posso Aiutarti',
    
    // Feature Tabs
    unleashTeamPotential: 'Libera il Potenziale del Tuo Team',
    timeSaving: 'Risparmio di tempo',
    timeSavingDesc: 'Automatizza le attività ripetitive e libera il tuo team per concentrarsi sulla strategia e la creatività.',
    operationalEfficiency: 'Efficienza Operativa',
    operationalEfficiencyDesc: 'Riduci i costi operativi e ottimizza i processi, trasformando le ore di lavoro in risultati misurabili.',
    
    multiplyMarketing: 'Moltiplica i Tuoi Risultati di Marketing',
    increaseRevenue: 'Aumento dei Guadagni',
    increaseRevenueDesc: 'Genera più lead qualificati, aumenta le conversioni e massimizza il valore di ogni cliente con strategie IA-driven.',
    smartDecisions: 'Decisioni Intelligenti',
    smartDecisionsDesc: 'Ottieni insight predittivi e prendi decisioni basate su dati concreti, superando la concorrenza.',
    
    unlimitedScalability: 'Scalabilità Senza Limiti',
    sustainableGrowth: 'Crescita Sostenibile',
    sustainableGrowthDesc: 'Progetto soluzioni IA flessibili che crescono con il tuo business, mantenendo alte le performance e sotto controllo i costi.',
    continuousInnovation: 'Innovazione Continua',
    continuousInnovationDesc: 'Rimani all\'avanguardia nel mercato, adottando le tecnologie più avanzate per il tuo marketing.',
    
    // Tools Section
    constantlyUsing: 'Utilizzo costantemente alcuni tra i migliori strumenti sul mercato.',
    
    // Services Section
    servicesTitle: 'Servizi',
    chooseSolution: 'Scegli la Soluzione Più Adatta alle Tue Esigenze',
    
    // Partnership AI
    partnershipAI: 'Partnership AI',
    strategyToImplementation: 'Dalla Strategia all\'Implementazione, Sempre al Tuo Fianco',
    partnershipDesc: 'Non è una semplice consulenza, ma un vero percorso di trasformazione digitale dove sono al tuo fianco in ogni fase, sia strategica che operativa.\nAnalizzo i tuoi processi aziendali, individuo insieme a te le aree dove l\'intelligenza artificiale e gli agenti AI possono portare il massimo impatto, e progetto un\'infrastruttura cloud personalizzata per integrare strumenti, automazioni e agenti intelligenti.\nLa differenza? Non mi limito a suggerire: sono io stesso a implementare e configurare le soluzioni, garantendo risultati concreti, rapidi e misurabili.',
    
    // Box AI Marketing
    boxAIMarketing: 'Box AI Marketing',
    immediateAutomations: 'Automazioni Immediate per il Tuo Business Digitale',
    boxDesc: 'Scegli la semplicità e la velocità delle nostre box AI: sistemi standardizzati, subito operativi, pensati per automatizzare le principali attività di marketing digitale.\n\nOgni box risolve un\'esigenza specifica, con automazioni e agenti AI già pronti all\'uso:',
    
    // Box Content
    boxContent: 'Box Content (LinkedIn, Instagram, Facebook, Video)',
    boxContentDesc: 'Crea automaticamente post, caroselli, immagini e video professionali per i tuoi canali social, con pochi click e senza sforzo.',
    
    // Box CMS/CRM
    boxManagement: 'Box Gestione CMS (WordPress, Wix, Shopify) e CRM (HubSpot, Zoho, Pipedrive, ecc.)',
    boxManagementDesc: 'Automatizza la gestione dei clienti e dei contenuti su tutte le principali piattaforme, ottimizzando ogni fase del customer journey e integrando i tuoi strumenti preferiti.',
    
    // Box Lead Nurturing
    boxLeadNurturing: 'Box Lead Nurturing',
    boxLeadNurturingDesc: 'Genera e invia newsletter e contenuti personalizzati ai tuoi lettori o abbonati in modo completamente automatico, migliorando la relazione e la fidelizzazione.',
    
    // Footer
    menu: 'Menu',
    allRightsReserved: 'Tutti i diritti riservati.',
    selectLanguage: 'Seleziona lingua'
  },
  
  en: {
    // Header/Navigation
    advantages: 'Advantages',
    services: 'Services',
    whoAmI: 'About Me',
    contactMe: 'Contact Me',
    
    // Hero Section
    heroTitle: 'Your Partner for Smart',
    heroTitleHighlight: 'Growth with AI',
    heroDescription: 'Automate marketing and business processes with artificial intelligence: less wasted time, more measurable results, thanks to personalized solutions operational from day one.',
    bookCall: 'Book a call',
    
    // Challenges Section
    challengesToOvercome: 'Challenges to overcome',
    whyAI: 'Why Artificial Intelligence can be the strategic lever for your business growth',
    
    // Info Boxes
    time: 'Time',
    timeDescription: 'Your team wastes precious hours on repetitive tasks instead of focusing on what really matters.',
    costs: 'Costs',
    costsDescription: 'Operating costs increase, but results don\'t grow at the same pace: every inefficiency weighs on margins.',
    scalability: 'Scalability',
    scalabilityDescription: 'When business grows, manual processes become a constraint: without automation, scaling means only more work and more stress.',
    
    // Strategic Advantages
    strategicAdvantages: 'Strategic Advantages',
    howCanIHelp: 'How I Can Help You',
    
    // Feature Tabs
    unleashTeamPotential: 'Unleash Your Team\'s Potential',
    timeSaving: 'Time Saving',
    timeSavingDesc: 'Automate repetitive tasks and free your team to focus on strategy and creativity.',
    operationalEfficiency: 'Operational Efficiency',
    operationalEfficiencyDesc: 'Reduce operational costs and optimize processes, transforming work hours into measurable results.',
    
    multiplyMarketing: 'Multiply Your Marketing Results',
    increaseRevenue: 'Revenue Increase',
    increaseRevenueDesc: 'Generate more qualified leads, increase conversions and maximize the value of each customer with AI-driven strategies.',
    smartDecisions: 'Smart Decisions',
    smartDecisionsDesc: 'Get predictive insights and make decisions based on concrete data, outperforming the competition.',
    
    unlimitedScalability: 'Unlimited Scalability',
    sustainableGrowth: 'Sustainable Growth',
    sustainableGrowthDesc: 'I design flexible AI solutions that grow with your business, maintaining high performance and keeping costs under control.',
    continuousInnovation: 'Continuous Innovation',
    continuousInnovationDesc: 'Stay at the forefront of the market, adopting the most advanced technologies for your marketing.',
    
    // Tools Section
    constantlyUsing: 'I constantly use some of the best tools on the market.',
    
    // Services Section
    servicesTitle: 'Services',
    chooseSolution: 'Choose the Solution Best Suited to Your Needs',
    
    // Partnership AI
    partnershipAI: 'Partnership AI',
    strategyToImplementation: 'From Strategy to Implementation, Always by Your Side',
    partnershipDesc: 'It\'s not just consulting, but a real digital transformation journey where I\'m by your side at every stage, both strategic and operational.\nI analyze your business processes, identify together with you the areas where artificial intelligence and AI agents can bring maximum impact, and design a personalized cloud infrastructure to integrate tools, automations and intelligent agents.\nThe difference? I don\'t just suggest: I implement and configure the solutions myself, guaranteeing concrete, rapid and measurable results.',
    
    // Box AI Marketing
    boxAIMarketing: 'Box AI Marketing',
    immediateAutomations: 'Immediate Automations for Your Digital Business',
    boxDesc: 'Choose the simplicity and speed of our AI boxes: standardized systems, immediately operational, designed to automate the main digital marketing activities.\n\nEach box solves a specific need, with automations and AI agents ready to use:',
    
    // Box Content
    boxContent: 'Box Content (LinkedIn, Instagram, Facebook, Video)',
    boxContentDesc: 'Automatically create professional posts, carousels, images and videos for your social channels, with just a few clicks and no effort.',
    
    // Box CMS/CRM
    boxManagement: 'Box Management CMS (WordPress, Wix, Shopify) and CRM (HubSpot, Zoho, Pipedrive, etc.)',
    boxManagementDesc: 'Automate customer and content management on all major platforms, optimizing every phase of the customer journey and integrating your favorite tools.',
    
    // Box Lead Nurturing
    boxLeadNurturing: 'Box Lead Nurturing',
    boxLeadNurturingDesc: 'Generate and send personalized newsletters and content to your readers or subscribers completely automatically, improving relationships and loyalty.',
    
    // Footer
    menu: 'Menu',
    allRightsReserved: 'All rights reserved.',
    selectLanguage: 'Select language'
  },
  
  es: {
    // Header/Navigation
    advantages: 'Ventajas',
    services: 'Servicios',
    whoAmI: 'Quién soy',
    contactMe: 'Contáctame',
    
    // Hero Section
    heroTitle: 'Tu Socio para el Crecimiento',
    heroTitleHighlight: 'Inteligente con IA',
    heroDescription: 'Automatiza marketing y procesos empresariales con inteligencia artificial: menos tiempo perdido, más resultados medibles, gracias a soluciones personalizadas y operativas desde el primer día.',
    bookCall: 'Reservar una llamada',
    
    // Challenges Section
    challengesToOvercome: 'Desafíos a superar',
    whyAI: 'Por qué la Inteligencia Artificial puede ser la palanca estratégica para el crecimiento de tu negocio',
    
    // Info Boxes
    time: 'Tiempo',
    timeDescription: 'Tu equipo desperdicia horas preciosas en tareas repetitivas en lugar de concentrarse en lo que realmente importa.',
    costs: 'Costos',
    costsDescription: 'Los costos operativos aumentan, pero los resultados no crecen al mismo ritmo: cada ineficiencia pesa en los márgenes.',
    scalability: 'Escalabilidad',
    scalabilityDescription: 'Cuando el negocio crece, los procesos manuales se convierten en un freno: sin automatización, escalar significa solo más trabajo y más estrés.',
    
    // Strategic Advantages
    strategicAdvantages: 'Ventajas Estratégicas',
    howCanIHelp: 'En Qué Puedo Ayudarte',
    
    // Feature Tabs
    unleashTeamPotential: 'Libera el Potencial de Tu Equipo',
    timeSaving: 'Ahorro de Tiempo',
    timeSavingDesc: 'Automatiza las tareas repetitivas y libera a tu equipo para concentrarse en la estrategia y la creatividad.',
    operationalEfficiency: 'Eficiencia Operativa',
    operationalEfficiencyDesc: 'Reduce los costos operativos y optimiza los procesos, transformando las horas de trabajo en resultados medibles.',
    
    multiplyMarketing: 'Multiplica Tus Resultados de Marketing',
    increaseRevenue: 'Aumento de Ingresos',
    increaseRevenueDesc: 'Genera más leads calificados, aumenta las conversiones y maximiza el valor de cada cliente con estrategias impulsadas por IA.',
    smartDecisions: 'Decisiones Inteligentes',
    smartDecisionsDesc: 'Obtén insights predictivos y toma decisiones basadas en datos concretos, superando a la competencia.',
    
    unlimitedScalability: 'Escalabilidad Sin Límites',
    sustainableGrowth: 'Crecimiento Sostenible',
    sustainableGrowthDesc: 'Diseño soluciones de IA flexibles que crecen con tu negocio, manteniendo alto rendimiento y controlando los costos.',
    continuousInnovation: 'Innovación Continua',
    continuousInnovationDesc: 'Mantente a la vanguardia del mercado, adoptando las tecnologías más avanzadas para tu marketing.',
    
    // Tools Section
    constantlyUsing: 'Uso constantemente algunas de las mejores herramientas del mercado.',
    
    // Services Section
    servicesTitle: 'Servicios',
    chooseSolution: 'Elige la Solución Más Adecuada para Tus Necesidades',
    
    // Partnership AI
    partnershipAI: 'Partnership AI',
    strategyToImplementation: 'De la Estrategia a la Implementación, Siempre a Tu Lado',
    partnershipDesc: 'No es una simple consultoría, sino un verdadero proceso de transformación digital donde estoy a tu lado en cada fase, tanto estratégica como operativa.\nAnalizo tus procesos empresariales, identifico contigo las áreas donde la inteligencia artificial y los agentes AI pueden aportar el máximo impacto, y diseño una infraestructura cloud personalizada para integrar herramientas, automatizaciones y agentes inteligentes.\n¿La diferencia? No me limito a sugerir: soy yo mismo quien implementa y configura las soluciones, garantizando resultados concretos, rápidos y medibles.',
    
    // Box AI Marketing
    boxAIMarketing: 'Box AI Marketing',
    immediateAutomations: 'Automatizaciones Inmediatas para Tu Negocio Digital',
    boxDesc: 'Elige la simplicidad y velocidad de nuestras boxes AI: sistemas estandarizados, inmediatamente operativos, diseñados para automatizar las principales actividades de marketing digital.\n\nCada box resuelve una necesidad específica, con automatizaciones y agentes AI listos para usar:',
    
    // Box Content
    boxContent: 'Box Content (LinkedIn, Instagram, Facebook, Video)',
    boxContentDesc: 'Crea automáticamente posts, carruseles, imágenes y videos profesionales para tus canales sociales, con pocos clicks y sin esfuerzo.',
    
    // Box CMS/CRM
    boxManagement: 'Box Gestión CMS (WordPress, Wix, Shopify) y CRM (HubSpot, Zoho, Pipedrive, etc.)',
    boxManagementDesc: 'Automatiza la gestión de clientes y contenido en todas las principales plataformas, optimizando cada fase del customer journey e integrando tus herramientas favoritas.',
    
    // Box Lead Nurturing
    boxLeadNurturing: 'Box Lead Nurturing',
    boxLeadNurturingDesc: 'Genera y envía newsletters y contenido personalizado a tus lectores o suscriptores de forma completamente automática, mejorando la relación y fidelización.',
    
    // Footer
    menu: 'Menú',
    allRightsReserved: 'Todos los derechos reservados.',
    selectLanguage: 'Seleccionar idioma'
  }
};

export const useTranslations = () => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      return savedLanguage || 'it';
    }
    return 'it';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: keyof typeof translations.it): string => {
    return translations[language][key] || translations.it[key] || key;
  };

  return { t, language, setLanguage };
};