import React, { useState } from 'react';
import { StatusBar, NativeSyntheticEvent, TextInputChangeEventData, View } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Button, Text } from 'react-native-elements';
import { useDispatch } from 'react-redux';


import common from '@app/styles/common';
import colors from '@app/styles/colors';

import Container from '@app/components/Container';
import Input from '@app/components/Input';
import Header from '@app/components/Header';
import Loading from '@app/components/Loading';

// REDUX
import { setCurrentUser } from '@app/redux/user/action';

// SERVICES
import { signIn } from '@app/services/auth';

// STYLES
import styles from '../style';

// TYPES
import { Login } from '@app/types/public';




const MainView = (props) => {
	const dispatch = useDispatch();
	const { navigation } = props;

	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [credentials, setCredentials] = useState<Login>({
		email: '',
		password: ''
	});

	const handleOnChange = (type: string) => (value: string): void => {
		setCredentials({
			...credentials,
			[type]: value
		})
	}

	const handleRedirect = (type: string): void => {
		navigation.navigate(type);
	}

	const handleLogin = async () => {
		setErrorMessage('');
		if (credentials.email !== '' && credentials.password !== '') {
			setIsLoading(true);
			try {
				const response = await signIn({
					username: credentials.email,
					password: credentials.password
				});
				if (response && response.attributes) {
					dispatch(setCurrentUser(response));
					navigation.dispatch(
						CommonActions.reset({
							index: 0,
							routes: [
								{ name: 'Home' },
							],
						})
					);
				}
				setIsLoading(false);
			} catch (e) {
				console.log('Error', e)
				setErrorMessage(e.message);
				setIsLoading(false);
			}
		}

	}
	console.log('credentials', credentials)
	return (
		<Container style={styles.container}>
			<StatusBar barStyle="light-content" />
			<Header title="Sign In" />
			<Loading isVisible={isLoading} />
			<View style={styles.inputContainer}>
				<Input
					autoCapitalize="none"
					label="Email"
					placeholder="example@email.com"
					onChangeText={handleOnChange('email')}
					value={credentials.email}

				/>
				<Input
					autoCapitalize="none"
					label="Password"
					placeholder="Password"
					onChangeText={handleOnChange('password')}
					value={credentials.password}
					secureTextEntry
				/>
				<View style={{ paddingVertical: 5 }}><Text>{errorMessage}</Text></View>
				<Button
					disabled={isLoading}
					title={isLoading ? 'Signing In...' : 'Sign In'}
					onPress={() => {
						handleLogin();
					}}
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