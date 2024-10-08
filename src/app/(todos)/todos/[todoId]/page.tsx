import React, { FC } from 'react';
import css from '../../../../styles/ItemInfoPage.module.css';
import { todoService } from '@/services/todo.service';
import Link from 'next/link';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { Metadata } from 'next';

export const generateMetadata = async ({params: {todoId}}: Params): Promise<Metadata> => {
    const todo = await todoService.getById(todoId);
    return {
        title: `Todo - ${todo.title}`,
        description: `Info about todo ${todo.id}. ${todo.title}`,
    };
};

const TodosInfoPage: FC<Params> = async ({params: {todoId}}) => {
    const todo = await todoService.getById(todoId);
    return (
        <div className={css.Container}>
            <h2>{todo.id}. {todo.title}</h2>
            <p>COMPLETED: <span className={todo.completed ? css.True : css.False}>{`${todo.completed}`}</span></p>
            <Link href={`/users/${todo.userId}`}>
                <button>USER</button>
            </Link>
        </div>
    );
};

export default TodosInfoPage;