import React from "react";
import PropTypes from "prop-types";
import propTypes from "prop-types";

const Card = (props) => {
  const { title, title2, imageUrl, description, buttonLabel } = props;

  return (
    <div className="card my-4 gap-1" style={{ width: "18rem" }}>
      <img src={imageUrl} />
      <div className="card-body mt-2 mb-4" style={{ height: "11.5rem" }}>
        <h4 className="card-title text-center fw-bolder">{title}</h4>
        <h5 className="card-title text-center fw-bolder">{title2}</h5>
        <p className="card-text text-center" style={{ fontSize: "large" }}>
          {description.length > length
            ? description.substring(0, 80) + "..."
            : description}
        </p>
      </div>
      <div className="bg-light py-3 text-center">
        <a href="#" className="btn btn-primary ">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  title2: propTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
};

export default Card;
