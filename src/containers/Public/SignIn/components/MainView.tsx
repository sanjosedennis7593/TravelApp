import React from 'react';
import { StatusBar, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import styles from '../style';


import common from '@app/styles/common';
import colors from '@app/styles/colors';

import Container from '@app/components/Container';
import Input from '@app/components/Input';
import Header from '@app/components/Header';
import style from '../../../../components/ContainerButton/style';

const MainView = (props) => {
	const { navigation } = props;

	const handleRedirect = (type:string):void => {
        navigation.navigate(type);
    }


	return (
		<Container style={styles.container}>
			<StatusBar barStyle="light-content" />
			<Header title="Sign In" />
			<View style={styles.inputContainer}>
				<Input
					autoCapitalize={'none'}
					label='Email'
					placeholder='example@email.com'

				/>
				<Input
					autoCapitalize={'none'}
					label='Password'
					placeholder='Password'
					secureTextEntry
				/>
				<Button
					title="Sign In"
					onPress={() => handleRedirect('Home')}
				/>
				<Button
					title="Forgot your password?"
					type="clear"
					buttonStyle={common.linkButton}
					titleStyle={{
						color: colors.secondaryText
					}}
					onPress={() => handleRedirect('ForgotPassword')}
				/>
				<View style={{ marginBottom: '55%' }}></View>
				<Text>Don't have an account?</Text>
				<Button
					onPress={() => handleRedirect('SignUp')}
					title='Create Account'
					type='clear'
					buttonStyle={common.linkButton}
				/>
			</View>
		</Container>
	);
}



export default MainView