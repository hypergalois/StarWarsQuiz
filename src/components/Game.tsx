import { Typography } from '@mui/material';
import { useQuestionsStore } from '../store/questions';
import Question from './Question';

export default function Game() {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore(
    (state) => state.currentQuestion,
  );

  const questionInfo = questions[currentQuestion];

  return (
    <>
      <Question info={questionInfo} />
    </>
  );
}
