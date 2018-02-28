import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';

import { View, Text, TouchableHighlight } from 'react-native';

import styles from './Question.component.style';

export default class Question extends React.Component {
  componentDidMount() {
    // this.props.check();
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
  }
  click = (element) => {
    this.setState({ selected: element });
    axios.post(
      '/response',
      {
        userName: this.props.userName,
        questionId: this.props.questionId,
        response: radio.currentTarget.value,
      },
    ).then(() => this.props.check());
  }

  options = () => this.props.options.map(element => (
    <View style={styles.options} key={element}>
      <View style={{ flexDirection: 'row', margin: '5%' }}>
        <TouchableHighlight
          style={styles.play_button}
          onPress={() => this.click(element)}
        ><RadioButton selected={this.state.selected === element} />
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
        { <View>{this.options()}</View> }
      </View>);
  }
}


Question.propTypes = {
  check: PropTypes.func.isRequired,
  selected: PropTypes.shape({
    questionId: PropTypes.number,
    response: PropTypes.string,
  }),
  userName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  questionId: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Question.defaultProps = {
  selected: {},
};

function RadioButton(props) {
  return (
    <View style={[{
        height: 12,
        width: 12,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }, props.style]}
    >
      {props.selected ?
        <View style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: '#000',
            }}
        />
      : null
        }
    </View>
  );
}
