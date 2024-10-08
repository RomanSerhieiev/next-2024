import React, { FC } from 'react';
import css from '../../../../styles/ItemInfoPage.module.css';
import { userService } from '@/services/user.service';
import Link from 'next/link';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { Metadata } from 'next';

export const generateMetadata = async ({params: {userId}}: Params): Promise<Metadata> => {
    const user = await userService.getById(userId);
    return {
        title: `User - ${user.name}`,
        description: `Info about user ${user.id}. ${user.name}`,
    };
};

const UserInfoPage: FC<Params> = async ({params: {userId}}) => {
    const user = await userService.getById(userId);
    return (
        <div className={css.Container}>
            <h2>{user.id}. {user.name}</h2>
            <div className={css.UserContainer}>
                <div>
                    <h3>CONTACTS:</h3>
                    <p>EMAIL: <span className={css.Email}>{user.email}</span></p>
                    <p>PHONE: {user.phone}</p>
                    <p>USERNAME: {user.username}</p>
                    <p>WEBSITE: {user.website}</p>
                </div>
                <div>
                    <h3>ADDRESS:</h3>
                    <p>CITY: {user.address.city}</p>
                    <p>STREET: {user.address.street}</p>
                    <p>SUITE: {user.address.suite}</p>
                    <p>ZIP CODE: {user.address.zipcode}</p>
                    <p>GEO: {user.address.geo.lat}, {user.address.geo.lng}</p>
                </div>
                <div>
                    <h3>COMPANY:</h3>
                    <p>NAME: {user.company.name}</p>
                    <p>CATCH PHRASE: {user.company.catchPhrase}</p>
                    <p>BS: {user.company.bs}</p>
                </div>
            </div>
            <div className={css.Buttons}>
                <Link href={`${userId}/albums`}>
                    <button>ALBUMS</button>
                </Link>
                <Link href={`${userId}/todos`}>
                    <button>TODOS</button>
                </Link>
                <Link href={`${userId}/posts`}>
                    <button>POSTS</button>
                </Link>
            </div>
        </div>
    );
};

export default UserInfoPage;