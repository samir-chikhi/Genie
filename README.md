# Génie Montauban - Site Web

Site officiel du tiers-lieu Le Génie à Montauban - Espace de coworking et lieu collaboratif dédié à l'économie sociale et solidaire.

## 🚀 Déploiement sur GitHub Pages

### Étape 1 : Créer un dépôt GitHub

1. Connectez-vous sur [GitHub](https://github.com)
2. Cliquez sur le bouton **"New repository"** (nouveau dépôt)
3. Nommez votre dépôt : `genie-montauban` (ou le nom de votre choix)
4. Cochez **"Public"**
5. Cliquez sur **"Create repository"**

### Étape 2 : Uploader les fichiers

**Option A - Via l'interface web GitHub (le plus simple) :**

1. Dans votre nouveau dépôt, cliquez sur **"uploading an existing file"**
2. Glissez-déposez TOUS les fichiers et dossiers du site :
   - `index.html`
   - `mentions-legales.html`
   - `politique-confidentialite.html`
   - `cgv.html`
   - Dossier `css/` avec `style.css`
   - Dossier `js/` avec `main.js`
   - Dossier `images/` (vide pour l'instant)
3. Ajoutez un message de commit : "Initial commit - Site Génie Montauban"
4. Cliquez sur **"Commit changes"**

**Option B - Via Git en ligne de commande :**

```bash
# Initialisez Git dans le dossier du site
cd genie-site
git init

# Ajoutez tous les fichiers
git add .

# Créez votre premier commit
git commit -m "Initial commit - Site Génie Montauban"

# Liez votre dépôt local au dépôt GitHub
git remote add origin https://github.com/VOTRE-USERNAME/genie-montauban.git

# Envoyez vos fichiers sur GitHub
git branch -M main
git push -u origin main
```

### Étape 3 : Activer GitHub Pages

1. Dans votre dépôt GitHub, allez dans **Settings** (Paramètres)
2. Dans le menu de gauche, cliquez sur **Pages**
3. Sous "Source", sélectionnez :
   - **Branch** : `main`
   - **Folder** : `/ (root)`
4. Cliquez sur **Save**
5. Patientez quelques minutes (généralement 2-5 minutes)

### Étape 4 : Accéder à votre site

Votre site sera accessible à l'adresse :
```
https://VOTRE-USERNAME.github.io/genie-montauban/
```

**Exemple :** Si votre username GitHub est `samir-chikhi`, l'URL sera :
```
https://samir-chikhi.github.io/genie-montauban/
```

## 📁 Structure du projet

```
genie-montauban/
├── index.html                          # Page d'accueil
├── mentions-legales.html               # Mentions légales
├── politique-confidentialite.html      # Politique RGPD
├── cgv.html                           # Conditions générales de vente
├── css/
│   └── style.css                      # Styles CSS
├── js/
│   └── main.js                        # JavaScript
├── images/                            # Dossier pour vos images
│   └── (ajoutez vos images ici)
└── README.md                          # Ce fichier
```

## 🎨 Personnalisation

### Changer les couleurs

Modifiez les variables CSS dans `css/style.css` :

```css
:root {
    --primary-blue: #365478;    /* Bleu principal */
    --secondary-gold: #C9993E;  /* Or secondaire */
    --light-gold: #E5C06E;      /* Or clair */
    --dark-blue: #1e3a5f;       /* Bleu foncé */
}
```

### Ajouter des images

1. Placez vos images dans le dossier `images/`
2. Remplacez les placeholders dans `index.html` :

```html
<!-- Remplacez ceci : -->
<div class="image-placeholder">...</div>

<!-- Par ceci : -->
<img src="images/votre-photo.jpg" alt="Description">
```

### Modifier les informations de contact

Dans `index.html`, recherchez et modifiez :
- L'adresse email : `genie.montauban@gmail.com`
- Le numéro de téléphone : `+33 X XX XX XX XX`
- L'adresse physique

### Ajouter Google Maps

Dans la section contact, remplacez le placeholder par :

```html
<iframe 
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE" 
    width="100%" 
    height="400" 
    style="border:0; border-radius: 16px;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

## 🔧 Fonctionnalités

✅ Design responsive (mobile, tablette, desktop)
✅ Navigation fluide avec ancres
✅ Formulaire de contact
✅ Bannière cookies RGPD
✅ Pages légales complètes (mentions légales, CGV, confidentialité)
✅ SEO optimisé avec meta tags
✅ Bouton retour en haut de page
✅ Animations au scroll

## 📝 À compléter avant la mise en ligne

Dans `mentions-legales.html`, complétez :
- [ ] Nom de la structure juridique
- [ ] Forme juridique (Association, SCIC, SARL...)
- [ ] N° SIRET
- [ ] Directeur de publication

Dans `index.html`, modifiez :
- [ ] Les coordonnées de contact (téléphone, email)
- [ ] L'URL dans les meta tags Open Graph
- [ ] L'adresse exacte (actuellement "Proche Gare SNCF")

## 🌐 Domaine personnalisé (optionnel)

Pour utiliser votre propre nom de domaine (ex: `legenie-montauban.fr`) :

1. Achetez un nom de domaine chez un registrar (OVH, Gandi, etc.)
2. Dans les paramètres DNS, créez un enregistrement CNAME pointant vers :
   ```
   VOTRE-USERNAME.github.io
   ```
3. Dans GitHub Pages settings, ajoutez votre domaine personnalisé
4. Activez **"Enforce HTTPS"**

## 🔒 Sécurité et RGPD

✅ Le site est conforme RGPD
✅ Bannière de consentement cookies
✅ Pages légales complètes
✅ HTTPS automatique via GitHub Pages

## 📱 Réseaux sociaux

Ajoutez vos liens de réseaux sociaux dans le footer de `index.html` :

```html
<div class="flex gap-4 justify-center">
    <a href="https://facebook.com/votrepage" class="social-btn">Facebook</a>
    <a href="https://linkedin.com/company/votrepage" class="social-btn">LinkedIn</a>
    <a href="https://instagram.com/votrepage" class="social-btn">Instagram</a>
</div>
```

## 💡 Support

Pour toute question ou assistance, contactez :
- **Email** : genie.montauban@gmail.com
- **Site** : [Une fois en ligne]

## 📄 Licence

© 2025 Génie Montauban - Tous droits réservés

---

**Développé avec ❤️ pour l'économie sociale et solidaire**
