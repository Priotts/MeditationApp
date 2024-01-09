import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        initialValue: 0,
        isRunning: false,
        customValue: 0,
    },
    reducers: {
        setPreset10Min: (state) => {
            state.isRunning = false
            state.initialValue = 600
        },
        setPreset15Min: (state) => {
            state.isRunning = false
            state.initialValue = 900
        },
        setPreset30Min: (state) => {
            state.isRunning = false
            state.initialValue = 1800
        },
        setCustomPreset: (state, action) => {
            state.isRunning = false
            state.customValue = action.payload
            state.initialValue = state.customValue * 60

        },
        startTimer: (state) => {
            state.isRunning = true
        },
        pauseTimer: (state) => {
            state.isRunning = false
        },
        stopTimer: (state) => {
            console.log('stop timer')
            state.isRunning = false
            state.initialValue = 0
        },
        decrement: (state) => {
            if (state.initialValue > 0 && state.isRunning === true) {
                state.initialValue -= 1;
            }
        }
    }

})

export const { setPreset10Min, setPreset15Min, setPreset30Min, setCustomPreset, startTimer, pauseTimer, stopTimer, decrement } = timerSlice.actions
export const timerReducer = timerSlice.reducer