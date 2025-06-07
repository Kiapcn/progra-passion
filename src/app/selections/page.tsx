import { Metadata } from 'next';
import SelectionsClient from './SelectionsClient';

export const metadata: Metadata = {
  title: 'Sélections',
  description: 'Découvrez nos sélections de formations et ressources en programmation, soigneusement choisies pour vous accompagner dans votre apprentissage.',
  openGraph: {
    title: 'Sélections | PrograPassion',
    description: 'Découvrez nos sélections de formations et ressources en programmation, soigneusement choisies pour vous accompagner dans votre apprentissage.',
  },
};

export default function Selections() {
  return <SelectionsClient />;
} 