import React from 'react';
import { TextInput } from 'react-native';

const FormCard = () => {
  const [value, onChangeText] = React.useState('Send me an email:');

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
};

export default FormCard;
