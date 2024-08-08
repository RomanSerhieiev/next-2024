import React, { FC } from 'react';
import { commentService } from '@/services/comment.service';
import type { Metadata } from 'next';
import CommentsComponent from '@/components/CommentsComponent';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export const metadata: Metadata = {
    title: 'Comments',
    description: 'All comments',
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