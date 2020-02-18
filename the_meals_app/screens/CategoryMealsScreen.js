import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { useSelector } from 'react-redux';
import Colors from '../constants/Colors';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

const CategorieMealsScreen = (props) => {



    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return (
        <MealList data={displayedMeals} onMealSelect={props.navigation} />
    );
}

CategorieMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategorieMealsScreen;