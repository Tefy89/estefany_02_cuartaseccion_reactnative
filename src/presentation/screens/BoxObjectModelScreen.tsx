import { StyleSheet, Text, View } from "react-native"


export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            {/*<Text style={styles.title}>HOla</Text>*/}
            <View style={styles.purpleBox}>
                <Text style={{ color: 'white' }}>Hola mundo</Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',

    },
    title: {
        fontSize: 30,
        //el pading es el espacio interno de la caja
        paddingHorizontal: 30, //padding para los lados horizontales de la caja izquierda y derecha
        paddingVertical: 10, //padding para los lados verticales de la caja arriba y abajo
        borderWidth: 10,
    },

    purpleBox: {
        height: 30,
        backgroundColor: 'purple',
        //el margin es el espacio externo de la cajaS
        // margin: 20, margen para los cuatro lados de la caja
        marginHorizontal: 20, //margen para los lados horizontales de la caja izquierda y derecha
        marginVertical: 50, //margen para los lados verticales de la caja arriba y abajo
        padding: 5,

    }
})