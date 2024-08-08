import React, { FC } from 'react';
import css from '../styles/HeaderComponent.module.css';
import LinkClientComponent from '@/components/LinkClientComponent';

const HeaderComponent: FC = () => {
    return (
        <div className={css.Container}>
            <LinkClientComponent path={'/'}>HOME</LinkClientComponent>
            <LinkClientComponent path={'/albums'}>ALBUMS</LinkClientComponent>
            <LinkClientComponent path={'/comments'}>COMMENTS</LinkClientComponent>
            <LinkClientComponent path={'/photos'}>PHOTOS</LinkClientComponent>
            <LinkClientComponent path={'/posts'}>POSTS</LinkClientComponent>
            <LinkClientComponent path={'/todos'}>TODOS</LinkClientComponent>
            <LinkClientComponent path={'/users'}>USERS</LinkClientComponent>
        </div>
    );
};

export default HeaderComponent;