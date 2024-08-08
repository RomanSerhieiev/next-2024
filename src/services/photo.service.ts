import { url } from '@/constants/urls'

export const photoService = {
    getAll: async (): Promise<IPhoto[]> => {
        return await fetch(url.photos.all)
            .then(value => value.json());
    },
    getById: async (id: string): Promise<IPhoto> => {
        return await fetch(url.photos.byId(id))
            .then(value => value.json());
    },
    getByAlbum: async (albumId: string): Promise<IPhoto[]> => {
        return await fetch(url.photos.byAlbum(albumId))
            .then(value => value.json());
    },
};