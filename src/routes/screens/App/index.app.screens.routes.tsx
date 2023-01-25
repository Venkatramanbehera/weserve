import React from 'react';
import {Example} from '../../../views/App';
import * as types from './types.app.screens.routes';

export default function AppScreens(props: types.AppScreenTypes) {
  const {Stack} = props;
  return (
    <Stack.Group screenOptions={{headerStyle: {backgroundColor: 'papayawhip'}}}>
      <Stack.Screen name="Home" component={Example} />;
    </Stack.Group>
  );
}
