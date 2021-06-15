

import { gql } from "graphql-request";

const CREATE_EVENT_MUTATION = gql`mutation CreateAEvents(
    $event_name: String!
    $event_date: String
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


export { CREATE_EVENT_MUTATION };