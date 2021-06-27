import { gql } from "graphql-request";

const GET_ALL_EVENT_QUERY = gql`query allEvents {
    allEvents {
        data {
            _id
            event_name
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

const GET_EVENT_BY_USER_QUERY = gql`query eventByUser($user_id: String) {
    eventByUser(user_id: $user_id) {
      data {
        _id
        event_id
        event_name
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
  }`;


const GET_EVENT_BY_ID = gql`query findEventsByID($id: string) {
  findEventsByID(id: $id) {
      data {
          _id
          event_name
          meetup_location
          destination
          description
          user {
            given_name
            family_name
            email
          }
          joiners {
            data {
              date_joined
              status
              user {
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



export { GET_ALL_EVENT_QUERY, GET_EVENT_BY_ID, GET_EVENT_BY_USER_QUERY };