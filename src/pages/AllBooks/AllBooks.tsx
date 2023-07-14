import React from "react";
import { useGetAllBooksQuery } from "../../redux/api/apiSlice";
import Header from "../../Shared/Header";

const AllBooks = () => {
  const { data, isLoading, isError } = useGetAllBooksQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <>
      <Header></Header>
      <h1 className="text-2xl text-center font-bold">Read more and more...</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 m-8">
        {data &&
          data.map((info) => (
            <>
              <div className="card w-96 bg-gradient-to-r from-cyan-100 to-blue-100 shadow">
                <div className="card-body">
                  <h2 className="card-title">{info.title}</h2>
                  <p>
                    <span className="font-bold">Author: </span>
                    {info.author}
                  </p>
                  <p>
                    <span className="font-bold">Genre: </span>
                    {info.genre}
                  </p>
                  <p>
                    <span className="font-bold">Publication Date: </span>
                    {info.publicationDate}
                  </p>
                  <div className="card-actions justify-center">
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
