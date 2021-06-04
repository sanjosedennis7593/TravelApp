import React from 'react';
import { ScrollView } from 'react-native';
import { Button, Text } from 'react-native-elements';

// SHARED COMPONENTS
import Container from '@app/components/Container';
import Input from '@app/components/Input';
import Header from '@app/components/Header';

// STYLES
import styles from '../style';
import common from '@app/styles/common';

const MainView = (props) => {
    const { navigation } = props;

    const handleGoBack = () => {
        navigation.goBack();
    }


    return (
        <Container style={styles.container}>
            <Header title="Create Account" />

            <ScrollView style={common.container} contentContainerStyle={styles.scrollView}>
                <Input
                    label="First Name"
                    placeholder="First Name"
                />
                <Input
                    label="Last Name"
                    placeholder="Last Name"
                />
                <Input
                    label="Address"
                    placeholder="House no, Street name"

                />
                <Input
                    label="City"
                    placeholder="City Name"
                />
                <Input
                    label="Province/State"
                    placeholder="Province/State"
                />
                <Input
                    label="Zip Code"
                    placeholder="Zip Code"
                    keyboardType="numeric"
                    maxLength={5}
                />
                <Input
                    label="Phone #"
                    placeholder="(000) 000-0000"
                    keyboardType="numeric"
                    maxLength={14}
                />
                <Input
                    autoCapitalize="none"
                    label="Email"
                    placeholder="example@email.com"
                />

                <Input
                    autoCapitalize="none"
                    label='Password'
                    placeholder='Password'
                    secureTextEntry
                />

                <Input
                    autoCapitalize="none"
                    label="Repeat Password"
                    placeholder="Repeat Password"
                    secureTextEntry
                />
                <Button
                    title="Create Account"
                    buttonStyle={common.roundedButton}
                    containerStyle={common.fullWidthButton}
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