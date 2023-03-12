import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: "I AM A BOY",
  },
  reducers: {
    setName: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setName } = userSlice.actions;
