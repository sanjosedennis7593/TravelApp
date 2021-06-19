

import { gql } from "graphql-request";

const CREATE_USER_INFO_MUTATION = gql`mutation CreateAUserInfo(
    $given_name: String
    $family_name: String
    $email: String!
    $address: String
    $city: String
    $province: String
    $zip_code: String
    $phone_number: String
    
  ) {
    createUserInfo(
      data: {
        given_name: $given_name
        family_name: $family_name
        email: $email
        address: $address
        city: $city
        province: $province
        zip_code: $zip_code
        phone_number: $phone_number
      }
    ) {
        given_name
        family_name
        email
        address
        city
        province
        zip_code
        phone_number
    }
  }
`

const UPDATE_USER_INFO_MUTATION = gql`mutation UpdateAUserInfo(
    $given_name: String
    $family_name: String
    $email: String!
    $address: String
    $city: String
    $province: String
    $zip_code: String
    $phone_number: String
    $user_id: ID!
    
  ) {
    updateUserInfo(
      id: $user_id
      data: {
        given_name: $given_name
        family_name: $family_name
        email: $email
        address: $address
        city: $city
        province: $province
        zip_code: $zip_code
        phone_number: $phone_number
      }
    ) {
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
  }
`


export { CREATE_USER_INFO_MUTATION, UPDATE_USER_INFO_MUTATION };