const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
const SET_FILTERS = "SET_FILTERS";

const toggleFavorite = (id) => {

    return { type: TOGGLE_FAVORITE, mealId: id };
};

const setFilters = (filterSettings) => {

    return { type: SET_FILTERS, filters: filterSettings };
};

export { TOGGLE_FAVORITE, toggleFavorite, setFilters };

