import Head from '../components/Head';
import Nav from '../components/Nav';
import Footer from '../components/RespFooter';
import Image from 'next/image';
import { useState } from 'react';

interface Location {
  id: number;
  src: string;
  alt: string;
  description: string;
}

const locations: Location[] = [
  { id: 1, src: '/images/landscape-1.jpg', alt: 'Location 1', description: 'Description of Location 1' },
  { id: 2, src: '/images/landscape-2.jpg', alt: 'Location 2', description: 'Description of Location 2' },
  { id: 3, src: '/images/landscape-3.jpg', alt: 'Location 3', description: 'Description of Location 3' },
  { id: 4, src: '/images/landscape-4.jpg', alt: 'Location 4', description: 'Description of Location 4' },
  { id: 5, src: '/images/landscape-5.jpg', alt: 'Location 5', description: 'Description of Location 5' },
  { id: 6, src: '/images/landscape-6.jpg', alt: 'Location 6', description: 'Description of Location 6' },
  { id: 7, src: '/images/landscape-7.jpg', alt: 'Location 7', description: 'Description of Location 7' },
  { id: 8, src: '/images/landscape-8.jpg', alt: 'Location 8', description: 'Description of Location 8' },
  { id: 9, src: '/images/landscape-9.jpg', alt: 'Location 9', description: 'Description of Location 9' },
  { id: 10, src: '/images/landscape-10.jpg', alt: 'Location 10', description: 'Description of Location 10' },
  { id: 11, src: '/images/landscape-11.jpg', alt: 'Location 11', description: 'Description of Location 11' },
  { id: 12, src: '/images/landscape-12.jpg', alt: 'Location 12', description: 'Description of Location 12' },
];

export default function Landscape() {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head title="Landscape - Story Locations" />
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Story Locations</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <div
              key={location.id}
              className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${
                index % 5 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
              style={{ height: index % 5 === 0 ? '400px' : '250px' }}
              onClick={() => setActiveLocation(location)}
            >
              <Image
                src={location.src}
                alt={location.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <h3 className="text-white text-xl font-semibold p-4">{location.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
      {activeLocation && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 sm:p-8 rounded-lg w-full max-w-4xl">
            <div className="relative aspect-w-16 aspect-h-9 mb-4">
              <Image
                src={activeLocation.src}
                alt={activeLocation.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">{activeLocation.alt}</h2>
            <p className="mb-4 text-gray-600">{activeLocation.description}</p>
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors text-lg font-semibold"
              onClick={() => setActiveLocation(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}