import { Text } from "react-native";
import Fonts from "./src/constants/Fonts";

export default function App() {
  return(
    <Text style={{fontFamily: Fonts.FONT_BOLD, color: '#000000', fontSize: 20}}>Music Player</Text>
  )
}
