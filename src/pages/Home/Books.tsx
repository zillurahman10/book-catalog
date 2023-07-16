import React from "react";
import { useGetAllBooksQuery } from "../../redux/api/apiSlice";
import { Link } from "react-router-dom";

const Books = () => {
  const { data, isLoading, isError } = useGetAllBooksQuery(undefined);
  console.log(data);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data &&
        data.slice(0, 10).map((book) => (
          <>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={book?.photoURL} className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{book?.title}</h2>
                <p>
                  <span className="font-bold">Author: </span>
                  {book?.author}
                </p>
                <p>
                  <span className="font-bold">Genre: </span>
                  {book?.genre}
                </p>
                <p>
                  <span className="font-bold">Publication Date: </span>
                  {book?.publicationDate}
                </p>
                <div className="card-actions">
                  <Link to={`/books/${book?._id}`} className="btn btn-primary">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default Books;
