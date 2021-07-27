import { Platform, NativeModules } from 'react-native';
import i18n from 'react-i18next'
import en from './en_US'; // importa o objeto de traduções para o idioma inglês
import pt from './pt_BR'; // importa o objeto de traduções para o idioma português
// Função que irá nos auxiliar a normalizar as traduções que serão recebidas pela função getLanguageByDevice
// Isso é necessário pois no android e no iOS o retorno do mesmo idioma pode ser diferente
// Exemplo: no iOS podemos receber pt_US e no android pt_BR para o idioma português Brasil.
const normalizeTranslate = {
  'en_US': 'en_US',
  'pt_BR': 'pt_BR',
  'en': 'en_US',
  'pt_US': 'pt_BR',
}