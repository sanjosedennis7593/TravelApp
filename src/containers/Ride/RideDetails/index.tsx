import React from 'react';

import MainView from './components/MainView';

type Props = {
    route: object
}

const RideDetails = (props: Props) => {
    const { route } = props;

    return <MainView data={route.params} />;
}

export default RideDetails;