import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { postService } from '@/services/post.service';
import PostComponent from '@/components/PostComponent';
import type { Metadata } from 'next';
import PostsComponent from '@/components/PostsComponent';

export const metadata: Metadata = {
    title: 'Posts',
    description: 'All posts',
};

const PostsPage: FC = async () => {
    const posts = await postService.getAll()
    return (
        <div>
            <PostsComponent posts={posts} />
        </div>
    );
};

export default PostsPage;