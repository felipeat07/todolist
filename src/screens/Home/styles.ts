import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
      },
      form: {
        flexDirection: "row",
        width: 327,
        alignSelf: 'center',
        marginTop: -28,
      },
      input: {
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        fontSize: 16,
        marginRight: 10
      },
      buttonText: {
        color: '#fff',
        fontSize: 24
      },
      button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: "center",
        justifyContent: "center"
      },
      status: {
        flexDirection: "row",
        padding: 20,
        marginTop: 15,
     },
     createStatus: {
      color: '#4EA8DE',
      fontWeight: "bold",
      fontSize: 14,
     },
     finishStatus: {
      color: '#8284FA',
      fontWeight: "bold",
      fontSize: 14,
      marginLeft: 175 
     },
     hrline: {
      borderBottomColor: '#333333',
      borderBottomWidth: 1.5,
      marginTop: 10,
      width: 360,
      alignSelf: "center"
  },
    statuscount: {
      backgroundColor: '#262626',
      borderRadius: 8,
      width: 25,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 8
    },
    textcount:{
      color: '#fff',
      fontWeight: "bold",
      fontSize: 12
    },
    listEmptyTextUpper: {
      color: '#333333',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20
  },
  listEmptyTextDown: {
    color: '#333333',
    fontSize: 14,
    textAlign: 'center',
},
  listEmptyImg: {
    alignSelf: "center",
    marginTop: 50
  }
})