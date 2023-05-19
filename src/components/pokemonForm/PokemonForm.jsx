import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

class PokemonForm extends Component {
    state = {
        pokemonName: '',
    };

    handleNameChange = event => {
        this.setState({
            pokemonName: event.currentTarget.value.toLowerCase()
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.pokemonName.trim() === '') {
            toast.warn('Input pokemon name');
            return;
        }
        this.props.onSubmit(this.state.pokemonName);
        this.setState({
            pokemonName: '',
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="" onChange={this.handleNameChange} />
                <button type="submit">
                    <ImSearch style={{ marginRight: 8 }} />
                    Search
                </button>
            </form>
        );
    };
};

export default PokemonForm;