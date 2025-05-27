import { View } from "react-native";
import { Text } from "react-native-gesture-handler";

export default function ExploreScreen() {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                Explore Screen
            </Text>

        </View>
    )
}