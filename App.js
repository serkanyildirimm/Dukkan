import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';

import Detail from './src/pages/Detail/Detail';
import Products from './src/pages/Products/Products';
import Login from './src/pages/Login/Login';
import {useDispatch, useSelector} from 'react-redux';
import Loading from './src/components/Loading/Loading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const App = () => {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#90caf9'} />
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{
              title: 'Dukkan',
              headerStyle: {backgroundColor: '#90caf9'},
              headerTitleAlign: 'center',
              headerTitleStyle: {color: 'white'},
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <>
          <Stack.Navigator>
            <Stack.Screen
              name="ProductsPage"
              component={Products}
              options={{
                title: 'Dukkan',
                headerStyle: {backgroundColor: '#90caf9'},
                headerTitleAlign: 'center',
                headerTitleStyle: {color: 'white'},
                headerRight: () => (
                  <Icon
                    name="logout"
                    size={30}
                    color="white"
                    onPress={() => dispatch({type: 'REMOVE_USER'})}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="DetailPage"
              component={Detail}
              options={{
                title: 'Detail',
                headerStyle: {backgroundColor: '#90caf9'},
                headerTitleAlign: 'center',
                headerTitleStyle: {color: 'white'},
              }}
            />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
};
export default App;
