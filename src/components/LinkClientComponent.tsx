'use client'

import React, { FC, ReactNode } from 'react';
import css from '../styles/LinkClientComponent.module.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IProps {
    path: string,
    children: ReactNode,
}

const LinkClientComponent: FC<IProps> = ({path, children}) => {
    const pathname = usePathname()
    return (
        <Link className={css.Container} href={path}><button className={pathname === path ? css.Active : css.NotActive}>{children}</button></Link>
    );
};

export default LinkClientComponent;