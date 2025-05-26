import Button from '@components/ButtonComponent/ButtonComponent';
import COLORS from '@constants/Color';
import Fonts from '@constants/Fonts';
import IMAGE from '@constants/Images';
import { useNavigation } from '@react-navigation/native';
import {t} from 'i18next';
import i18n from 'language';
import LANG from 'language/languageConst';
import {Image, StyleSheet, Text, View} from 'react-native';
import NavigationKeys from 'routes/NavigationKeys';

export default function OnBoardScreen() {

    const navigation = useNavigation<any>();

    const handleGetStarted = () => {
        navigation.navigate(NavigationKeys.DETAIL_SCREEN)
    }
    
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={IMAGE.ON_BOARD_GIRL}
        resizeMode="contain"
      />
      <View style={styles.blackContainer}>
        <Text style={styles.text}>
            {t(LANG.ON_BOARDING_TEXT, { name: t(LANG.LOGO_NAME) })}
        </Text>
        <Button onPress={handleGetStarted} style={styles.buttonStyle} title={t(LANG.GET_STARTED)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.TERTIARY,
  },
  image: {
    height: '50%',
    width: '100%',
    marginTop: '20%',
  },
  blackContainer: {
    backgroundColor: COLORS.SECONDARY,
    height: '50%',
    width: '100%',
    top: -50,
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    justifyContent: 'space-between'
  },
  text: {
    fontFamily: Fonts.FONT_BOLD,
    color: COLORS.OLIVE_GREEN,
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 40,
    marginTop: 60,
    marginHorizontal: 20,
  },
  buttonStyle: {
    bottom: 70,
  }
});
