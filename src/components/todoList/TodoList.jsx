import clsx from "clsx";

import css from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo }) => {
    const completedTodos = todos.reduce((acc, todo) =>
        (todo.completed ? acc + 1 : acc), 0,);

        return (<div className={clsx(css["todo"])}>
            <div>
                <span className={clsx(css["todo-quantity"])}>All quantity: {todos.length}</span>
                <span className={clsx(css["todo-quantity"])}>Quantity completed: { completedTodos }</span>
            </div>
            <div>
                <ul className={clsx(css["todo-list"])}>
                {todos.map(({ id, text }) => (
                    <li key={id} className={clsx(css["todo-list-item"])}>
                        <p className={clsx(css["todo-list-text"])}>{text}</p>
                        <button onClick={() => onDeleteTodo(id)}>Delete</button>
                    </li>
                ))}
            </ul>
            </div>
        </div>);
};

export default TodoList;