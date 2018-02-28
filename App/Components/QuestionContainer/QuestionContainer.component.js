import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import styles from './QuestionContainer.component.style';
import Question from '../Question/Question.component';

const QuestionContainer = (props) => {
  const questions = props.questions.map((question, idx) =>
    (<Question
      id={idx}
      check={props.check}
      userName={props.userName}
      question={question.question}
      options={question.options}
      questionId={question.questionId}
      key={question.questionId}
      response={props.responses
        .find(x => x.questionId === question.questionId)}
    />));
  return <View style={styles.questions}>{questions}</View>;
};

QuestionContainer.propTypes = {
  check: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  responses: PropTypes.arrayOf(PropTypes.object).isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default QuestionContainer;
