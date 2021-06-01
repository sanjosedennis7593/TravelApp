import React from 'react'
import { Overlay } from 'react-native-elements'

const Modal = (props) => {
    const { isVisible, windowBackgroundColor, overlayBackgroundColor, borderRadius, onBackdropPress, children } = props
    return (
        <Overlay
            isVisible={isVisible}
            windowBackgroundColor={(windowBackgroundColor !== undefined) ? windowBackgroundColor : 'rgba(0, 0, 0, .5)'}
            overlayBackgroundColor={(overlayBackgroundColor !== undefined) ? overlayBackgroundColor : 'white'}
            borderRadius={(borderRadius !== undefined) ? borderRadius : 15}
            onBackdropPress={() => { onBackdropPress() }}
        >
            {children}
        </Overlay>
    )
}

export default Modal;