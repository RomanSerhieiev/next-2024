import React, { FC } from 'react';
import { commentService } from '@/services/comment.service';
import type { Metadata } from 'next';
import CommentsComponent from '@/components/CommentsComponent';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { postService } from '@/services/post.service';

export const generateMetadata = async ({params: {postId}}: Params): Promise<Metadata> => {
    const post = await postService.getById(postId);
    return {
        title: `Comments of post - ${post.title}`,
        description: `All comments of post ${post.id}. ${post.title}`,
    };
};

const CommentsPage: FC<Params> = async ({params: {postId}}) => {
    const comments = await commentService.getByPost(postId);
    return (
        <div>
            <CommentsComponent comments={comments} />
        </div>
    );
};

export default CommentsPage;