import { Auth } from 'aws-amplify';

import { graphQLClient } from '@app/graphql/index';

import { CREATE_USER_INFO_MUTATION, UPDATE_USER_INFO_MUTATION } from '@app/graphql/mutations/users';
import { GET_USER_BY_EMAIL } from '@app/graphql/queries/users';

import { Login, Register, UserDetails } from '@app/types/public';


const signIn = async (credentials: Login) => {
    const { username, password } = credentials;
    console.log('User credentials', credentials)
    const user = await Auth.signIn(username, password);
    console.log('User', user)
    return user;
}

const signUp = async (payload: Register) => {
    const { email, password, phone_number, given_name, family_name } = payload;
    const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
            email,
            phone_number,
            given_name,
            family_name
        }
    });
    return user;
}

const updateUser = async (payload: UserDetails) => {
    let user = await Auth.currentAuthenticatedUser();
    const userAttributes = {
        family_name: payload.family_name,
        given_name: payload.given_name,
        phone_number: payload.phone_number,
        address: payload.address,
        'custom:city': payload.city,
        'custom:province': payload.province,
        'custom:zip_code': payload.zip_code
    }
    await Auth.updateUserAttributes(user, userAttributes);

    return {
        ...user,
        attributes: {
            ...(user.attributes),
            ...userAttributes
        }
    }
}

const createUpdateUserInfo = async (data: UserDetails, actionType: string) => {
    const response = await graphQLClient.request(
        actionType === 'create' ? CREATE_USER_INFO_MUTATION : UPDATE_USER_INFO_MUTATION, data
    );

    return response;
}

const getUserByEmail = async (email: string) => {
    const response = await graphQLClient.request(
        GET_USER_BY_EMAIL,
        { email: email }
    );
    return response;
}


export {
    signIn,
    signUp,
    updateUser,
    createUpdateUserInfo,
    getUserByEmail
}