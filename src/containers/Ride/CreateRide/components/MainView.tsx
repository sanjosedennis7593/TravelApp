import React, { useState } from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { Button } from 'react-native-elements';
import DatePicker from 'react-native-date-picker';
import { format } from "date-fns";

import Container from '@app/components/Container';
import Header from '@app/components/Header';
import Input from '@app/components/Input';
import Modal from '@app/components/Modal';

import common from '@app/styles/common';
import styles from '../style';
// import style from '../../../../components/ContainerButton/style';

const DATE_TIME_FORMAT = "MMMM do, yyyy H:mma";

interface Event {
    event_name: string,
    destination: string,
    meetup_location: string,
    no_of_joiners: string,
    start_date: Date,
    end_date: Date
}

interface EventErrorMessage {
    event_name: string,
    destination: string,
    meetup_location: string,
    no_of_joiners: string,
    start_date: string,
    end_date: string
}

const MainView = (props: any) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentDatePicker, setCurrentDatePicker] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [event, setEvent] = useState<Event>({
        event_name: '',
        destination: '',
        meetup_location: '',
        no_of_joiners: '',
        start_date: new Date(),
        end_date: new Date()
    });

    const [eventErrorMessage, setEventErrorMessage] = useState<EventErrorMessage>({
        event_name: '',
        destination: '',
        meetup_location: '',
        no_of_joiners: '',
        start_date: '',
        end_date: ''
    });

    const handleChange = (name, value) => {
        setEvent({
            ...event,
            [name]: value
        })
    }

    const handleSubmit = () => {

        const eventNameError = event.event_name === '' ? "Event name is required" : "";
        const destinationError = event.destination === '' ? "Destination is required" : "";
        const meetUpLocationError = event.meetup_location === '' ? "Meetup location is required" : "";
        const noOfJoinersError = event.no_of_joiners === '' ? "No. of joiners is required" : "";
        const startDateError = !event.start_date ? "No. of joiners is required" : "";
        const endDateError = !event.end_date ? "No. of joiners is required" : "";


        setEventErrorMessage({
            event_name: eventNameError,
            destination: destinationError,
            meetup_location: meetUpLocationError,
            no_of_joiners: noOfJoinersError,
            start_date: startDateError,
            end_date: endDateError
        })
    }


    return <Container style={styles.container}>
        <Header />
        <ScrollView style={common.container} contentContainerStyle={styles.scrollView}>
            <Input
                label="Event Name"
                value={event.event_name}
                onChangeText={(value: string) => {
                    handleChange('event_name', value)
                }}
            />
            <Input
                label="Destination"
                value={event.destination}
                onChangeText={(value: string) => {
                    handleChange('destination', value)
                }}
            />

            <Input
                label="Meetup Location"
                value={event.meetup_location}
                onChangeText={(value: string) => {
                    handleChange('meetup_location', value)
                }}
            />

            <Input
                label="No. of Joiners"
                value={event.no_of_joiners}
                onChangeText={(value: string) => {
                    handleChange('no_of_joiners', value)
                }}
            />
            <Pressable style={styles.dateContainerWidth} onPress={() => {
                setIsModalVisible(true);
                setCurrentDatePicker('start_date')
            }}>
                <View pointerEvents="none">
                    <Input
                        label="Start Date"
                        value={event.start_date && format(event.start_date, DATE_TIME_FORMAT)}

                    />
                </View>
            </Pressable>

            <Pressable style={styles.dateContainerWidth} onPress={() => {
                setIsModalVisible(true);
                setCurrentDatePicker('end_date')
            }}>
                <View pointerEvents="none">
                    <Input
                        label="End Date"
                        value={event && format(event.end_date, DATE_TIME_FORMAT)}

                    />
                </View>
            </Pressable>


            <Button
                title="Create"
                buttonStyle={common.roundedButton}
                containerStyle={common.fullWidthButton}
                onPress={handleSubmit}
            />

        </ScrollView>
        <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => {
                setIsModalVisible(false);
            }}>
            <View  >
                <DatePicker
                    date={selectedDate}
                    onDateChange={(dateValue: Date): void => {
                        setSelectedDate(dateValue);
                    }}
                />

                <Button
                    title="Select"
                    containerStyle={styles.dateContainerWidth}
                    onPress={() => {
                        console.log('selectedDate', selectedDate)
                        setEvent({
                            ...event,
                            [currentDatePicker]: selectedDate
                        })

                        setSelectedDate(new Date());
                        setIsModalVisible(false);
                    }}
                />
            </View>

        </Modal>
    </Container>
}

export default MainView;