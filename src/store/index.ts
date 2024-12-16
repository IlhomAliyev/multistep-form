import { jsonMockApi } from "@/app/api";
import { appReducer } from "@/app/slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  appReducer,
  [jsonMockApi.reducerPath]: jsonMockApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([jsonMockApi.middleware]),
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
