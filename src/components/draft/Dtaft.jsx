import { Component } from 'react';

class Draft extends Component {
    state = {
        string: '',
    };

    handleChange = event => {
        console.log(event.currentTarget.value);
        this.setState({
            string: event.currentTarget.value,
        });
    }

    componentDidMount() {
        console.log('ComponentDidMount');
    };

    componentDidUpdate() {
        console.log('ComponentDidUpdate');
    };

    render() {
        console.log('render');
        return (
            <>
                <input
                    type="text"
                    onChange={this.handleChange}
                />
                <p>{this.state.string}</p>
            </>
        );
    };
};

export default Draft;