import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
// import {icons} from '../assets/import/icons';


import {  images, } from '../constants';

export default function Acceuil({ navigation }) {
    return (
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text>Home Screen</Text>
      //   <Button
      //     title="Go to Details"
      //     onPress={() => navigation.navigate('AuthentificationScreen')}
      //   />
      // </View>
   
    
    <View style={{flex: 1}}>
      <Text style={styles.Bienvenue}> Bienvenu chez Novic School</Text>
      <Icon style={styles.avatar} name="school-outline" />
  
        {/* <Image
          source={images.s}
          style={{
            width: 155,
            height: 155,
            position: "relative",
            marginLeft: "30",
            margin: 8,
            //tintColor: COLORS.gray40,
          }}
  
        /> */}
      <Text style={styles.texte}> Sur notre plate forme vous avez tous les outils necessaire pour apprendre des technomogies du future</Text>
        <View style={styles.container}>
        {/* <ImageBackground
        source={images.bg_1}
          style={{
             alignItems: 'flex-start',
             marginTop: SIZES.padding,
             marginHorizontal: SIZES.padding,
             padding: 10,
          }}
          imageStyle={{
            borderRadius: SIZES.radius,
  
          }}
        > */}
         <TouchableOpacity style={[styles.part, styles.topLeft]} activeOpacity={0.6} onPress={() => navigation.navigate("Home")}>
      
          <Text style={styles.titre}>Algorithme</Text>
          <Icon style={styles.icons} name="reader-outline" />
        </TouchableOpacity>
        {/* </ImageBackground> */}
        
       
        <TouchableOpacity style={[styles.part, styles.topRight]} activeOpacity={0.6} >
        <Text style={styles.titre}>Complexité</Text>
        <Icon style={styles.icons} name="laptop-outline" />
        </TouchableOpacity>
       
       
        <TouchableOpacity style={[styles.part, styles.bottomLeft]} activeOpacity={0.6} > 
        <Text style={styles.titre}>infographie</Text>
        <Icon style={styles.icons} name="book-outline" />
        </TouchableOpacity>
       
       
        <TouchableOpacity style={[styles.part, styles.bottomRight]} activeOpacity={0.6}>
        <Text style={styles.titre}>Programmation</Text> 
        <Icon style={styles.icons} name="code-slash-outline" />
        </TouchableOpacity>
       
       
  
        <TouchableOpacity style={[styles.part, styles.bottomLeft]} activeOpacity={0.6}> 
        <Text style={styles.titre}>Montage Video</Text>
        <Icon style={styles.icons} name="receipt-outline" />
        </TouchableOpacity>
       
       
        <TouchableOpacity style={[styles.part, styles.bottomRight]} activeOpacity={0.6} >
        <Text style={styles.titre}>Maintenance</Text> 
        <Icon style={styles.icons} name="document-outline" />
        </TouchableOpacity>
       
      </View>
      </View> 
      );
      }
    const styles = StyleSheet.create({
      Bienvenue: {
        margin: 8,
        display: "flex",
        textAlign: "center",
        fontSize: 23,
        fontWeight: 800,
        color: "#000"   
      },
      texte: {
        fontSize: 15,
        backgroundColor: "#eee",
        textAlign: "center",
        fontWeight: 500,
        marginLeft: 6,
        marginRight:6,
        
      },
      container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "center",
        marginTop: 30
   
      },
      part: {
        width: '45%',
        height: '25%',
        margin: 4,
        backgroundColor: '#aaa',
        borderRadius: 12,
        
      },
      topLeft: {
       
        // Ajouter du style spécifique pour la partie en haut à gauche si besoin
      },
      topRight: {
       
        // Ajouter du style spécifique pour la partie en haut à droite si besoin
      },
      bottomLeft: {
        
        // Ajouter du style spécifique pour la partie en bas à gauche si besoin
      },
      bottomRight: {
        // Ajouter du style spécifique pour la partie en bas à droite si besoin
      },
      titre: {
        margin: 8,
        fontSize: 18,
        fontWeight: 700,
        color: 'white',
      },
      icons:{
        fontSize: 65,
        position: "absolute",
        marginLeft: "35%",
        margin: 35,
        color: "#000"
  
      },
      avatar: {
        fontSize: 105,
        position: "relative",
        marginLeft: "37%",
        margin: 8,
      }
    });
  