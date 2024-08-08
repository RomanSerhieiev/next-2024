'use client';

import React, { FC } from 'react';
import css from '../styles/PaginationComponent.module.css';

interface IProps {
    page: number,
    pages: number,
    setPage: (page: number) => void,
}

const PaginationComponent: FC<IProps> = ({page, pages, setPage}) => {
    const pageHandler = (page: number) => {
        setPage(page);
    };
    return (
        <div className={css.Container}>
            {page > 2 && <button className={css.Item1} value={1} onClick={() => pageHandler(1)}>{'<<'}</button>}
            {page > 1 && <button className={css.Item2} value={page - 1} onClick={() => pageHandler(page - 1)}>{'<'}</button>}
            <div className={css.Item3}>{page}</div>
            {page < pages && <button className={css.Item4} value={page + 1} onClick={() => pageHandler(page + 1)}>{'>'}</button>}
            {page < pages - 1 && <button className={css.Item5} value={pages} onClick={() => pageHandler(pages)}>{'>>'}</button>}
        </div>
    );
};

export default PaginationComponent;