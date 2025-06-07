import formationsData from '@/data/formations.json';
import selectionsData from '@/data/selections.json';
import type { Formation, Selection } from '@/types';

// Type assertion pour les données JSON
const typedFormations = formationsData.formations as Formation[];
const typedSelections = selectionsData.selections as Selection[];

export async function getFormations(): Promise<Formation[]> {
  // Dans un environnement réel, cela pourrait être un appel API
  return typedFormations;
}

export async function getSelections(): Promise<Selection[]> {
  // Dans un environnement réel, cela pourrait être un appel API
  return typedSelections;
}

export async function getFormationById(id: string): Promise<Formation | undefined> {
  const formations = await getFormations();
  return formations.find(formation => formation.id === id);
}

export async function getSelectionById(id: string): Promise<Selection | undefined> {
  const selections = await getSelections();
  return selections.find(selection => selection.id === id);
} 