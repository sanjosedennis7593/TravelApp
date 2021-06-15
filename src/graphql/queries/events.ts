import { gql } from "graphql-request";

const GET_ALL_EVENT_QUERY = gql`query allEvents {
    allEvents {
        data {
            event_name
            meetup_location
            description
        }
    }
}
`;


export { GET_ALL_EVENT_QUERY };