import React from "react";
import { Link } from "react-router-dom";
import "./LeaveReview.css";

function LeaveReview() {
  return (
    <div className="leave-review-main">
      <div className="leave-review">LeaveReview</div>
      <Link to="/">
        <button className="go-back-button">Back</button>
      </Link>
    </div>
  );
}

export default LeaveReview;
