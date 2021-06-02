import React from 'react';
import { ScrollView } from 'react-native';
import { Image, ListItem } from 'react-native-elements';

import Container from '@app/components/Container';
import Header from '@app/components/Header';

import styles from '../style';
import common from '@app/styles/common';

interface Ride {
    id: number,
    img: string,
    name: string,
    destination: string
}

type Props = {
    handleRedirect: (type: string) => void
}


const DATA = [
    {
        id: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvSn_dtMYIgtqjjVovO3JKFwVsaI4-C8j7fMWgoIs4s_ixRVgl1uz60QIxH_fQQsPGc6M&usqp=CAU',
        name: 'Manila Night Ride',
        destination: 'Marilao, Bulacan'
    },
    {
        id: 2,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvSn_dtMYIgtqjjVovO3JKFwVsaI4-C8j7fMWgoIs4s_ixRVgl1uz60QIxH_fQQsPGc6M&usqp=CAU',
        name: 'DRT Loop',
        destination: 'Marilao, Bulacan'
    },
    {
        id: 3,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvSn_dtMYIgtqjjVovO3JKFwVsaI4-C8j7fMWgoIs4s_ixRVgl1uz60QIxH_fQQsPGc6M&usqp=CAU',
        name: 'Laguna Loop',
        destination: 'Marilao, Bulacan'
    },
    {
        id: 4,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvSn_dtMYIgtqjjVovO3JKFwVsaI4-C8j7fMWgoIs4s_ixRVgl1uz60QIxH_fQQsPGc6M&usqp=CAU',
        name: 'Bulacan Loop',
        destination: 'Marilao, Bulacan'
    },
    {
        id: 5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvSn_dtMYIgtqjjVovO3JKFwVsaI4-C8j7fMWgoIs4s_ixRVgl1uz60QIxH_fQQsPGc6M&usqp=CAU',
        name: 'Mt. Arayat',
        destination: 'Marilao, Bulacan'
    }
]

const MainView = (props: Props) => {
    const { handleRedirect } = props;
    return <Container style={styles.container}>
        <Header />
        <ScrollView >
            {DATA.map((item: Ride) => {
                return <ListItem
                    key={item.id}
                    containerStyle={styles.listItem}
                    bottomDivider
                    onPress={() => {
                        handleRedirect('RideDetails')
                    }}
                >
                    <Image
                        source={{ uri: item.img }}
                        style={{ width: 100, height: 100 }}
                    />
                    <ListItem.Content style={styles.listItemContent}>
                        <ListItem.Title style={common.bold}>
                            {item.name}
                        </ListItem.Title>
                        <ListItem.Subtitle style={common.primaryColoredText}>
                            Meetup: {item.destination}
                        </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

            })}

        </ScrollView>
    </Container>
}

export default MainView;