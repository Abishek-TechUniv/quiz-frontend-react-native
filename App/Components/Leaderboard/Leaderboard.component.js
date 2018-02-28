import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './Leaderboard.component.style';

const Leaderboard = (props) => {
  const scores = props.scores.slice(0, 5);
  const leaders = scores.map((leader, idx) => (
    <View style={styles.details} key={leader.userName}>
      <Text style={styles.id}>{idx + 1}</Text>
      <Text style={styles.name}>{leader.userName}</Text>
      <Text style={styles.score}>{leader.score}</Text>
    </View>));
  return (<ScrollView style={styles.leaders}>{leaders}</ScrollView>);
};

Leaderboard.propTypes = {
  scores: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Leaderboard;
