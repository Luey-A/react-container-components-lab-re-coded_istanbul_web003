// Code MovieReviews He
import React from "react";

const MovieReviews = (props) => {
  const renderReviews = () => {
    return props.reviews.map((movieReview, index) => (
      <div className="review" key={movieReview.display_title + index}>