import { StatusBar } from 'expo-status-bar'; 

import { StyleSheet, View } from 'react-native'; 

import Lista from './components/lista'; 

import Tabela from './components/tabela'; 

import React, { useState } from 'react'; 

 
 

export default function App() { 
  const [idCount, setIdCount] = useState(1); 

  const [dados, setDados] = useState([{ 

      id: '1', 

      nome: 'joao', 

      minhaTarefa: 'matar' 

    } 

  ]); 

 
 

  const adicionarTarefa = (nome, tarefa) => { 

    const novoId = idCount + 1; 

    const novaTarefa = { 

      id: novoId, 

      nome, 

      minhaTarefa: tarefa 

    }; 

    setIdCount(novoId); 

    setDados(prev => [ ...prev, novaTarefa]); 

  }; 

 
 

  const removerTarefa = (id) => { 

    setDados(prev => prev.filter(item => item.id !== id)); 

    const novoId = idCont -1; 

    setIdCount(novoId); 

  }; 

 
 

  return ( 

    <View style={styles.container}> 

      <Lista adicionarTarefa={adicionarTarefa} /> 

      <Tabela dados={dados} removerTarefa={removerTarefa} /> 

      <StatusBar style="auto" /> 

    </View> 

  ); 

} 

 
 

const styles = StyleSheet.create({ 

  container: { 

    flex: 1, 

    backgroundColor: '#fff', 

  }, 

}); 