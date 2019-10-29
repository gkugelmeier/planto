import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import imageacesso from '../assets/imageacesso.png';
import logo from '../assets/logo.png';

export default function Access({ navigation }) {

    function login() {
        navigation.navigate('Login');
    }

    function newUser() {
        navigation.navigate('NewUser');
    }

    return(
        <View style = { styles.container }>
            <Text style = { styles.label }>Bem vindo ao</Text>
            <Image source = { logo } />
            <View style = { styles.imageacesso }>
                <Image source = { imageacesso } />
            </View>
            <Text style = { styles.labelDescription }>Olá! Eu sou o plantô!</Text>
            <Text style = { styles.labelDescription2 }>
                Fui desenvolvido pelos estudantes da UNOCHAPECÓ, para te ajudar a
                cuidar das plantas de sua casa além de disponibilizar conteúdos
                semanais sobre vida saudável e estética.
            </Text>
            <TouchableOpacity onPress = { login } style = { styles.button } >
                <Text style = { styles.labelButton } >Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = { newUser } style = { styles.buttonNew }>
                <Text>É novo por aqui? <Text style = { styles.labelButtonNew } >Cadastre-se</Text></Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 5
    },

    label: {
        fontWeight: 'bold',
        fontSize: 28,
        fontStyle: 'normal',
        color: '#00c200',
        marginVertical:10
    },

    imageacesso: {
        marginTop: 40,
        marginVertical:20
    },

    labelDescription: {
        fontSize: 17,
        marginLeft: 15

    },

    labelDescription2: {
        fontSize: 12,
        marginLeft: 35,
        marginRight: 35
    },

    button: {
        marginTop: 30,
        height: 42,
        backgroundColor: '#00c200',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        alignSelf: 'stretch',
        marginLeft: 35,
        marginRight: 35
    },

    labelButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },

    buttonNew: {
        marginTop: 30,
        height: 42,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        alignSelf: 'stretch',
        marginLeft: 35,
        marginRight: 35
    },

    labelButtonNew: {
        color: '#00c200',
        fontWeight: 'bold',
        fontSize: 16
    },
});