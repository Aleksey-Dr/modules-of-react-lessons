import { Component } from 'react';
import ReactPlayer from 'react-player';

// import { PlayerWrapper, StyledPlayer } from './Plaer.styled';

class Player extends Component {
    state = {
        isVideoLoaded: false,
    };

    componentDidUpdate(prevProps) {
        prevProps.url !== this.props.url &&
            this.setState({ isVideoLoaded: false });
    };

    render() {
        const { isVideoLoaded } = this.state;
        const { url } = this.props;
        const showLoader = url && !isVideoLoaded;
        const videoSize = isVideoLoaded ? "100%" : "0";

        return (
            <>
                {url && showLoader && <h3>Loading video...</h3>}
                {url && (
                    <ReactPlayer
                        url={url}
                        onReady={() => this.setState({ isVideoLoaded: true })}
                        width={videoSize}
                        // height={videoSize}
                        controls />
                )}
            </>
        );
    };
};

export default Player;