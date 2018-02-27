import React, { Component } from 'react';
import { TextInput, View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';

import styles from './Home.component.style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'login',
      userName: '',
      score: 0,
      scores: [],
      questions: [],
      selected: [],
      canComplete: false,
    };
  }

  update(e) {
    this.setState({
      userName: e.target.value,
    });
  }

  login() {
    fetch(
      'http://127.0.0.1:8080/users',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName: this.state.userName }),
      },
    ).then(() =>
      fetch('http://127.0.0.1:8080/users/response', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName: this.state.userName }),
      }).then(result =>
        this.setState({
          page: 'questions',
          selected: result.data,
        }))).catch((error) => {
      console.log(error);
    });
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
    }
    return (
      <View style={styles.container}>
        <Text style={styles.question}>{this.state.userName}</Text>
      </View>
    );
  }
}

export default Home;
