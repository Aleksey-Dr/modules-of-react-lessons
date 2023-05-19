import errorImages from '../../images/404robot.png';

const PokemonErrorView = ({ message }) => {
    return (
        <div>
            <img src={errorImages} width="300"  alt="404" />
            <p>{message}</p>
        </div>
    );
};

export default PokemonErrorView;