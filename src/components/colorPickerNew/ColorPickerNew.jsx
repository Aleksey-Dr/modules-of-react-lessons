import { useState } from "react";

import clsx from "clsx";
import css from "./ColorPickerNew.module.css";

const ColorPickerNew = ({ options }) => {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const addClasses = (index) => {
    return index === activeOptionIdx
      ? clsx(css["color-picker-options"], css["color-picker-rise"])
      : clsx(css["color-picker-options"]);
  };

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
            className={addClasses(index)}
            onClick={() => setActiveOptionIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorPickerNew;
