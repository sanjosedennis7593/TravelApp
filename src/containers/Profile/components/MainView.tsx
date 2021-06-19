import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';

import Container from '@app/components/Container';
import Header from '@app/components/Header';
import Input from '@app/components/Input';

import common from '@app/styles/common';
import styles from '../style';

// REDUX
import { setCurrentUser } from '@app/redux/user/action';

// TYPES
import { UserDetails } from '@app/types/public';

// SERVICES
import { updateUser, createUpdateUserInfo } from '@app/services/auth';

type Props = {
    handleLogout: () => void
}

const MainView = (props: Props) => {
    const dispatch = useDispatch();
    const { handleLogout, user } = props;

    const [isLoading, setIsLoading] = useState(false);
    console.log('MainViewuserr',user)
    const [userDetails, setUserDetails] = useState<UserDetails>({
        user_id:'',
        email: '',
        given_name: '',
        family_name: '',
        phone_number: '',
        address: '',
        city: '',
        province: '',
        zip_code: ''
    });

    useEffect(() => {
        if (user && user.attributes) {
            setUserDetails({
                ...userDetails,
                user_id: user.user_id,
                email: user.attributes.email,
                phone_number: user.attributes.phone_number,
                given_name: user.attributes.given_name,
                family_name: user.attributes.family_name,
                address: user.attributes.address,
                city: user.attributes['custom:city'],
                province: user.attributes['custom:province'],
                zip_code: user.attributes['custom:zip_code']
            })
        }
    }, [user]);

    const handleOnChange = (type: string) => (value: string): void => {
        setUserDetails({
            ...userDetails,
            [type]: value
        })
    }
    const handleUpdate = async () => {
        try {
            setIsLoading(true);
            const cognitoUserResponse = await updateUser(userDetails);
            if(cognitoUserResponse) {
                const userInfoResponse = await createUpdateUserInfo({
                    email: userDetails.email,
                    given_name: userDetails.given_name,
                    family_name: userDetails.family_name,
                    phone_number: userDetails.phone_number,
                    address: userDetails.address,
                    city: userDetails.city,
                    province: userDetails.province,
                    zip_code: userDetails.zip_code,
                    user_id: userDetails.user_id
                },'edit');
                if(userInfoResponse?.updateUserInfo) {
                    const userPayload = {
                        ...cognitoUserResponse,
                        user_id:userInfoResponse?.updateUserInfo?._id
                    }
                    dispatch(setCurrentUser(userPayload));
                    setIsLoading(false);
                }
   
            }
         
        } catch (e) {
            console.log('Handle Response Error', e);
            setIsLoading(false);
        }

    }

    return <Container style={styles.container}>
        <Header />
        <ScrollView style={common.container} contentContainerStyle={styles.scrollView}>
            <Input
                label="Firstname"
                placeholder="First Name"
                onChangeText={handleOnChange('given_name')}
                value={userDetails.given_name}
            />
            <Input
                label="Lastname"
                placeholder="Last Name"
                onChangeText={handleOnChange('family_name')}
                value={userDetails.family_name}
            />

            <Input
                label="Address"
                placeholder="House no, Street name"
                onChangeText={handleOnChange('address')}
                value={userDetails.address}

            />
            <Input
                label="City"
                placeholder="City Name"
                onChangeText={handleOnChange('city')}
                value={userDetails.city}
            />
            <Input
                label="Province/State"
                placeholder="Province/State"
                onChangeText={handleOnChange('province')}
                value={userDetails.province}
            />
            <Input
                label="Zip Code"
                placeholder="Zip Code"
                keyboardType="numeric"
                maxLength={5}
                onChangeText={handleOnChange('zip_code')}
                value={userDetails.zip_code}
            />
            <Input
                label="Phone #"
                placeholder="(000) 000-0000"
                keyboardType="numeric"
                maxLength={14}
                onChangeText={handleOnChange('phone_number')}
                value={userDetails.phone_number}
            />
            <Button
                disabled={isLoading}
                title={`${isLoading ? 'Updating...' : 'Update'}`}
                buttonStyle={common.roundedButton}
                containerStyle={common.fullWidthButton}
                onPress={() => {
                    handleUpdate();
                }}
            />


            <Button
                disabled={isLoading}
                title="Logout"
                buttonStyle={common.roundedButton}
                containerStyle={styles.logOutButton}
                onPress={() => {
                    handleLogout();
                }}
            />



        </ScrollView  >
    </Container>
}

export default MainView;