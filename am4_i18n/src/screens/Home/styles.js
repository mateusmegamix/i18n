import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
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
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bemVindo: {
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