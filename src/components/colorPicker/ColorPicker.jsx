import { Component } from "react";
import clsx from "clsx";

import css from "./ColorPicker.module.css";

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = (index) => {
    this.setState({ activeOptionIdx: index });
  };

  addClasses = (index) => {
    return index === this.state.activeOptionIdx
      ? clsx(css["color-picker-options"], css["color-picker-rise"])
      : clsx(css["color-picker-options"]);
  };

    render() {
        const { activeOptionIdx } = this.state;
        const { options } = this.props;
        const { color } = options[activeOptionIdx];

    return (
      <div className={clsx(css["color-picker"])}>
            <h2 className={clsx(css["color-picker-title"])}>Color Picker</h2>
            <p>Current color: {color}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              style={{
                backgroundColor: color,
                borderRadius: index === activeOptionIdx ? "50%" : 0,
              }}
              className={this.addClasses(index)}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
