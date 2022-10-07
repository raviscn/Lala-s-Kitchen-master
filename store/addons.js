import { createSlice } from "@reduxjs/toolkit";
import { StyleSheetManager } from "styled-components";
import { ItemFull } from "../DUMMY_DATA";
import { ItemsDataEasyFilter } from "../DUMMY_DATA";
const addonSlice = createSlice({
    name: "addons",
    initialState: {
        itemDisplay: ItemFull,
        itemFull: ItemFull,
        itemData: ItemFull,
        itemType: ItemFull,
        itemIngredient: ItemFull,
        itemIntersection: [],
        itemSelected: null,
        animation: false,
        totalQuantity: null,
        typeItem: null,
        ingredientItem: null,
        dropDownMealType: null,
        scrollFilter: ItemsDataEasyFilter,
        scrollItemName: null,
        scrollitemSelected: null,
        cartData: [],
        cart: []
    },
    reducers: {
        AddonsItemsFull(state, action) {
            // state.itemDisplay = action.payload
        },
        cartItemAdded(state, action) {
            const newItem = action.payload
            const existingItem = state.cartData.find((item) => item.id === newItem.id);
            // console.log("existingItem : " + JSON.stringify(state.cartData));
            state.cartData.push({
                id: newItem.id,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price,
                image: newItem.image,
                typeOfMeal: newItem.typeOfMeal,
                type: newItem.type,
                ingredient: newItem.ingredient,
                name: newItem.name
            })

            const newItemId = newItem.id
            const newData = state.itemFull.map((item) =>
                item.id === newItemId ? { ...item, animation: true, quantity: item.quantity + 1 } : item)
            state.itemFull = newData
            const scrollFilter = newData.filter((val) => {
                return (val.type === state.scrollItemName || val.ingredient === state.scrollItemName)
            })
            if (state.scrollitemSelected) {
                state.itemDisplay = scrollFilter
            }
            else {
                const tt = newData.filter((item) => {
                    return item.typeOfMeal === state.dropDownMealType
                })
                if (state.dropDownMealType === 'All') {
                    state.itemDisplay = newData
                    state.itemData = newData
                }
                else {
                    state.itemDisplay = tt
                    state.itemData = tt
                }
                const typeFilter = state.itemData.filter((item) => {
                    return item.type === state.typeItem
                })
                state.itemType = typeFilter
                const ingredientFilter = state.itemData.filter((item) => {
                    return item.ingredient === state.ingredientItem
                })
                state.itemIngredient = ingredientFilter
                const intersection = state.itemIngredient.filter(item1 => state.itemType.some(item2 => item1.id === item2.id))
                if (state.typeItem === null && state.ingredientItem === null) {
                    state.itemDisplay = state.itemData
                }
                else {
                    if (state.ingredientItem === 'All' && state.typeItem === 'All') {
                        state.itemDisplay = state.itemData
                    }
                    else if (state.typeItem === null && state.ingredientItem === 'All') {
                        state.itemDisplay = state.itemData
                    }
                    else if (state.typeItem === 'All' && state.ingredientItem === null) {
                        state.itemDisplay = state.itemData
                    }
                    else if (state.typeItem === 'All' && state.ingredientItem !== 'Others') {
                        state.itemDisplay = state.itemIngredient
                    }
                    else if (state.typeItem === state.typeItem && state.ingredientItem === null) {
                        state.itemDisplay = state.itemType
                    }
                    else if (state.typeItem === null && state.ingredientItem === state.ingredientItem) {
                        state.itemDisplay = state.itemIngredient
                    }
                    else if (state.typeItem) {
                        state.itemDisplay = state.itemType
                    }
                    else if (state.typeItem === state.typeItem && state.ingredientItem === 'All') {
                        state.itemDisplay = state.itemType
                    }
                    else if (state.ingredientItem) {
                        state.itemDisplay = state.itemIngredient
                    }
                }
                if (state.typeItem && state.ingredientItem) {
                    if (state.typeItem !== 'All' && state.ingredientItem !== 'All') {
                        state.itemDisplay = intersection
                    }
                }
            }
            state.totalQuantity++
        },
        cartItemIncrement(state, action) {
            const id = action.payload
            state.cartData = state.cartData.map((item) =>
                item.id === id ? { ...item, animation: true, quantity: item.quantity + 1 } : item)
            console.log("new Item : " + JSON.stringify(state.cart));
            const newDataAdded = state.itemFull.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item)

            state.itemFull = newDataAdded
            const scrollFilter = newDataAdded.filter((val) => {
                return (val.type === state.scrollItemName || val.ingredient === state.scrollItemName)
            })
            if (state.scrollitemSelected) {
                state.itemDisplay = scrollFilter
            }
            else {
                const tt = newDataAdded.filter((item) => {
                    return item.typeOfMeal === state.dropDownMealType
                })
                if (state.dropDownMealType === 'All') {
                    state.itemDisplay = newDataAdded
                    state.itemData = newDataAdded

                }
                else {
                    state.itemDisplay = tt
                    state.itemData = tt

                }
                const typeFilter = state.itemData.filter((item) => {
                    return item.type === state.typeItem
                })
                state.itemType = typeFilter
                const ingredientFilter = state.itemData.filter((item) => {
                    return item.ingredient === state.ingredientItem
                })
                state.itemIngredient = ingredientFilter
                const intersection = state.itemIngredient.filter(item1 => state.itemType.some(item2 => item1.id === item2.id))
                if (state.typeItem === null && state.ingredientItem === null) {
                    state.itemDisplay = state.itemData
                }
                else {
                    if (state.ingredientItem === 'All' && state.typeItem === 'All') {
                        state.itemDisplay = state.itemData
                    }
                    else if (state.typeItem === null && state.ingredientItem === 'All') {
                        state.itemDisplay = state.itemData
                    }
                    else if (state.typeItem === 'All' && state.ingredientItem === null) {
                        state.itemDisplay = state.itemData
                    }
                    else if (state.typeItem === 'All' && state.ingredientItem !== 'Others') {
                        state.itemDisplay = state.itemIngredient
                    }
                    else if (state.typeItem === state.typeItem && state.ingredientItem === null) {
                        state.itemDisplay = state.itemType
                    }
                    else if (state.typeItem === null && state.ingredientItem === state.ingredientItem) {
                        state.itemDisplay = state.itemIngredient
                    }
                    else if (state.typeItem) {
                        state.itemDisplay = state.itemType
                    }
                    else if (state.typeItem === state.typeItem && state.ingredientItem === 'All') {
                        state.itemDisplay = state.itemType
                    }
                    else if (state.ingredientItem) {
                        state.itemDisplay = state.itemIngredient
                    }
                }
                if (state.typeItem && state.ingredientItem) {
                    if (state.typeItem !== 'All' && state.ingredientItem !== 'All') {
                        state.itemDisplay = intersection
                    }
                }
            }
            state.totalQuantity++
        },

        cartItemDecrement(state, action) {
            const id = action.payload
            state.cartData = state.cartData.map((item) =>
                item.id === id ? { ...item, animation: true, quantity: item.quantity - 1 } : item)
            state.cartData = state.cartData.filter(item => item.id !== id)
            let newDataAdded = state.itemFull.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
            const existingItem = newDataAdded.find(item => item.id === id)
            if (existingItem.quantity < 1) {
                newDataAdded = newDataAdded.map((item) =>
                    item.id === id ? { ...item, animation: false } : item)
            }
            state.itemFull = newDataAdded
            const tt = newDataAdded.filter((item) => {
                return item.typeOfMeal === state.dropDownMealType
            })
            if (state.dropDownMealType === 'All') {
                state.itemDisplay = newDataAdded
                state.itemData = newDataAdded
            }
            else {
                state.itemDisplay = tt
                state.itemData = tt

            }

            state.totalQuantity--
        },
        typeItemSelected(state, action) {
            state.typeItem = action.payload

        },
        ingredientItemSelected(state, action) {
            state.ingredientItem = action.payload

        },
        typeAndIngredientSelected(state, action) {
            console.log(action.payload.type);
            state.typeItem = action.payload.type
            state.ingredientItem = action.payload.ingredient
            const typeFilter = state.itemData.filter((item) => {
                return item.type === state.typeItem
            })
            state.itemType = typeFilter
            const ingredientFilter = state.itemData.filter((item) => {
                return item.ingredient === state.ingredientItem
            })
            state.itemIngredient = ingredientFilter
            const intersection = state.itemIngredient.filter(item1 => state.itemType.some(item2 => item1.id === item2.id))
            if (state.typeItem === null && state.ingredientItem === null) {
                state.itemDisplay = state.itemData
            }
            else {
                if (state.ingredientItem === 'All' && state.typeItem === 'All') {
                    state.itemDisplay = state.itemData
                }
                else if (state.typeItem === null && state.ingredientItem === 'All') {
                    state.itemDisplay = state.itemData
                }
                else if (state.typeItem === 'All' && state.ingredientItem === null) {
                    state.itemDisplay = state.itemData
                }
                else if (state.typeItem === 'All' && state.ingredientItem !== 'Others') {
                    state.itemDisplay = state.itemIngredient
                }
                else if (state.typeItem === state.typeItem && state.ingredientItem === null) {
                    state.itemDisplay = state.itemType
                }
                else if (state.typeItem === null && state.ingredientItem === state.ingredientItem) {
                    state.itemDisplay = state.itemIngredient
                }
                else if (state.typeItem) {
                    state.itemDisplay = state.itemType
                }
                else if (state.typeItem === state.typeItem && state.ingredientItem === 'All') {
                    state.itemDisplay = state.itemType
                }
                else if (state.ingredientItem) {
                    state.itemDisplay = state.itemIngredient
                }
            }
            if (state.typeItem && state.ingredientItem) {
                if (state.typeItem !== 'All' && state.ingredientItem !== 'All') {
                    state.itemDisplay = intersection
                }
            }
        },
        dropDownMealTypeSelected(state, action) {
            // if (state.scrollItemName) {
            //     console.log("ssss: " + JSON.stringify(state.scrollFilter));
            //     const newItem = state.scrollFilter.map((item) => {
            //         console.log(item.selected);
            //         return { name: item.name, selected: false }
            //     })
            //     state.scrollFilter = newItem
            // }
            state.dropDownMealType = action.payload
            var mealTypeFilter = state.itemFull.filter((item) => {
                return item.typeOfMeal === state.dropDownMealType
            })
            if (state.dropDownMealType === 'All') {
                state.itemDisplay = state.itemFull
                state.itemData = state.itemFull
            }
            else {
                state.itemDisplay = mealTypeFilter
                state.itemData = mealTypeFilter
            }

        },
        scrollFilterSelected(state, action) {
            const mealType = action.payload.mealType
            state.dropDownMealType = mealType
            console.log("mmmm   " + JSON.stringify(action.payload.item));
            const itemSelected = !action.payload.itemSelected
            state.scrollitemSelected = itemSelected
            const itemName = action.payload.itemName
            state.scrollItemName = itemName
            // const scrollItemFilter = action.payload.item
            // state.scrollFilter = scrollItemFilter
            const newItem = ItemsDataEasyFilter.map((val) => {
                console.log("bbbb: " + JSON.stringify(val));
                if (action.payload.item.id === val.id) {

                    return { name: val.name, selected: !val.selected }
                }
                else {
                    return val
                }
            })
            state.scrollFilter = newItem
            console.log("nnnn: " + JSON.stringify(newItem));
            const itemFilter = state.itemFull.filter((val) => {
                return (val.type === state.scrollItemName || val.ingredient === state.scrollItemName)
            })
            if (state.scrollitemSelected) {
                state.itemDisplay = itemFilter
            }
            else {
                state.itemDisplay = state.itemFull
            }
        }
    }
})
export const addonsActions = addonSlice.actions
export default addonSlice