import COLORS from '@constants/Color';
import Fonts from '@constants/Fonts';
import {t} from 'i18next';
import LANG from 'language/languageConst';
import {View, TextInput, StyleSheet, TextStyle, ViewStyle} from 'react-native';

export default function InputBox({
  label,
  style,
  textInputStyle,
  value,
  setValue,
}: {
  label?: string;
  style?: ViewStyle;
  textInputStyle?: TextStyle;
  value?: string;
  setValue?: (text: string) => void;
}) {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={[styles.textInput, textInputStyle]}
        placeholder={label || t(LANG.ENTER_TEXT_HERE)}
        placeholderTextColor={COLORS.WHITE}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#DBE7E8',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 20,
  },
  textInput: {
    paddingHorizontal: 10,
    color: COLORS.WHITE,
    fontFamily: Fonts.FONT_REGULAR,
    fontSize: 18,
    lineHeight: 30,
  },
});
