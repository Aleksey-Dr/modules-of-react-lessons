import Text from './Text';

const MyFunctionalComponent = () =>
    <div>
        <h4>Functional Component</h4>
        <Text
            name='Text content'
            imgUrl=
            'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640' />
        {/* {console.log(Text)} */}
    </div>;

export default MyFunctionalComponent;