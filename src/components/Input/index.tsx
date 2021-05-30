import React, { useState } from 'react';
import { Image, View, Text } from 'react-native';
import { Input as InputField } from 'react-native-elements';
import colors from '../../styles/colors';
import styles from './style';

type Props = {
    errorMessage: string
    value: string,
    disabled: boolean
}

const Input = (props: Props) => {
  const { errorMessage, disabled, value } = props;

  const [isFocus, setIsFocus] = useState(false);

	return (
    <InputField
      {...props}
      onFocus={(event) => {
        setIsFocus(true);
      }}
      onBlur={(event) => {
        setIsFocus(false);
      }}
      inputStyle={
        isFocus ? 
          styles.focusInput 
        : errorMessage ? 
          styles.errorInput
        :
          {}
      }
      inputContainerStyle={
        isFocus ? 
          styles.focusContainer
        : disabled ? 
          styles.disabledContainer
        : errorMessage ? 
          styles.errorContainer  
        : value ? 
          styles.correctContainer 
        : 
          styles.container
      }
      placeholderTextColor={
        isFocus ? 
          colors.primary 
        : errorMessage ? 
          colors.error
        :
          colors.secondaryText
      }
      labelStyle={
        disabled ? 
          styles.disabledInput 
        : errorMessage ?
          styles.errorInput
        :
          {}
      }
    />
	);
}

export default Input;