import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Icon, ListItem, Text } from 'react-native-elements';
import format from 'date-fns/format';

import Container from '@app/components/Container';
import Header from '@app/components/Header';

import styles from '../style';
import colors from '@app/styles/colors';
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
    handleStatus: (joinerIdv: string, status: string) => void
    handleLeave: (id: string) => void,
    handleRedirect: (data: object) => void
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

const JoinersList = <T extends {
    title: string,
    data: [],
    isMyEvent: boolean,
    handleJoinerStatus: (joiner: {}, status: string) => void
}>(props: T) => {
    const { title, data, isMyEvent, handleJoinerStatus } = props;

    return <ScrollView>
        <Text h4 style={common.bold}>{title}</Text>
        {data.map((item: Joiners, index: number) => {
            return (<ListItem
                key={index}
                containerStyle={styles.listItem}
                bottomDivider
            >
                <ListItem.Content style={styles.listItemContent}>
                    <ListItem.Title >
                        {item.user.given_name}  {item.user.family_name}
                    </ListItem.Title>
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

}

const MainView = (props: Props) => {
    const { event, handleJoin, handleLeave, handleRedirect, handleStatus, isJoined, isLoading, user } = props;
    const isMyEvent = event?.user._id === user.user_id;

    const joiners = event.joiners?.data.reduce(<T extends {}, S extends Joiners>(accum: T, item: S) => {
        const currentKey = item.status.toLowerCase();
        return {
            ...accum,
            [currentKey]: [...(accum[currentKey] || []), item]
        }
    }, {});


    const join = () => {
        handleJoin(event._id, user.user_id);
    }

    const leave = () => {
        const joinerDetails = event.joiners?.data.find(item => item.user._id === user.user_id);
        handleLeave(joinerDetails?._id, event._id);
    }

    const handleJoinerStatus = function <T, S extends string>(data: T, status: S) {
        handleStatus(data._id, status)
    };


    return <Container style={styles.container}>
        <Header />

        <ScrollView style={styles.content}>
            {isMyEvent && <View style={styles.editViewContainer}>
                <Button
                    containerStyle={styles.editButtonContainer}
                    buttonStyle={styles.editButton}
                    type="clear"
                    title="Edit"
                    onPress={() => {
                        handleRedirect(event)
                    }}
                />
            </View>}

            <Text h3 style={common.bold}>{event.event_name}</Text>
            <Text style={colors.secondaryText}>Meetup Location: {event.meetup_location}</Text>
            <Text style={colors.secondaryText}>Created By: {event.user.given_name} {event.user.family_name}</Text>
            <Text style={colors.secondaryText}>Date: {format(timestampToDate(event.event_date), DATE_TIME_FORMAT)} </Text>
            <Text style={styles.description}>{event.description} </Text>

            {joiners.approved &&
                <JoinersList
                    title="Approved"
                    data={joiners.approved || []}
                    isMyEvent={isMyEvent}
                    handleJoinerStatus={handleJoinerStatus}
                />}

            {joiners.pending && <JoinersList
                title="Pending"
                data={joiners.pending || []}
                isMyEvent={isMyEvent}
                handleJoinerStatus={handleJoinerStatus}
            />}

            {joiners.declined && <JoinersList
                title="Declined"
                data={joiners.declined || []}
                isMyEvent={isMyEvent}
                handleJoinerStatus={handleJoinerStatus}
            />}


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