import { configureStore } from '@reduxjs/toolkit'
import headerSlice from './headerSlice'
import modalSlice from './modalSlice'
import rightDrawerSlice from './rightDrawerSlice'
import leadsSlice from '../features/leads/leadSlice'

const combinedReducer = {
  header : headerSlice,
  rightDrawer : rightDrawerSlice,
  modal : modalSlice,
  lead : leadsSlice
}

export default configureStore({
    reducer: combinedReducer
})