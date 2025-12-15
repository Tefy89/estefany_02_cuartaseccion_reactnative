
import { View, Text, StyleSheet } from "react-native";
//Los props son las propiedades que se le pueden pasar a un componente
interface Props {
    name?: string;
}

export const HelloWorldScreen = ({ name = 'World' }: Props) => {
    return (
        <View style={styles.container}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>Hello, {name}!</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        color: 'black',
        padding: 20,
    }
})