import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formations',
  description: 'Explorez nos formations en programmation, conçues pour tous les niveaux. Développez vos compétences avec des cours de qualité.',
};

export default function Formation() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Nos Formations</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder pour les formations */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Formations à venir</h2>
            <p>Les formations seront bientôt disponibles.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 