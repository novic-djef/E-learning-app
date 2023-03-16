
import React from 'react';

import {View, Image, Text} from 'react-native';

import {FONTS, COLORS, SIZES} from '../constants';

export default function IconLabel({containerStyle, icon, iconStyle, label, labelStyle}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...containerStyle,
      }}>
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.gray30,
          ...iconStyle,
        }}
      />
      <Text
        style={{
            marginLeft: SIZES.base,
            color: COLORS.gray30,
            ...FONTS.body3,
            ...labelStyle,
        }}
      >
        {label}
      </Text>
    </View>
  );
}

