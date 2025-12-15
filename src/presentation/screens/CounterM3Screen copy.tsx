import { useState } from "react"
import { View, Text } from "react-native"
import { globalStyles } from "../theme/global.style"
import { FAB } from "react-native-paper"
//import { PrimaryButton } from "../components/shared/PrimaryButton"



export const CounterM3Screens = () => {

    const [count, setCount] = useState(10)

    return (
        <View style={globalStyles.centerContainer}>
            <Text style={globalStyles.title}>{count}</Text>

            <FAB
                icon="plus"
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
                style={globalStyles.fab}
            />

        </View>
    )
}

