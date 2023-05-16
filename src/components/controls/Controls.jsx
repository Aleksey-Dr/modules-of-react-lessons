const Controls = ({ onChange, current, total }) => {
    return (
        <>
            <button
                type="button"
                disabled={ current === 1 }
                onClick={() => onChange(-1)}
            >
                Back
            </button>

            <button
                type="button"
                disabled={ current === total }
                onClick={() => onChange(1)}
            >
                Forward
            </button></>
    );
};

export default Controls;