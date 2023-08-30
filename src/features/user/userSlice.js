import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload
    },
  }
});

export default userSlice.reducer;
export const {updateName} = userSlice.actions;