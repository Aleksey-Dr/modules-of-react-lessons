import { useState, useEffect } from 'react';

import clsx from 'clsx';
import css from './CounterNew.module.css';

const CounterNew = () => {
    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);

    const handleCounterAIncrement = () => {
        setCounterA(prevState => prevState + 1);
    };

    const handleCounterBIncrement = () => {
        setCounterB(prevState => prevState + 1);
    };

    useEffect(() => {
        const totalClicks = counterA + counterB;
        document.title = `Total clicks ${totalClicks} times`;
    }, [counterA, counterB]);

    return (
        <div className={clsx(css.counter)}>
            <button
                type="button"
                onClick={handleCounterAIncrement}
                className={clsx(css.btn)}
            >
                Click to counterA <br/ ><b>{counterA}</b> times
            </button>

            <button
                type="button"
                onClick={handleCounterBIncrement}
                className={clsx(css.btn)}
            >
                Click to counterB <br/ ><b>{counterB}</b> times
            </button>
        </div>
    );
};

export default CounterNew;