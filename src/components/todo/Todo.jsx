import clsx from 'clsx';

import css from './Todo.module.css';

const Todo = ({ text, completed, onToggleCompleted, onDelete }) => {
    return (
        <div className={clsx(css["todo"])}>
            <input
                type="checkbox"
                className={clsx(css["todo-checkbox"])}
                checked={completed}
                onChange={onToggleCompleted}
            />
                        
            <p className={clsx(css["todo-text"], completed && css["line-through"])}>{text}</p>
            <button type="button" onClick={onDelete}>Delete</button>
        </div>
    );
};

export default Todo;