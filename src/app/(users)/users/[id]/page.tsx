import React, { FC } from 'react';
import css from '../../../../styles/ItemInfoPage.module.css';
import { userService } from '@/services/user.service';
import Link from 'next/link';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { Metadata } from 'next';

export const generateMetadata = async ({params: {id}}: Params): Promise<Metadata> => {
    const user = await userService.getById(id);
    return {
        title: `User - ${user.name}`,
        description: `Info about user ${user.id}. ${user.name}`,
    };
};

const UserInfoPage: FC<Params> = async ({params: {id}}) => {
    const user = await userService.getById(id);
    return (
        <div className={css.Container}>
            <h3>{user.id}. {user.name}</h3>
            <div className={css.UserContainer}>
                <div>
                    <h4>CONTACTS:</h4>
                    <p>EMAIL: <span className={css.Email}>{user.email}</span></p>
                    <p>PHONE: {user.phone}</p>
                    <p>USERNAME: {user.username}</p>
                    <p>WEBSITE: {user.website}</p>
                </div>
                <div>
                    <h4>ADDRESS:</h4>
                    <p>CITY: {user.address.city}</p>
                    <p>STREET: {user.address.street}</p>
                    <p>SUITE: {user.address.suite}</p>
                    <p>ZIP CODE: {user.address.zipcode}</p>
                    <p>GEO: {user.address.geo.lat}, {user.address.geo.lng}</p>
                </div>
                <div>
                    <h4>COMPANY:</h4>
                    <p>NAME: {user.company.name}</p>
                    <p>CATCH PHRASE: {user.company.catchPhrase}</p>
                    <p>BS: {user.company.bs}</p>
                </div>
            </div>
            <Link href={`/albums`}>
                <button>ALBUMS</button>
            </Link>
            <Link href={`/todos`}>
                <button>TODOS</button>
            </Link>
            <Link href={`/posts`}>
                <button>POSTS</button>
            </Link>
        </div>
    );
};

export default UserInfoPage;