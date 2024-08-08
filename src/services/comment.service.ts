import { url } from '@/constants/urls';

export const commentService = {
    getAll: async (): Promise<IComment[]> => {
        return await fetch(url.comments.all)
            .then(value => value.json());
    },
    getById: async (id: string): Promise<IComment> => {
        return await fetch(url.comments.byId(id))
            .then(value => value.json());
    },
    getByPost: async (postId: string): Promise<IComment[]> => {
        return await fetch(url.comments.byPost(postId))
            .then(value => value.json());
    },
};