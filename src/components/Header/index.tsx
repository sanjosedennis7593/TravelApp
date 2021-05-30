import React from 'react';
import { Text,View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import common from '../../styles/common';
import styles from './style';

type Props =  {
  title?: string
}

const Header = (props: Props) => {
  const { title } = props;

  return (
    <View style={styles.container}>
      <View style={styles.wave}>
        <Svg
          height="100%"
          width="100%"
          viewBox="0 0 1440 320"
          style={styles.svg}
        >
          <Path
            fill={'#7017ff'}
            d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,85.3C1120,96,1280,160,1360,192L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </Svg>
        <View style={styles.titleContainer}>
        <View style={[common.row, styles.row]}>
          <Text h4 style={styles.title}>{title}</Text>
        </View>
      </View>
      </View>
    
    </View>
  );
}

export default Header;