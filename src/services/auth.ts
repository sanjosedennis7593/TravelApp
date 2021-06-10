import { Auth } from 'aws-amplify';

import { Login, Register } from '@app/types/public';


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



export {
    signIn,
    signUp
}