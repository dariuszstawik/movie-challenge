import React from "react";
import { useDispatch, useSelector } from "react-redux";
import YouTube from "react-youtube";
import { setSecondsAmount } from "../../../redux/actions";
import { StyledYoutubePlayer } from "./StyledYoutubePlayer";

const YoutubePlayer = () => {
  const selectedMovie = useSelector((state) => state.selectedMovie);
  const selectedTimeRange = useSelector((state) => state.timeRange);
  const dispatch = useDispatch();

  const opts = {
    height: "400",
    width: "510",
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
      <YouTube
        videoId={selectedMovie.youtubeId}
        opts={opts}
        loading="eager"
        onEnd={() => {
          dispatch(setSecondsAmount(999));
        }}
      >
        {YouTube.PlayerState.ENDED ? console.log("koniec") : ""}
      </YouTube>
    </StyledYoutubePlayer>
  );
};

export default YoutubePlayer;
