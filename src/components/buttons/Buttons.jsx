import clsx from 'clsx';

import css from './Buttons.module.css';

const Buttons = ({onIncrement, onReset, onDecrement}) => (
    <div className={clsx(css["counter-btn"])}>
        <button type="button" onClick={onIncrement}>Increment by step</button>
        <button type="button" onClick={onReset}>Reset</button>
        <button type="button" onClick={onDecrement}>Decrement by step</button>
    </div>
);

export default Buttons;