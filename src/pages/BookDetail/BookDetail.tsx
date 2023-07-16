import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetReviewQuery,
  useGetSingleBooksQuery,
} from "../../redux/api/apiSlice";
import Comments from "./Comments";
import Header from "../../Shared/Header";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import BookReviews from "./BookReviews";

const BookDetail = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);

  const { data, isLoading, isError } = useGetSingleBooksQuery(id);

  // const {} = useDeleteBookMutation(id!);

  console.log(data);
  const reviews = data?.reviews;
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <Header></Header>
      <div className="bg-base-200">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row flex justify-between">
            <img
              src={data?.photoURL}
              className="max-w-sm rounded-lg shadow-2xl mr-12"
            />
            <div>
              <h1 className="text-5xl font-bold">{data?.title}</h1>
              <p className="py-3">
                <span className="font-bold">Author: </span>
                {data?.author}
              </p>
              <p className="py-3">
                <span className="font-bold">Genre: </span>
                {data?.genre}
              </p>
              <p className="py-3">
                <span className="font-bold">Publication Date: </span>
                {data?.publicationDate}
              </p>
              {user?.email === data?.email ? (
                <>
                  <Link
                    to={`/editbook/${data?._id}`}
                    className="btn btn-primary mr-5"
                  >
                    Edit
                  </Link>
                  <button className="btn btn-error">Delete</button>
                </>
              ) : (
                <>
                  <div
                    className="tooltip"
                    data-tip="You are not the creator of this book so you cannot edit this book"
                  >
                    <Link
                      to={`/editbooks/${data?._id}`}
                      className="btn btn-primary mr-5 btn-disabled"
                    >
                      Edit
                    </Link>
                  </div>
                  <div
                    className="tooltip"
                    data-tip="You are not the creator of this book so you cannot delete this book"
                  >
                    <button className="btn btn-error btn-disabled">
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <BookReviews id={id}></BookReviews>
      </div>
    </>
  );
};

export default BookDetail;
