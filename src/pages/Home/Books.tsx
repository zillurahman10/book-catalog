import React from "react";
import { useGetAllBooksQuery } from "../../redux/api/apiSlice";
import BookCard from "./BookCard";

const Books = () => {
  const { data, isLoading, isError } = useGetAllBooksQuery(undefined);
  console.log(data);
  return (
    <div>
      {/* {data.map((book) => (
        <>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{book?.name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </>
      ))} */}
    </div>
  );
};

export default Books;
