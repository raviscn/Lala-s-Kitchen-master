import { createSlice } from "@reduxjs/toolkit";

const mealSlice = createSlice({
    name: "meals",
    initialState: {
        items: [],
        dayId: 0,
        category: "Regular",
        day: "",
        typeOfMeal: 0,
        refData: [],
        loading: false,
        cardData: [],
        mealType: 1,
       
    },
    reducers: {
        categorySelected(state, action) {
            const category = action.payload;
            state.category = category
        },
        daySelected(state, action) {
            const day = action.payload;
            state.day = day
        },
        daySwipeSelected(state, action) {
            const day = action.payload;
            state.day = day
        },
        typeOfMealSelected(state, action) {
            state.typeOfMeal = action.payload
        },
        dayIdIs(state, action) {
            state.dayId = action.payload
        },
        refDataSelected(state, action) {
            state.refData = action.payload
        },
        isLoading(state, action) {
            state.loading = action.payload
        },
        cardDataSelected(state, action) {
            state.cardData = action.payload
        },
        mealTypeSelected(state, action) {
            state.mealType = action.payload
        },

        

    }
})
export const mealsActions = mealSlice.actions
export default mealSlice;