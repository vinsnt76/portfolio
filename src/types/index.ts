export type Project = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    liveUrl: string;
    repoUrl: string;
};

export type ContactForm = {
    name: string;
    email: string;
    message: string;
};

export interface AboutInfo {
    name: string;
    bio: string;
    skills: string[];
    socialLinks: {
        [key: string]: string;
    };
}