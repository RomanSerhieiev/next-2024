'use client';

import React, { FC, useState } from 'react';
import style from '../styles/ItemsPage.module.css';
import css from '../styles/ItemsComponent.module.css';
import PhotoComponent from '@/components/PhotoComponent';
import FiltrationComponent from '@/components/FiltrationComponent';
import PaginationComponent from '@/components/PaginationComponent';

interface IProps {
    photos: IPhoto[];
}

const PhotosComponent: FC<IProps> = ({photos}) => {
    const [page, setPage] = useState<number>(1);
    const [skip, setSkip] = useState<number>(25);
    const pages = photos.length % skip === 0 ? photos.length / skip : Math.floor(photos.length / skip) + 1;
    return (
        <div className={style.Container}>
            <div>
                <h1>PHOTOS</h1>
                <FiltrationComponent items={photos.length} skip={skip} setSkip={setSkip} setPage={setPage} />
                <div className={css.Container}>
                    {photos.slice((page - 1) * skip, (page - 1) * skip + skip).map(photo => <PhotoComponent key={photo.id} photo={photo} />)}
                </div>
            </div>
            <PaginationComponent page={page} pages={pages} setPage={setPage} />
        </div>
    );
};

export default PhotosComponent;