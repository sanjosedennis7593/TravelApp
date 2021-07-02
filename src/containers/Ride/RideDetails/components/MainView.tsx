import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Icon, ListItem, Text } from 'react-native-elements';
import format from 'date-fns/format';

import Container from '@app/components/Container';
import Header from '@app/components/Header';

import styles from '../style';
import common from '@app/styles/common';

import { Event } from '@app/types/event';

// UTILS
import { timestampToDate } from '@app/utils';
import { DATE_TIME_FORMAT } from '@app/utils/constants';


type Props = {
    event: Event,
    isJoined: Boolean,
    isLoading: Boolean,
    user: Object,
    handleJoin: (eventId: string, userId: string | null) => void,
    handleStatus: (joinereId: string, status: string) => void
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
    const { event, handleJoin, handleLeave, handleStatus, isJoined, isLoading, user } = props;
    const isMyEvent = event?.user._id === user.user_id;

    const join = () => {
        handleJoin(event._id, user.user_id);
    }

    const leave = () => {
        const joinerDetails = event.joiners?.data.find(item => item.user._id === user.user_id);
        handleLeave(joinerDetails?._id, event._id);
    }

    const handleJoinerStatus = function <T, S extends string>(data: T, status: S) {
        handleStatus(data._id, status)
    }

    return <Container style={styles.container}>
        <Header />

        <ScrollView style={styles.content}>
            <Text h3 style={common.bold}>{event.event_name}</Text>
            <Text style={common.secondaryText}>Meetup Location: {event.meetup_location}</Text>
            <Text style={common.secondaryText}>Created By: {event.user.given_name} {event.user.family_name}</Text>
            <Text style={common.secondaryText}>Date: {format(timestampToDate(event.event_date), DATE_TIME_FORMAT)} </Text>
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
                    {isMyEvent && <View style={styles.listAction}>
                        {(item.status === 'Pending' || item.status === 'Approved') && <Button
                            icon={<Icon type="material-community" name="close" color="white" />}
                            onPress={() => {
                                handleJoinerStatus(item, 'Declined')
                            }}
                            buttonStyle={{
                                backgroundColor: 'red'
                            }}
                        />
                        }
                        {(item.status === 'Pending' || item.status === 'Declined') && <Button
                            icon={<Icon type="material-community" name="check" color="white" />}
                            onPress={() => {
                                handleJoinerStatus(item, 'Approved')
                            }}
                            buttonStyle={{
                                backgroundColor: 'green'
                            }}
                        />}

                    </View>}

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