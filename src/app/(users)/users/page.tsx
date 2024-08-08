import React, { FC } from 'react';
import { userService } from '@/services/user.service';
import type { Metadata } from 'next';
import UsersComponent from '@/components/UsersComponent';

export const metadata: Metadata = {
    title: 'Users',
    description: 'All users',
};

const UsersPage: FC = async () => {
    const users = await userService.getAll();
    return (
        <div>
            <UsersComponent users={users} />
        </div>
    );
};

export default UsersPage;