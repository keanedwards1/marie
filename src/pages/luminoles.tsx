// src/pages/characters.tsx
import Head from "../components/Head";
import Nav from '../components/Nav';
import CharacterCard from '../components/CharacterCard';
import Footer from '../components/RespFooter';

const characters = [
  { name: 'Mari Healing Guide', bio: 'Bio of Mari', image: '/images/1-mari-healing-guide.jpg' },
  { name: 'Greta Master Creative Builder', bio: 'Bio of Greta', image: '/images/2-greta-master-creative-builder.jpeg' },
  { name: 'Alfred Master Creative Builder', bio: 'Bio of Alfred', image: '/images/3-alfred-master-creative-builder.jpeg' },
  { name: 'Cheyenne Head Builder', bio: 'Bio of Cheyenne', image: '/images/4-cheyenne-head-builder.jpeg' },
  { name: 'Ned Builder', bio: 'Bio of Ned', image: '/images/5-ned-builder.jpeg' },
  { name: 'Malika Creative', bio: 'Bio of Malika', image: '/images/6-malika-creative.jpeg' },
  { name: 'Aspen Culinary Creative', bio: 'Bio of Aspen', image: '/images/7-aspen-culinary-creative.jpeg' },
  { name: 'Puma', bio: 'Bio of Puma', image: '/images/8-puma.jpeg' },
  { name: 'Jax Androgynous Xe Xem Pronouns Shapeshifter', bio: 'Bio of Jax', image: '/images/9-jax-androgenous-xe-xem-pronouns-shapeshifter.jpg' },
  { name: 'Akira And Dara', bio: 'Bio of Akira And Dara', image: '/images/10-akira-and-dara.jpeg' },
  { name: 'Alaysia Creative Nature Protector', bio: 'Bio of Alaysia', image: '/images/11-alaysia-creative-nature-protector.jpeg' },
  { name: 'Miriam Healer', bio: 'Bio of Miriam', image: '/images/12-miriam-healer.jpeg' },
  { name: 'Mona Healer Nature Protector', bio: 'Bio of Mona', image: '/images/13-mona-healer-nature-protector.jpeg' },
  { name: 'Nora Healer Floater', bio: 'Bio of Nora', image: '/images/14-nora-healer-floater.jpeg' },
  { name: 'Magna Creative Performer', bio: 'Bio of Magna', image: '/images/15-magna-creative-performer.jpeg' },
  { name: 'Samita Nature Protector', bio: 'Bio of Samita', image: '/images/16-samita-nature-protector.jpeg' },
  { name: 'Peretz Creative Builder Nature Protector', bio: 'Bio of Peretz', image: '/images/17-peretz-createive-builder-nature-protector.jpeg' },
  { name: 'Maanya Eleventh Dimensional From The Pleiadian Star System', bio: 'Bio of Maanya', image: '/images/18-maanya-eleventh-dimensional-from-the-pleiadian-star-system.jpeg' },
  { name: 'Drake Sexual Healer', bio: 'Bio of Drake', image: '/images/19-drake-sexual-healer.jpeg' },
  { name: 'Viola Sexual Healer', bio: 'Bio of Viola', image: '/images/20-viola-sexual-healer.jpeg' },
  { name: 'Hannah Sexual Healer', bio: 'Bio of Hannah', image: '/images/21-hannah-sexual-healer.jpeg' },
  { name: 'Yeshua Healer', bio: 'Bio of Yeshua', image: '/images/22-yeshua-healer.jpeg' },
  { name: 'Veeda Mother Healer', bio: 'Bio of Veeda', image: '/images/23-veeda-mother-healer.jpeg' },
  { name: 'Cedar', bio: 'Bio of Cedar', image: '/images/24-cedar.jpeg' },
  { name: 'Summit', bio: 'Bio of Summit', image: '/images/25-summit.jpeg' },
  { name: 'Baz Educator Creative', bio: 'Bio of Baz', image: '/images/26-baz-educator-creative.jpeg' },
  { name: 'Josiah Educator', bio: 'Bio of Josiah', image: '/images/27-josiah-educator.jpeg' },
  { name: 'Leaf Non Binary', bio: 'Bio of Leaf', image: '/images/28-leaf-non-binary.jpeg' },
  { name: 'Ismar', bio: 'Bio of Ismar', image: '/images/29-ismar.jpeg' },
  { name: 'Shakk Educator Builder', bio: 'Bio of Shakk', image: '/images/30-shakk-educator-builder.jpeg' },
  { name: 'Ronan Herbal Healer', bio: 'Bio of Ronan', image: '/images/31-ronan-herbal-healer.jpeg' },
  { name: 'Azriel Crystal Healer', bio: 'Bio of Azriel', image: '/images/32-azriel-crystal-healer.jpeg' },
  { name: 'Aziza Leader', bio: 'Bio of Aziza', image: '/images/33-aziza-leader.jpeg' },
  { name: 'Imani Leader', bio: 'Bio of Imani', image: '/images/34-imani-leader.jpeg' },
  { name: 'Sasha Culinary Creative', bio: 'Bio of Sasha', image: '/images/35-sasha-culinary-creative.jpeg' },
  { name: 'Waylan Explorer', bio: 'Bio of Waylan', image: '/images/36-waylan-explorer.jpeg' },
  { name: 'Hiroshi Explorer', bio: 'Bio of Hiroshi', image: '/images/37-hiroshi-explorer.jpeg' },
  { name: 'Nalu Culinary Creative', bio: 'Bio of Nalu', image: '/images/38-nalu-culinary-creative.jpeg' },
  { name: 'Chokyi Leader', bio: 'Bio of Chokyi', image: '/images/39-chokyi-leader.jpeg' },
  { name: 'Laanza Eleventh Dimensional Pleiadian', bio: 'Bio of Laanza', image: '/images/40-laanza-eleventh-dimensional-pleiadian.jpeg' }
];



export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-gray-100">
        <Head
          title="Luminoles | Characters"
          description="Explore the various characters featured in the book &quot;The Realm of Unity&quot;."
        />
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Characters</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {characters.map((character, index) => (
            <CharacterCard key={index} character={character} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
