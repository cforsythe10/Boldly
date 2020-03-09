import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';
import Images from '../../Images/index';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Styles/BoldlyImageStyles';
import axios from 'axios';

const BoldlyImage = ({imageToGet, size = 'medium'}) => {
    const [imageUri, setImageUri] = useState('');

    const getImage = async image => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/photos/1'); // placeholder, once I get an idea what the BE endpoint looks like I'll modify this
        setImageUri(res.data.thumbnailUrl);
    }

    useEffect(() => {
        getImage();
    });

    return imageUri.length && (
        // <LinearGradient colors={['rgba(0, 0, 0, 0.8)', 'rgba(255, 255, 255, 1)']} style={styles.linearGradient}>
            <Image source={{uri: imageUri}} style={styles[size]} />
        // </LinearGradient>
    );
};

BoldlyImage.propTypes = {
    image: PropTypes.string.isRequired,
    size: PropTypes.string,
}

export default BoldlyImage;