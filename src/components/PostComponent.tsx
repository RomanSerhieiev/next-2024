import React, { FC } from 'react';
import css from '../styles/ItemComponent.module.css';
import Link from 'next/link';

interface IProps {
    post: IPost;
}

const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div className={css.Container}>
            <h3>{post.id}. {post.title.slice(0, 8)}</h3>
            <Link href={`/posts/${post.id}`}>
                <button>INFO</button>
            </Link>
        </div>
    );
};

export default PostComponent;