export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category?: string;
  date?: string;
  status?: 'completed' | 'in-progress' | 'archived';
  featured?: boolean;
  link?: string;
  github?: string;
  image?: string;
}

