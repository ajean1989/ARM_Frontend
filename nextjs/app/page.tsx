import React from 'react';
import type { Metadata } from 'next'

// export let navName : string = "Home"
  
export const metadata: Metadata = {
  title: 'ARM - Home',
  description: "Page d'accueil de la plateforme ARM",
}


// `app/page.tsx` is the UI for the `/` URL
export default function IndexPage() {
    return (
      <div className='bg-my-yellow rounded-xl w-4/5 m-auto p-4 my-20 md:w-3/4'>
        <div>
          <h1>Bienvenue sur l'application web du projet E4 de la certification de développeur en intelligence artificielle Simplon !</h1>
          <br />
          <p>Je suis ravi de vous présenter mon application d'intelligence artificielle révolutionnaire, conçue pour détecter les articles de magasin avec une précision et une efficacité incroyables.</p>
          <br />
          <p>L'application offre plusieurs fonctionnalités passionnantes :</p>
          <ul>
            <li><strong>Essayer le modèle :</strong> Explorez notre page dédiée où vous pouvez tester notre modèle d'intelligence artificielle en action. Téléchargez des images d'articles de magasin et observez comment notre modèle les détecte avec une précision impressionnante.</li>
            <li><strong>Visualiser le dataset :</strong> Plongez dans les données avec notre page de visualisation de dataset. Découvrez les images et les informations associées qui ont alimenté l'apprentissage de notre modèle, et obtenez un aperçu fascinant de la diversité des articles de magasin couverts par notre application.</li>
            <li><strong>Logs du modèle et de l'API :</strong> Sur nos pages dédiées, examinez les logs détaillés de notre modèle d'intelligence artificielle ainsi que ceux de notre API. Explorez les résultats des prédictions, les métriques de performance et bien plus encore, pour comprendre le fonctionnement interne de notre système.</li>
          </ul>
          <br />
          <p>J'espère que vous trouverez l'application passionnante et innovante. N'hésitez pas à explorer chaque partie de notre site et à nous faire part de vos commentaires.</p>
          <p>Merci de votre visite et de votre intérêt pour notre projet d'intelligence artificielle !</p>
        </div>
      </div>
    )
  }