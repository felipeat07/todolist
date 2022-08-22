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
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 20,
        marginTop: 15,
     },
     createStatus: {
      color: '#4EA8DE',
      fontWeight: "bold",
      fontSize: 14
     },
     finishStatus: {
      color: '#8284FA',
      fontWeight: "bold",
      fontSize: 14
     }
})