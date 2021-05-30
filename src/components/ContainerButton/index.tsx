  
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import styles from './style';

type Props = {
    title: string,
    onPress: (e: GestureResponderEvent) => void
}

const ContainerButton = (props: Props) => {
  const { title, onPress } = props;

	return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text h4 style={styles.title}>{title}</Text>
    </TouchableOpacity>
	);
}

export default ContainerButton;