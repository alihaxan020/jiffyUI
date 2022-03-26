import * as React from 'react';
import {Text as BaseText, View} from 'react-native';
import {useThemeColors} from '../../../hooks';
import styles from './styles';
import {fontFamily as FontStyle, COLORS} from '../../../constants';
const Text = ({
  children,
  isPrimary,
  isSecondary,
  isWhite,
  isBold,
  isHeadingTitle,
  isCenter,
  isItalic,
  hasMargin,
  style,
  leftIcon,
  isDanger,
  ...rest
}) => {
  const {primary, secondary, text} = useThemeColors();
  let color = text;
  let fontSize = 14;
  let marginTop = 0;
  let textAlign;
  let fontFamily;
  if (isSecondary) {
    color = secondary;
    fontSize = 13;
  }

  if (isHeadingTitle) {
    fontSize = 18;
  }

  if (isPrimary) {
    color = COLORS.primary;
  }

  if (isWhite) {
    color = 'white';
  }

  if (isCenter) {
    textAlign = 'center';
  }
  if (isItalic) {
    fontFamily = FontStyle.fontItalic;
  }

  if (hasMargin) {
    marginTop = 10;
  }
  if (isDanger) {
    color = COLORS.cinnabar;
  }

  const fontWeight = isBold ? 'bold' : 'normal';

  const renderText = () => {
    return (
      <BaseText
        {...rest}
        style={[
          {
            color,
            fontWeight,
            fontSize,
            textAlign,
            marginTop,
            fontFamily,
          },
          style,
        ]}>
        {children}
      </BaseText>
    );
  };

  return leftIcon ? (
    <View style={styles.container}>
      <View
        style={[
          styles.icon,
          {
            marginTop,
          },
        ]}>
        {leftIcon}
      </View>
      {renderText()}
    </View>
  ) : (
    renderText()
  );
};

export default Text;
