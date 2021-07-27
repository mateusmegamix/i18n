import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeArea:{
    },
    item: {
        height: 45,
        flex: 1,
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
        flex: 1,
        justifyContent: 'center',
      },
      selected: {
        backgroundColor: 'lightgreen',
        height: 30,
        width: 30,
        borderRadius: 15,
      },
})

export default styles; 