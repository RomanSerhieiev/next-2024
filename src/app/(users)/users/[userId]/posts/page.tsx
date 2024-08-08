import React, { FC } from 'react';
import { postService } from '@/services/post.service';
import type { Metadata } from 'next';
import PostsComponent from '@/components/PostsComponent';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export const metadata: Metadata = {
    title: 'Posts',
    description: 'All posts',
};

const PostsPage: FC<Params> = async ({params: {userId}}) => {
    const posts = await postService.getByUser(userId);
    return (
        <div>
            <PostsComponent posts={posts} />
        </div>
    );
};

export default PostsPage;