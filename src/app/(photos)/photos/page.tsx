import React, { FC } from 'react';
import { photoService } from '@/services/photo.service';
import { Metadata } from 'next';
import PhotosComponent from '@/components/PhotosComponent';

export const metadata: Metadata = {
    title: 'Photos',
    description: 'All photos',
};

const PhotosPage: FC = async () => {
    const photos = await photoService.getAll();
    return (
        <div>
            <PhotosComponent photos={photos} />
        </div>
    );
};

export default PhotosPage;