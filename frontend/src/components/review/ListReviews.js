import React from "react";

const ListReviews = ({ reviews }) => {
  return (
    <div class="container mt-5">
      <div class="reviews w-75">
        <h3>Đánh giá:</h3>
        <hr />
        {reviews &&
          reviews.map((review) => (
            <div key={review._id} class="review-card my-3">
              <div class="rating-outer">
                <div
                  class="rating-inner"
                  style={{ width: `${(review.rating / 5) * 100}%` }}
                ></div>
              </div>
              <p class="review_user">bởi {review.name}</p>
              <p class="review_comment">{review.comment}</p>

              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListReviews;
