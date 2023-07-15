import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../Shared/Header";
import { useGetSingleBooksQuery } from "../../redux/api/apiSlice";

const EditBook = () => {
  const id = useParams();
  console.log(id.id);
  const { data, isLoading, isError } = useGetSingleBooksQuery(id.id);
  console.log(data);

  return (
    <div>
      <Header></Header>
      <div className="w-[500px] mx-auto bg-base-200 rounded-xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={data?.email}
              disabled
              placeholder="example@gmail.com"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Book Title</span>
            </label>
            <input
              type="text"
              name="title"
              value={data?.title}
              placeholder="Type title here"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              type="text"
              name="author"
              value={data?.author}
              placeholder="Type author name here"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <input
              type="text"
              name="genre"
              value={data?.genre}
              placeholder="Type genre here"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Publication Date</span>
            </label>
            <input
              type="text"
              name="publicationDate"
              value={data?.publicationDate}
              placeholder="Type publication date here"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Online Photo URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              value={data?.photoURL}
              placeholder="Online Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-outline"
              type="submit"
              value="Publish"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
