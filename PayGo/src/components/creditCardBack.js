import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.whiteBelt}></View>
            <View style={styles.subContainer}>
                <View style={styles.certificate}></View>
                <View style={styles.logo}>
                    <FontAwesome5 name="cc-mastercard" size={Dimensions.get('window').width * 0.10} color="#edeaef" />
                </View>
            </View>
            <View style={styles.informations}>
                <Text style={styles.fontFormat}>Validate: 01/28</Text>
                <Text style={[styles.fontFormat, styles.dist]}>Security code: 813</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#cf77ff',
        width: Dimensions.get('window').width * 0.95,
        height: Dimensions.get('window').width * 0.55,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginLeft: 5
    },
    whiteBelt: {
        width: '102%',
        backgroundColor: '#edeaef',
        height: Dimensions.get('window').width * 0.15,
        marginTop: Dimensions.get('window').width * 0.04,
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Dimensions.get('window').width * 0.09,
    },
    certificate: {
        backgroundColor: '#edeaef',
        marginLeft: Dimensions.get('window').width * 0.05,
        width: Dimensions.get('window').width * 0.23,
        height: Dimensions.get('window').width * 0.15,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    logo: {
        paddingLeft: Dimensions.get('window').width * 0.50
    },
    informations: {
        marginTop: Dimensions.get('window').width * 0.04,
        marginLeft: Dimensions.get('window').width * 0.05,
        flexDirection: 'row'
    },
    fontFormat: {
        color: '#edeaef',
        fontSize: 15,
        fontWeight: 'bold'
    },
    dist: {
        paddingLeft: Dimensions.get('window').width * 0.05
    }
})