import StatusBarComponent from '@components/StatusBarComponent/StatusbarComponent';
import COLORS from '@constants/Color';
import Fonts from '@constants/Fonts';
import IMAGE from '@constants/Images';
import {t} from 'i18next';
import LANG from 'language/languageConst';
import {Image, StyleSheet, View, Text} from 'react-native';

function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBarComponent darkStyle={false} />
      <Image source={IMAGE.LOGO} style={styles.logo} />
      <Text style={styles.logoText}>{t(LANG.LOGO_NAME)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BLACK,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  logoText: {
    fontFamily: Fonts.FONT_BOLD,
    fontSize: 24,
    color: COLORS.PRIMARY,
    marginTop: 20,
  },
});

export default SplashScreen;
