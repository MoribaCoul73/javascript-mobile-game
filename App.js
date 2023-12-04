import { StyleSheet, ImageBackground ,SafeAreaView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';
//import LinearGradient from 'react-native-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";    //correct way

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Color from './constants/colors'
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  
  const [userNumber,SetUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const[guessRounds, setGuessRounds] = useState(0);

 const [fontsLoaded] = useFonts({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    //'open-sans': require('./assets/fonts/OpenSans-Regular.tff'),
  });

  if (!fontsLoaded){
    return <AppLoading/>;
  }

  function pickNumberHandler(pickedNumber) {
    SetUserNumber(pickedNumber);
    setGameIsOver(false);
    }
  function GameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  function StartNewGameHandler(){
    SetUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen
  onPickNumber={pickNumberHandler}/>;

  if (userNumber) {
     screen = <GameScreen userNumber={userNumber} onGameOver={GameOverHandler} />;
  }

  if (gameIsOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={StartNewGameHandler}/>
  }

  
  return( 
  <LinearGradient colors={[ Color.primary700 , Color.accent500 ]} style={styles.rootScreen}>
    <ImageBackground 
    source={require('./images.jpeg')}
    resizeMode='cover'
    style={styles.rootScreen}
    imageStyle={styles.backgroundImage}
    >
      <SafeAreaView style={styles.rootScreen}>
      {screen}
  </SafeAreaView>
  </ImageBackground>
  </LinearGradient>

)}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  title: {
   // flex:2,
    margin: 50,
    borderWidth: 1,
    padding:50,
    
    marginTop: 26,

  },
  input:{
    //flex:2,
    margin: 50,
    borderWidth: 1,
    padding:20,
  },
  backgroundImage:{
    opacity: 0.15,
  }
});
