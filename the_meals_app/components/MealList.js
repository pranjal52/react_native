import React from 'react';
import { FlatList, View, StyleSheet, } from 'react-native';
import MealItem from '../components/MealItem';
import { useSelector } from 'react-redux';
const MealList = (props) => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    const renderMealItem = (itemData) => {
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);
        return (
            <MealItem title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMeal={() => props.onMealSelect.navigate({
                    routeName: 'MealDetail', params: {
                        mealId: itemData.item.id,
                        mealTitle: itemData.item.title,
                        isFav: isFavorite
                    }
                })} />
        );
    };
    return (
        <View style={styles.screen}>
            <View style={{ margin: 10 }} >
                <FlatList data={props.data} renderItem={renderMealItem} style={{ width: '100%' }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default MealList;

