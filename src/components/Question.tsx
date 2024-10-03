import {
  Button,
  Card,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { type Question as QuestionType } from '../types';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useQuestionsStore } from '../store/questions';

const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionsStore(
    (state) => state.selectAnswer,
  );

  return (
    <Card
      variant="outlined"
      sx={{
        textAlign: 'center',
        bgcolor: '#222',
        padding: 2,
      }}
    >
      <Typography variant="h5">{info.question}</Typography>

      <SyntaxHighlighter language="javascript" style={gradientDark}>
        {info.code}
      </SyntaxHighlighter>

      <List sx={{ bgcolor: '#333' }}>
        {info.answers.map((answer, index) => (
          <ListItem key={index}>
            <ListItemButton
              variant="contained"
              sx={{
                width: '100%',
                bgcolor: '#444',
              }}
            >
              <ListItemText
                sx={{
                  textAlign: 'center',
                }}
                primary={answer}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Question;
