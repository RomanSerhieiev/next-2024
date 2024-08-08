import { url } from '@/constants/urls';

export const todoService = {
    getAll: async (): Promise<ITodo[]> => {
        return await fetch(url.todos.all)
            .then(value => value.json());
    },
    getById: async (id: string): Promise<ITodo> => {
        return await fetch(url.todos.byId(id))
            .then(value => value.json());
    },
    getByUser: async (userId: string): Promise<ITodo[]> => {
        return await fetch(url.todos.byUser(userId))
            .then(value => value.json());
    },
};