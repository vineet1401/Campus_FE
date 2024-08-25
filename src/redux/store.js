import { configureStore } from '@reduxjs/toolkit'
import HeaderReduceer from './headerSlice'
import ModalReducer from './modalSlice'
import UserDataReducer from "./userSlice"
import StudentDetailReducer from "./studentDetailSlice"

export const store = configureStore({
    reducer: {
      header : HeaderReduceer,
      modal : ModalReducer,
      userData : UserDataReducer,
      studentData : StudentDetailReducer 
    }
})