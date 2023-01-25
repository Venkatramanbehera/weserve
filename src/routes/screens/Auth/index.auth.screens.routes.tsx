import React from 'react';
import {Example} from '../../../views/App';
import * as types from './types.auth.screens.routes';

export default function AuthScreens(props: types.AuthScreenTypes) {
  const {Stack} = props;
  return (
    <Stack.Group>
      <Stack.Screen name="Home" component={Example} />;
    </Stack.Group>
  );
}
