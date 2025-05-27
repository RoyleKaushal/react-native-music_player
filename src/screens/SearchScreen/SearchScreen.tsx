import { View } from "react-native";
import { Text } from "react-native-gesture-handler";

export default function SearchScreen() {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                Search Screen
            </Text>

        </View>
    )
}