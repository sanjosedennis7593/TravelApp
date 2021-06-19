import { gql } from "graphql-request";

const GET_USER_BY_EMAIL = gql`query userInfoByEmail($email: String) {
    userInfoByEmail(email: $email) {
        _id
        given_name
        family_name
        email
        address
        city
        province
        zip_code
        phone_number
    }
  }`;


export {
    GET_USER_BY_EMAIL
};