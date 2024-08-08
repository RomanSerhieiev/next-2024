'use client';

import React, { FC, useState } from 'react';
import style from '../styles/ItemsPage.module.css';
import css from '../styles/ItemsComponent.module.css';
import FiltrationComponent from '@/components/FiltrationComponent';
import PaginationComponent from '@/components/PaginationComponent';
import TodoComponent from '@/components/TodoComponent';

interface IProps {
    todos: ITodo[];
}

const TodosComponent: FC<IProps> = ({todos}) => {
    const [page, setPage] = useState<number>(1);
    const [skip, setSkip] = useState<number>(25);
    const pages = todos.length % skip === 0 ? todos.length / skip : Math.floor(todos.length / skip) + 1;
    return (
        <div className={style.Container}>
            <div>
                <h1>TODOS</h1>
                <FiltrationComponent items={todos.length} skip={skip} setSkip={setSkip} setPage={setPage} />
                <div className={css.Container}>
                    {todos.slice((page - 1) * skip, (page - 1) * skip + skip).map(todo => <TodoComponent key={todo.id} todo={todo} />)}
                </div>
            </div>
            <PaginationComponent page={page} pages={pages} setPage={setPage} />
        </div>
    );
};

export default TodosComponent;