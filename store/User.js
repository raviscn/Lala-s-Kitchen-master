import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userDetails: [],
        userImage: "",
    },
    reducers: {
        userDetailsSelected(state, action) {
            console.log(action.payload);
            state.userDetails = action.payload
        },
// userImageSelected
    }
})
export const userActions = userSlice.actions
export default userSlice