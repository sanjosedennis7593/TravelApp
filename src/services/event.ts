import { graphQLClient } from '@app/graphql/index';


import { GET_ALL_EVENT_QUERY, GET_EVENT_BY_USER_QUERY, GET_EVENT_BY_ID } from '@app/graphql/queries/events';
import { CREATE_EVENT_MUTATION, UPDATE_EVENT_MUTATION, JOIN_EVENT_MUTATION, DELETE_JOINERS_MUTATION, UPDATE_JOINER_STATUS_MUTATION } from '@app/graphql/mutations/events';

import { Event } from '@app/types/events';


const getEvents = async () => {
    const response = await graphQLClient.request(
        GET_ALL_EVENT_QUERY
    );
    return response;
}

const getEventById = async (id: string) => {
    const response = await graphQLClient.request(
        GET_EVENT_BY_ID,
        {
            id:id
        }
    );
    return response;
}


const getEventByUser = async (id: string) => {
    const response = await graphQLClient.request(
        GET_EVENT_BY_USER_QUERY,
        { user_id: id }
    );
    return response;
}

const createEvent = async (data: Event) => {
    const response = await graphQLClient.request(
        CREATE_EVENT_MUTATION(data.user_id), data
    );

    return response;
}

const updateEvent = async (data: Event) => {
    console.log('Updated Event', data)
    const response = await graphQLClient.request(
        UPDATE_EVENT_MUTATION, data
    );

    return response;
}
const joinEvent = async (eventId:string, userId: string) => {
    console.log('Join Event Event ID', eventId)
    console.log('Join Event User ID', userId)
    const response = await graphQLClient.request(
        JOIN_EVENT_MUTATION(eventId, userId), {
            status: 'Pending',
            date_joined: new Date().toString()
        }
    );

    return response;
}

const deleteJoiners = async (joinerId: string) => {

    const response = await graphQLClient.request(
        DELETE_JOINERS_MUTATION,{
            id: joinerId
        }
    );

    return response;
}



const updateJoinerStatus = async (joinerId: string, status: string) => {

    const response = await graphQLClient.request(
        UPDATE_JOINER_STATUS_MUTATION,{
            id: joinerId,
            status
        }
    );

    return response;
}



export { createEvent, updateEvent, getEvents, getEventByUser, getEventById, joinEvent, deleteJoiners, updateJoinerStatus };