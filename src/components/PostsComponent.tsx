'use client';

import React, { FC, useState } from 'react';
import style from '../styles/ItemsPage.module.css';
import css from '../styles/ItemsComponent.module.css';
import FiltrationComponent from '@/components/FiltrationComponent';
import PaginationComponent from '@/components/PaginationComponent';
import PostComponent from '@/components/PostComponent';

interface IProps {
    posts: IPost[];
}

const PostsComponent: FC<IProps> = ({posts}) => {
    const [page, setPage] = useState<number>(1);
    const [skip, setSkip] = useState<number>(25);
    const pages = posts.length % skip === 0 ? posts.length / skip : Math.floor(posts.length / skip) + 1;
    return (
        <div className={style.Container}>
            <div>
                <h1>POSTS</h1>
                <FiltrationComponent items={posts.length} skip={skip} setSkip={setSkip} setPage={setPage} />
                <div className={css.Container}>
                    {posts.slice((page - 1) * skip, (page - 1) * skip + skip).map(post => <PostComponent key={post.id} post={post} />)}
                </div>
            </div>
            <PaginationComponent page={page} pages={pages} setPage={setPage} />
        </div>
    );
};

export default PostsComponent;