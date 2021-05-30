  
import React from 'react';
import { SafeAreaView } from 'react-native';
import common from '../../styles/common';

type Props = {
    children: React.ReactNode,
    style: any
}
const Container = (props: Props) => {
  const { children, style } = props;

	return (
    <>
      <SafeAreaView style={[common.safeAreaView]}>
        {/* <KeyboardAvoidingView style={[common.container, style]} behavior="padding" enabled   keyboardVerticalOffset={100}> */}
          {
            children
          }
        {/* </KeyboardAvoidingView> */}
      </SafeAreaView>
    </>
	);
}

export default Container;