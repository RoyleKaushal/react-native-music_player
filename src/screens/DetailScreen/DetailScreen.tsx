import Button from '@components/ButtonComponent/ButtonComponent';
import HeaderComponent from '@components/HeaderComponent/HeaderComponent';
import InputBox from '@components/TextInputComponent/InputBox';
import COLORS from '@constants/Color';
import { t } from 'i18next';
import LANG from 'language/languageConst';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function DetailScreen() {
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

  return (
    <HeaderComponent>
      <View style={styles.container}>
        <InputBox
          label={t(LANG.USER_NAME)}
          value={userData.userName}
          setValue={onChangeUserName}
        />
        <InputBox value={userData.name} label={t(LANG.NAME)} setValue={onChangeName} />
      </View>
      <Button title={t(LANG.SUBMIT)} style={{bottom: 40}} />
    </HeaderComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});
