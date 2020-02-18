import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import DefaultStyles from '../constants/Default-styles'
import MainButton from '../components/MainButton'
const StartGameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selecteNumber, setSelectedNumber] = useState();

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false)
    }

    const confirmHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if ((isNaN(chosenNumber)) || (chosenNumber <= 0) || (chosenNumber > 99)) {
            Alert.alert("Invalid Number!", "Number has to be between 1 and 99", 
            [{text: 'Okay', style: 'default', onPress: resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = 
        <Card style={styles.summaryContainer}>
            <Text>You selected: </Text>
            <NumberContainer>{selecteNumber}</NumberContainer>
            <MainButton onPress={() => {props.startHandler(selecteNumber)}}>START GAME</MainButton>
        </Card>
    }


    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game!</Text>
            <Card style={{
                width: 300,
                maxWidth: '80%',
                alignItems: 'center'
            }}>
                <Text style={DefaultStyles.bodyText}>Select a number</Text>
                <Input style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false}
                    keyboardType='numeric' maxLength={2} onChangeText={numberInputHandler}
                    value={enteredValue}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset " color={Colors.accent} 
                    onPress={() => {resetInputHandler()}} /></View>
                    <View style={styles.button} ><Button title="Confirm" color={Colors.primary} 
                    onPress={() => {confirmHandler()}} /></View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'

    },

    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },

    button: {
        width: Dimensions.get('window').width / 4,
    },

    input: {
        width: 50,
        textAlign: 'center'
    },

    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;

