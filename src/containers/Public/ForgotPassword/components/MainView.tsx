import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';


// SHARED COMPONENT
import Container from '@app/components/Container';
import Header from '@app/components/Header';
import Input from '@app/components/Input';

//  STYLES
import styles from '../style';
import common from '@app/styles/common';


const MainView = (props) => {
    const { navigation } = props;

    const handleRedirect = (type:string):void => {
        navigation.navigate(type);
    }
	return (
		<Container style={styles.container}>
			<Header title="Forgot Password" />
            <View style={styles.inputContainer}>
			<Text>Enter your registered email address below to reset your password.</Text>
			<Input
				autoCapitalize="none"
				label="Email"
				placeholder="example@email.com"
			/>
			<Button
				title='Send Reset Link'
			/>
			<Button
				title="Sign In"
				type="clear"
				buttonStyle={common.linkButton}
                onPress={() => handleRedirect('SignIn')}
			/>
            </View>
		</Container>
	);
}

export default MainView;