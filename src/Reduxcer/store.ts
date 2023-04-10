import couterReducer from '../features/counter/counterSlice';

const { configureStore } = require("@reduxjs/toolkit");


const rootReducer = {
    counter: couterReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store