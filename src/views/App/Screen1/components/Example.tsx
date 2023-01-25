import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {ExampleProps as Iprops} from '../container/exampleContainer';

interface ExampleProps extends Iprops {}

const Example = (props: ExampleProps) => {
  const {quotes, getAllQuotes} = props;
  console.log('Quotes', quotes);
  useEffect(() => {
    getAllQuotes();
  }, [getAllQuotes]);
  return (
    <View>
      <Text>Example</Text>
    </View>
  );
};

export default Example;
