import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

import Container from '@app/components/Container';
import Header from '@app/components/Header';
import Input from '@app/components/Input';

import common from '@app/styles/common';
import styles from '../style';

type Props = {
    handleLogout: () => void
}

const MainView = (props: Props) => {
    const { handleLogout } = props;

    return <Container style={styles.container}>
        <Header />
        <ScrollView style={common.container} contentContainerStyle={styles.scrollView}>
            <Input
                label="Firstname"
                placeholder="First Name"
                value={"Dennis"}
            />
            <Input
                label="Lastname"
                placeholder="Last Name"
                value={"San Josee"}
            />
            <Input
                label="Address"
                placeholder="Address"
                value={"Lolomboy, Bocaue, Bulacan"}
            />
            <Button
                title="Update"
                buttonStyle={common.roundedButton}
                containerStyle={common.fullWidthButton}
            />


            <Button
                title="Logout"
                buttonStyle={common.roundedButton}
                containerStyle={styles.logOutButton}
                onPress={() => {
                    handleLogout();
                }}
            />



        </ScrollView  >
    </Container>
}

export default MainView;