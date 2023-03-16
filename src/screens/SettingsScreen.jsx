import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';

// import { connect } from 'react-redux';
// import { toggleTheme } from '../../strores/themeAction';


import {IconsButton, TextButton, LineDivider, ProgressBar, ProfileValue, ProfileRadioButon} from '../components';

import { SIZES, FONTS, COLORS, icons, images } from '../constants';

const SettingsScreen = () => {

// handler 

// function toggleThemeHandler() {
//   if(appTheme.name == "light") {
//     toggleTheme("dark")
//   }else{
//     toggleTheme("light")
//   }
// }

// render


  const [newCoursNotification, setNewCoursNotification] = useState(false);
  const [studyReminder, setStudyReminder] = useState(false);

      function renderHeader() {
        return (
          <View
            style={{
              flexDirection: 'row',
              marginTop: 25,
              paddingHorizontal: SIZES.padding,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                ...FONTS.h1,
              }}>
              profile
            </Text>
            <IconsButton
              icon={icons.sun}
              iconStyle={{
                tintColor: COLORS.black
              }}
              //onPress={() => toggleThemeHandler()}
            />
          </View>
        );
      }
    
      function renderprofileCard() {
        return (
          <View
            style={{
              flexDirection: 'row',
              marginTop: SIZES.padding,
              paddingHorizontal: SIZES.radius,
              paddingVertical: 20,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary3,
            }}>
            {/* profile Image */}
    
            <TouchableOpacity
              style={{
                width: 80,
                height: 80,
              }}>
              <Image
                source={images.novic}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 40,
                  borderWidth: 1,
                  borderColor: COLORS.white,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    marginBottom: -15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 15,
                    backgroundColor: COLORS.primary,
                  }}>
                  <Image
                    source={icons.camera}
                    resizeMode="contain"
                    style={{
                      width: 17,
                      height: 17,
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
            {/* details */}
    
            <View
              style={{
                flex: 1,
                marginLeft: SIZES.radius,
                alignItems: 'flex-start'
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.h2
                }}>
               Par Novic-Djef
              </Text>
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.body4,
                }}>
                Frontend Programmer
              </Text>
              {/* Progress bar */}
    
              <ProgressBar
                progress="68%"
                containerStyle={{
                  marginTop: SIZES.radius,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    flex: 1,
                    color: COLORS.white,
                    ...FONTS.body4,
                  }}>
                  progression
                </Text>
                <Text
                  style={{
                    color: COLORS.white,
                    ...FONTS.body4,
                  }}>
                  68%
                </Text>
              </View>
              <TextButton
                label="+ nouveau menbre"
                contentContainerStyle={{
                  height: 35,
                  marginTop: SIZES.padding,
                  paddingHorizontal: SIZES.radius,
                  borderRadius: 20,
                  backgroundColor:  COLORS.white
                }}
                labelStyle={{
                  color: COLORS.primary,
                }}
              />
            </View>
          </View>
        );
      }

function renderProfileSection() {
  return(
    <View
        style={styles.profileSelectionContainer}   
    >
   <ProfileValue 
     icon={icons.profile}
     label="Nom"
     value="Novic-Djef"
   />
   {/* 1 */}
   <LineDivider />


   <ProfileValue 
     icon={icons.email}
     label="Email"
     value="novicmelataguia@yahoo.com"
   />
{/* 2 */}
<LineDivider />

<ProfileValue 
  icon={icons.password}
  label="Password"
  value="Ultra Sécurisé"
/>

{/* 3 */}
<LineDivider />

<ProfileValue 
  icon={icons.call}
  label="Numero de Telephone"
  value="+(237) 690 089 951"
/>
    </View>
  )
}

function renderProfileSection2() {
  return(
   <View
     style={styles.profileSelectionContainer}
   >
    <ProfileValue 
      icon={icons.star_1}
      value="Pages"
    />

    {/*  1 */}
    <LineDivider />

    <ProfileRadioButon 
      icon={icons.new_icon}
      label="Nouvelle Notification cours"
      isSelected={newCoursNotification}
      onPress={() =>{
        setNewCoursNotification(!newCoursNotification)
      }}    
    />
 
      {/* 2 */}
      <LineDivider />

      <ProfileRadioButon 
        icon={icons.reminder}
        label="appredre Maintenant"
        isSelected={studyReminder}
        onPress={() =>{
          setStudyReminder(!studyReminder)
        }}    
      />
   </View> 
  )
}

      return (
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.white
          }}>
          {/* Header */}
          {renderHeader()}
    
          {/*  */}
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: SIZES.padding,
              paddingBottom: 150,
            }}>
            {/* profile Card */}
    
            {renderprofileCard()}

            {/* profile section 1 */}
             {renderProfileSection()}

          {/* profile section 2 */}
          {renderProfileSection2()}
          </ScrollView>
        </View>
      );
    }

    const styles = StyleSheet.create({
      profileSelectionContainer: {
        marginTop: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        borderWidth: 1,
        borderRadius: SIZES.radius,
        borderColor: COLORS.gray20,
      }
    })
    // function mapStateToProps(state) {
    //   return {
    //     appTheme: state.appTheme,
    //     error: state.error
    //   }
    // }

    // function mapDispatchToProps(dispatch){
    //    return{
    //     toggleTheme: (themeType) => { return dispatch(toggleTheme(themeType))}
    //    }
    // }

export default SettingsScreen
//connect(mapStateToProps, mapDispatchToProps) (SettingsScreen);