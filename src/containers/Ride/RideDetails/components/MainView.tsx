import React from 'react';
import { View } from 'react-native';
import { Image, ListItem, Text } from 'react-native-elements';

import Container from '@app/components/Container';
import Header from '@app/components/Header';

import styles from '../style';
import common from '@app/styles/common';


const JOINERS = [
    'John Doe (Pending)', 'Dennis San Jose (Pending)', 'Elon Musk'
]


const MainView = (props: any) => {
    return <Container style={styles.container}>
        <Header />

        <View style={styles.content}>
            <Text h3 style={common.bold}>Manila Night Ride</Text>
            {/* <Text h3>{serviceType.description}</Text> */}
            <Text style={common.primaryColoredText}>Meetup Location: Marilao, Bulacan</Text>
            <Text style={common.primaryColoredText}>Created By: Dennis San Jose</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>

            <View>
                <Text h4 style={common.bold}>Joiners</Text>
                {JOINERS.map((item: string, index: number) => {
                    return (<ListItem
                        key={index}
                        containerStyle={styles.listItem}
                        bottomDivider

                    >

                        <ListItem.Content style={styles.listItemContent}>
                            <ListItem.Title >
                                {item}
                            </ListItem.Title>

                        </ListItem.Content>
                    </ListItem>)

                })}


            </View>

        </View>
    </Container>
}

export default MainView;