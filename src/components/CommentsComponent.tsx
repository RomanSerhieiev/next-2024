'use client';

import React, { FC, useState } from 'react';
import style from '../styles/ItemsPage.module.css';
import css from '../styles/ItemsComponent.module.css';
import FiltrationComponent from '@/components/FiltrationComponent';
import PaginationComponent from '@/components/PaginationComponent';
import CommentComponent from '@/components/CommentComponent';

interface IProps {
    comments: IComment[];
}

const CommentsComponent: FC<IProps> = ({comments}) => {
    const [page, setPage] = useState<number>(1);
    const [skip, setSkip] = useState<number>(25);
    const pages = comments.length % skip === 0 ? comments.length / skip : Math.floor(comments.length / skip) + 1;
    return (
        <div className={style.Container}>
            <div>
                <h1>COMMENTS</h1>
                <FiltrationComponent items={comments.length} skip={skip} setSkip={setSkip} setPage={setPage} />
                <div className={css.Container}>
                    {comments.slice((page - 1) * skip, (page - 1) * skip + skip).map(comment => <CommentComponent key={comment.id} comment={comment} />)}
                </div>
            </div>
            <PaginationComponent page={page} pages={pages} setPage={setPage} />
        </div>
    );
};

export default CommentsComponent;