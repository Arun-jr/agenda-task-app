import { configureStore } from "@reduxjs/toolkit";
// import darkmodeReducer from "./Reducers/darkmodeReducer";
import todoReducer from "./Reducers/todoReducer";

export const store = configureStore({
    reducer : {
        Todo : todoReducer,
        // DarkMode : darkmodeReducer
    }
})