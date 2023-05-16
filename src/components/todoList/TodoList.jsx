import clsx from "clsx";

import Todo from '../todo';

import css from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
    const completedTodos = todos.reduce((acc, todo) =>
        (todo.completed ? acc + 1 : acc), 0,);

        return (<div className={clsx(css["todos"])}>
            <div>
                <span className={clsx(css["todo-quantity"])}>All quantity: { todos.length }</span>
                <span className={clsx(css["todo-quantity"])}>Quantity completed: { completedTodos }</span>
            </div>
            <div>
                <ul className={ clsx(css["todo-list"]) }>
                { todos.map(({ id, text, completed }) => (
                    <li key={id} className={clsx(css["todo-list-item"])}>
                        
                        <Todo
                            text={text}
                            completed={completed}
                            onToggleCompleted={() => onToggleCompleted(id)}
                            onDelete={() => onDeleteTodo(id)}
                        />

                        {/* <input
                            type="checkbox"
                            className={clsx(css["todo-list-checkbox"])}
                            checked={completed}
                            onChange={() => onToggleCompleted(id)}
                        />
                        
                        <p className={clsx(css["todo-list-text"], completed && css["line-through"])}>{text}</p>
                        <button type="button" onClick={() => onDeleteTodo(id)}>Delete</button> */}
                    </li>
                ))}
            </ul>
            </div>
        </div>);
};

export default TodoList;