import { Component } from 'react';
import clsx from "clsx";

import css from './TodoEditor.module.css';

class TodoEditor extends Component {
    state = {
        message: '',
    };

    handleChange = event => {
        this.setState({
            message: event.currentTarget.value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.message);
        this.setState({
            message: '',
        });
    }

    render() {
        return (
            <form className={clsx(css["todo-editor"])} onSubmit={this.handleSubmit}>
                <textarea value={this.state.message} onChange={this.handleChange}></textarea>
                <button type="submit">Add</button>
            </form>
        );
    };
};

export default TodoEditor;