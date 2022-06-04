import React from 'react'
import { StyleSheet, View } from 'react-native'
import PagerView from 'react-native-pager-view'

import CreditCardFront from '../components/creditCardFront'
import CreditCardBack from '../components/creditCardBack'
import BottomSheet from '../components/bottomSheet'


export default props => {
    return (
        <View>
            <PagerView initialPage={0}>
                <View >
                    <CreditCardFront/>
                </View>
                <CreditCardBack/>
            </PagerView>
            <BottomSheet/>
        </View>
    )
}