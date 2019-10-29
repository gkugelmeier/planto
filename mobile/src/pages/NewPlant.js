import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';

import logo from '../assets/logo.png';
import api from '../services/api';

export default function NewUser({ navigation }) {

    async function createPlant() {
        navigation.navigate('Dashboard');
    }

    async function howToPlant() {
        navigation.navigate('HowToPlant');
    }

    return (
            <KeyboardAvoidingView enabled = { Platform.OS == 'ios'} behavior = "padding" style = { styles.form }>
                <Text style = { styles.labelText }>Nova Plantinha</Text>
                <View>
                    <Text style = { styles.labelTextInformations }>Nome</Text>
                    <TextInput
                        style = { styles.input }
                        placeholder = "Nome Da Planta"
                        autoCorrect = { false }
                    />
                    <Text style = { styles.labelTextInformations }>Espécie</Text>
                    <TextInput
                        style = { styles.input }
                        placeholder = "Espécie Da Planta"
                        autoCorrect = { false }
                    />
                    <Text style = { styles.labelTextInformations }>Data do plântio</Text>
                    <TextInput
                        style = { styles.input }
                        placeholder = "DD/MM/YYYY"
                        autoCorrect = { false }
                    />
                    <Text style = { styles.labelTextInformations }>Status</Text>
                    <TextInput
                        style = { styles.input }
                        placeholder = "Ex: Semente ou Muda"
                        autoCorrect = { false }
                    />
                </View>
                <TouchableOpacity onPress = { createPlant } style = { styles.button } >
                    <Text style = { styles.labelButton } >Concluir</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = { howToPlant } style = { styles.buttonHowToPlant }>
                    <Text style = { styles.labelButtonHowToPlant } >Me ensine a plantar</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({

    form: {
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
    },

    labelText: {
        marginTop: 15,
        fontSize: 25,
        marginLeft: 40,
        marginRight: 40
    },

    labelTextInformations: {
        marginTop: 30,
        fontSize: 16,
        marginLeft: 45,
        marginRight: 45
    },

    input: {
        marginTop: 5,
        borderWidth: 0,
        paddingHorizontal: 20,
        fontSize: 16,
        height: 38,
        borderRadius: 30,
        backgroundColor: "#e5fae5",
        marginLeft: 40,
        marginRight: 40
    },

    button: {
        marginTop: 60,
        height: 42,
        backgroundColor: '#00c200',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 80,
        marginRight: 80
    },

    labelButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },

    buttonHowToPlant: {
        marginTop: 10,
        height: 42,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        alignSelf: 'stretch',
        marginLeft: 40,
        marginRight: 40
    },

    labelButtonHowToPlant: {
        color: '#00c200',
        fontWeight: 'bold',
        fontSize: 16
    },
})