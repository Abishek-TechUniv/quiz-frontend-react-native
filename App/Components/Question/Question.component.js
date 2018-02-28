import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';

import { View, Text, TouchableHighlight } from 'react-native';

import styles from './Question.component.style';
import RadioButton from '../RadioButton/RadioButton.component';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
  }
  componentDidMount() {
    this.props.check();
  }

  click = (element) => {
    this.props.check();
    this.setState({ selected: element });
    axios.post(
      'http://localhost:8080/response',
      {
        userName: this.props.userName,
        questionId: this.props.questionId,
        response: element,
      },
    );
  }

  isSelected = (element) => {
    if (this.state.selected === '') {
      return this.props.response.response === element;
    }
    return this.state.selected === element;
  }
  options = () => this.props.options.map(element => (
    <View style={styles.options} key={element}>
      <View style={{ flexDirection: 'row', margin: '5%' }}>
        <TouchableHighlight
          style={styles.play_button}
          onPress={() => this.click(element)}
        ><RadioButton selected={this.isSelected(element)} />
        </TouchableHighlight>
        <Text style={styles.optionText}>{element}</Text>
      </View>
    </View>
  ));


  render() {
    return (
      <View style={styles.box}>
        <View>
          <Text style={styles.questionNo}>Question {this.props.id + 1}</Text>
        </View>
        <View style={styles.questionBox}>
          <Text>{this.props.question}</Text>
        </View>
        <View>{this.options()}</View>
      </View>);
  }
}


Question.propTypes = {
  check: PropTypes.func.isRequired,
  response: PropTypes.shape({ response: PropTypes.string }),
  userName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  questionId: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Question.defaultProps = {
  response: { option: '' },
};
