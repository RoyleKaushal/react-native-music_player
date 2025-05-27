import HeaderComponent from '@components/HeaderComponent/HeaderComponent';
import COLORS from '@constants/Color';
import Fonts from '@constants/Fonts';
import {Text, View} from 'react-native';

export default function HomeScreen() {
  return (
    <HeaderComponent>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontFamily: Fonts.FONT_BOLD, color: COLORS.BLACK}}>
          HomeScreen
        </Text>
      </View>
    </HeaderComponent>
  );
}
