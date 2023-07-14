import { createSlice } from "@reduxjs/toolkit";

interface IBook {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}
const initialState = {
  books: [] as Array<IBook>,
};

const productSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
