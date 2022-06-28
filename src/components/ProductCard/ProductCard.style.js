import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee',
    margin: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderColor: 'red',
  },
  body_container: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    marginLeft: 10,
  },
  price: {
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 18,
    color: 'black',
  },
});

export default styles;
