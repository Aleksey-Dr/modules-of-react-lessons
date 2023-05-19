import { ImSpinner } from 'react-icons/im';

import PokemonDataView from '../pokemonDataView';
import pendingImage from '../../images/question.png';

const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
};

const PokemonPendingView = ({ pokemonName }) => {
    const pokemon = {
        name: pokemonName,
        sprites: {
            other: {
                'official-artwork': {
                    front_default: pendingImage,
                },
            },
        },
        stats: [],
    };

    return (
        <div>
            <div styles={styles.spinner}>
                <ImSpinner size="32" className="icon-spin" />
                Loading...
            </div>
            <PokemonDataView pokemon={ pokemon } />
        </div>
    );
};

export default PokemonPendingView;