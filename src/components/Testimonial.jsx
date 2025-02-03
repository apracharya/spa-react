import React from "react";
import '../styles/testimonial.css';
import StarRating from "./StarRating";

const Testimonial = (props) => {
  return (
    <div className="flex flex-col gap-6 border-l-4 border-amber-300 ps-10 py-6">
      <div className="">
        <p className="review-text">
          <span className="quotation-mark" style={{'marginRight': '10px'}}>
            "
          </span>
          {props.review}
          <span className="quotation-mark" style={{'marginLeft': '10px'}}>
            "
          </span>
        </p>
      </div>
      <div className="testimonial-bottom">
        <p className="font-semibold text-xl mb-2">
            {props.firstName} {props.lastName}
        </p>    
        <StarRating value={props.rating} />
      </div>
    </div>
  );
};

export default Testimonial;
