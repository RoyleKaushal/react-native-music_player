enum Fonts {
    FONT_REGULAR = 'FunnelSans-Regular',
    FONT_BOLD = 'FunnelSans-Bold',
    FONT_BOLD_ITALIC = 'FunnelSans-BoldItalic',
    FONT_ITALIC = 'FunnelSans-Italic',
    FONT_LIGHT = 'FunnelSans-Light',
    FONT_LIGHT_ITALIC = 'FunnelSans-LightItalic',
    FONT_MEDIUM = 'FunnelSans-Medium',
    FONT_MEDIUM_ITALIC = 'FunnelSans-MediumItalic',
    FONT_SEMIBOLD = 'FunnelSans-SemiBold',
    FONT_SEMIBOLD_ITALIC = 'FunnelSans-SemiBoldItalic',
}

export default Fonts;
// This enum defines the font names used in the application.
// Each font name corresponds to a specific font file that should be included in the project.
// The font files should be placed in the appropriate directory (e.g., assets/fonts) and linked correctly in the project configuration.
// The font names can be used throughout the application to apply consistent typography styles.
// For example, you can use these font names in styles for Text components:
// import { StyleSheet, Text } from 'react-native';
// import Fonts from './constants/Fonts';
//
// const styles = StyleSheet.create({
//   text: {
//     fontFamily: Fonts.FONT_BOLD,
//     fontSize: 16,
//     color: '#000',
//   },
// });