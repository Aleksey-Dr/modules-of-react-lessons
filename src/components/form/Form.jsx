import { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {

    state = {
        name: '',
        nickname: '',
        experience: 'junior',
    };

    nameInputId = shortid.generate();
    nicknameInputId = shortid.generate();

    handleChange = event => {
        const { name, value } = event.currentTarget;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state);

        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            nickname: '',
        });
    };

    // handleNicknameChange = event => {
    //     this.setState({
    //         nickname: event.currentTarget.value,
    //     });
    // };

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor={this.nameInputId}>
                        Name <input
                            type="text"
                            name="name"
                            value={ this.state.name }
                            onChange={this.handleChange}
                            id={this.nameInputId}
                        />
                    </label>
                    <label htmlFor={this.nicknameInputId}>
                        Nickname <input
                            type="text"
                            name="nickname"
                            value={ this.state.nickname }
                            onChange={this.handleChange}
                            id={this.nicknameInputId}
                        />
                    </label>

                    <p>Your level</p>
                    <label>
                        <input
                            type="radio"
                            name="experience"
                            value="junior"
                            onChange={this.handleChange}
                            checked={this.state.experience === 'junior'}
                        />Junior
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="experience"
                        value="middle"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'middle'}
                        />Middle
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="experience"
                        value="senior"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'senior'}
                        />Senior
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    };
};

export default Form;