import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "flex-end"
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: "right",
        marginBottom: 10
    },
    smallResult: {
        color: 'rgba(255,255,255, .5)',
        fontSize: 30,
        textAlign: "right",
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,

    },

    button: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    btLightGray: {
        backgroundColor: '#2D2D2D',
    },
    btOrange: {
        backgroundColor: '#FF9427',
    },
    textButton: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    }
});