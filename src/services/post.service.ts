import { url } from '@/constants/urls';

export const postService = {
    getAll: async (): Promise<IPost[]> => {
        return await fetch(url.posts.all)
            .then(value => value.json());
    },
    getById: async (id: string): Promise<IPost> => {
        return await fetch(url.posts.byId(id))
            .then(value => value.json());
    },
    getByUser: async (userId: string): Promise<IPost[]> => {
        return await fetch(url.posts.byUser(userId))
            .then(value => value.json());
    },
};