import {StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {persistStore} from 'redux-persist';
import {Provider} from 'react-redux';
import {colors} from './src/assets/colors/colors';
import Routers from './src/routes/index.routes';
import {store} from './src/redux/redux-store';
import {PersistGate} from 'redux-persist/integration/react';

let persistor = persistStore(store);

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.container}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <StatusBar
              backgroundColor={colors.container}
              barStyle="dark-content"
            />
            <Routers />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}
