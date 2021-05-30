import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

import Container from '@app/components/Container';
import Header from '@app/components/Header';
import Input from '@app/components/Input';

import common from '@app/styles/common';
import styles from '../style';



const MainView = (props: any) => {

    return <Container style={styles.container}>
        <Header />
        <ScrollView  style={common.container} contentContainerStyle={styles.scrollView}>
            <Input
                label='Firstname'
                placeholder='First Name'
                value={"Dennis"}
            />
            <Input
                label='Lastname'
                placeholder='First Name'
                value={"Dennis"}
            />
            <Input
                label='Address'
                placeholder='Address'
                value={"Lolomboy, Bocaue, Bulacan"}
            />
            <Button
                title='Update'
                buttonStyle={common.roundedButton}
                containerStyle={common.fullWidthButton}
            />

        </ScrollView  >
    </Container>
}

export default MainView;