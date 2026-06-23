# 🌿 Portfolio Ons Gaaya — Next.js Setup Guide

## STEP 1 — Créer le projet Next.js (5 min)

Ouvre ton terminal (CMD ou PowerShell) et tape :

```bash
npx create-next-app@latest portfolio --typescript --tailwind --app --eslint --no-src-dir --import-alias "@/*"
```

Quand il te pose des questions :
- Would you like to use src/ directory? → **No**
- Would you like to customize the import alias? → **No**

```bash
cd portfolio
```

---

## STEP 2 — Copier les fichiers (3 min)

Depuis le zip téléchargé, copie EXACTEMENT cette structure dans ton dossier `portfolio/` :

```
portfolio/
├── app/
│   ├── globals.css          ← REMPLACE le fichier existant
│   ├── layout.tsx           ← REMPLACE le fichier existant
│   ├── page.tsx             ← REMPLACE le fichier existant
│   ├── projects/
│   │   └── page.tsx         ← CRÉER ce dossier et fichier
│   ├── about/
│   │   └── page.tsx         ← CRÉER ce dossier et fichier
│   └── contact/
│       └── page.tsx         ← CRÉER ce dossier et fichier
├── components/
│   ├── Navbar.tsx           ← CRÉER ce dossier et fichier
│   ├── Footer.tsx
│   └── ProjectModal.tsx
├── lib/
│   └── data.ts              ← CRÉER ce dossier et fichier
└── tailwind.config.ts       ← REMPLACE le fichier existant
```

---

## STEP 3 — Ta photo de profil

1. Renomme ta photo en `profile.jpg`
2. Copie-la dans le dossier `public/`
3. Chemin final : `public/profile.jpg`

---

## STEP 4 — Ajouter tes rapports PDF

Dans `lib/data.ts`, pour chaque projet où tu as un rapport :

1. Upload le PDF sur **Google Drive**
2. Clique droit → "Partager" → "Tout le monde avec le lien peut voir"
3. Copie le lien
4. Dans `lib/data.ts`, trouve le projet et ajoute :

```typescript
report: "https://drive.google.com/file/d/TON_ID/view",
```

Exemple pour Moodi :
```typescript
{
  id: "moodi",
  ...
  report: "https://drive.google.com/file/d/1abc123.../view",
  ...
}
```

---

## STEP 5 — Ajouter tes vidéos démo (quand tu les auras)

Pour chaque vidéo YouTube ou Google Drive :
```typescript
video: "https://www.youtube.com/embed/TON_VIDEO_ID",
// ou
video: "https://drive.google.com/file/d/TON_ID/preview",
```

---

## STEP 6 — Tester en local

```bash
npm run dev
```

Ouvre **http://localhost:3000** → tu dois voir le portfolio ! 🎉

---

## STEP 7 — Déployer sur Vercel (3 min)

```bash
# 1. Initialiser Git
git init
git add .
git commit -m "feat: portfolio initial"

# 2. Créer un repo GitHub (sur github.com) puis :
git remote add origin https://github.com/onsgaaya1/portfolio.git
git push -u origin main
```

3. Va sur **vercel.com** → "New Project" → importe ton repo GitHub → Deploy 🚀

Ton portfolio sera en ligne sur : `onsgaaya.vercel.app`

---

## Personnalisations rapides

### Changer l'email de contact
Dans `app/contact/page.tsx`, ligne ~55 :
```typescript
window.open(`mailto:onsgaaya1@gmail.com?...`)
```

### Ajouter un lien CV
Dans `app/about/page.tsx`, cherche le commentaire `⚠️ Add your CV link here` et décommente la ligne.

### Changer les stats de la home
Dans `app/page.tsx`, cherche `<p className="gradient-text font-display font-bold text-3xl">13</p>`

---

## 🆘 En cas de problème

### Erreur "Module not found"
```bash
npm install
```

### Erreur "longpaths" sur Windows
```bash
git config --global core.longpaths true
```

### La photo ne s'affiche pas
- Vérifie que le fichier s'appelle exactement `profile.jpg` (pas `profile.JPG` ou `profile.jpeg`)
- Vérifie qu'il est dans le dossier `public/` à la racine du projet
