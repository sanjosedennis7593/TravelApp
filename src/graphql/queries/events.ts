import { gql } from "graphql-request";

const GET_ALL_EVENT_QUERY = gql`query allEvents {
    allEvents {
        data {
            event_name
            meetup_location
            description
            user {
              given_name
              family_name
              email
            }
        }
    }
}
`;

const GET_EVENT_BY_USER_QUERY = gql`query eventByUser($user_id: String) {
    eventByUser(user_id: $user_id) {
      data {
        event_id
        event_name
        meetup_location
        description
        user {
              given_name
              family_name
              email
            }
      }
    }
  }`;


export { GET_ALL_EVENT_QUERY, GET_EVENT_BY_USER_QUERY };