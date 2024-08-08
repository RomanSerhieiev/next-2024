import React, { FC } from 'react';
import css from '../../../../styles/ItemInfoPage.module.css';
import { albumService } from '@/services/album.service';
import Link from 'next/link';
import { Metadata } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export const generateMetadata = async ({params: {albumId}}: Params): Promise<Metadata> => {
    const album = await albumService.getById(albumId);
    return {
        title: `Album - ${album.title}`,
        description: `Info about album ${album.id}. ${album.title}`,
    };
};

const AlbumsInfoPage: FC<Params> = async ({params: {albumId}}) => {
    const album = await albumService.getById(albumId);
    return (
        <div className={css.Container}>
            <h2>{album.id}. {album.title}</h2>
            <Link href={`/users/${album.userId}`}>
                <button>USER</button>
            </Link>
            <Link href={`${albumId}/photos`}>
                <button>PHOTOS</button>
            </Link>
        </div>
    );
};

export default AlbumsInfoPage;