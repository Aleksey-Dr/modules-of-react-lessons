import PropTypes from 'prop-types';
import clsx from 'clsx';

import css from './IconBtn.module.css';

const IconBtn = ({ children, onClick, ...allyProps }) => (
    <button type="button" className={clsx(css['icon-btn'])} onClick={onClick} {...allyProps}>
        {children}
    </button>
);

IconBtn.defaultProps = {
    onClick: () => null,
    children: null,
};

IconBtn.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    'aria-label': PropTypes.string.isRequired,
};

export default IconBtn;