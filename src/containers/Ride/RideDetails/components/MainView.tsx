import React from 'react';
import { ScrollView, View } from 'react-native';
import { Image, ListItem, Text } from 'react-native-elements';

import Container from '@app/components/Container';
import Header from '@app/components/Header';

import styles from '../style';
import common from '@app/styles/common';


const JOINERS = [
    'John Doe (Pending)', 'Dennis San Jose (Pending)', 'Elon Musk'
]

type Props = {
    data: {
        event_name: string,
        meetup_location: string,
        description: string
    }
}

const MainView = (props: Props) => {
    const { data } = props;
    return <Container style={styles.container}>
        <Header />
        <ScrollView style={styles.content}>
            <Text h3 style={common.bold}>{data.event_name}</Text>
            {/* <Text h3>{serviceType.description}</Text> */}
            <Text style={common.primaryColoredText}>Meetup Location: {data.meetup_location}</Text>
            <Text style={common.primaryColoredText}>Created By: Dennis San Jose</Text>
            <Text style={styles.description}>{data.description} </Text>

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

        </ScrollView>
    </Container>
}

export default MainView;