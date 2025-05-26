import COLORS from '@constants/Color';
import IMAGE from '@constants/Images';
import {useNavigation} from '@react-navigation/native';
import {Image, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function HeaderComponent({color, children}: {color?: string, children?: React.ReactNode}) {
  const insets = useSafeAreaInsets().top;
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: color || COLORS.SECONDARY}}>
      <View style={{flex:1, marginTop: insets + 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{padding: 10, marginLeft: 10}}>
            <Image source={IMAGE.BACK_ICON} style={{height: 20, width: 30}} />
          </TouchableOpacity>
        </View>
        {children}
      </View>
    </View>
  );
}
