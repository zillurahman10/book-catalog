import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleBooksQuery } from "../../redux/api/apiSlice";
import Comments from "./Comments";
import Header from "../../Shared/Header";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const BookDetail = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);

  const { data, isLoading, isError } = useGetSingleBooksQuery(id);
  console.log(data);
  const reviews = data?.reviews;
  if (isLoading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  const handlePostReview = (e) => {
    e.preventDefault();

    const review = e.target.review.value;

    data?.reviews.push(review);
  };
  console.log(typeof reviews);

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
                  <button className="btn btn-primary mr-5">Edit</button>
                  <button className="btn btn-error">Delete</button>
                </>
              ) : (
                <>
                  <button className="btn btn-primary mr-5 btn-disabled">
                    Edit
                  </button>
                  <button className="btn btn-error btn-disabled">Delete</button>
                </>
              )}
            </div>
          </div>
        </div>

        <div>
          {/* Reviews Section */}
          <div className="text-center my-7">
            {data?.reviews.length === 0 ? (
              <h1 className="text-2xl font-bold mb-5">
                No reviews posted yet. Let's post a review
              </h1>
            ) : (
              <h1 className="text-2xl font-bold mb-5">
                Let's check out reviews
              </h1>
            )}
            <form onSubmit={handlePostReview}>
              <textarea
                className="textarea textarea-secondary w-[500px]"
                name="review"
                placeholder="Your Review"
              ></textarea>
              <br />
              <input
                className="btn btn-scondary btn-outline w-24"
                type="submit"
                value="Post"
              />
            </form>
            {data?.reviews.map((review) => (
              <h1>{review}</h1>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetail;
