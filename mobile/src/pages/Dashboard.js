import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

import logo from '../assets/logo.png';

export default function Dashboard({ navigation }) {

    async function NewPlant() {
        navigation.navigate('NewPlant');
    }

    return (
        <View style = { styles.container }>
            <View style = { styles.logo }>
                <Image source = { logo } />
            </View>
            <TouchableOpacity onPress = { NewPlant } style = { styles.buttonHowToPlant }>
                <Text style = { styles.labelButtonHowToPlant } >+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = { NewPlant }>
                <Text style = { styles.labelText } >Adicionar Plantinha</Text>
            </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    logo: {
        marginTop: 50
    },

    circle: {
        flex: 1,
        marginTop: 100,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#fff',
      },
      myButton:{
        padding: 5,
        height: 180,
        width: 180,  
        borderRadius:400,    
        backgroundColor:'#F0E68C',
    
      },

      buttonHowToPlant: {
        marginTop: 100,
        padding: 5,
        height: 180,
        width: 180,  
        borderRadius:400, 
        backgroundColor: '#F0E68C',
        justifyContent: 'center',
        alignItems: 'center',
    },

    labelButtonHowToPlant: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 80
    },

    labelText: {
        marginTop: 40,
        fontSize: 20,
        color: '#F0E68C'
    }
});