const VideoList = ({ videos, onSelect}) => {
    return (
        <ul>
            {videos.map(video => (
                <li key={video.id}>
                    <p onClick={() => onSelect(video.link)}>{video.link}</p>
                </li>
            ))}
        </ul>
    );
};

export default VideoList;