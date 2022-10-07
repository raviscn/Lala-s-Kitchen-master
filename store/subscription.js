import { createSlice } from "@reduxjs/toolkit";
import { Regular } from "../Constants/SVG";
let breakfastCost = 20;
let dinnerCost = 30;
let lunchCost = 40;
const SubscriptionSlice = createSlice({
    name: "subscrption",
    initialState: {
        item: [{
            key: "",
            breakfast: false,
            lunch: false,
            dinner: false,
            cost: 0,
            category: "Regular",
            categoryIcon: Regular,
            Non_Veg: true,
            NoOfMeal: 1,
        }],

        durationMode: false,
        subscriptionStartDate: null,
        StartDate: null,
        subscriptionEndDate: null,
        weekly: null,
        monthly: null,
        dayOfTheMonth: "",
        NoOfDays: 0,
        TotalPrice: 0
    },
    reducers: {
        mealAdd(state, action) {
            state.item = [...state.item, { key: "", breakfast: false, lunch: false, dinner: false, cost: 0, category: "Regular", categoryIcon: Regular, Non_Veg: true, NoOfMeal: 1 }]
        },
        mealInputAdd(state, action) {
            console.log(action.payload.mealType);
            state.key = action.payload.key
            const _inputs = [...state.item];
            if (action.payload.meal === 'breakfast') {

                _inputs[action.payload.key].breakfast = !action.payload.mealType;
            }
            if (action.payload.meal === 'lunch') {
                _inputs[action.payload.key].lunch = !action.payload.mealType;
            }
            if (action.payload.meal === 'dinner') {
                _inputs[action.payload.key].dinner = !action.payload.mealType;
            }
            _inputs[action.payload.key].key = action.payload.key;
            // _inputs[action.payload.key].cost = state.cost;

            state.item = _inputs
        },
        mealDelete(state, action) {
            state.item = [...state.item, state.item - 1]
        },
        typeOfMealSelected(state, action) {
            console.log("sub: " + action.payload);
            state.typeOfMeal = action.payload.slider
            const _inputs = [...state.item];
            // _inputs[state.key].key = state.key;
            _inputs[action.payload.key].Non_Veg = action.payload.slider
            _inputs[action.payload.key].key = action.payload.key;
            state.item = _inputs
        },
        categorySelected(state, action) {
            console.log("category key " + JSON.stringify(action.payload.key));
            const category = action.payload.category;
            const _inputs = [...state.item];
            _inputs[action.payload.key].category = category
            _inputs[action.payload.key].key = action.payload.key;
            state.item = _inputs
        },
        categoryIconSelected(state, action) {
            const category = action.payload.categoryIcon;
            const _inputs = [...state.item];
            _inputs[action.payload.key].categoryIcon = category
            _inputs[action.payload.key].key = action.payload.key;
            state.item = _inputs

        },

        totalCost(state, action) {
            // state.cost = action.payload
            console.log(" id : " + action.payload.key);
            const _inputs = [...state.item];
            const breakfast = action.payload.breakfast
            const lunch = action.payload.lunch
            const dinner = action.payload.dinner
            if (breakfast && !lunch && !dinner) {
                state.cost = breakfastCost
            }
            else if (breakfast && lunch && !dinner) {
                state.cost = breakfastCost + lunchCost
            }
            else if (breakfast && lunch && dinner) {
                state.cost = breakfastCost + lunchCost + dinnerCost
            }
            else if (!breakfast && lunch && !dinner) {
                state.cost = lunchCost
            }
            else if (!breakfast && lunch && dinner) {
                state.cost = lunchCost + dinnerCost
            }
            else if (!breakfast && !lunch && dinner) {
                state.cost = dinnerCost
            }
            else if (breakfast && !lunch && dinner) {
                state.cost = breakfastCost + dinnerCost
            }
            else if (!breakfast && !dinner && !lunch) {
                state.cost = 0
            }
            _inputs[action.payload.key].cost = state.cost;
            _inputs[action.payload.key].key = action.payload.key;
            state.item = _inputs
        },
        NoOfMealIncrement(state, action) {
            console.log("no of meal " + action.payload.NoOfMeal);
            state.NoOfMeal = action.payload.NoOfMeal
            state.NoOfMeal++
            const _inputs = [...state.item];
            _inputs[action.payload.key].NoOfMeal = state.NoOfMeal
            _inputs[action.payload.key].key = action.payload.key;
            state.item = _inputs
        },
        NoOfMealDecrement(state, action) {
            state.NoOfMeal = action.payload.NoOfMeal
            if (state.NoOfMeal < 2) {
                return
            }
            state.NoOfMeal--
            const _inputs = [...state.item];
            _inputs[action.payload.key].NoOfMeal = state.NoOfMeal

            state.item = _inputs
        },
        durationModeSelected(state, action) {
            // console.log("status : "+action.payload);
            state.durationMode = action.payload
        },
        subscriptionStartDateSelected(state, action) {
            state.subscriptionStartDate = action.payload
        },
        StartDateSelected(state, action) {
            state.StartDate = action.payload
        },
        subscriptionEndDateSelected(state, action) {
            state.subscriptionEndDate = action.payload
        },
        weeklySelected(state, action) {
            // console.log("weekly : " + action.payload);
            state.weekly = action.payload
        },
        monthlySelected(state, action) {
            state.monthly = action.payload
        },
        dayAndDate(state, action) {
            state.NoOfDays = action.payload.NoOfDays
            console.log("no of days: " + action.payload.NoOfDays);
            state.dayOfTheMonth = action.payload.dayOfTheMonth
        },
        totalPrice(state, action) {
            state.TotalPrice = action.payload
        },
        deleteItem(state, action) {
            console.log(action.payload);
            const filterData = state.item.filter((item) => {
                return item.key !== action.payload
            })
            state.item = filterData
        }
    },
})
export const subscriptionActions = SubscriptionSlice.actions
export default SubscriptionSlice