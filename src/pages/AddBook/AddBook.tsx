import React from "react";
import Header from "../../Shared/Header";
import { useAddBookMutation } from "../../redux/api/apiSlice";
import toast, { Toaster } from "react-hot-toast";

const AddBook = () => {
  const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();

  const handleAddBook = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const title = e.target.title.value;
    const authorName = e.target.author.value;
    const genre = e.target.genre.value;
    const publicationDate = e.target.publicationDate.value;
    const reviews = [];
    const photoURL = e.target.photoURL.value;

    const data = {
      email,
      title,
      authorName,
      genre,
      publicationDate,
      reviews,
      photoURL,
    };

    addBook(data);

    if (isSuccess) {
      toast.success("Book added successfully 😉");
    }
  };
  return (
    <div>
      <Header></Header>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-[600px] max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleAddBook} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
      </div>
    </div>
  );
};

export default AddBook;
