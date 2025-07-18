# 🚀 Guida al Deployment Ibrido Lovable + Vercel

## ✅ Progetto Preparato Automaticamente

Il progetto è ora pronto per il deployment su Vercel. Sono stati creati:

- `vercel.json` - Configurazione ottimizzata per Vercel
- `.env.example` - Template delle variabili ambiente
- Questa guida completa

## 📋 Prossimi Passi Manuali

### 1. Connetti GitHub a Lovable
1. Clicca su **"GitHub"** in alto a destra
2. Seleziona **"Connect to GitHub"**
3. Autorizza l'app Lovable su GitHub
4. Clicca **"Create Repository"**

### 2. Setup Vercel
1. Vai su [vercel.com](https://vercel.com) e accedi
2. Clicca **"New Project"**
3. Importa il repository GitHub appena creato
4. **IMPORTANTE**: Aggiungi le variabili ambiente:
   - `VITE_SUPABASE_URL`: `https://rcvbrwoxgiqdzuswzfcm.supabase.co`
   - `VITE_SUPABASE_ANON_KEY`: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
5. Deploy!

### 3. Configura Supabase per Vercel
1. Vai su [Supabase Dashboard](https://supabase.com/dashboard/project/rcvbrwoxgiqdzuswzfcm/settings/api)
2. Aggiungi il tuo dominio Vercel ai **CORS Origins**
3. Esempio: `https://tuo-progetto.vercel.app`

## 🔄 Workflow Finale

**Sviluppo**: Lavora su Lovable → Auto-push su GitHub → Auto-deploy su Vercel

**Risultato**: 
- URL Lovable: per sviluppo
- URL Vercel: per produzione

## 📞 Supporto

Se hai problemi, chiedi pure! Il setup è pronto, servono solo le connessioni manuali.