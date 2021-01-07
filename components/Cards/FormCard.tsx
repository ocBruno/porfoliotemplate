import React from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { themeCardStyles } from './Cards.styles';

interface FormCardProps {
  formHeader: string;
  formDescription: string;
  submitButtonTitle: string;
  style?: object;
  singleLineInputPlaceholder?: string;
  multiLineInputPlaceholder?: string;
}

const FormCard = (props: FormCardProps) => {
  const isSingleLineInputActive = props.singleLineInputPlaceholder
    ? true
    : false;
  const isMultiLineInputActive = props.multiLineInputPlaceholder ? true : false;

  const [singleLineInputValue, onChangeSingleLineInputValue] = React.useState(
    props.singleLineInputPlaceholder
  );

  const [multiLineInputValue, onChangeMultiLineInputValue] = React.useState(
    props.multiLineInputPlaceholder
  );

  const renderDynamicInputs = () => {
    if (isSingleLineInputActive === true && isMultiLineInputActive) {
      return (
        <View>
          <TextInput
            style={themeCardStyles.themeCardSingleLineInput}
            value={singleLineInputValue}
            onChangeText={(text) => onChangeSingleLineInputValue(text)}
          />
          <TextInput
            multiline
            numberOfLines={4}
            value={multiLineInputValue}
            style={themeCardStyles.themeCardMultiLineInput}
            onChangeText={(text) => onChangeMultiLineInputValue(text)}
          />
        </View>
      );
    } else if (isSingleLineInputActive === true) {
      return (
        <TextInput
          style={themeCardStyles.themeCardSingleLineInput}
          value={singleLineInputValue}
          onChangeText={(text) => onChangeSingleLineInputValue(text)}
        />
      );
    } else if (isMultiLineInputActive === true) {
      return (
        <TextInput
          multiline
          style={themeCardStyles.themeCardMultiLineInput}
          numberOfLines={3}
          value={multiLineInputValue}
          onChangeText={(text) => onChangeMultiLineInputValue(text)}
        />
      );
    }
  };

  return (
    <View style={{ ...themeCardStyles.themeCardContainer, ...props.style }}>
      <Text style={themeCardStyles.themeCardHeader}>{props.formHeader}</Text>
      <Text style={themeCardStyles.themeCardDescription}>
        {props.formDescription}
      </Text>
      {renderDynamicInputs()}
      <Button
        onPress={() =>
          Linking.openURL(
            `mailto:brunocgmxus@gmail.com?subject=${singleLineInputValue}&body=${multiLineInputValue}`
          )
        }
        title={props.submitButtonTitle}
      />
    </View>
  );
};

export default FormCard;
