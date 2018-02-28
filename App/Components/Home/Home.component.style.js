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
    backgroundColor: 'rgb(67,200,245)',
  },

  welcome: {
    alignSelf: 'center',
    margin: '2%',
    fontSize: 40,
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
  },

  quizzy: {
    color: 'white',
    alignSelf: 'center',
    margin: '2%',
    fontSize: 42,
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottom: {
    flex: 1,
    backgroundColor: 'white',
  },

  login_text: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: '5%',
    marginBottom: '20%',
  },

  user_name: {
    fontWeight: 'bold',
    marginLeft: '5%',
  },

  input: {
    alignSelf: 'center',
    borderWidth: 1,
    height: 35,
    marginTop: '2%',
    marginBottom: '5%',
    width: '90%',
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
    marginTop: '5%',
  },

  result_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  result: {
    flex: 1,
    height: '5%',
    margin: '5%',
  },

  leaderboard: {
    height: '60%',
    margin: '5%',
  },

  play_button: {
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: '10%',
    width: 100,
    height: 30,
    borderWidth: 2,
    borderRadius: 10,
  },

  your_score: {
    marginTop: '-18%',
    alignSelf: 'center',
    color: 'orange',
    fontSize: 30,
  },

  score: {
    fontSize: 34,
    fontWeight: '300',
    alignSelf: 'flex-end',
  },

  total: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },

  leader_text: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
  },
});
