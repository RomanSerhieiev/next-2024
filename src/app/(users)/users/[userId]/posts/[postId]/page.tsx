import React, { FC } from 'react';
import css from '../../../../styles/ItemInfoPage.module.css';
import { postService } from '@/services/post.service';
import Link from 'next/link';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { Metadata } from 'next';

export const generateMetadata = async ({params: {postId}}: Params): Promise<Metadata> => {
    const post = await postService.getById(postId);
    return {
        title: `Post - ${post.title}`,
        description: `Info about post ${post.id}. ${post.title}`,
    };
};

const PostsInfoPage: FC<Params> = async ({params: {postId}}) => {
    const post = await postService.getById(postId);
    return (
        <div className={css.Container}>
            <h3>{post.id}. {post.title}</h3>
            <p className={css.Body}>{post.body}</p>
            <Link href={`/users/${post.userId}`}>
                <button>USER</button>
            </Link>
            <Link href={`${postId}/comments`}>
                <button>COMMENTS</button>
            </Link>
        </div>
    );
};

export default PostsInfoPage;