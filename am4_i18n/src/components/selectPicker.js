import RNPickerSelect from 'react-native-picker-select';
import {useState} from 'react';
import {Picker} from 'react-native'

const [selectLanguage, setSelectLanguage] = useState('C');
const [languages] = useState(
    [
        'Português',
        'Inglês',
        'Espanhol'
    ]. sort()
);

<Picker 
    style={{marginVertical: 10}}
    selectedValue={selectLanguage}
    onValueChange={(itemVal) => {
        setSelectLanguage(itemVal);
    }}
>{
    languages.map((l) => (
        <Picker.Item label={l} value={l} />
    ))
}
</Picker>

// const selectIdioma = () => {
//     return (
//         <RNPickerSelect
//             onValueChange={(value) => console.log(value)}
//             items={[
//                 { label: 'Português', value: 'portugues' },
//                 { label: 'Inglês', value: 'ingles' },
//                 { label: 'Espanhol', value: 'espanhol' },
//             ]}
//         />
//     );
// };

export default selectIdioma;