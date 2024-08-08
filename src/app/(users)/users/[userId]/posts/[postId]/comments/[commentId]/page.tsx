import React, { FC } from 'react';
import css from '../../../../styles/ItemInfoPage.module.css';
import { commentService } from '@/services/comment.service';
import Link from 'next/link';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { Metadata } from 'next';

export const generateMetadata = async ({params: {commentId}}: Params): Promise<Metadata> => {
    const comment = await commentService.getById(commentId)
    return {
        title: `Comment - ${comment.name}`,
        description: `Info about comment ${comment.id}. ${comment.name}`,
    };
};

const CommentsInfoPage: FC<Params> = async ({params: {commentId}}) => {
    const comment = await commentService.getById(commentId)
    return (
        <div className={css.Container}>
            <h3>{comment.id}. {comment.name}</h3>
            <p className={css.Body}>{comment.body}</p>
            <p>EMAIL: <span className={css.Email}>{comment.email}</span></p>
            <Link href={`/posts/${comment.postId}`}>
                <button>POST</button>
            </Link>
        </div>
    );
};

export default CommentsInfoPage;