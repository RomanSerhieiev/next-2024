import { url } from '@/constants/urls';

export const userService = {
    getAll: async (): Promise<IUser[]> => {
        return await fetch(url.users.all)
            .then(value => value.json());
    },
    getById: async (id: string): Promise<IUser> => {
        return await fetch(url.users.byId(id))
            .then(value => value.json());
    },
};