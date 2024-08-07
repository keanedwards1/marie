import React from "react";
import NextHead from 'next/head';

interface HeadProps {
  title?: string;
  description?: string;
}

const Head: React.FC<HeadProps> = ({ title = 'Book Launch | The Realm of Unity', description = 'Explore the website for The Realm Of Unity, a book by author V. M. Elyse' }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>{title}</title>
    <link rel="canonical" href="https://therealmofunity.com/" />

    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://therealmofunity.com/" />
    <meta property="og:image" content="https://therealmofunity.com/android-chrome-192x192.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content="Join Rose on her transformative journey through a magical utopian wonderland in The Realm of Unity. A story of peace, discovery, and the power of human compassion." />
    <meta name="twitter:image" content="https://therealmofunity.com/assets/images/twitter-card-image.png" />

    <meta name="robots" content="index, follow" />
    <meta name="author" content="Marie Elyse" />
    <meta name="description" content="Rose's Journey in The Realm of Unity is a spiritual fantasy adventure that contrasts a dystopian Earth with a magical utopia. Explore themes of peace, discovery, and human compassion." />
    <meta name="title" content={title} />
    <meta name="keywords" content="spiritual fantasy book, magical utopian wonderland, transformative journey, dystopian Earth, human compassion, peace, self-discovery, mystical adventure, spiritual awakening, fantasy novel, new world, utopia vs dystopia, inspirational fantasy, realm of unity, Rose's Journey, meditation, mystical realms, spiritual transformation, magical realism, speculative fiction, utopian fantasy" />
    <meta property="og:description" content="Discover Rose's transformative journey through The Realm of Unity, a spiritual fantasy adventure where peace and human compassion prevail over dystopian challenges." />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/manifest.json"></link>
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />


    <script type="application/ld+json">
      {`
      {
          "@context": "http://schema.org",
          "@type": "WebSite",
          "name": "LogoMinter",
          "url": "https://logominter.com/",
          "logo": "https://logominter.com/assets/images/logo.png",
          "sameAs": []
      }
      `}
    </script>
  </NextHead>
);

export default Head;