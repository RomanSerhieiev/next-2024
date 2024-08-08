import React, { FC } from 'react';
import { photoService } from '@/services/photo.service';
import { Metadata } from 'next';
import PhotosComponent from '@/components/PhotosComponent';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export const metadata: Metadata = {
    title: 'Photos',
    description: 'All photos',
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