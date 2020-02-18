import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Colors from '../constants/Colors';

const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        padding: 10,
        borderColor: Colors.accent,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: Colors.accent,
        fontSize: 22
    }
});

export default NumberContainer;