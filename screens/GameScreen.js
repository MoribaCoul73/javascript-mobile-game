import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button, Alert, FlatList} from 'react-native';
import { Ionicons, } from '@expo/vector-icons';

import Title from '../ui/Title';
import NumberContainer from '../game/NumberContainer';
import PrimaryButton from '../ui/PrimaryButton';
import GameOverScreen from './GameOverScreen';
import Colors from '../constants/colors';
import Card from '../ui/Card';
import InstructionText from '../ui/instructionText';
import GuessLogItem from '../game/GuessLogItem';

function generateRandomBetween(min,max,exclude){
    const  rndNum=Math.floor(Math.random() * (max-min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min,max,exclude);
    }
    else {
        return rndNum;
    }
}

let minBoundary =1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1,100,userNumber);
    const [currentGuess, setCurrentGuess]=useState(initialGuess);
    const [guessRounds, setGuessRounds]= useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            screen = <GameScreen userNumber={userNumber}/>;
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

    function nextGuessHandler(direction) {
        if ((direction === 'lower' && currentGuess < userNumber) ||
         (direction === 'greater' && currentGuess > userNumber))
        {
            Alert.alert("Don't lie", 'you know that this is wrong...',[
                {text: 'Sorry', style: 'cancel'},
            ]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess ;
         
        }
        else{
            minBoundary = currentGuess + 1;
            
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [...prevGuessRounds, newRndNumber ]);
    }

    const guessRoundsListLength = guessRounds.length;

    return(
        <View>
            <Title>opponent's Number</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText>Higher or lower</InstructionText>
                <Text style={[styles.instructionText, styles.instructionText2]}>Higher or lower</Text>
                <View style={styles.buttonContainer}>
                   
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons name="md-remove" size={24} color="white" />
                    </PrimaryButton>
                
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                <Ionicons name="md-add" size={24} color="white" />
                    </PrimaryButton>
                
                </View>
            </Card>
            <View style={styles.listContainer}>
                {/* {guessRounds.map(guessRound=> <Text key ={guessRound}>{guessRound}</Text>)} */}
                <FlatList 
                data={guessRounds} 
                renderItem={(itemData) => 
                <GuessLogItem roundNumber={guessRoundsListLength   - itemData.index } 
                guess={itemData.item}  />} 
                key={(item) => item}
                /> 
            </View>
        </View>
        
    )

}
export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
    },
 instructionText: {
        color: Colors.accent500,
        fontSize:24,
    },
    instructionText2:{
        marginBottom: 21,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
       // flex:1,
      },
    test:{
        //flex: 1,
        borderWidth:4,
        borderColor: 'green'
    },
    listContainer:{
        //flex: 1,
        padding: 16,
    },
    
});