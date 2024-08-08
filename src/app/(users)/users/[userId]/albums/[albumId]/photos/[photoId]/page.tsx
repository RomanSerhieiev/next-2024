import React, { FC } from 'react';
import css from '../../../../styles/ItemInfoPage.module.css';
import { photoService } from '@/services/photo.service';
import Link from 'next/link';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { Metadata } from 'next';

export const generateMetadata = async ({params: {photoId}}: Params): Promise<Metadata> => {
    const photo = await photoService.getById(photoId);
    return {
        title: `Photo - ${photo.title}`,
        description: `Info about photo ${photo.id}. ${photo.title}`,
    };
};

const PhotosInfoPage: FC<Params> = async ({params: {photoId}}) => {
    const photo = await photoService.getById(photoId);
    return (
        <div className={css.Container}>
            <h2>{photo.id}. {photo.title}</h2>
            <img src={photo.url} alt={photo.title} />
            <Link href={`/albums/${photo.albumId}`}>
                <button>ALBUM</button>
            </Link>
        </div>
    );
};

export default PhotosInfoPage;