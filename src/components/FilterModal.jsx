import { View, Text, Image, TouchableOpacity, ScrollView, Animated  } from 'react-native'
import React from 'react'

import { TextBotton, LineDivider } from '../components'

import { COLORS, FONTS, SIZES, icons, constants } from '../constants'
const FilterModal = () => {

  return (
  <Animated.View
    style={{
      position: "absolute",
      bottom: 0,
      height: SIZES.height,
      width: COLORS.width
    }}
  >
  {/* bacground */}
  <Animated.View
   style={{
    flex: 1,
    height: SIZES.height,
    width: COLORS.width,
    backgroundColor: COLORS.transparentBlack7
  }}
  >



  {/* content container */}
  <Animated.View
   style={{
    position: "absolute",
    bottom: 0,
    height: SIZES.height * 0.9,
    width: COLORS.width,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: COLORS.white
   }}
  >

  </Animated.View>
  </Animated.View>
</Animated.View>
  )
}

export default FilterModal