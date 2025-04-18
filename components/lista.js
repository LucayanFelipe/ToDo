import React, { useState } from "react";

import { View, TextInput, Button, StyleSheet, Text } from "react-native";




const Lista = ({ adicionarTarefa }) => {
    const [nome, setNome] = useState('');
    const [tarefa, setTarefa] = useState('');




    const handleAdd = () => {

        if (nome && tarefa) {

            adicionarTarefa(nome, tarefa);

            setNome('');

            setTarefa('');

        }

    };




    return (

        <View style={styles.container}>

            <TextInput

                style={styles.input}

                placeholder="Nome"

                value={nome}

                onChangeText={setNome}

            />

            <TextInput

                style={styles.input}

                placeholder="Tarefa"

                value={tarefa}

                onChangeText={setTarefa}

            />

            <Button title="Adicionar Tarefa" onPress={handleAdd} color="#4CAF50" />

        </View>

    );

};




const styles = StyleSheet.create({

    container: {

        padding: 16,

    },

    input: {

        height: 40,

        borderColor: '#ccc',

        borderWidth: 1,

        marginBottom: 8,

        paddingHorizontal: 8,

        borderRadius: 5,

    },

});




export default Lista;


