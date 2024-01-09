import { configureStore } from '@reduxjs/toolkit'
import { timerReducer } from './Redux/timer'

export default configureStore({
  reducer: {
    timer: timerReducer,
  }
})