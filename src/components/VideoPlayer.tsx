import React, { useState } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  thumbnailUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, thumbnailUrl }) => {
  const [showVideo, setShowVideo] = useState<boolean>(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div>
      {showVideo ? (
        <video controls autoPlay>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={thumbnailUrl} alt="Video Thumbnail" onClick={toggleVideo} />
      )}
    </div>
  );
};

export default VideoPlayer;
