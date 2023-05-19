import React, { useState } from "react";
import { useSelector } from "react-redux";
import AnswearsList from "../../components/organisms/AnswearsList";
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
      <AnswearsList
        onSelect={() => {
          setAfterMovie(false);
        }}
      />

      {/* {selectedSecondsAmount && !selectedIsYoutubePlayerVisible && (
        <AnswearsList />
      )}

      {!selectedSecondsAmount ? (
        <>
          <StartForm />
          <AnswearsList />
        </>
      ) : (
        ""
      )} */}
    </>
  );
};

export default Start;
