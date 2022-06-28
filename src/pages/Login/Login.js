import React from 'react';
import {Alert, Image, SafeAreaView, View} from 'react-native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';

import styles from './Login.style';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import usePost from '../../hooks/usePost/usePost';
import Config from 'react-native-config';

const Login = ({navigation}) => {
  ///Log out and sign up button added.//
  const {data, loading, error, post} = usePost();
  const dispatch = useDispatch();
  const initialValues = {
    username: '',
    password: '',
  };
  const handleLogin = values => {
    post(Config.API_AUTH_URL, values);
  };
  if (error) {
    Alert.alert('dukkan', 'bir hata olustu...');
  }
  if (data) {
    if (data.status === 'Error') {
      Alert.alert('dukkan', 'kullanici bulunamadi...');
    } else {
      dispatch({type: 'SET_USER', payload: {user}});
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/satisfaction.webp')}
        />
      </View>
      <Formik initialValues={initialValues} onSubmit={handleLogin}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanici adini giriniz..."
              value={values.username}
              onChangeText={handleChange('username')}
              iconName="account"
            />
            <Input
              placeholder="Kullanici sifresini giriniz..."
              value={values.password}
              onChangeText={handleChange('password')}
              iconName="account"
            />
            <Button
              text="Giris yap..."
              onPress={handleSubmit}
              loading={loading}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};
export default Login;

const user = {
  address: {
    geolocation: {
      lat: '-37.3159',
      long: '81.1496',
    },
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874',
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {
    firstname: 'john',
    lastname: 'doe',
  },
  phone: '1-570-236-7033',
  __v: 0,
};
