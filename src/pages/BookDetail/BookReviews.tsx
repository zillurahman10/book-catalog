import React from "react";
import {
  useGetReviewQuery,
  usePostReviewMutation,
} from "../../redux/api/apiSlice";

const BookReviews = ({ id }) => {
  const { data, isLoading, isSuccess } = useGetReviewQuery(id);
  console.log(data);
  const [mutate] = usePostReviewMutation();

  const handlePostReview = (e) => {
    e.preventDefault();
    const review = e.target.review.value;

    const options = {
      id: id,
      data: { comment: review },
    };

    mutate(options);
  };
  return (
    <div>
      {/* Reviews Section */}
      <div className="text-center my-7">
        {data?.reviews.length === 0 ? (
          <h1 className="text-2xl font-bold mb-5">
            No reviews posted yet. Let's post a review
          </h1>
        ) : (
          <h1 className="text-2xl font-bold mb-5">Let's check out reviews</h1>
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
        {data?.reviews.map((review, index) => (
          <h1>
            {index}. {review}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default BookReviews;
