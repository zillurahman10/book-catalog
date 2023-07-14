import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleBooksQuery } from "../../redux/api/apiSlice";
import Comments from "./Comments";

const BookDetail = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetSingleBooksQuery(id);

  if (isLoading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{data.title}</h1>
            <p className="py-5">
              <span className="font-bold">Author: </span>
              {data.author}
            </p>
            <p className="pb-5">
              <span className="font-bold">Genre: </span>
              {data.genre}
            </p>
            <p className="pb-5">
              <span className="font-bold">Publication Date: </span>
              {data.publicationDate}
            </p>
            <button className="btn btn-primary mr-5">Edit</button>
            <button className="btn btn-accent">Delete</button>
          </div>
        </div>
      </div>
      <Comments></Comments>
    </div>
  );
};

export default BookDetail;
