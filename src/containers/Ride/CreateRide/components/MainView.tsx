import React, { useState } from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { Button } from 'react-native-elements';
import DatePicker from 'react-native-date-picker';
import { format } from "date-fns";
import { useSelector } from 'react-redux';

import Container from '@app/components/Container';
import Header from '@app/components/Header';
import Input from '@app/components/Input';
import Loading from '@app/components/Loading';
import Modal from '@app/components/Modal';

import common from '@app/styles/common';
import styles from '../style';
// import style from '../../../../components/ContainerButton/style';

// SERVICES
import { createUpdateEvent } from '@app/services/event'


const DATE_TIME_FORMAT = "MMMM do, yyyy H:mma";

interface Event {
    event_name: string,
    destination: string,
    meetup_location: string,
    max_joiners: string,
    event_date: Date,
    //end_date: Date
}

interface EventErrorMessage {
    event_name: string,
    destination: string,
    meetup_location: string,
    max_joiners: string,
    event_date: string,
    //end_date: string
}

const MainView = (props: any) => {
    const state = useSelector(state => {
        return {
            user: state.user
        }
    })

    const [isLoading, setIsLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentDatePicker, setCurrentDatePicker] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [eventDetails, setEventDetails] = useState<Event>({
        event_name: '',
        destination: '',
        meetup_location: '',
        max_joiners: '',
        event_date: new Date(),
        //   end_date: new Date()
    });

    const [eventErrorMessage, setEventErrorMessage] = useState<EventErrorMessage>({
        event_name: '',
        destination: '',
        meetup_location: '',
        max_joiners: '',
        event_date: '',
        // end_date: ''
    });

    const handleChange = (name: string, value: string) => {
        setEventDetails({
            ...eventDetails,
            [name]: value
        })
    }

    const handleSubmit = async () => {

        try {

            const eventNameError = eventDetails.event_name === '' ? "Event name is required" : "";
            const destinationError = eventDetails.destination === '' ? "Destination is required" : "";
            const meetUpLocationError = eventDetails.meetup_location === '' ? "Meetup location is required" : "";
            const noOfJoinersError = eventDetails.max_joiners === '' ? "No. of joiners is required" : "";
            const startDateError = !eventDetails.event_date ? "Event Date is required" : "";
            setEventErrorMessage({
                event_name: eventNameError,
                destination: destinationError,
                meetup_location: meetUpLocationError,
                max_joiners: noOfJoinersError,
                event_date: startDateError
            });

            if (!eventNameError && !destinationError && !meetUpLocationError && !noOfJoinersError && !startDateError) {
                setIsLoading(true);
                const payload = {
                    ...eventDetails,
                    max_joiners: parseInt(eventDetails.max_joiners),
                    event_date: format(eventDetails.event_date, DATE_TIME_FORMAT),
                    user_id: state.user?.currentUser?.attributes?.sub
                };
                const response = await createUpdateEvent(payload);
                if (response?.createEvents) {
                    setIsLoading(false);
                    setEventDetails({
                        event_name: '',
                        destination: '',
                        meetup_location: '',
                        max_joiners: '',
                        event_date: new Date()
                    })
                }
                else {
                    setIsLoading(false);
                }



            }
        } catch (e) {
            setIsLoading(false);
        }


    }

    return <Container style={styles.container}>
        <Header />
        <Loading isVisible={isLoading} />
        <ScrollView style={common.container} contentContainerStyle={styles.scrollView}>
            <Input
                label="Event Name"
                value={eventDetails.event_name}
                onChangeText={(value: string) => {
                    handleChange('event_name', value)
                }}
                errorMessage={eventErrorMessage.event_name}
            />
            <Input
                label="Destination"
                value={eventDetails.destination}
                onChangeText={(value: string) => {
                    handleChange('destination', value)
                }}
                errorMessage={eventErrorMessage.destination}
            />

            <Input
                label="Meetup Location"
                value={eventDetails.meetup_location}
                onChangeText={(value: string) => {
                    handleChange('meetup_location', value)
                }}
                errorMessage={eventErrorMessage.meetup_location}
            />

            <Input
                label="No. of Joiners"
                value={eventDetails.max_joiners}
                onChangeText={(value: string) => {
                    handleChange('max_joiners', value)
                }}
                errorMessage={eventErrorMessage.max_joiners}
            />
            <Pressable style={styles.dateContainerWidth} onPress={() => {
                setIsModalVisible(true);
                setCurrentDatePicker('event_date')
            }}>
                <View pointerEvents="none">
                    <Input
                        label="Event Date"
                        value={eventDetails.event_date && format(eventDetails.event_date, DATE_TIME_FORMAT)}
                        errorMessage={eventErrorMessage.event_date}
                    />
                </View>
            </Pressable>

            {/* <Pressable style={styles.dateContainerWidth} onPress={() => {
                setIsModalVisible(true);
                setCurrentDatePicker('end_date')
            }}>
                <View pointerEvents="none">
                    <Input
                        label="End Date"
                        value={event && format(event.end_date, DATE_TIME_FORMAT)}

                    />
                </View>
            </Pressable> */}


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
                        setEventDetails({
                            ...eventDetails,
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