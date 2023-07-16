import React, { useState } from "react";
import { useGetAllBooksQuery } from "../../redux/api/apiSlice";
import Header from "../../Shared/Header";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useDispatch } from "react-redux";
import { IBook, searchBook } from "../../redux/books/booksSlice";

const AllBooks = () => {
  const { data, isLoading, isError } = useGetAllBooksQuery(undefined);
  const dispatch = useAppDispatch();
  const { books } = useAppSelector((state) => state.book);
  const [searchResult, setSearchResult] = useState<IBook[]>([]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }
  const handleSearch = (event: { target: { value: any } }) => {
    const searchText = event.target.value;
    const match = data.filter((b: { title: string }) =>
      b.title.toLowerCase().includes(searchText)
    );
    setSearchResult(match);
  };

  // console.log(searchResult);

  return (
    <>
      <Header></Header>
      <h1 className="text-2xl text-center font-bold">Read more and more...</h1>
      <form className="flex justify-center m-8">
        <div className="join">
          <input
            onChange={handleSearch}
            className="input input-bordered "
            name="searchTerm"
            placeholder="Search here"
          />
        </div>
      </form>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 m-8">
        {searchResult &&
          searchResult.map((info) => (
            <>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={info?.photoURL} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{info?.title}</h2>
                  <p>
                    <span className="font-bold">Author: </span>
                    {info?.author}
                  </p>
                  <p>
                    <span className="font-bold">Genre: </span>
                    {info?.genre}
                  </p>
                  <p>
                    <span className="font-bold">Publication Date: </span>
                    {info?.publicationDate}
                  </p>
                  <div className="card-actions">
                    <Link
                      to={`/books/${info?._id}`}
                      className="btn btn-primary"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
      <Link
        to="/addbook"
        className="btn btn-accent flex justify-center m-12 mx-auto w-[300px]"
      >
        Add Your Own Book
      </Link>
    </>
  );
};

export default AllBooks;
