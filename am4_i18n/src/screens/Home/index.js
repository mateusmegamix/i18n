import React from 'react';
import {
  SafeAreaView, 
  View, 
  Text, 
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

import Language from '../Language'

import {useTranslation} from 'react-i18next';
import i18n from '../../locales';

console.disableYellowBox = true;

function Home() {

  //const {t} = useTranslation('home');

  return (

    <SafeAreaView style={styles.safeArea}>
      {/* <Language /> */}
       <View style={styles.container}>
        <Text style={styles.bemVindo}>{('welcome')}</Text>
      <View>
      <View style={styles.linguaContainer}>
        <Text style={styles.linguagem}>Lígua: </Text>
        <Text style={styles.textLingua}>idioma</Text>
      </View>
      </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.buttonContainer}>
          <Text style={styles.textButton}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

}

export default React.memo(Home);
