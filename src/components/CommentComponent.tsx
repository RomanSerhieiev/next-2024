import React, { FC } from 'react';
import css from '../styles/ItemComponent.module.css';
import Link from 'next/link';

interface IProps {
    comment: IComment;
}

const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div className={css.Container}>
            <h3>{comment.id}. {comment.name.slice(0, 8)}</h3>
            <Link href={`/comments/${comment.id}`}>
                <button>INFO</button>
            </Link>
        </div>
    );
};

export default CommentComponent;