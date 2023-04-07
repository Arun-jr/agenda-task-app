// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     darkmode : localStorage.getItem("darkmode") !== null && !localStorage.getItem("darkmode") ,  
// }

// export const darkmodeReducer = createSlice({
//     name: "Darkmode",
//     initialState: initialState,
//     reducers: {
//         Darkmode :(state)=> {
//            let { darkmode } = state
//            state.darkmode = !darkmode
//            localStorage.setItem("darkmode" ,JSON.stringify(state.darkmode))
//         }
//     }})

// export const {Darkmode} = darkmodeReducer.actions;
// export default darkmodeReducer.reducer;