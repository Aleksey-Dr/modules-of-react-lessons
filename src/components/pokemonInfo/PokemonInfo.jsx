import { Component } from 'react';

import PokemErrorView from '../pokemonErrorView';
import PokemonDataView from '../pokemonDataView';
import PokemonPendingView from '../pokemonPendingView';

import pokemonAPI from '../../services/pokemon-api'

class PokemonInfo extends Component {
    state = {
        pokemon: null,
        // loading: false,
        error: null,
        status: 'idel',
    };

    componentDidUpdate(prevProps, _,) {
        
        if (prevProps.pokemonName !== this.props.pokemonName) {
            // console.log('Change pokemon name');
            this.setState({
                status: 'pending',
                // pokemon: null,
            });
            
            // setTimeout(() => {
                // fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
                //     // .then(response => response.json())
                //     .then(response => {
                //         if (response.ok) {
                //             return response.json();
                //         } else {
                //             return Promise.reject(
                //                 new Error(`All done, no pokemon named "${this.props.pokemonName}" found!`));
                //         }
                //     })
                pokemonAPI
                    .fetchPokemon(this.props.pokemonName)
                    .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
                    .catch(error => this.setState({ error, status: 'rejacted' }))
                    // .finally(() => this.setState({
                    //     loading: false,
                    // }));
            // }, 1000);
        }
    };

    render() {
        const { pokemon, error, status } = this.state;
        const { pokemonName } = this.props;

        if (status === 'idel') {
            return (
                <p>Input pokemon name</p>
            );
        }

        if (status === 'pending') {
            return (
                // <p>Loading...</p>
                <PokemonPendingView pokemonName={ pokemonName } />
            );
        }

        if (status === 'rejacted') {
            return (
                // <h3>{ error.message }</h3>
                <PokemErrorView message={ error.message } />
            );
        }

        if (status === 'resolved') {
            return (
                // <div>
                //     <p>{ pokemon.name }</p>
                //     <img
                //         src={ pokemon.sprites.other['official-artwork'].front_default }
                //         alt={ pokemonName }
                //         width="240"
                //         height="240"
                //     />
                // </div>
                <PokemonDataView pokemon={ pokemon } />
            );
        }

    //     return (
    //         <div>
    //             <h2>Pokemon Info</h2>
    //             {/* {error && <h3>All done, no pokemon named { pokemonName } found</h3>} */}
    //             {error && <h3>{ error.message }</h3>}
    //             {/* <p>{this.props.pokemonName}</p> */}
    //             {loading &&
    //                 <p>Loading...</p>
    //             }
    //             {!pokemonName &&
    //                 <p>Input pokemon name</p>
    //             }
    //             {pokemon && (
    //                 <div>
    //                     <p>{ pokemon.name }</p>
    //                     <img
    //                         src={ pokemon.sprites.other['official-artwork'].front_default }
    //                         alt={ pokemonName }
    //                         width="240"
    //                         height="240"
    //                     />
    //                 </div>
    //             )}
    //         </div>
    //     );
    };
};

export default PokemonInfo;