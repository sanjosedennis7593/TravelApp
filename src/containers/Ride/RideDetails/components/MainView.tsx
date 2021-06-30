import React from 'react';
import { ScrollView } from 'react-native';
import { Button, ListItem, Text } from 'react-native-elements';

import Container from '@app/components/Container';
import Header from '@app/components/Header';

import styles from '../style';
import common from '@app/styles/common';

import { Event } from '@app/types/event'

type Props = {
    event: Event,
    isJoined: Boolean,
    isLoading: Boolean,
    user: Object,
    handleJoin: (eventId: string, userId: string | null) => void,
    handleLeave: (id: string) => void
}

interface Joiners {
    date_joined: string,
    status: string,
    user: {
        given_name: string,
        family_name: string,
        email: string
    }

}

const MainView = (props: Props) => {
    const { event, handleJoin, handleLeave, isJoined, isLoading, user } = props;
    const isMyEvent = event?.user._id === user.user_id;
    console.log('isMyEvent', isMyEvent)
    console.log('isMyEvent user', user)
    console.log('isMyEvent event', event)

    const join = () => {
        handleJoin(event._id, user.user_id);
    }

    const leave = () => {
        const joinerDetails = event.joiners?.data.find(item => item.user._id === user.user_id);
        handleLeave(joinerDetails?._id, event._id);
    }

    return <Container style={styles.container}>
        <Header />

        <ScrollView style={styles.content}>
            <Text h3 style={common.bold}>{event.event_name}</Text>
            <Text style={common.secondaryText}>Meetup Location: {event.meetup_location}</Text>
            <Text style={common.secondaryText}>Created By: {event.user.given_name} {event.user.family_name}</Text>
            <Text style={styles.description}>{event.description} </Text>



            {event.joiners?.data.map((item: Joiners, index: number) => {
                return (<ListItem
                    key={index}
                    containerStyle={styles.listItem}
                    bottomDivider
                >
                    <ListItem.Content style={styles.listItemContent}>
                        <ListItem.Title >
                            {item.user.given_name}  {item.user.family_name}
                        </ListItem.Title>
                        <ListItem.Subtitle>{item.status}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>)
            })}


        </ScrollView>
        {!isMyEvent && <Button
            title={isLoading ? 'Joining...' : isJoined ? 'Already Joined' : 'Join'}
            disabled={isLoading || isJoined}
            onPress={() => join()}
        />
        }
        {(isJoined && !isMyEvent) && <Button
            buttonStyle={{ 
                backgroundColor: 'red' 
            }}
            title="Withdraw from this event"
            onPress={() => { leave() }}
        />}


    </Container>
}

export default MainView;