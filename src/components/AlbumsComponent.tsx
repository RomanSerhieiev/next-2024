'use client';

import React, { FC, useState } from 'react';
import style from '../styles/ItemsPage.module.css';
import css from '../styles/ItemsComponent.module.css';
import FiltrationComponent from '@/components/FiltrationComponent';
import PaginationComponent from '@/components/PaginationComponent';
import AlbumComponent from '@/components/AlbumComponent';

interface IProps {
    albums: IAlbum[];
}

const AlbumsComponent: FC<IProps> = ({albums}) => {
    const [page, setPage] = useState<number>(1);
    const [skip, setSkip] = useState<number>(25);
    const pages = albums.length % skip === 0 ? albums.length / skip : Math.floor(albums.length / skip) + 1;
    return (
        <div className={style.Container}>
            <div>
                <h1>ALBUMS</h1>
                <FiltrationComponent items={albums.length} skip={skip} setSkip={setSkip} setPage={setPage} />
                <div className={css.Container}>
                    {albums.slice((page - 1) * skip, (page - 1) * skip + skip).map(album => <AlbumComponent key={album.id} album={album} />)}
                </div>
            </div>
            <PaginationComponent page={page} pages={pages} setPage={setPage} />
        </div>
    );
};

export default AlbumsComponent;