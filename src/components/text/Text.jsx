import PropTypes from 'prop-types';

const Text = ({ name, imgUrl, classTitle = 'btn', }) => (
    <div>
        <img src={imgUrl} alt={name} width='640' />
        <h5>{name}</h5>
        <p>Description</p>
        <button type='button' className={classTitle}>Add to cart</button>
        {/* {console.log(imgUrl)} */}
        {/* {console.log(classTitle)} */}
        {/* {console.log(props.class)} */}
    </div>
);

// console.log(Text);

Text.propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
};

export default Text;