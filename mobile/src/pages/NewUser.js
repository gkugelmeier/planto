import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, AsyncStorage, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';

import logo from '../assets/logo.png';
import api from '../services/api';

export default function NewUser({ navigation }) {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function createUser() {

        
        const data = {
            "name": name,
            "phone": phone,
            "address": address,
            "email": email, 
            "password": password
        };

        const response = await api.post('/createUser',  data)
        
        console.log(response.data);

        navigation.navigate('Dashboard');

    }

    return (
        <KeyboardAvoidingView enabled = { Platform.OS == 'ios'} behavior = "padding" style = { styles.container }>
             <View style = { styles.imageacesso }>
                <Image source = { logo } />
            </View>
            <View style = { styles.form }>
                <TextInput
                    style = { styles.input }
                    placeholder = "Nome Completo"
                    placeholderTextColor = "#00c200"
                    autoCorrect = { false }
                    value = { name }
                    onChangeText = { setName }
                />
                <TextInput
                    style = { styles.input } 
                    placeholder = "Contato"
                    placeholderTextColor = "#00c200"
                    autoCapitalize = "none"
                    autoCorrect = { false }
                    value = { phone }
                    onChangeText = { setPhone }
                />
                <TextInput
                    style = { styles.input } 
                    placeholder = "Endereço"
                    placeholderTextColor = "#00c200"
                    autoCorrect = { false }
                    value = { address }
                    onChangeText = { setAddress }
                />
                <TextInput
                    style = { styles.input } 
                    placeholder = "E-mail"
                    placeholderTextColor = "#00c200"
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
                <TouchableOpacity onPress = { createUser } style = { styles.button } >
                    <Text style = { styles.labelButton } >Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50,
        margin: 40,
        backgroundColor: '#e5fae5',
        borderRadius: 30,
        marginLeft: 25,
        marginRight: 25
    },

    imageacesso: {
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