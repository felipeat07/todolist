import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    taskBox: {
        width: 327,
        height: 64,
        backgroundColor: '#262626',
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: '#808080',
        borderStyle: "solid",
        borderWidth: 0.2,
        marginTop: 10,
        flexDirection: 'row'
    },
    checkbox: {
        borderRadius: 20,
        borderColor: '#4EA8DE',
        marginLeft: 20,
        marginTop: 20
    },
    taskText: {
        color: '#fff',
        alignSelf: "center",
        padding: 15
    },
    taskTextSelected: {
        color: '#808080',
        alignSelf: "center",
        padding: 15,
        textDecorationLine: 'line-through'
    },
    trashButton: {
        alignSelf: "center",
        position: "absolute",
        marginLeft: 265
    },
    trashButtonImage:{
        width: 40,
        height: 40,
    }
})