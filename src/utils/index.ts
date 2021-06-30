import fromUnixTime  from "date-fns/fromUnixTime";
import getUnixTime from "date-fns/getUnixTime";

const validateEmail = (email: string): boolean => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
};

const convertToUnix = (date:Date) => getUnixTime(date);

const timestampToDate = (timestamp:number) => fromUnixTime(timestamp);

export {
    convertToUnix,
    timestampToDate,
    validateEmail
}