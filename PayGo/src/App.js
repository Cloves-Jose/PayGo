import React from 'react'
import { StyleSheet ,SafeAreaView } from 'react-native'

import Home from './screens/Home'

export default props => {
    return(
        <SafeAreaView style={styles.container}>
            <Home/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})
