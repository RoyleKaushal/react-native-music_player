import StatusBarComponent from '@components/StatusBarComponent/StatusbarComponent';
import COLORS from '@constants/Color';
import Fonts from '@constants/Fonts';
import IMAGE from '@constants/Images';
import {useNavigation} from '@react-navigation/native';
import {t} from 'i18next';
import LANG from 'language/languageConst';
import {useEffect} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import NavigationKeys from 'routes/NavigationKeys';

function SplashScreen() {
  // Importing necessary components and constants
  const navigation = useNavigation<any>();
  const isFirstLaunch = true;

  // Using useEffect to navigate after a delay
  useEffect(() => {
    setTimeout(() => {
      isFirstLaunch
        ? navigation.replace(NavigationKeys.ONBOARD)
        : navigation.replace(NavigationKeys.APP_STACK);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
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
