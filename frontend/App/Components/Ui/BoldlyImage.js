import * as React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import Images from '../../Images/index';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Styles/BoldlyImageStyles';

const BoldlyImage = ({image, size = 'medium'}) => (
    <LinearGradient colors={['#000000', '#FFFFFF']} style={styles.linearGradient}>
        <Image source={Images[image]} style={styles[size]} />
    </LinearGradient>
);

BoldlyImage.propTypes = {
    image: PropTypes.string.isRequired,
    size: PropTypes.string,
}

export default BoldlyImage;