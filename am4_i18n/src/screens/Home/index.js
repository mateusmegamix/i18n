import React, {Component, useCallback} from 'react';
import {
  SafeAreaView, 
  View, 
  Text, 
  TouchableOpacity,
  Picker
} from 'react-native';
import styles from './styles';

import Language from '../Language'

import {useTranslation} from 'react-i18next';
import i18n from '../../locales';

import { NavigationActions } from "react-navigation";



console.disableYellowBox = true;

class Home extends Component {

constructor(props) {
  super(props);
  this.handleBack = this.handleBack.bind(this);
}

handleBack() {
  const navAction = NavigationActions.close();
    
  this.props.navigation.dispatch(navAction);
  return true;
}


  //const {t} = useTranslation('home');

state = {idioma: ''}
updateIdioma = (idioma) => {
  this.setState({ idioma: idioma })
}

render () {

  return (

    <SafeAreaView style={styles.safeArea}>
      {/* <Language /> */}
      <View style={styles.pickerContainer}>
      <Picker style={styles.picker} selectedValue = {this.state.idioma} onValueChange = {this.updateIdioma}>
          <Picker.Item style={{color: '#ccc'}} label = "Selecione o Idioma"/>
          <Picker.Item label = "Português" value = "Português" />
          <Picker.Item label = "Inglês" value = "Inglês"/>
          <Picker.Item label = "Espanhol" value = "Espanhol" />
      </Picker>
      </View>
       <View style={styles.container}>

        {
          this.state.idioma === 'Espanhol' ?
          ( <Text style={styles.bemVindo}>Hola Mundo!</Text> )

         : 
          this.state.idioma === 'Inglês' ?
          <Text style={styles.bemVindo}>Hello World!</Text>
          
          ||
          this.state.idioma === 'Português' :

         <Text style={styles.bemVindo}>Olá Mundo!</Text>

        }

      <View>
      <View style={styles.linguaContainer}>
        <Text style={styles.linguagem}>Língua: </Text>
        <Text style={styles.textLingua}>{this.state.idioma}</Text>
      </View>
      </View>
        <TouchableOpacity onPress={this.handleBack} activeOpacity={0.7} style={styles.buttonContainer}>
          <Text style={styles.textButton}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

}}

export default Home;
