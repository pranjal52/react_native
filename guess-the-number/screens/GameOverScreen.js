import React, { useEffect } from 'react';
import { StyleSheet, Image, Text, View, Dimensions, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import DefaultStyles from '../constants/Default-styles'
import MainButton from '../components/MainButton'

const GameOverScreen = (props) => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text style={DefaultStyles.titleText}>The Game is Over!</Text>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/success.png')} style={styles.image} resizeMode='cover' />
                </View>
                <View style={styles.textContainer}>
                    <Text style={[DefaultStyles.bodyText, { fontSize: 20 }]}>
                        Your phone needed{' '}
                        <Text style={styles.highlight}>{props.roundsNumber}</Text> guesses to guess the number{' '}
                        <Text style={styles.highlight}>{props.userNumber}</Text>
                    </Text>
                </View>
                <MainButton onPress={props.onRestart} >Start a New Game!</MainButton>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        height: 300
    },
    imageContainer: {
        width: Dimensions.get('window').height * 0.4,
        height: Dimensions.get('window').height * 0.4,
        borderRadius: (Dimensions.get('window').height * 0.7) / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30,
    },

    textContainer: {
        marginHorizontal: 20,
    },

    resultText: {

    },

    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    }

});

export default GameOverScreen;