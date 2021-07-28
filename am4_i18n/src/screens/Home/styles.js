import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
//======================================
    item: {
        height: 50,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    languageName: {
        fontSize: 16,
    },
    list: {
        marginTop: 20,
    },
    nameContainer: {
        justifyContent: 'center',
    },
    selected: {
        backgroundColor: '#000090',
        height: 30,
        width: 30,
        borderRadius: 15,
    },

//=======================================

    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    pickerContainer: {
        borderWidth: Platform.OS === 'ios' ? 0 : 1,
        //borderColor: Platform.OS === 'ios' ? "" : "blue",
        borderRadius: Platform.OS === 'ios' ? 0 : 5,
      },
      picker: {
        marginVertical: Platform.OS === 'ios' ? 0 : 10, 
        height: Platform.OS === 'ios' ? 30 : 30, 
        width: Platform.OS === 'ios' ? 250 : 200
      },
    bemVindo: {
        marginTop: 250,
        fontSize: 28,
        fontWeight: 'bold',
    },
    buttonContainer: {
        backgroundColor: "#000",
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    textButton: {
        color: "#FFF",
        fontWeight: 'bold',
        fontSize: 20,
    },
    linguaContainer: {
        flexDirection: 'row',
        padding: 64
    },
    linguagem: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "red"
    },
    textLingua: {
        fontSize: 18,
        fontWeight: 'bold',
        
    },
})

export default styles;