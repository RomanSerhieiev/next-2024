import React, { FC } from 'react';
import css from '../styles/ItemComponent.module.css';
import Link from 'next/link';

interface IProps {
    album: IAlbum;
}

const AlbumComponent: FC<IProps> = ({album}) => {
    return (
        <div className={css.Container}>
            <h3>{album.id}. {album.title.slice(0, 8)}</h3>
            <Link href={`/albums/${album.id}`}>
                <button>INFO</button>
            </Link>
        </div>
    );
};

export default AlbumComponent;