import { Component } from 'react';

import Modal from '../modal';

class Material extends Component {
    state = {
        showModal: false,
    };

    toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

    render() {
        const { item, onDelete, onUpdate } = this.props;

        return (
            <>
                <p><b>Title:</b> {item.title}</p>
                <p><b>Link:</b> {item.link}</p>
                <button
                    type="button"
                    onClick={() => onDelete(item.id)}
                >
                    Delete
                </button>
                
                <button type="button" onClick={this.toggleModal}>Open</button>
                {this.state.showModal &&
                    <Modal>
                        <button type="button" onClick={this.toggleModal}>Close</button>
                        <button
                            type="button"
                            onClick={() => onUpdate({ ...item, title: Date.now() })}
                        >
                            Update
                        </button>
                    </Modal>}
            </>
        );
    };
};

export default Material;