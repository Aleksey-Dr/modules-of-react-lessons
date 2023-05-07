// Module 2. Import Component
import { Component } from 'react';
import clsx from 'clsx';

import Buttons from '../buttons/Buttons';

import css from './Counter.module.css';

class Counter extends Component {
    static defaultProps = {
        initialValue: 0,
    };

    static propTypes = {
        //
    }

    state = {
        value: this.props.initialValue,
    };

    handleIncrement = () => {
        this.setState(prevState => (
            {
                value: prevState.value + 1,
            }
        ));
    };

    handleReset = () => {
        this.setState({
            value: 0,
        });
    };

    handleDecrement = () => {
        this.setState(prevState => (
            {
                value: prevState.value - 1,
            }
        ));
    };

    render() {
        const { value } = this.state;

        return (
            <div className={clsx(css.counter)}>
                <h2 className={clsx(css["counter-title"])}>Counter</h2>
                <span className={clsx(css["counter-value"])}>{value}</span>

                <Buttons
                    onIncrement={this.handleIncrement}
                    onReset={this.handleReset}
                    onDecrement={this.handleDecrement}
                />
            </div>
        );
    };
}

export default Counter;