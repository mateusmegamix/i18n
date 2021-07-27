import {NativeModules, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import pt_br from './translations/pt_BR.json';
import en_us from './translations/en_US.json';

const resources = {
  ['pt-BR']: pt_br,
  ['en-US']: en_us,
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async callback => {
    // Primeiro vamos checar se ja salvamos o
    // idioma do usuario, caso contrario vamos
    // detectar utilizando o NativeModules do RN
    const storedLanguage = await AsyncStorage.getItem('language');
    if (storedLanguage) {
      return callback(storedLanguage);
    }

    let phoneLanguage = null;
    if (Platform.OS === 'android') {
      phoneLanguage = NativeModules.I18Manager.localeIdentifier;
    } else {
      phoneLanguage = NativeModules.SettingsManager.settings.AppleLocale;
    }

    phoneLanguage = phoneLanguage.replace('_', '-');

    return callback(phoneLanguage);
  },
  init: () => {},
  cacheUserLanguage: language => {
    // Essa função sera chamada assim que o callback
    // da função 'detect' for executado. Aqui podemos
    // salvar o idioma do usuario no AsyncStorage para
    // persistirmos sua escolha nas próximas execuçōes do app
    AsyncStorage.setItem('language', language);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en-US',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
