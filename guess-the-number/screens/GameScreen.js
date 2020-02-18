import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, Dimensions } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import DefaultStyles from '../constants/Default-styles';
import MainButton from '../components/MainButton';
import { Ionicons } from '@expo/vector-icons'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }

    return rndNum;
}

const renderListItem = (value, numOfRound) => {
    return (
        <View key={value} style={styles.listItem}>
            <Text style={DefaultStyles.bodyText}>#{numOfRound}</Text>
            <Text style={DefaultStyles.bodyText}>{value}</Text>
        </View>
    );
}
const GameScreen = (props) => {
    const initialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const currentHigh = useRef(100);
    const currentLow = useRef(1);

    useEffect(() => {
        if (currentGuess == props.userChoice)
            props.onGameOver(pastGuesses.length);
    }, [currentGuess,]);

    const nextGuessHandler = (direction) => {
        if (((direction === "lower") && (currentGuess < props.userChoice)) ||
            ((direction === "greater") && (currentGuess > props.userChoice))) {
            Alert.alert("Do not Lie!", "You know this is wrong...",
                [{ text: "Okay! I will play fair", style: "default" }]);
            return;
        };

        if (direction === "lower") {
            currentHigh.current = currentGuess;

        } else {
            currentLow.current = currentGuess + 1;
        };

        const newNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(newNumber);
        setPastGuesses(curPastGuesses => [newNumber, ...curPastGuesses])

    };
    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.titleText}> Opponent's Guess </Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
                    <Ionicons name='md-remove' size={24} color="white" />
                </MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
                    <Ionicons name='md-add' size={24} color="white" />
                </MainButton>
            </Card>
            <View style={styles.list}>
                <ScrollView>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
        width: 300,
        maxWidth: '80%'
    },
    list: {
        flex: 1,
        width: '80%'
    },
    listItem: {
        flexDirection: 'row',
        borderColor: '#ccc',
        padding: 15,
        marginVertical: 10,
        borderWidth: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    }
});

export default GameScreen;

