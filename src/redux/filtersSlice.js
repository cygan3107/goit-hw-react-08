import { createSlice } from "@reduxjs/toolkit";

const filtersInitial = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitial,
  reducers: {
    changeFilters(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
