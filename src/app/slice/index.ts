import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  appStep: number;
}

const initialState: AppState = {
  appStep: 1,
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppStep: (state, action: PayloadAction<number>) => {
      state.appStep = action.payload;
    },
  },
});

export const selectAppStep = (state: RootState) => state.appReducer.appStep;

export const appReducer = slice.reducer;

export const { setAppStep } = slice.actions;
