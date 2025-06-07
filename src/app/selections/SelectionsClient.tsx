'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getSelections } from '@/utils/dataLoader';
import SelectionCard from '@/components/ui/SelectionCard';
import type { Selection } from '@/types';

export default function SelectionsClient() {
  const [selections, setSelections] = useState<Selection[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const selectionId = searchParams.get('selection');

  useEffect(() => {
    const loadSelections = async () => {
      try {
        const data = await getSelections();
        setSelections(data);
      } catch (error) {
        console.error('Erreur lors du chargement des sélections:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSelections();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Nos Sélections</h1>
        <p className="text-lg text-gray-600 mb-8">
          Découvrez nos sélections de formations et ressources en programmation, 
          soigneusement choisies pour vous accompagner dans votre apprentissage.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {selections.map((selection) => (
            <div key={selection.id} className="h-full">
              <SelectionCard 
                selection={selection} 
                initialOpen={selection.id === selectionId}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 