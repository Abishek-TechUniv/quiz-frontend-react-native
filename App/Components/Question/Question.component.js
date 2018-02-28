import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';

import { View, Text } from 'react-native';

import styles from './Question.component.style';

export default class Question extends React.Component {
  componentDidMount() {
    // this.props.check();
  }

  click = (radio) => {
    // axios.post(
    //   '/response',
    //   { userName: this.props.userName, questionId: this.props.details.questionId, response: radio.currentTarget.value },
    // ).then(() => this.props.check());
  }

  options = () =>
    // this.props.details.options.map(element =>
    //   (
    //     <View className="Question-options" key={element}>
    //       <Text className="Question-radio">
    //         <Field
    //           type="radio"
    //           name={this.props.details.questionId}
    //           onChange={this.click}
    //           value={element}
    //           checked={
    //           this.props.selected.response === element ?
    //           'checked' :
    //            null}
    //         />
    //       </Text>
    //       <Text>{element}</Text>
    //     </View>
    //   ));
    (
      <View style={styles.options}>
        <View style={{ flexDirection: 'row', margin: '5%' }}>
          <RadioButton selected={false} />
          <Text style={styles.optionText}>a</Text>
        </View>

        <View style={{ flexDirection: 'row', margin: '5%' }}>
          <RadioButton selected />
          <Text style={styles.optionText}>b</Text>
        </View>

        <View style={{ flexDirection: 'row', margin: '5%' }}>
          <RadioButton selected={false} />
          <Text style={styles.optionText}>d</Text>
        </View>

        <View style={{ flexDirection: 'row', margin: '5%' }}>
          <RadioButton selected={false} />
          <Text style={styles.optionText}>c</Text>
        </View>
      </View>)


  render() {
    return (
      <View style={styles.box}>
        <View>
          <Text style={styles.questionNo}>Question {this.props.id + 1}</Text>
        </View>
        <View style={styles.questionBox}>
          <Text>{this.props.details.question}</Text>
        </View>
        <View>{this.options()}</View>
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
  details: PropTypes.shape({
    questionId: PropTypes.number,
    question: PropTypes.string,
    options: PropTypes.array,
  }).isRequired,
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
