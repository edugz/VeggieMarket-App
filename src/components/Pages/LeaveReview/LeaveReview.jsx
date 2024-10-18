import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LeaveReview.css";

function LeaveReview() {
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("The Review has been submitted:", `"${review}"`);

    setSubmitted(true);
  };

  return (
    <div className="leave-review-main">
      <div className="leave-review-container">
        {!submitted ? (
          <>
            <h1 className="leave-review-title">Leave a Review</h1>
            <form onSubmit={handleSubmit} className="review-form">
              <textarea
                className="review-textarea"
                placeholder="Write your review here..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              />
              <button type="submit" className="submit-review-button">
                Submit Review
              </button>
            </form>
          </>
        ) : (
          <div className="thank-you-message">
            <p>Thank you for your review!</p>
            <Link to="/">
              <button className="go-back-button">Back to Home</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default LeaveReview;
