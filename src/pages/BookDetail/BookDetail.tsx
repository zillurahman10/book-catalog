import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleBooksQuery } from "../../redux/api/apiSlice";
import Comments from "./Comments";
import Header from "../../Shared/Header";

const BookDetail = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetSingleBooksQuery(id);
  console.log(data?.reviews);
  if (isLoading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  return (
    <>
      <Header></Header>
      <div>
        <div className="hero">
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
        {/* Reviews Section */}
        <div className="text-center my-7">
          <h1 className="text-2xl font-bold mb-5">Let's check out reviews</h1>
          <form action="">
            <textarea
              className="textarea textarea-secondary"
              placeholder="Your Review"
            ></textarea>
            <br />
            <button className="btn btn-primary">Post</button>
          </form>
          {data?.reviews.map((review) => (
            <h1>{review}</h1>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookDetail;
