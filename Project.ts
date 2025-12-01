// src/interfaces/Project.ts
export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
}