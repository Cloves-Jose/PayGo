import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { BottomSheet } from 'react-native-btr'



export default props => {
    const [visible, setVisible] = useState(false)

    const toggleBottomNavigationView = () => {
        setVisible(!visible)
    }
    return (
        <View>
            <Button
                onPress={toggleBottomNavigationView}
                //Quando o botão for pressionado o bottom sheet será exibido
                title="Show Bottom Sheet"
            />
            <BottomSheet
                visible={visible}
                //definindo o estado de visibilidade da folha inferior
                onBackButtonPress={toggleBottomNavigationView}
                //alternando o estado de visibilidade ao clicar no botão de retorno
                onBackdropPress={toggleBottomNavigationView}
                //alternando o estado de visibilidade no lado do clique da planilha
            >
            {/* coisas que serão exibidas no bottom sheet */}
                <View style={styles.bottomNavigationView}>
                    <Text>Deu certo</Text>
                </View>
            </BottomSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomNavigationView: {
        backgroundColor: 'red',
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center'
    }
})