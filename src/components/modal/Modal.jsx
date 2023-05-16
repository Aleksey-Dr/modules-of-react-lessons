import { Component } from 'react';
import { createPortal } from 'react-dom';

import clsx from 'clsx';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    componentDidMount() {
        // console.log('componentDidMount');

        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    };

    handleKeyDown = event => {
        (event.code === 'Escape') &&
            this.props.onClose();
    };

    handleBackdropClick = event => {
        (event.currentTarget === event.target) &&
            this.props.onClose();
    };

    render() {
        return createPortal(
            <div className={clsx(css["modal-backdrop"])} onClick={this.handleBackdropClick}>
                <div className={clsx(css["modal-content"])}>{this.props.children}</div>
            </div>,
            modalRoot
        );
    };
};

export default Modal; 