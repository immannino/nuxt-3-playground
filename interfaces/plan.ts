export interface Post {
    title: string;
    description: string;
    body: string;
    author: Author;
}

export interface Author {
    name: string;
    title: string;
    social: Social;
}

export interface Social {
    twitter: string;
    instagram: string;
    email: string;
    phone: string;
    facebook: string;
    linkedin: string;
}