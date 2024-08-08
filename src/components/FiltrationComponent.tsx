'use client';

import React, { FC } from 'react';
import css from '../styles/FiltrationComponent.module.css';

interface IProps {
    items: number,
    skip: number,
    setSkip: (skip: number) => void,
    setPage: (page: number) => void
}

const FiltrationComponent: FC<IProps> = ({items, skip, setSkip, setPage}) => {
    const skipHandler = (skip: number) => {
        setSkip(skip);
        setPage(1)
    };
    return (
        items >= 25 && <div className={css.Container}>
            <button className={`${skip === 25 ? css.Active : css.NotActive} ${css.Item1}`} onClick={() => skipHandler(25)}>25</button>
            {items >= 50 && <button className={`${skip === 50 ? css.Active : css.NotActive} ${css.Item2}`} onClick={() => skipHandler(50)}>50</button>}
            {items >= 75 && <button className={`${skip === 75 ? css.Active : css.NotActive} ${css.Item3}`} onClick={() => skipHandler(75)}>75</button>}
            {items >= 100 && <button className={`${skip === 100 ? css.Active : css.NotActive} ${css.Item4}`} onClick={() => skipHandler(100)}>100</button>}
        </div>
    );
};

export default FiltrationComponent;