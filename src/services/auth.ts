import { Auth } from 'aws-amplify';

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
        family_name:payload.family_name,
        given_name: payload.given_name,
        phone_number: payload.phone_number,
        address:payload.address,
        'custom:city':payload.city,
        'custom:province':payload.province,
        'custom:zip_code':payload.zip_code
    }
    await Auth.updateUserAttributes(user, userAttributes);

    return  {
        ...user,
        attributes:{
            ...(user.attributes),
            ...userAttributes
        }
    }
}


export {
    signIn,
    signUp,
    updateUser
}