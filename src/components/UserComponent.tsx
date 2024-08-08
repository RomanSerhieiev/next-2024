import React, { FC } from 'react';
import css from '../styles/ItemComponent.module.css';
import Link from 'next/link';

interface IProps {
    user: IUser;
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div className={css.Container}>
            <h3>{user.id}. {user.name.slice(0, 8)}</h3>
            <Link href={`/users/${user.id}`}>
                <button>INFO</button>
            </Link>
        </div>
    );
};

export default UserComponent;