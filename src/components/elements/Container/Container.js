import * as React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
const Container = ({children, hasPadding, style, ...rest}) => {
  const padding = hasPadding ? 10 : 0;
  const {colors} = useTheme();
  return (
    <View style={[{backgroundColor: 'white', padding}, style]} {...rest}>
      {children}
    </View>
  );
};

export default Container;
