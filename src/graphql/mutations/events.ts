

import { gql } from "graphql-request";

const CREATE_EVENT_MUTATION = (userId: string) => {
    return gql`mutation CreateAEvents(
        $event_name: String!
        $event_date: Long
        $description: String
        $destination: String
        $meetup_location: String
        $max_joiners: Int
        $user_id: String
    ) {
        createEvents(data: {
            event_name: $event_name,
            event_date: $event_date,
            description: $description,
            destination: $destination
            meetup_location: $meetup_location,
            max_joiners: $max_joiners
            user_id: $user_id
            user: {connect: ${userId}}
        }) {
         event_name
         event_date
         description
         destination
         meetup_location
         max_joiners
         user_id
        }
     }
    `
}



const JOIN_EVENT_MUTATION = (eventId: string, userId: String) => {
    return gql`mutation CreateAJoiners(
        $status: String
        $date_joined: String
    ) {
        createJoiners(data: {
            status: $status,
            date_joined: $date_joined,
            event: {connect: ${eventId}},
            user: {connect: ${userId}}
        }) {
            event {
                _id
                event_name
                event_date
                meetup_location
                destination
                description
                user {
                    _id
                    given_name
                    family_name
                    email
                }
                joiners {
                    data {
                        _id
                        date_joined
                        status
                        user {
                            _id
                            given_name
                            family_name
                            email
                        }
                    }
                }
           }
        }
     }
    `
}

const UPDATE_JOINER_STATUS_MUTATION = gql`mutation UpdateAJoiners(
        $id: ID!
        $status: String
    ) {
        updateJoiners(
            id:$id
            data: {
                status: $status
            }
        ) {
           event {
            _id
            event_name
            event_date
            meetup_location
            destination
            description
            user {
                _id
                given_name
                family_name
                email
            }
            joiners {
                data {
                    _id
                    date_joined
                    status
                    user {
                        _id
                        given_name
                        family_name
                        email
                    }
                }
            }
           }
        }
     }
    `;

const DELETE_JOINERS_MUTATION = gql`mutation DeleteJoiners(
    $id: ID!
) {
    deleteJoiners(id: $id) {
        event {
                _id
                event_name
                event_date
                meetup_location
                destination
                description
                user {
                    _id
                    given_name
                    family_name
                    email
                }
                joiners {
                    data {
                        _id
                        date_joined
                        status
                        user {
                            _id
                            given_name
                            family_name
                            email
                        }
                    }
                }
           }
    }
 }
`





export { CREATE_EVENT_MUTATION, JOIN_EVENT_MUTATION, DELETE_JOINERS_MUTATION, UPDATE_JOINER_STATUS_MUTATION };