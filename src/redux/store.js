import { configureStore } from '@reduxjs/toolkit'
import HeaderReduceer from './headerSlice'
import ModalReducer from './modalSlice'
import Leadreducer from '../features/leads/leadSlice'



export const store = configureStore({
    reducer: {
      header : HeaderReduceer,
      modal : ModalReducer,
      lead : Leadreducer
    }
})