import { graphQLClient } from '@app/graphql/index';


import { GET_ALL_EVENT_QUERY } from '@app/graphql/queries/events';
import { CREATE_EVENT_MUTATION } from '@app/graphql/mutations/events';

type Event = {
    event_name: string,
    destination: string,
    meetup_location: string,
    max_joiners: string,
    start_date: Date,

}

const getEvents = async () => {
    const response = await graphQLClient.request(
        GET_ALL_EVENT_QUERY
    );
    return response;
}

const createUpdateEvent = async (data: Event) => {
    const response = await graphQLClient.request(
        CREATE_EVENT_MUTATION, data
    );

    return response;
}

export { createUpdateEvent, getEvents };