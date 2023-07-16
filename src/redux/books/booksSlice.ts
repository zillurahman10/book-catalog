import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IBook {
  email: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  photoURL: string;
}
const initialState = {
  books: [] as Array<IBook>,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    searchBook: (state, action: PayloadAction<Array<IBook>>) => {
      state.books = action.payload;
    },
  },
});

export const { searchBook } = bookSlice.actions;

export default bookSlice.reducer;
