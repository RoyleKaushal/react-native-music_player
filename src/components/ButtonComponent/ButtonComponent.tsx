import COLORS from '@constants/Color';
import Fonts from '@constants/Fonts';
import {t} from 'i18next';
import LANG from 'language/languageConst';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

export default function Button({
  title = t(LANG.CLICK_ME),
  onPress,
  delay = 1000,
  style,
  textStyle,
}: {
  title?: string;
  onPress?: () => void;
  delay?: number;
  style?: ViewStyle;
  textStyle?: TextStyle;
}) {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      console.warn('No onPress function provided');
    }
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.buttonContainer, style]}>
      <Text style={[styles.buttonTextStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.PRIMARY,
    paddingVertical: 15,
    borderRadius: 30,
    marginHorizontal: 20,
  },
  buttonTextStyle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontFamily: Fonts.FONT_BOLD,
  },
});
