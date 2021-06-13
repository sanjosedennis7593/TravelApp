import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { CommonActions } from '@react-navigation/native';

// SHARED COMPONENTS
import Container from '@app/components/Container';
import Input from '@app/components/Input';
import Header from '@app/components/Header';
import Loading from '@app/components/Loading';

// STYLES
import styles from '../style';
import common from '@app/styles/common';

// SERVICES
import { signUp } from '@app/services/auth';

// TYPES
import { Register } from '@app/types/public';

// UTILS
import { validateEmail } from '@app/utils';



const MainView = (props) => {
    const { navigation } = props;

    const [isLoading, setIsLoading] = useState(false);
    const [userDetails, setUserDetails] = useState<Register>({
        email: '',
        password: '',
        repeat_password: '',
        given_name: '',
        family_name: '',
        phone_number: '',
        address: '',
        city: '',
        province: '',
        zip_code: ''
    });

    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [repeatPasswordMessage, setRepeatPasswordMessage] = useState('');
    const [firstNameErrorMessage, setFirstNameErrorMessage] = useState('');
    const [lastNameErrorMessage, setLastNameErrorMemssage] = useState('');


    const handleOnChange = (type: string) => (value: string): void => {
        setUserDetails({
            ...userDetails,
            [type]: value
        })
    }

    const handleGoBack = () => {
        navigation.goBack();
    }

    const handleSignUp = async () => {

        try {


            const isEmailError = userDetails.email === '' || !validateEmail(userDetails.email);
            const isFirstNameError = userDetails.given_name === '';
            const isLastNameError = userDetails.family_name === '';
            const isPasswordError = userDetails.password === '' || userDetails.password.length < 7;
            const isRepeatPasswordError = userDetails.repeat_password === '' || (userDetails.repeat_password !== userDetails.password);

            console.log('isEmailError',isEmailError)
            console.log('isFirstNameError',isFirstNameError)
            console.log('isLastNameError',isLastNameError)
            console.log('isPasswordError',isPasswordError)
            console.log('isRepeatPasswordError',isRepeatPasswordError)
            console.log('userDetails',userDetails)
            setEmailErrorMessage(userDetails.email === '' ? 'Email address should not be empty' : !validateEmail(userDetails.email) ? 'Invalid email address format' : '');
            setPasswordErrorMessage(userDetails.password === '' ? 'Password should not be empty' : userDetails.password.length < 7 ? 'Password should atleast 7 characters' : '');
            setRepeatPasswordMessage(userDetails.repeat_password === '' ? 'Password should not be empty' : userDetails.repeat_password !== userDetails.password ? 'Password not match' : '');
            setFirstNameErrorMessage(isFirstNameError ? 'First name should not be empty' : '');
            setLastNameErrorMemssage(isLastNameError ? 'Last name should not be empty' : '');


            if (isEmailError || isFirstNameError || isLastNameError || isPasswordError || isRepeatPasswordError) {
                return;
            }


            setIsLoading(true);
            const response = await signUp({
                email: userDetails.email,
                password: userDetails.password,
                phone_number: userDetails.phone_number,
                given_name: userDetails.given_name,
                family_name: userDetails.family_name,
            });

            if (response) {
                setIsLoading(false);
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            { name: 'SignIn' },
                        ],
                    })
                );
            }


        } catch (e) {
            console.log('handleSignUp Error', e);
            setIsLoading(false);
        }

    }
    console.log('userDetails', userDetails)
    return (
        <Container style={styles.container}>
            <Header title="Create Account" />
            <Loading isVisible={isLoading} />
            <ScrollView style={common.container} contentContainerStyle={styles.scrollView}>
                <Input
                    autoCapitalize="none"
                    label="Email"
                    placeholder="example@email.com"
                    onChangeText={handleOnChange('email')}
                    value={userDetails.email}
                    errorMessage={emailErrorMessage}
                />

                <Input
                    autoCapitalize="none"
                    label="Password"
                    placeholder="Password"
                    onChangeText={handleOnChange('password')}
                    value={userDetails.password}
                    errorMessage={passwordErrorMessage}
                    secureTextEntry
                />

                <Input
                    autoCapitalize="none"
                    label="Repeat Password"
                    placeholder="Repeat Password"
                    onChangeText={handleOnChange('repeat_password')}
                    value={userDetails.repeat_password}
                    errorMessage={repeatPasswordMessage}
                    secureTextEntry
                />
                <Input
                    label="First Name"
                    placeholder="First Name"
                    onChangeText={handleOnChange('given_name')}
                    value={userDetails.given_name}
                    errorMessage={firstNameErrorMessage}
                />
                <Input
                    label="Last Name"
                    placeholder="Last Name"
                    onChangeText={handleOnChange('family_name')}
                    value={userDetails.family_name}
                    errorMessage={lastNameErrorMessage}
                />
                <Input
                    label="Address"
                    placeholder="House no, Street name"
                    onChangeText={handleOnChange('address')}
                    value={userDetails.address}

                />
                <Input
                    label="City"
                    placeholder="City Name"
                    onChangeText={handleOnChange('city')}
                    value={userDetails.city}
                />
                <Input
                    label="Province/State"
                    placeholder="Province/State"
                    onChangeText={handleOnChange('province')}
                    value={userDetails.province}
                />
                <Input
                    label="Zip Code"
                    placeholder="Zip Code"
                    keyboardType="numeric"
                    maxLength={5}
                    onChangeText={handleOnChange('zip_code')}
                    value={userDetails.zip_code}
                />
                <Input
                    label="Phone #"
                    placeholder="(000) 000-0000"
                    keyboardType="numeric"
                    maxLength={14}
                    onChangeText={handleOnChange('phone_number')}
                    value={userDetails.phone_number}
                />

                <Button
                    title="Create Account"
                    buttonStyle={common.roundedButton}
                    containerStyle={common.fullWidthButton}
                    onPress={() => {
                        handleSignUp();
                    }}
                />
                <Text style={{ paddingTop: 50 }}>Don't have an account?</Text>
                <Button
                    onPress={() => handleGoBack()}
                    title="Sign In"
                    type="clear"
                    buttonStyle={common.linkButton}
                />
            </ScrollView>
        </Container>
    );
}

export default MainView;