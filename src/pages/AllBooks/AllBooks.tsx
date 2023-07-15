import React from "react";
import { useGetAllBooksQuery } from "../../redux/api/apiSlice";
import Header from "../../Shared/Header";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const { data, isLoading, isError } = useGetAllBooksQuery(undefined);

  if (isLoading) {
    return (
      <span className="loading loading-dots loading-lg text-center"></span>
    );
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <>
      <Header></Header>
      <h1 className="text-2xl text-center font-bold">Read more and more...</h1>
      <form className="flex justify-center m-8">
        <div className="join">
          <input
            className="input input-bordered join-item"
            placeholder="Search here"
          />
          <button className="btn join-item rounded-r-full">Search</button>
        </div>
      </form>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 m-8">
        {data &&
          data.map((info) => (
            <>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={info?.photoURL} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{info?.title}</h2>
                  <p>{info?.author}</p>
                  <p>{info?.genre}</p>
                  <p>{info?.publicationDate}</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default AllBooks;
