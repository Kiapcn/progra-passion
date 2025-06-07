export interface Formation {
  id: string;
  title: string;
  description: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  duration: string;
  price: number;
  imageUrl: string;
  url: string;
  tags: string[];
}

export interface Selection {
  id: string;
  title: string;
  description: string;
  type: 'formation' | 'ressource' | 'outil';
  items: Formation[];
  imageUrl: string;
}

export interface UserProgress {
  userId: string;
  completedFormations: string[];
  inProgressFormations: {
    formationId: string;
    progress: number;
  }[];
  savedSelections: string[];
} 