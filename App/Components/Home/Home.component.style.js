import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
  },

  welcome: {
    alignSelf: 'center',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottom: {
    flex: 1,
    backgroundColor: 'white',
  },

  login_text: {
    fontSize: 20,
    margin: '5%',
  },

  user_name: {
    marginLeft: '10%',
  },

  input: {
    alignSelf: 'center',
    borderWidth: 1,
    width: '80%',
  },

  login_button: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '10%',
    width: '40%',
    height: 30,
    borderWidth: 2,
    borderRadius: 10,
  },

  text: {
    padding: 2,
  },

  hello: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    height: '10%',
    margin: '2%',
  },

  result_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  result: {
    flex: 1,
    height: '15%',
    margin: '5%',
  },

  leaderboard: {
    height: '50%',
    margin: '5%',
  },

  play_button: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '10%',
    width: 100,
    height: 30,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: '5%',
  },

  your_score: {
    alignSelf: 'center',
    color: 'orange',
    fontSize: 30,
    marginBottom: '5%',
  },

  score: {
    fontSize: 34,
    alignSelf: 'flex-end',
  },

  total: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },

  leader_text: {
    fontSize: 20,
    alignSelf: 'center',
  },
});
