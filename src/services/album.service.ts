import { url } from '@/constants/urls';

export const albumService = {
    getAll: async (): Promise<IAlbum[]> => {
        return await fetch(url.albums.all)
            .then(value => value.json());
    },
    getById: async (id: string): Promise<IAlbum> => {
        return await fetch(url.albums.byId(id))
            .then(value => value.json());
    },
    getByUser: async (userId: string): Promise<IAlbum[]> => {
        return await fetch(url.albums.byUser(userId))
            .then(value => value.json());
    },
};