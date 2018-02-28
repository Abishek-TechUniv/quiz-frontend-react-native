import React, { Component } from 'react';
import { TextInput, View, Text, TouchableHighlight, ScrollView } from 'react-native';
import axios from 'axios';

import styles from './Home.component.style';

import QuestionContainer from '../QuestionContainer/QuestionContainer.component';
import Leaderboard from '../Leaderboard/Leaderboard.component';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'login',
      userName: '',
      score: 0,
      total: 12,
      scores: [],
      questions: [],
      selected: [],
      canComplete: false,
    };
  }


  componentDidMount() {
    const url = 'http://localhost:8080/questions';
    axios.get(url)
      .then((questions) => {
        if (questions.data.length === 0) {
          axios.put(url)
            .then(() => {
              axios.get(url)
                .then(qArr => this.setState({
                  questions: qArr.data,
                }));
            });
        } else { this.setState({ questions: questions.data }); }
      }).catch(err => console.error(err));
  }

  calculate = () => {
    const { userName } = this.state;
    axios.post('http://localhost:8080/calculate', { userName })
      .then(() => this.setState({
        page: 'scoreboard',
        userName,
      }))
      .then(() => axios.get('http://localhost:8080/scores')
        .then(({ data }) => {
          this.setState({
            scores: data,
            score: data.find(x => x.userName === this.state.userName).score,
          });
        })).catch(err => console.log(err));
  }

  login() {
    if (this.state.userName === '') this.setState({ page: 'login' });
    else {
      axios.post('http://localhost:8080/users', { userName: this.state.userName });
      axios.post('http://localhost:8080/users/response', { userName: this.state.userName })
        .then(result => this.setState({
          page: 'questions',
          selected: result.data,
        }));
      this.setState({
        page: 'questions',
      });
    }
  }

  check = () => {
    axios.post('http://localhost:8080/users/response', { userName: this.state.userName })
      .then(result => ((result.data.length === this.state.questions.length) ?
        this.setState({ canComplete: true }) : this.setState({ canComplete: false })))
      .catch(err => console.log(err));
  }


  again() {
    this.setState({
      page: 'login',
      userName: '',
      score: 0,
      scores: [],
      selected: [],
      canComplete: false,
    });
  }
  render() {
    if (this.state.page === 'login') {
      return (
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.welcome}>to</Text>
            <Text style={styles.quizzy}>Quizzy!</Text>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.login_text}>Login</Text>
            <Text style={styles.user_name}>Username</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => this.setState({ userName: text })}
            />
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
          <ScrollView>
            <QuestionContainer
              check={this.check}
              userName={this.state.userName}
              responses={this.state.selected}
              questions={this.state.questions}
            />
            <TouchableHighlight
              style={styles.login_button}
              onPress={() => (this.state.canComplete ? this.calculate() : console.log('oops'))}
            ><Text style={styles.text}>Complete</Text>
            </TouchableHighlight>
          </ScrollView>
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
          <Leaderboard scores={this.state.scores} userName={this.state.userName} />
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
