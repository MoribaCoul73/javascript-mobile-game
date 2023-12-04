import { Children } from 'react';
import {View,Text,Pressable,StyleSheet,useState} from 'react-native'

import Colors from '../constants/colors' 

function PrimaryButton({children, onPress}){
        
    return (
        <View style={styles.buttonOuterContainer}>
         
        <Pressable
        
        onPress={onPress}
        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressedItem] : styles.buttonInnerContainer }>
       
            <Text style={styles.buttonText}>{children}</Text>
       
        </Pressable>
        
        </View>
)}

const styles= StyleSheet.create({
    buttonOuterContainer: {
        //flex:1,
    
        borderRadius: 28,
        //flexDirection: 'row',
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer:{

        backgroundColor: Colors.primary500,
        paddingLeft:50,
        paddingRight:50,
        paddingVertical: 8,
        paddingHorizontal: 16,
        
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    buttonText: {
        color: 'white',
        textAlign:'center'
    },
    pressedItem:{
        opacity: 0.75
    }

})

export default PrimaryButton;