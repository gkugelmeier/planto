import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import React, { useState } from 'react';

import logo from '../assets/logo.png';
import api from '../services/api';

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginRespose, setLoginResponse] = useState('');
    
    async function dashboard() {

        const response = await api.get('/login',{
            headers: { email,  password}
        })

        let { status } = response.data;

        if (status == 200) {
            navigation.navigate('Dashboard');
        }  
        else if (status == 4011){
            console.log("Senha Inválida");
        }
        else if (status == 4012) {
            console.log("E-mail Inválido");
        }
        else {
            console.log("Erro Inesperado");
        }
    }

    return (
        <View style = { styles.container }>
            <View style = { styles.logo }>
                <Image source = { logo } />
            </View>
            <View style = { styles.form }>
                <TextInput
                    style = { styles.input }
                    placeholder = "E-mail"
                    placeholderTextColor = "#00c200"
                    keyboardType = "email-address"
                    autoCapitalize = "none"
                    autoCorrect = { false }
                    value = { email }
                    onChangeText = { setEmail }
                />
                <TextInput
                    style = { styles.input }
                    placeholder = "Senha"
                    placeholderTextColor = "#00c200"
                    autoCapitalize = "none"
                    autoCorrect = { false }
                    value = { password }
                    onChangeText = { setPassword }
                />
                <TouchableOpacity onPress = { dashboard } style = { styles.button } >
                    <Text style = { styles.labelButton } >Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 15,
        margin: 40,
        backgroundColor: '#e5fae5',
        borderRadius: 30,
        marginLeft: 25,
        marginRight: 25
    },

    logo: {
        marginTop: 40,
        marginVertical:20
    },

    form: {
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
    },

    input: {
        marginTop: 15,
        borderWidth: 0,
        paddingHorizontal: 20,
        fontSize: 16,
        height: 38,
        borderRadius: 30,
        backgroundColor: "#fff",
        marginLeft: 35,
        marginRight: 35
    },

    button: {
        marginTop: 15,
        height: 42,
        backgroundColor: '#00c200',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35
    },

    labelButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
})

