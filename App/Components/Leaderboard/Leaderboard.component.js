import PropTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';

import styles from './Leaderboard.component.style';

const Leaderboard = (props) => {
  const leaders = props.scores.map((leader, idx) => (
    <View style={styles.details} key={leader.userName}>
      <Text style={styles.id}>{idx}</Text>
      <Text style={styles.name}>{leader.userName}</Text>
      <Text style={styles.score}>{leader.score}</Text>
    </View>));
  return (<View style={styles.leaders}>{leaders}</View>);
};

Leaderboard.propTypes = {
  scores: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Leaderboard;
