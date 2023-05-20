import { View, Text, Image, ScrollView, ImageBackground } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

import {IconsButton, TextButton, VerticalCourses, LineDivider, CategoriesCard, HorizontalCourses, Search } from '../components';
import { COLORS, FONTS, icons, SIZES, images, dummyData } from '../constants';


function HomeScreen() {

  const navigation = useNavigation();

    const Section = ({containerStyle, title, onPress, children}) => {
        return (
          <View
            style={{
              ...containerStyle,
            }}
          >
            <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: SIZES.padding,
            }}>
      
       <Text
         style={{
          flex: 1,
          ...FONTS.h2,
         }}
       >
        {title}
       </Text>
       <TextButton
        contentContainerStyle={{
          width: 80,
          borderRadius: 30,
          backgroundColor: COLORS.primary,
        }}
        label="tout voir"
        onPress={onPress}
       />
      
            </View>
          {children}
          </View>
        );
      };

    function renderHeader(){
      return (
        <View
        style={{
         flexDirection: 'row',
         marginTop: 25,
         paddingHorizontal: SIZES.padding,
         alignItems:'center',
  
        }}
         >
          {/* greeting */}
          <View
          style={{
            flex: 1,
  
          }}>
         <Text style={{...FONTS.h2}}>Hello Novic</Text>
         <Text style={{ color: COLORS.gray50, ...FONTS.body3}}>Dim, 19 mars 2023</Text>
          </View>
  
          {/* notifications */}
          <IconsButton
            icon={icons.notification}
            iconStyle={{
              tintColor: COLORS.black,
            }} containerStyle={undefined} onPress={undefined}
             />
          </View>
      );
    }
     function renderStartLearning(){
      return (
        <ImageBackground
        source={images.featured_bg_image}
          style={{
             alignItems: 'flex-start',
             marginTop: SIZES.padding,
             marginHorizontal: SIZES.padding,
             padding: 10,
          }}
          imageStyle={{
            borderRadius: SIZES.radius,
  
          }}
        >
          {/* informations */}
          <View
          style={{
  
          }}>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body2,
                textTransform: 'uppercase',
              }}>Formation Complete</Text>
            <Text
             style={{
              color: COLORS.white,
              ...FONTS.h2,
             }}
            >
              JavaScript, TypeScript disponible en video et PDF</Text>
            <Text
              style={{
               marginTop: SIZES.radius,
               color: COLORS.white,
               ...FONTS.body4,
              }}>14h30 De cours</Text>
           </View>
  
          {/* Image */}
          <Image
              source={images.start_learning}
              style={{
                width: '100%',
                height: 110,
                marginTop: SIZES.padding,
              }} />
  
  
  
          {/* button */}
          <TextButton
                label="commencer maintenant"
                contentContainerStyle={{
                  height: 33,
                  width: 190,
                 borderRadius: 20,
                  backgroundColor: COLORS.white,
                }}
                disabled={undefined}
                onPress={undefined}
                labelStyle={{
                  color: COLORS.black,
                }}
        />
  
        </ImageBackground>
      );
     }
  
     function renderCourses() {
      return (
        <FlatList
        horizontal
        data={dummyData.courses_list_1}
        listKey="Courses"
        keyExtractor={item => `Courses-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
        marginTop: SIZES.padding,
        margin: 22,
        }}
        renderItem={({item, index}) => (
          <VerticalCourses
             containerStyle={{
                marginLeft: index === 0 ? SIZES.
                padding : SIZES.radius,
               marginRight: index === dummyData.
               courses_list_1.length - 1 ?
             SIZES.padding : 0,
             }}
          course={item}
             />
        )}
        />
      );
     }
  
  function renderCategories() {
    return (
      <Section
      title="Categories"
      >
        <FlatList
          horizontal
          data={dummyData.categories}
          listKey="Categiries"
          keyExtractor={item => `Categories-${item.id}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: SIZES.radius,
          }}
          renderItem={({item, index}) => (
             <CategoriesCard
                category={item}
                containerStyle={{
                  marginLeft: index === 0 ? SIZES.
                  padding : SIZES.base,
                  marginRight: index  === dummyData.
                  categories.length - 1 ? SIZES.
                  padding : 0,
                }}
                onPress={() => navigation.navigate
                  ("listeCours", { category: item, sharedElementPrefix: "Cours"})}
             />
          )}
        />
      </Section>
    );
  }
  
  function renderPopularCours() {
    return (
      <Section
       title="cours populaire"
       containerStyle={{
        marginTop: 30,
       }}
       >
        <FlatList
         data={dummyData.courses_list_2}
         listKey="Cours Populaire"
         scrollEnabled={false}
         keyExtractor={item => `cours populaire-${item.id}`}
         showsHorizontalScrollIndicator={false}
         contentContainerStyle={{
           marginTop: SIZES.radius,
           paddingHorizontal: SIZES.padding,
         }}
         renderItem={({item, index}) => (
      <HorizontalCourses
            course={item}
            containerStyle={{
              marginVertical: SIZES.padding,
              marginTop: index === 0 ? SIZES.
              radius : SIZES.padding,
            }}
      />
         )}
         // eslint-disable-next-line react/no-unstable-nested-components
         ItemSeparatorComponent={() => (
           <LineDivider
           listKey={{
            backgroundColor: COLORS.gray20,
           }}
           />
         )}
        />
        </Section>
    );
  }
  
    return (
  
      <>
      <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
      >
        {/* header */}
        {renderHeader()}
  
        {/* content */}
        <ScrollView
              contentContainerStyle={{
                paddingBottom: 150,
              }}
              showsVerticalScrollIndicator={false}
  
        >
        {/* banner */}
        {renderStartLearning()}
  
        {/* Courses */}
        {renderCourses()}
  
        < LineDivider
           lineStyle={{
              marginVertical: SIZES.padding,
        }}
        />
  
        {/* categoris */}
  
        {renderCategories()}
  
  
          {/* cours populaire */}
  
          {renderPopularCours()}
        </ScrollView>
      </View>
  
  
        </>
    );
  }

export default HomeScreen