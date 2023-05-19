import React from "react";
import { useDispatch, useSelector } from "react-redux";
import YouTube from "react-youtube";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { setYoutubeVisibility } from "../../../redux/actions";
import { StyledYoutubePlayer } from "./StyledYoutubePlayer";
import ReactPlayer from "react-player";

const YoutubePlayer = ({ onMovieEnd }) => {
  const selectedMovie = useSelector((state) => state.selectedMovie);
  const selectedTimeRange = useSelector((state) => state.timeRange);
  const dispatch = useDispatch();
  const dimensions = useWindowSize();

  const videoWidth = () => {
    if (dimensions.width >= 1180) {
      return 800;
    } else if (dimensions.width >= 800) {
      return 700;
    } else if (dimensions.width >= 760) {
      return 600;
    } else if (dimensions.width >= 660) {
      return 500;
    } else if (dimensions.width >= 560) {
      return 400;
    } else if (dimensions.width >= 460) {
      return 360;
    } else {
      return 260;
    }
  };

  const opts = {
    height: "460",
    width: videoWidth(),
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      start: selectedTimeRange[0],
      end: selectedTimeRange[1],
      origin: "http://localhost:3000",
    },
  };

  return (
    <StyledYoutubePlayer>
      {/* <YouTube
        videoId={selectedMovie.youtubeId}
        opts={opts}
        loading="eager"
        onEnd={() => {
          dispatch(setYoutubeVisibility(false));
          onMovieEnd();
        }}
      ></YouTube> */}

      <ReactPlayer
        url={`https://youtu.be/${selectedMovie.youtubeId}`}
        playing={true}
        width={videoWidth()}
        height={460}
        config={{
          youtube: {
            playerVars: {
              controls: 0,
              rel: 0,
              start: selectedTimeRange[0],
              end: selectedTimeRange[1],
            },
          },
        }}
        onEnded={() => {
          dispatch(setYoutubeVisibility(false));
          onMovieEnd();
        }}
      />
    </StyledYoutubePlayer>
  );
};

export default YoutubePlayer;
