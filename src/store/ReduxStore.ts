import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { QuizReducer } from "./reducers/quiz.reducer";

const rootReducer = combineReducers({
  QuizReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
