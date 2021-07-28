import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
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
        backgroundColor: '#0000FF',
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
        borderColor: Platform.OS === 'ios' ? "#FFFFFF" : "#0000FF",
        borderRadius: Platform.OS === 'ios' ? 0 : 5,
      },
      picker: {
        color: "#282828",
        marginVertical: Platform.OS === 'ios' ? 0 : 10, 
        height: Platform.OS === 'ios' ? 30 : 30, 
        width: Platform.OS === 'ios' ? 250 : 200
      },
    bemVindo: {
        marginTop: Platform.OS === 'ios' ? 250 : 200,
        fontSize: 28,
        fontWeight: 'bold',
    },
    buttonContainer: {
        backgroundColor: "#000000",
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    textButton: {
        color: "#FFFFFF",
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