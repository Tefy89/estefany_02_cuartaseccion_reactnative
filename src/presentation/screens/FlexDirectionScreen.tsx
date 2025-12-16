import { StyleSheet, View } from "react-native"


export const FlexDirectionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
            <View style={[styles.box, styles.box4]} />
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
            <View style={[styles.box, styles.box4]} />
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
            <View style={[styles.box, styles.box4]} />
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
            <View style={[styles.box, styles.box4]} />
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
            <View style={[styles.box, styles.box4]} />
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
            <View style={[styles.box, styles.box4]} />
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
            <View style={[styles.box, styles.box4]} />
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
            <View style={[styles.box, styles.box4]} />
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
            <View style={[styles.box, styles.box4]} />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B5B4B9FF',
        //usamos flexDirection para cambiar la direccion del eje principal
        justifyContent: 'space-around',
        alignItems: 'stretch',
        flexDirection: 'column',
        //usamos flexWrap para que los elementos puedan hacer wrap cuando no quepan en una sola linea
        flexWrap: 'wrap',
        //usamos row-reverse para invertir el orden de los elementos
    },
    box: {
        width: 100,
        height: 100,
    },
    box1: {
        backgroundColor: '#5856D6',


    },
    box2: {
        backgroundColor: '#4240a2',
        //usamos alignSelf para sobreescribir el alignItems del contenedor

    },
    box3: {
        backgroundColor: '#2e2d71',
    },
    box4: {
        backgroundColor: '#252458FF',
    }


})