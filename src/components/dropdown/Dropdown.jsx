import { Component } from "react";
import clsx from "clsx";

import css from "./Dropdown.module.css";

class Dropdown extends Component {
  state = {
    visible: false,
  };

  // show = () => {
  //     this.setState({ visible: true });
  // };
  // hide = () => {
  //     this.setState({ visible: false });
  // };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;

    return (
      <div className={clsx(css.dropdown)}>
        {/* <button type="button" className={clsx(css["dropdown-toggle"])} onClick={this.show}>Show</button>
                <button type="button" className={clsx(css["dropdown-toggle"])} onClick={this.hide}>Hide</button> */}
        <button
          type="button"
          className={clsx(css["dropdown-toggle"])}
          onClick={this.toggle}
        >
          {visible ? 'Hide' : 'Show'}
        </button>

        {visible && (
          <div className={clsx(css["dropdown-menu"])}>Dropdown menu</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
