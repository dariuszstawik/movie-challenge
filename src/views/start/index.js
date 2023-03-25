import React from "react";
import { useSelector } from "react-redux";
import AnswearsList from "../../components/organisms/AnswearsList";
import StartForm from "../../components/organisms/StartForm";
import YoutubePlayer from "../../components/organisms/Youtube-Player";

const Start = () => {
  const selectedSecondsAmount = useSelector((state) => state.secondsAmount);
  const selectedIsYoutubePlayerVisible = useSelector(
    (state) => state.isYoutubePlayerVisible
  );

  return (
    <>
      {selectedSecondsAmount && selectedIsYoutubePlayerVisible ? (
        <YoutubePlayer />
      ) : (
        ""
      )}

      <StartForm />
      <AnswearsList />
    </>
  );
};

export default Start;
