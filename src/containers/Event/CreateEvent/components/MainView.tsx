import React, { useEffect,useState } from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { Button } from 'react-native-elements';
import DatePicker from 'react-native-date-picker';
import { format } from "date-fns";

import Container from '@app/components/Container';
import Header from '@app/components/Header';
import Input from '@app/components/Input';
import { LoadingModal } from '@app/components/Loading';
import Modal from '@app/components/Modal';

import common from '@app/styles/common';
import styles from '../style';
// import style from '../../../../components/ContainerButton/style';

// SERVICES
import { createEvent, updateEvent } from '@app/services/event';

// TYPES
import { Event } from '@app/types/event';

// UTILS
import { convertToUnix, timestampToDate } from '@app/utils';
import { DATE_TIME_FORMAT } from '@app/utils/constants';




interface EventErrorMessage {
    event_name: string,
    destination: string,
    meetup_location: string,
    max_joiners: string,
    event_date: string,
    description?: string,
    //end_date: string
}

const MainView = (props: any) => {
    const { event, handleUpdateParentEvent, user } = props;

    const [isLoading, setIsLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentDatePicker, setCurrentDatePicker] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [eventDetails, setEventDetails] = useState<Event>({
        event_name: event ? event.event_name : 'Intramuros Tour',
        description: event ? event.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        destination: event ? event.destination : 'Intramuros Manila',
        meetup_location: event ? event.meetup_location : 'Quezon City, Metro Manila',
        max_joiners: event && event.max_joiners  ? '10' : '10',
        event_date:  event ? timestampToDate(event.event_date) : new Date() 
        //   end_date: new Date()
    });

    useEffect(() => {
        if (event) {
            setEventDetails({
                event_name: event ? event.event_name : 'Intramuros Tour',
                description: event ? event.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                destination: event ? event.destination : 'Intramuros Manila',
                meetup_location: event ? event.meetup_location : 'Quezon City, Metro Manila',
                max_joiners: event && event.max_joiners  ? '10' : '10',
                event_date:  event ? timestampToDate(event.event_date) : new Date() ,
                //   end_date: new Date() 
            })
        }
    }, [event]);



    const [eventErrorMessage, setEventErrorMessage] = useState<EventErrorMessage>({
        event_name: '',
        description: '',
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
                    event_date: convertToUnix(eventDetails.event_date),
                    user_id: user?.currentUser?.user_id,
                    id: event._id
                };

                if(event) {
                    const response = await updateEvent(payload);
                    if (response?.updateEvents) {

                        handleUpdateParentEvent(response.updateEvents)
                        setIsLoading(false);
                        // setEventDetails({
                        //     event_name: '',
                        //     description: '',
                        //     destination: '',
                        //     meetup_location: '',
                        //     max_joiners: '',
                        //     event_date: new Date()
                        // })
                    }
                    else {
                        setIsLoading(false);
                    }
                }else{
                    const response = await createEvent(payload);
                    if (response?.createEvents) {
                        setIsLoading(false);
                        setEventDetails({
                            event_name: '',
                            description: '',
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
               



            }
        } catch (e) {
            console.log('Error', e)
            setIsLoading(false);
        }


    }

    return <Container style={styles.container}>
        <Header />
        <LoadingModal isVisible={isLoading} />
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
                label="Description"
                value={eventDetails.description}
                onChangeText={(value: string) => {
                    handleChange('description', value)
                }}
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
                title={event ? 'Update' : 'Create'}
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