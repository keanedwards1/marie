import React from "react";
import NextHead from 'next/head';

interface HeadProps {
  title?: string;
  description?: string;
}

const Head: React.FC<HeadProps> = ({ 
  title = 'The Realm of Unity | A Spiritual Fantasy Adventure by V. M. Elyse', 
  description = 'Explore the Realm of Unity, a spiritual fantasy adventure by V. M. Elyse. Journey with Rose through a magical utopian wonderland contrasting a dystopian Earth.'
}) => (
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
    <meta name="twitter:description" content="Discover the Realm of Unity: A magical utopian wonderland where peace and human compassion prevail. Join Rose on her transformative journey." />
    <meta name="twitter:image" content="https://therealmofunity.com/assets/images/twitter-card-image.png" />

    <meta name="robots" content="index, follow" />
    <meta name="author" content="V. M. Elyse" />
    <meta name="description" content={description} />
    <meta name="title" content={title} />
    <meta name="keywords" content="realm of unity, spiritual fantasy book, magical utopian wonderland, transformative journey, dystopian Earth, human compassion, peace, self-discovery, mystical adventure, spiritual awakening, fantasy novel, new world, utopia vs dystopia, inspirational fantasy, Rose's Journey, meditation, mystical realms, spiritual transformation, magical realism, speculative fiction, utopian fantasy" />
    <meta property="og:description" content={description} />

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
          "name": "The Realm of Unity",
          "url": "https://therealmofunity.com",
          "logo": "https://therealmofunity.com/favicon-32x32.png",
          "description": "${description}",
          "sameAs": []
      }
      `}
    </script>

    <script type="application/ld+json">
      {`
      {
          "@context": "http://schema.org",
          "@type": "Book",
          "name": "The Realm of Unity",
          "author": {
              "@type": "Person",
              "name": "V. M. Elyse"
          },
          "description": "${description}",
          "genre": "Spiritual Fantasy",
          "inLanguage": "English",
          "url": "https://therealmofunity.com"
      }
      `}
    </script>
  </NextHead>
);

export default Head;