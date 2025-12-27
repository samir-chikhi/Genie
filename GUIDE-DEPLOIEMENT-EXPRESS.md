# 🚀 GUIDE DE DÉPLOIEMENT EXPRESS - 5 MINUTES

## ⚡ Déploiement ultra-rapide

### ÉTAPE 1 : Téléchargez les fichiers (déjà fait ✅)

Vous avez déjà tous les fichiers. Il vous suffit de les uploader sur GitHub.

### ÉTAPE 2 : Créer un dépôt GitHub (2 minutes)

1. Allez sur https://github.com
2. Connectez-vous (ou créez un compte gratuit)
3. Cliquez sur le **bouton vert "New"** en haut à gauche
4. Nommez votre dépôt : `genie-montauban`
5. Laissez en **Public**
6. Cliquez sur **"Create repository"**

### ÉTAPE 3 : Uploader les fichiers (2 minutes)

**Option la plus simple :**

1. Dans votre nouveau dépôt vide, cliquez sur **"uploading an existing file"**
2. **Glissez-déposez TOUS les fichiers** que vous avez téléchargés :
   - `index.html`
   - `mentions-legales.html`
   - `politique-confidentialite.html`
   - `cgv.html`
   - Le dossier `css/` (avec `style.css` dedans)
   - Le dossier `js/` (avec `main.js` dedans)
   - Le dossier `images/` (vide pour l'instant)
   - `.gitignore`
   - `README.md`
3. Écrivez dans le champ : "Site initial du Génie"
4. Cliquez sur **"Commit changes"**

### ÉTAPE 4 : Activer GitHub Pages (1 minute)

1. Dans votre dépôt, cliquez sur **"Settings"** (⚙️)
2. Dans le menu de gauche, cliquez sur **"Pages"**
3. Sous "Source" :
   - Sélectionnez **Branch: main**
   - Laissez **/ (root)**
4. Cliquez sur **"Save"**
5. **Attendez 2-3 minutes** ⏳

### ÉTAPE 5 : Votre site est en ligne ! 🎉

Votre site sera accessible à :
```
https://VOTRE-USERNAME.github.io/genie-montauban/
```

**Exemple :** Si votre username est `samir`, l'adresse sera :
```
https://samir.github.io/genie-montauban/
```

---

## 🔧 PERSONNALISATION IMMÉDIATE

### 1. Changer les coordonnées (OBLIGATOIRE)

Dans **index.html**, recherchez et remplacez :
- `genie.montauban@gmail.com` → Votre vrai email
- `+33 X XX XX XX XX` → Votre vrai téléphone

### 2. Compléter les mentions légales (OBLIGATOIRE)

Dans **mentions-legales.html**, complétez :
- Nom de votre structure
- Forme juridique (Association, SCIC, SARL...)
- N° SIRET
- Directeur de publication

### 3. Ajouter vos photos (RECOMMANDÉ)

1. Placez vos photos dans le dossier `images/`
2. Re-uploadez le dossier sur GitHub
3. Modifiez `index.html` pour remplacer les placeholders

---

## ✅ CHECKLIST AVANT PUBLICATION

- [ ] Email de contact modifié
- [ ] Téléphone modifié
- [ ] Mentions légales complétées
- [ ] Au moins 1 photo ajoutée
- [ ] Site testé sur mobile
- [ ] Formulaire de contact testé

---

## 📞 BESOIN D'AIDE ?

Le site est 100% fonctionnel tel quel. Vous pouvez le mettre en ligne immédiatement et le personnaliser progressivement.

**Temps total : 5 minutes**
**Coût : 0€** (GitHub Pages est gratuit)
**Maintenance : 0€/mois**

---

## 🎯 POUR ALLER PLUS LOIN

### Ajouter un nom de domaine personnalisé

Au lieu de `username.github.io/genie-montauban`, avoir `legenie-montauban.fr` :

1. Achetez un domaine sur OVH, Gandi, etc. (~10€/an)
2. Dans les DNS, créez un CNAME vers `username.github.io`
3. Dans GitHub Settings > Pages, ajoutez votre domaine

### Connecter un formulaire de contact

Le formulaire utilise actuellement `mailto:`. Pour un vrai formulaire :

1. Créez un compte gratuit sur [FormSpree.io](https://formspree.io)
2. Suivez leurs instructions (2 lignes de code à modifier)

### Ajouter Google Analytics

1. Créez une propriété sur Google Analytics
2. Dans `index.html`, remplacez `G-XXXXXXXXXX` par votre ID

---

**🎉 FÉLICITATIONS ! Votre site est prêt !**
