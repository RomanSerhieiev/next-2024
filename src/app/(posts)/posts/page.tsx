import React, { FC } from 'react';
import { postService } from '@/services/post.service';
import type { Metadata } from 'next';
import PostsComponent from '@/components/PostsComponent';

export const metadata: Metadata = {
    title: 'Posts',
    description: 'All posts',
};

const PostsPage: FC = async () => {
    const posts = await postService.getAll();
    return (
        <div>
            <PostsComponent posts={posts} />
        </div>
    );
};

export default PostsPage;