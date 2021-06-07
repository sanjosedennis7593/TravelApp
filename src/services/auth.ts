import { Auth } from 'aws-amplify';

type Login = {
    username: string,
    password: string
}

const signIn = async (credentials: Login) => {
    const { username, password } = credentials;
    try {
        console.log('User credentials', credentials)
        const user = await Auth.signIn(username, password);
        console.log('User', user)
        return user;
    } catch (error) {
        console.log('error signing in', error);
        return {
            error: true,
            message:'Login Failed'
        }
    }
}


export {
    signIn
}