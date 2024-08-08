import React, { FC } from 'react';
import { todoService } from '@/services/todo.service';
import type { Metadata } from 'next';
import TodosComponent from '@/components/TodosComponent';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export const metadata: Metadata = {
    title: 'Todos',
    description: 'All todos',
};

const TodosPage: FC<Params> = async ({params: {userId}}) => {
    const todos = await todoService.getByUser(userId);
    return (
        <div>
            <TodosComponent todos={todos} />
        </div>
    );
};

export default TodosPage;