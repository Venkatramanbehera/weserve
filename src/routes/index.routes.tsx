import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {store} from '../redux/redux-store';
import Splash from '../views/App/Splash/components/Splash';
import {Login} from '../views/Auth';
import BottomTabNavigator from './screens/BottomTab/index.bottom.tab.routes';
const Routes = () => {
  const Stack = createStackNavigator();
  const storeIsLogin = store.getState().login.isLogin;
  console.log('storeIsLogin', storeIsLogin);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash">
      <Stack.Group>
        <Stack.Screen name="BTN" component={BottomTabNavigator} />
        {/* App Stack */}
      </Stack.Group>
      <Stack.Screen name="Splash" component={Splash} />

      <Stack.Group>
        <Stack.Screen name="Login" component={Login} />
        {/* Auth Stack */}
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Routes;
