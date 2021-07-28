import React, {useMemo, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

import {useTranslation} from 'react-i18next';

function Language() {
  const {t, i18n} = useTranslation('language');

  const languages = useMemo(() => {
      return [    {name: t('portuguese'), id: 'pt-BR'},
        {name: t('english'), id: 'en-US'},
      ];
   }, [i18n.language]);

  const onPressLanguage = useCallback(language => {
    i18n.changeLanguage(language);
  }, []);

  const renderItem = ({item}) => {
    const isSelected = item.id === i18n.language;
    return (
      <View style={styles.item}>
        <View style={styles.nameContainer}>
          <TouchableOpacity onPress={() => onPressLanguage(item.id)}>
            <Text style={styles.languageName}>{item.name}</Text>
          </TouchableOpacity>
        </View>
        {isSelected ? <View style={styles.selected} /> : null}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text>Texto</Text>
       {<FlatList
        style={styles.list}
        data={languages}
        key={(item, index) => String(index)}
        renderItem={renderItem}
      />}
      <Text>{('language')}</Text>
    </SafeAreaView>
  );
}

export default React.memo(Language);
