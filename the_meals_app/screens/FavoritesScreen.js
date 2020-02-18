import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = (props) => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.fallbackText}>
                <DefaultText>
                    No favorites found. Start adding some.
                </DefaultText>
            </View>
        )
    }
    return (
        <MealList data={favMeals} onMealSelect={props.navigation} />
    );
}


FavoritesScreen.navigationOptions = navData => {

    return {
        headerTitle: "Favorites",
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Filters" iconName='ios-menu'
                    onPress={() => { navData.navigation.toggleDrawer(); }} />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    screen: {

    },
    fallbackText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;