import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.chip}></View>
                <View style={styles.wing}>
                    <AntDesign name="wifi" size={Dimensions.get('window').width * 0.09} color="#edeaef" />
                </View>
            </View>
            <View style={styles.containerBottom}>
                <View>
                    <Text style={styles.numberCard}>3482 8384 8283 4833</Text>
                </View>
                <View style={styles.cardFlag}>
                    <FontAwesome5 name="cc-mastercard" size={Dimensions.get('window').width * 0.10} color="#edeaef" />
                </View>
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
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: Dimensions.get('window').width * 0.05,
        marginRight: Dimensions.get('window').width * 0.05,
        marginTop: Dimensions.get('window').width * 0.05,
    },
    chip: {
        backgroundColor: '#edeaef',
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.10,
        borderRadius: 10
    },
    wing: {
        paddingLeft: Dimensions.get('window').width * 0.60
    },
    containerBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: Dimensions.get('window').width * 0.05,
        marginTop: Dimensions.get('window').width * 0.25,
    },
    numberCard: {
        color: '#edeaef',
        fontSize: Dimensions.get('window').width * 0.05,
        fontWeight: 'bold'
    },
    cardFlag: {
        paddingLeft: Dimensions.get('window').width * 0.20
    }
})