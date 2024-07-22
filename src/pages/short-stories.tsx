// src/pages/short-stories.tsx

import Nav from '../components/Nav';
import ShortStoryCard from '../components/ShortStoryCard';
import Footer from '../components/RespFooter';
import ComicButton from "@/components/ComicButton";
import { useRouter } from "next/router";

const shortStories = [
  { 
    id: 1, 
    title: 'I Love Ze Young Love!', 
    warning: '(sexually explicit)',
    description: 'Cedar and Dara have been childhood friends, but now, as teens, taking sex ed classes, desires from the deep are stirring.',
    pdfFilename: 'dr-suess-the-bitter-butter-battle.pdf'
  },
  { 
    id: 2, 
    title: 'Who is Your Baby?', 
    description: 'Veeda, a teenage, single mom, struggling to survive on old Earth, shares her story with her children in Unity, igniting an unstoppable fire.',
    pdfFilename: 'what-if-the-titanic-hadnt-sunk.pdf'
  },
  { 
    id: 3, 
    title: 'The Many Forms of Healing', 
    warning: '(sexually explicit/ sexual violence)',
    description: 'Joshiah, after suffering an unspeakable trauma on old Earth, seeks out healing from the one person he trusts more than life itself.',
    pdfFilename: 'pov-youre-a.pdf'
  },
  { 
    id: 4, 
    title: 'You Don\'t Have to Hide Forever', 
    warning: '(sexually explicit)',
    description: 'Jax, reeling from shame on old Earth, buried the sacred carnal delight. Jax is ready to face sexuality and heal once and for all.',
    pdfFilename: ''
  },
  { 
    id: 5, 
    title: 'Is Everything a Lie?', 
    description: 'Azriel and Ronan, facing intense scrutiny, divulge details of their lives on old Earth, reluctantly revealing deep shame and regret.',
    pdfFilename: ''
  },
  { 
    id: 6, 
    title: 'If Love Could Heal', 
    warning: '(reference to intense violence)',
    description: 'Nora experiences brutal violence on old Earth and awakens to her true nature. She remains on old Earth to help the humans, but can she get through to the most important human in her life?',
    pdfFilename: ''
  },
  { 
    id: 7, 
    title: 'I\'ll Have ALL of You or NONE of You', 
    warning: '(sexually explicit)',
    description: 'Azriel fears being possessed by a woman, yet desires connection. To finally heal his deep fear of commitment, he must swallow his pride and get assistance from an unusual healer.',
    pdfFilename: ''
  },
  { 
    id: 8, 
    title: 'What is Your Desire, My Queen?', 
    warning: '(sexually explicit)',
    description: 'Taytum, a famous singer on old Earth, was used and abused in every way. She enters adulthood determined to heal her past sexual trauma.',
    pdfFilename: ''
  },
  { 
    id: 9, 
    title: 'Descent From the Pedestal', 
    warning: '(reference to suicide)',
    description: 'Magna, a famous actor on old Earth struggles with drug addiction and must find her way to Unity, heal her trauma, and unearth the truest nature of her gifts.',
    pdfFilename: ''
  },
  { 
    id: 10, 
    title: 'The Flight of the Phoenix', 
    warning: '(reference to suicide)',
    description: 'Puma and Viviana, seeking to understand the humans of old Earth, discover their ultimate purpose.',
    pdfFilename: ''
  },
];

export default function ShortStoriesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-purple-50">
      <Nav />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl text-slate-800 font-serif font-bold">Short Stories</h1>
        <p className="mt-4 text-lg font-serif text-slate-700 italic">
          The Luminoles of Unity have graciously offered to share the intimate details of their lives for healing, growth, and joy.
        </p>
        <p className="mt-2 text-lg text-slate-700 font-serif">
          PEACE to all beings in all worlds.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-center">
          {shortStories.map((story) => (
            <ShortStoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
      <div className="mt-20 flex flex-col lg:flex-row w-full gap-4 items-center justify-center">
        <div className="lg:w-3/12 md:w-5/12 w-9/12">
          <ComicButton
            label="← See Luminoles 🧚‍♂️"
            onClick={() => router.push("/luminoles")}
          />
        </div>
        <div className="lg:w-3/12 md:w-5/12 w-9/12">
          <ComicButton
            label="🕊️ View Offerings → "
            onClick={() => router.push("/offerings")}
          />
        </div>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}