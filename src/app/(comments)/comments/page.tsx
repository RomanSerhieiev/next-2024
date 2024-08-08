import React, { FC } from 'react';
import { commentService } from '@/services/comment.service';
import type { Metadata } from 'next';
import CommentsComponent from '@/components/CommentsComponent';

export const metadata: Metadata = {
    title: 'Comments',
    description: 'All comments',
};

const CommentsPage: FC = async () => {
    const comments = await commentService.getAll();
    return (
        <div>
            <CommentsComponent comments={comments} />
        </div>
    );
};

export default CommentsPage;