import React, { FC } from 'react';
import { photoService } from '@/services/photo.service';
import { Metadata } from 'next';
import PhotosComponent from '@/components/PhotosComponent';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { albumService } from '@/services/album.service';

export const generateMetadata = async ({params: {albumId}}: Params): Promise<Metadata> => {
    const album = await albumService.getById(albumId);
    return {
        title: `Photos of album - ${album.title}`,
        description: `All photos of album ${album.id}. ${album.title}`,
    };
};

const PhotosPage: FC<Params> = async ({params: {albumId}}) => {
    const photos = await photoService.getByAlbum(albumId);
    return (
        <div>
            <PhotosComponent photos={photos} />
        </div>
    );
};

export default PhotosPage;