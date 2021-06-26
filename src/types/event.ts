interface Event {
    event_name: string,
    description: string,
    destination: string,
    meetup_location: string,
    max_joiners: string,
    event_date: Date,
    user_id?: string,
    _id?: string
    //end_date: Date
};

interface Joiners {
    _id?: string,
    status?: string,
    date_joined?: string,
    event?: object,
    user?: object
}

export { Event, Joiners }