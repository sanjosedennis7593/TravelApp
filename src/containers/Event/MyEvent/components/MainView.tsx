import React from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { Image, ListItem } from 'react-native-elements';

import Container from '@app/components/Container';
import Header from '@app/components/Header';
import { Loading } from '@app/components/Loading';

import styles from '../style';
import common from '@app/styles/common';

// TYPES
import { Event } from '@appp/types/events';


type Props = {
    createdEvents: Event[],
    handleRedirect: (type: string) => void,
    handleRefresh: () => void,
    isMyEventLoading: boolean
}

const MainView = (props: Props) => {
    const { createdEvents, handleRedirect, handleRefresh, isMyEventLoading } = props;

    return <Container style={styles.container}>
        <Header />
        <Loading isVisible={isMyEventLoading} />
        <ScrollView refreshControl={
            <RefreshControl
                refreshing={isMyEventLoading}
                onRefresh={handleRefresh}
            />
        } >
            {createdEvents.map((item: Event, index: number) => {
                return <ListItem
                    key={index}
                    containerStyle={styles.listItem}
                    bottomDivider
                    onPress={() => {
                        handleRedirect('EventDetails', item)
                    }}
                >
                    <Image
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvSn_dtMYIgtqjjVovO3JKFwVsaI4-C8j7fMWgoIs4s_ixRVgl1uz60QIxH_fQQsPGc6M&usqp=CAU' }}
                        style={{ width: 100, height: 100 }}
                    />
                    <ListItem.Content style={styles.listItemContent}>
                        <ListItem.Title style={common.bold}>
                            {item.event_name}
                        </ListItem.Title>
                        <ListItem.Subtitle style={common.primaryText}>
                            {item.destination}
                        </ListItem.Subtitle>
                        <ListItem.Subtitle style={common.primaryText}>
                            Meetup: {item.meetup_location}
                        </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

            })}

        </ScrollView>
    </Container>
}

export default MainView;