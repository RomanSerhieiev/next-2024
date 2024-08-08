import React, { FC } from 'react';
import css from '../styles/ItemComponent.module.css';
import Link from 'next/link';

interface IProps {
    todo: ITodo;
}

const TodoComponent: FC<IProps> = ({todo}) => {
    return (
        <div className={css.Container}>
            <h3>{todo.id}. {todo.title.slice(0, 8)}</h3>
            <Link href={`/todos/${todo.id}`}>
                <button>INFO</button>
            </Link>
        </div>
    );
};

export default TodoComponent;