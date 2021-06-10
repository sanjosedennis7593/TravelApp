type Login = {
    username: string,
    password: string
}
type Register = {
    email: string, 
    password: string,
    repeat_password?: string,
    given_name: string, 
    family_name: string, 
    phone_number:string,
    address?: string,
    city?: string,
    province?: string,
    zip_code?: string
}

export {
    Login,
    Register
}