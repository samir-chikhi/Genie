But : dossier images pour le site "Génie Montauban".

Fichiers attendus :
- images/genie-facade.jpg (photo du bâtiment) — recommandé : JPG, largeur 1600px, quality 80
- images/logo.png (logo officiel) — format PNG ou SVG (préférer SVG si disponible)
- images/og-image.jpg (Open Graph image) — recommandé : JPG 1200x630, quality 85
- images/favicon.png (favicon) — PNG 32x32 (ou favicon.ico)

Ce qui a été fait par la branche fix/images (ou à faire manuellement si placeholder) :
- Copie/renommage : "Génie-facade.PNG" -> images/genie-facade.jpg (ou .png selon votre conversion)
- Copie/renommage : "logo provisoire 15-best.png" -> images/logo.png
- Génération : images/og-image.jpg et images/favicon.png si possible (sinon des copies/placeholder sont présentes).
- index.html mis à jour pour pointer vers /images/* (og:image, favicon, src image bâtiment).

Si vous voyez des fichiers placeholder (petits fichiers texte), remplacez-les par les images réelles en respectant les tailles ci‑dessus. Pour générer les versions optimisées, utilisez ImageMagick (exemples fournis ci‑dessous).
