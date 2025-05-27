import Button from '@components/ButtonComponent/ButtonComponent';
import HeaderComponent from '@components/HeaderComponent/HeaderComponent';
import InputBox from '@components/TextInputComponent/InputBox';
import COLORS from '@constants/Color';
import IMAGE from '@constants/Images';
import { useNavigation } from '@react-navigation/native';
import {t} from 'i18next';
import LANG from 'language/languageConst';
import {useState} from 'react';
import {Image} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import NavigationKeys from 'routes/NavigationKeys';

export default function DetailScreen() {

  const navigation = useNavigation<any>();
  const [userData, setUserData] = useState({
    userName: '',
    name: '',
  });

  const onChangeUserName = (data: string) => {
    setUserData(prevData => ({
      ...prevData,
      userName: data,
    }));
  };
  const onChangeName = (data: string) => {
    setUserData(prevData => ({
      ...prevData,
      name: data,
    }));
  };
  const onSubmit = () => {
    navigation.navigate(NavigationKeys.APP_STACK);
  };

  return (
    <HeaderComponent>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustKeyboardInsets={true}>
        <View style={styles.container}>
          <Image source={IMAGE.LOGO} style={styles.imageStyle} />
          <InputBox
            label={t(LANG.USER_NAME)}
            value={userData.userName}
            setValue={onChangeUserName}
          />
          <InputBox
            value={userData.name}
            label={t(LANG.NAME)}
            setValue={onChangeName}
          />
        </View>
      </KeyboardAwareScrollView>
      <Button title={t(LANG.SUBMIT)} style={styles.buttonStyle} onPress={onSubmit} />
    </HeaderComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  buttonStyle: {
    bottom: 20,
  },
  imageStyle: {
    height: responsiveHeight(20),
    width: responsiveWidth(40),
    alignSelf: 'center',
  },
});
