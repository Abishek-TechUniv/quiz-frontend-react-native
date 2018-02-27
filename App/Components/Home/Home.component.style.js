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

});
