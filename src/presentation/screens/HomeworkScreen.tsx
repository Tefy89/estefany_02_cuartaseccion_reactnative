import { StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"


export const HomeworkScreen = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.blox, styles.purpleBox]} />
            <View style={[styles.blox, styles.orangeBox]} />
            <View style={[styles.blox, styles.blueBox]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
        //configuracion de la tarea
    },
    blox: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        position: 'absolute',
        right: 0,
        top: 0,

    },
    orangeBox: {
        backgroundColor: '#F0A23B',

    },
    blueBox: {
        backgroundColor: '#28C4D9',
        position: 'absolute',
        bottom: 0,
        left: 0
    },
})

