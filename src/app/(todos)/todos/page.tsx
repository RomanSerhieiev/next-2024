import React, { FC } from 'react';
import { todoService } from '@/services/todo.service';
import type { Metadata } from 'next';
import TodosComponent from '@/components/TodosComponent';

export const metadata: Metadata = {
    title: 'Todos',
    description: 'All todos',
};

const TodosPage: FC = async () => {
    const todos = await todoService.getAll();
    return (
        <div>
            <TodosComponent todos={todos} />
        </div>
    );
};

export default TodosPage;