import React from 'react';
import { ActivityIndicator, View, Modal } from 'react-native';


// STYLES
import styles from './syle';
import colors from '@app/styles/colors';

type Props = {
    isVisible: boolean
}

const LoadingModal = (props: Props) => {
    const { isVisible } = props;

    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={isVisible}
            onRequestClose={() => { console.log('close modal') }}>
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator
                        color={colors.primary}
                        animating={isVisible} />
                </View>
            </View>
        </Modal>
    );
};

const Loading = (props: Props) => {
    const { isVisible } = props;

    return <ActivityIndicator
        color={colors.primary}
        animating={isVisible} />

}


export {
    Loading,
    LoadingModal
}
