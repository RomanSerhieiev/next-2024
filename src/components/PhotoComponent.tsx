import React, { FC } from 'react';
import css from '../styles/ItemComponent.module.css';
import Link from 'next/link';

interface IProps {
    photo: IPhoto;
}

const PhotoComponent: FC<IProps> = ({photo}) => {
    return (
        <div className={css.Container}>
            <h3>{photo.id}. {photo.title.slice(0, 8)}</h3>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <Link href={`/photos/${photo.id}`}>
                <button>INFO</button>
            </Link>
        </div>
    );
};

export default PhotoComponent;