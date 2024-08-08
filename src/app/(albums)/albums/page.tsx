import React, { FC } from 'react';
import { albumService } from '@/services/album.service';
import type { Metadata } from 'next';
import AlbumsComponent from '@/components/AlbumsComponent';

export const metadata: Metadata = {
    title: 'Albums',
    description: 'All albums',
};

const AlbumsPage: FC = async () => {
    const albums = await albumService.getAll()
    return (
        <div>
            <AlbumsComponent albums={albums} />
        </div>
    );
};

export default AlbumsPage;