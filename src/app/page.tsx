import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { getSelections } from '@/utils/dataLoader';

export const metadata: Metadata = {
  title: 'Accueil',
  description: 'Découvrez le monde de la programmation avec PrograPassion. Formations et ressources sélectionnées pour votre apprentissage.',
};

export default async function Home() {
  const selections = await getSelections();
  const latestSelection = selections[0]; // On prend la première sélection comme la plus récente

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-base-200 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Apprenez la Programmation avec Passion
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Découvrez des formations et ressources sélectionnées pour vous accompagner
              dans votre apprentissage de la programmation.
            </p>
            <Link
              href={`/selections?selection=${latestSelection.id}`}
              className="btn btn-primary btn-lg"
            >
              Découvrir notre dernière sélection
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Selection Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Notre Dernière Sélection
            </h2>
            <div className="bg-base-100 rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={latestSelection.imageUrl}
                  alt={latestSelection.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{latestSelection.title}</h3>
                <p className="text-gray-600 mb-6">{latestSelection.description}</p>
                <Link
                  href={`/selections?selection=${latestSelection.id}`}
                  className="btn btn-primary"
                >
                  Voir les détails
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-base-100 shadow-lg transform translate-y-full transition-transform duration-300 ease-in-out hover:translate-y-0 z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Prêt à commencer votre apprentissage ?</h3>
              <p className="text-gray-600">Découvrez nos formations sélectionnées</p>
            </div>
            <Link
              href="/selections"
              className="btn btn-primary"
            >
              Explorer les formations
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 