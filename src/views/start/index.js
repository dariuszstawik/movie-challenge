import React from "react";
import { useSelector } from "react-redux";
import Container from "../../components/atoms/Container";
import ContentBox from "../../components/atoms/ContentBox";
import AnswearsList from "../../components/organisms/AnswearsList";
import StartForm from "../../components/organisms/StartForm";
import YoutubePlayer from "../../components/organisms/Youtube-Player";

const Start = () => {
  const selectedSecondsAmount = useSelector((state) => state.secondsAmount);

  return (
    <Container>
      <ContentBox>
        <StartForm />
        {selectedSecondsAmount && selectedSecondsAmount !== 999 ? (
          <YoutubePlayer />
        ) : (
          ""
        )}
        <AnswearsList />
      </ContentBox>
    </Container>
  );
};

export default Start;
