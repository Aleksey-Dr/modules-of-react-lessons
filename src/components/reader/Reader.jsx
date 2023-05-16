import { Component } from "react";

import Controls from "../controls";
import Progress from "../progress";
import Publication from "../publication";

const LS_KEY = "reader_item_index";

class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  componentDidUpdate(_, prevState) {
    prevState.publicationIndex !== this.state.publicationIndex &&
      localStorage.setItem(LS_KEY, this.state.publicationIndex);
  }

  componentDidMount() {
    localStorage.getItem(LS_KEY) &&
      this.setState({
        publicationIndex: Number(localStorage.getItem(LS_KEY)),
      });
  }

  changeIndex = (value) => {
    this.setState({
      publicationIndex: this.state.publicationIndex + value,
    });
  };

  render() {
    const { publicationIndex } = this.state;
    const items = this.props.items;
    const currentItem = items[publicationIndex];

    return (
      <div>
        <Controls
          onChange={this.changeIndex}
          current={publicationIndex + 1}
          total={items.length}
        />

        <Progress current={publicationIndex + 1} total={items.length} />

        <Publication title={currentItem.title} text={currentItem.text} />
      </div>
    );
  }
}

export default Reader;
