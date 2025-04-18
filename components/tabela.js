import React from "react"; 

import { StyleSheet, View, Text, FlatList, Button, Pressable } from "react-native"; 

 
 

const Tabela = ({ dados, removerTarefa }) => { 

 
 

    const renderItem = ({ item }) => ( 

        <View style={styles.row}> 

            <Text style={styles.cell}>{item.id}</Text> 

            <Text style={styles.cell}>{item.nome}</Text> 

            <Text style={styles.cell}>{item.minhaTarefa}</Text> 

            <Pressable onPress={() => removerTarefa(item.id)}> 

            <Text style={styles.btnRemover}>REMOVER</Text> 

            </Pressable> 

             

        </View> 

    ); 

 
 

    return ( 

        <View style={styles.container}> 

            <View style={styles.header}> 
                
                <Text style={styles.headerText}>ID</Text> 

                <Text style={styles.headerText}>Nome</Text> 

                <Text style={styles.headerText}>Tarefa</Text> 

                <Text style={styles.headerText}>Ação</Text> 

            </View> 

            <FlatList 

                data={dados} 

                renderItem={renderItem} 

                keyExtractor={item => item.id} 

            /> 

        </View> 

    ); 

}; 

 
 

const styles = StyleSheet.create({ 

    container: { 

        flex: 1, 

        backgroundColor: '#f5f5f5', 

        padding: 18, 

    }, 

    header: { 
        
        flexDirection: 'row', 

        backgroundColor: '#4CAF50', 

        padding: 12, 

        borderRadius: 8, 

        marginBottom: 8, 

    }, 

    headerText: { 

        fontSize: 18, 

        flex: 1, 

        color: 'white', 

        fontWeight: 'bold', 

        textAlign: 'center',


    }, 

    row: { 
      
        flexDirection: 'row', 

        backgroundColor: 'white', 

        padding: 12, 

        borderRadius: 8, 

        marginBottom: 8, 

        alignItems: 'center', 
        
        elevation: 2, 

    }, 

    cell: { 

        fontSize: 16, 

        flex: 1, 

        textAlign: 'center', 

        color: "#333", 

    },    
    btnRemover: {
        backgroundColor:"black",
        color:"lime",
        borderRadius:10,
        padding: 8,
    },

}); 

 
 

export default Tabela; 