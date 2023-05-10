import clsx from "clsx";

import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <label className={clsx(css.filter)}>
            Filter<input
                type="text"
                value={value}
                onChange={onChange}
            />
        </label>
    );
};

export default Filter;