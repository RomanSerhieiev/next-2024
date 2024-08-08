import React, { FC } from 'react';
import { albumService } from '@/services/album.service';
import type { Metadata } from 'next';
import AlbumsComponent from '@/components/AlbumsComponent';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export const metadata: Metadata = {
    title: 'Albums',
    description: 'All albums',
};

const AlbumsPage: FC<Params> = async ({params: {userId}}) => {
    const albums = await albumService.getByUser(userId)
    return (
        <div>
            <AlbumsComponent albums={albums} />
        </div>
    );
};

export default AlbumsPage;