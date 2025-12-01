export interface Project {
  title: string;
  description: string;
  image?: string; // Optional image
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
}