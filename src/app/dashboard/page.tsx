import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Accédez à votre espace personnel pour suivre votre progression et gérer vos formations en programmation.',
};

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Votre Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Placeholder pour le dashboard */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Progression</h2>
            <p>Votre progression sera bientôt disponible.</p>
          </div>
        </div>
        
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Formations en cours</h2>
            <p>Vos formations en cours seront bientôt disponibles.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 