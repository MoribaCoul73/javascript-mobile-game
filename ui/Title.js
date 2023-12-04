import { Children } from 'react';
import { Text,StyleSheet,View} from 'react-native';

import PrimaryButton from './PrimaryButton';
import colors from '../constants/colors'


function Title({ children }){
    return(
        <View>
        <Text style={Styles.title}>{ children }</Text>
        </View>
    )
    
}
export default Title;

const Styles=StyleSheet.create({
    title:{
        fontFamily: 'open-sans-bold',
        fontSize:24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding:12,
        margin:30,


    }
})
