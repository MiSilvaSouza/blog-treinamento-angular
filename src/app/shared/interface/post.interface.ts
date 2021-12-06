
export interface Post {
    id: string;
    title: string;
    post: string;
    category: string;
    author?: string,
    likes: number;
    created?: string;
    tags?: string[];
    texts?: string[];
}
