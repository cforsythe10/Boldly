import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../../Themes'
import React, { Component } from 'react'
import styles from './Styles/IconButtonStyles'
import PropTypes from 'prop-types'


 class SurveyGradient extends Component {

    render() {

        return(
            <LinearGradient
          colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}}
            >
                </LinearGradient>
        )
    }

}


const WrappedApp = () => (
    <Wrapper>
        <App/>
    </Wrapper>
)

export default () => <Wrap></Wrap>