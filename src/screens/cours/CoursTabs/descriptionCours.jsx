
import { View, Text, TextInput, Keyboard, FlatList, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, dummyData, icons } from '../../../constants'
import { IconsButton, IconsLabelButtom } from '../../../components'

const CommentSection = ({commentItem, commentOption, replise}) => {
    return(
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding
          }}
        >
            {/* profile photo */}

            <Image 
              source={commentItem?.novic}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20
              }}
            />
            {/* name & comment */}
            <View
             style={{
                flex: 1,
                marginTop: 3,
                marginLeft: SIZES.radius
             }}
            >
                {/* name */}

                <Text style={{...FONTS.h3}}>
                    {commentItem?.name}
                </Text>

                {/* Comment */}
                <Text style={{...FONTS.body4}}>
                    {commentItem?.comment}
                </Text>

                {/* comment Option */}
                  {commentOption}

            </View>


        </View>
    )
} 

const DescriptionCours = () => {


function renderDiscussion() {
    return(
        <View
          style={{
            flex: 1,

          }}
        >
        <FlatList 
          data={dummyData?.course_details?.discussions}
          keyExtractor={item => `Discussion-main-${item.id}`}
          contentContainerStyle={{
            paddingHorizontal: SIZES.padding,
            paddingBottom: 70
          }}
          renderItem={({item, index}) => (
           <CommentSection  
           
           commentItem={item}
           commentOption={
             <View
               style={{
                flexDirection: 'row',
                marginTop: SIZES.radius,
                paddingVertical: SIZES.base,
                borderTopWidth: 1,
                borderColor: COLORS.gray20
               }}
             >
                {/* comment */}
                <IconsLabelButtom 
                label={item?.no_of_comments}
                  iconStyle={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.black
                  }}
                  labelStyle={{
                    marginLeft: 3,
                    color: COLORS.black,
                    ...FONTS.h4
                  }}
                
                />


                {/* like */}
                <IconsLabelButtom 
                   icon={icons.heart}
                   label={item?.no_of_likes}
                   containerStyle={{
                   marginLeft: SIZES.radius,   
                   }}
                   labelStyle={{
                    marginLeft: 3,
                    color: COLORS.black,
                    ...FONTS.h4
                   }}
                
                />


                {/* Date */}
             <Text
               style={{
                flex: 1,
                textAlign: 'right',
                ...FONTS.h4
               }}
             >
                {item?.posted_on}
                </Text> 

             </View>
           }
           //replise={}
           />
          )}
        
        />

        </View>
    )
}

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white
      }}
    >
        {/* Discussion */}
        {renderDiscussion()}

        {/* footer */}
     
    </View>
  )
}

export default DescriptionCours