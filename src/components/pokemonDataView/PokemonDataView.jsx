const PokemonDataView = ({ pokemon: {sprites, name, stats} }) => {
    return (
        <div>
            <img
                src={ sprites.other['official-artwork'].front_default }
                alt={ name }
                width="240"
                height="240"
            />
            <h3>{name}</h3>
            <ul>
                {stats.map(entry => (
                    <li key={entry.stat.name}>
                        {entry.stat.name}: {entry.base_stat}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonDataView;