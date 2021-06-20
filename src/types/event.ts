interface Event {
    event_name: string,
    description: string,
    destination: string,
    meetup_location: string,
    max_joiners: string,
    event_date: Date,
    user_id?: string
    //end_date: Date
}

export { Event }