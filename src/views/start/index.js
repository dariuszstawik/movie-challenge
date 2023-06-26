import React, { useState } from "react";
import { useSelector } from "react-redux";
import AnswersList from "../../components/organisms/AnswersList";
import StartForm from "../../components/organisms/StartForm";
import YoutubePlayer from "../../components/organisms/Youtube-Player";

const Start = () => {
  const selectedSecondsAmount = useSelector((state) => state.secondsAmount);
  const selectedIsYoutubePlayerVisible = useSelector(
    (state) => state.isYoutubePlayerVisible
  );
  const [afterMovie, setAfterMovie] = useState(false);

  return (
    <>
      {selectedSecondsAmount && selectedIsYoutubePlayerVisible ? (
        <YoutubePlayer
          onMovieEnd={() => {
            setAfterMovie(true);
          }}
        />
      ) : (
        ""
      )}
      {!afterMovie && <StartForm />}
      <AnswersList
        onSelect={() => {
          setAfterMovie(false);
        }}
      />
    </>
  );
};

export default Start;
