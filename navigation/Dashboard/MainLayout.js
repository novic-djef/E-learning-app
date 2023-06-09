/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, Animated} from 'react-native';

import {Home, Profile, Search} from '../../screens';
import {Shadow} from 'react-native-shadow-2';
import {COLORS, SIZES, FONTS, constants} from '../../constants';

const bottom_tabs = constants.bottom_tabs.map(bottom_tabs => ({
  ...bottom_tabs,
  ref: React.createRef(),
}));

const TabIdicator = ({mesureLayoute, scrollX}) => {
  const inputRange = bottom_tabs.map((_, i) => i * SIZES.width);

  const tabIndicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: mesureLayoute.map(mesure => mesure.width),
  });

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: mesureLayoute.map(mesure => mesure.x),
  });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: 0,
        height: '100%',
        width: tabIndicatorWidth,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.primary,
        transform: [
          {
            translateX,
          },
        ],
      }}
    />
  );
};

const Tabs = ({scrollX, onBottomTabPress}) => {
  const containerRef = React.useRef();
  const [mesureLayoute, setMesureLayoute] = useState([]);

  useEffect(() => {
    let ml = [];
    bottom_tabs.forEach(bottom_tabs => {
      bottom_tabs?.ref?.current.mesureLayoute(
        containerRef.current,
        (x, y, width, height) => {
          ml.push({
            x,
            y,
            width,
            height,
          });

          if (ml.length === bottom_tabs.length) {
            setMesureLayoute(ml);
          }
        },
      );
    });
  }, [containerRef.current]);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      {/* Tab indicator */}
      {bottom_tabs.length > 0 && (
        <TabIdicator mesureLayoute={mesureLayoute} scrollX={scrollX} />
      )}
      {/* Tabs */}
      {bottom_tabs.map((item, index) => {
        <TouchableOpacity
          key={`BottomTab-${index}`}
          ref={item.ref}
          style={{
            flex: 1,
            paddingHorizontal: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => onBottomTabPress(index)}>
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
            }}
          />
          <Text
            style={{
              marginTop: 3,
              color: COLORS.white,
              ...FONTS.h3,
            }}>
            {item.label}
          </Text>
        </TouchableOpacity>;
      })}
    </View>
  );
};

const MainLayout = () => {
  const flatListRef = React.useRef();

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const onBottomTabPress = React.useCallback(onBottomTabIndex => {
    flatListRef?.current?.scrollToOffset({
      offset: onBottomTabIndex * SIZES.width,
    });
  });

  function renderContent() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Animated.FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={item => `Main-${item.id}`}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          renderItem={({item, index}) => {
            <View
              style={{
                height: SIZES.height,
                width: SIZES.width,
              }}>
              {item.label === constants.screens.home && <Home />}
              {item.label === constants.screens.search && <Search />}
              {item.label === constants.screens.profile && <Profile />}
            </View>;
          }}
        />
      </View>
    );
  }
  function renderBottomTab() {
    return (
      <View
        style={{
          marginBottom: 20,
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.radius,
        }}>
        <Shadow style={[SIZES.width - SIZES.padding * 2, 85]}>
          <View
            style={{
              flex: 1,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary3,
            }}>
            <Tabs scrollX={scrollX} onBottomTabPress={onBottomTabPress} />
          </View>
        </Shadow>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {/* content */}
      {renderContent()}
      {/* bottom_tabs */}
      {renderBottomTab()}
    </View>
  );
};

export default MainLayout;
