import React, { Component } from 'react';
import { TextInput, View, Text, TouchableHighlight } from 'react-native';
import axios from 'axios';

import styles from './Home.component.style';

import QuestionContainer from '../QuestionContainer/QuestionContainer.component';
import Leaderboard from '../Leaderboard/Leaderboard.component';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'result',
      userName: '',
      score: 0,
      total: 12,
      scores: [
        { userName: 'Abishek', score: 5 },
        { userName: 'Aditya', score: 4 },
      ],
      questions: [{
        questionId: 12, options: ['a', 'b', 'c', 'd'], question: 'Which is the second alphabet?', correctAns: 'b',
      }],
      selected: [{ questionId: 12, response: 'b' }],
      canComplete: false,
    };
  }


  componentDidMount() {
    // axios.get('http://192.168.0.10:8080/questions')
    //   .then((questions) => {
    //     if (questions.data.length === 0) {
    //       axios.put('/questions')
    //         .then(() => {
    //           axios.get('/questions')
    //             .then(qArr => this.setState({
    //               questions: qArr.data,
    //             }));
    //         });
    //     } else { this.setState({ questions: questions.data }); }
    //   });
  }

  update = (e) => {
    // this.setState({
    //   userName: e.target.value,
    // });
  }

  calculate = () => {
    // const { userName } = this.state;
    // axios.post('/calculate', { userName })
    //   .then(() => this.setState({
    //     page: 'scoreboard',
    //     userName,
    //   }))
    //   .then(() => axios.get('/scores')
    //     .then(({ data }) => {
    //       this.setState({
    //         scores: data,
    //         score: data.find(x => x.userName === this.state.userName).score,
    //       });
    //     }));
    this.setState({
      page: 'result',
      score: 5,
    });
  }

  login() {
    // axios.post('http://192.168.0.10:8080/users', { userName: this.state.userName });
    // axios.post('http://192.168.0.10:8080/users/response', { userName: this.state.userName })
    //   .then(result => this.setState({
    //     page: 'questions',
    //     selected: result.data,
    //   }));
    this.setState({
      page: 'questions',
      userName: 'ABC',
    });
  }

  check() {
    // axios.post('http://192.168.0.10:8080/users/response', { userName: this.state.userName })
    //   .then(result => ((result.data.length === this.state.questions.length) ?
    //     this.setState({ canComplete: true }) : null));
    this.setState({ canComplete: true });
  }

  again() {
    this.setState({ page: 'login' });
  }
  render() {
    if (this.state.page === 'login') {
      return (
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.welcome}>Welcome to Quizzy</Text>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.login_text}>Login</Text>
            <Text style={styles.user_name}>Username</Text>
            <TextInput style={styles.input} onChange={e => this.update(e)} />
            <TouchableHighlight
              style={styles.login_button}
              onPress={() => this.login()}
            ><Text style={styles.text}>Login</Text>
            </TouchableHighlight>
          </View>
        </View>
      );
    } else if (this.state.page === 'questions') {
      return (
        <View style={styles.container}>
          <Text style={styles.hello}>Hello {this.state.userName}</Text>
          <QuestionContainer
            check={this.check}
            userName={this.state.userName}
            responses={this.state.selected}
            questions={this.state.questions}
          />
          <TouchableHighlight
            style={styles.login_button}
            onPress={() => this.calculate()}
          ><Text style={styles.text}>Complete</Text>
          </TouchableHighlight>
        </View>
      );
    } return (
      <View style={styles.result_container}>
        <Text style={styles.hello}>Hello {this.state.userName}</Text>
        <View style={styles.result}>
          <Text style={styles.your_score}>Your Score</Text>
          <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={styles.score}>{this.state.score}</Text>
            <Text style={styles.total}>/{this.state.total}</Text>
          </View>
        </View>
        <View style={styles.leaderboard}>
          <Text style={styles.leader_text}>Leaderboard</Text>
          <Leaderboard scores={this.state.scores} />
        </View>
        <TouchableHighlight
          style={styles.play_button}
          onPress={() => this.again()}
        ><Text style={styles.text}>Play Again</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Home;
