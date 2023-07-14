import React from "react";
import { useGetAllBooksQuery } from "../../redux/api/apiSlice";

const Books = () => {
  const { data, isLoading, isError } = useGetAllBooksQuery(undefined);
  console.log(data);
  return <div>This is the books page.</div>;
};

export default Books;
