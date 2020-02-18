import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import { useDispatch } from 'react-redux';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch trackColor={{ true: Colors.primaryColor }} thumbColor={Colors.primaryColor} value={props.state} onValueChange={props.onChange} />
        </View>
    );
};

const FiltersScreen = (props) => {



    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch label="Gluten Free" state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)} />
            <FilterSwitch label="Lactose Free" state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)} />
            <FilterSwitch label="Is Vegan" state={isVegan} onChange={newValue => setIsVegan(newValue)} />
            <FilterSwitch label="Is Vegetarian" state={isVegetarian} onChange={newValue => setIsVegetarian(newValue)} />
        </View>
    );
};

FiltersScreen.navigationOptions = navData => {

    return {
        headerTitle: "Filter Meals",
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Filters" iconName='ios-menu'
                    onPress={() => { navData.navigation.toggleDrawer(); }} />
            </HeaderButtons>
        ),

        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Save" iconName='ios-savve'
                    onPress={() => { console.log('Saving Filters!'); }} />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },

    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    }
});

export default FiltersScreen;