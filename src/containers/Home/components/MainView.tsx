import React from 'react';
import { ScrollView } from 'react-native';

import Container from '@app/components/Container';
import ContainerButton from '@app/components/ContainerButton';
import Header from '@app/components/Header';

import styles from '../style';


type Props = {
    handleRedirect: (type: string) => void
}

const MainView = (props: Props) => {
    const  { handleRedirect } = props;
    return <Container style={styles.container}>
        <Header/>
        <ScrollView contentContainerStyle={styles.menuContainer}>
            <ContainerButton
                title={"New Event"}
                onPress={() => {
                    handleRedirect('CreateUpdateEvent')
                }}
            />
            <ContainerButton
                title={"My Event"}
                onPress={() => {
                    handleRedirect('MyEvent')
                }}
            />
            <ContainerButton
                title={"Invitation"}
                onPress={() => {
                    handleRedirect('Invitation')
                }}
            />

        </ScrollView >

    </Container>
}

export default MainView;