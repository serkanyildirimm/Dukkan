import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64b5f6',
  },
  logo_container: {
    flex: 1,
  },
  logo: {
    margin: 20,
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width * 0.9,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
  },
  body_container: {
    flex: 1,
  },
});
export default styles;
