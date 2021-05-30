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
        <ScrollView style={common.container} contentContainerStyle={styles.scrollView}>
            <Input
                label='Event Name'
                placeholder='Event Name'
                value={"Test Ride"}
            />
            <Input
                label='Location'
                placeholder='Location'
                value={"SM Mall of Asia"}
            />
            <Input
                label='Meetup Location'
                placeholder='Meetup Locationv'
                value={"Bocaue, Bulacan"}
            />
            <Input
                label='Meetup Location'
                placeholder='Meetup Locationv'
                value={"Bocaue, Bulacan"}
            />

            <Input
                label='Start Date'
                placeholder='Start Date'
                value={"2021-01-01"}
            />

            <Input
                label='End Date'
                placeholder='End Date'
                value={"2021-01-01"}
            />

            <Input
                label='No. of Joiners'
                placeholder='No. of Joiners'
                value={"15"}
            />


            <Button
                title='Create'
                buttonStyle={common.roundedButton}
                containerStyle={common.fullWidthButton}
            />

        </ScrollView>
    </Container>
}

export default MainView;