import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateInterface {
  count: number;
}

const countSlice = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    increase(state) {
      state.count += 1;
    },
    decrease(state) {
      state.count -= 1;
    },
    setcount(state, actions: PayloadAction<number>) {
      state.count = actions.payload;
    },
  },
});

export const countActions = countSlice.actions;

export default countSlice.reducer;