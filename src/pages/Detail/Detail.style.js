import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body_container: {
    flex: 5,
  },
  image: {
    flex: 2,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
    marginTop: 70,
  },
  title: {
    fontWeight: 'bold',
    margin: 5,
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
  },
  description: {
    color: 'black',
    margin: 5,
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'right',
    marginRight: 10,
  },
});
export default styles;
