import React from "react";
import Header from "../../Shared/Header";

const AddBook = () => {
  return (
    <div>
      <Header></Header>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-[600px] max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
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
                  placeholder="Type publication date here"
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
