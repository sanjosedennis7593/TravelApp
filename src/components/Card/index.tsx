import React from 'react'
import { View } from 'react-native'
import { Card as RNElementsCard, Divider, Text } from 'react-native-elements'
import styles from './style'


type Props = {
    renderCardActions: () => void | undefined,
    children: React.ReactNode,
    headerTitle: string | undefined,
    containerStyle: any,
    headerTitleStyle: any,
    bodyStyle: any,
    cardActionsStyle: any,

}

const Card = (props: Props) => {

    const {
        renderCardActions,
        containerStyle,
        headerTitleStyle,
        headerTitle,
        bodyStyle,
        children,
        cardActionsStyle
    } = props

    const renderAction = () => {
        if (renderCardActions !== undefined) {
            return renderCardActions()
        }
        return null
    }
    return (
        <RNElementsCard
            containerStyle={{
                ...styles.cardContainer,
                ...containerStyle
            }}
        >
            { headerTitle && <>
                <Text
                    h4
                    style={{
                        ...headerTitleStyle
                    }}
                >
                    {headerTitle}
                </Text>
                <Divider />

            </>}
            <View
                style={{
                    ...styles.cardContent,
                    ...bodyStyle
                }}
            >
                {children}
            </View>
            <View
                style={{
                    ...cardActionsStyle
                }}
            >
                {renderAction()}
            </View>
        </RNElementsCard>
    )
}

export default Card