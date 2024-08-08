'use client';

import React, { FC, useState } from 'react';
import style from '../styles/ItemsPage.module.css';
import css from '../styles/ItemsComponent.module.css';
import PhotoComponent from '@/components/PhotoComponent';
import FiltrationComponent from '@/components/FiltrationComponent';
import PaginationComponent from '@/components/PaginationComponent';
import UserComponent from '@/components/UserComponent';

interface IProps {
    users: IUser[];
}

const UsersComponent: FC<IProps> = ({users}) => {
    const [page, setPage] = useState<number>(1);
    const [skip, setSkip] = useState<number>(25);
    const pages = users.length % skip === 0 ? users.length / skip : Math.floor(users.length / skip) + 1;
    return (
        <div className={style.Container}>
            <div>
                <h1>USERS</h1>
                <FiltrationComponent items={users.length} skip={skip} setSkip={setSkip} setPage={setPage} />
                <div className={css.Container}>
                    {users.slice((page - 1) * skip, (page - 1) * skip + skip).map(user => <UserComponent key={user.id} user={user} />)}
                </div>
            </div>
            <PaginationComponent page={page} pages={pages} setPage={setPage} />
        </div>
    );
};

export default UsersComponent;