import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { store, actions } = useContext(Context);
  const { title, author, imageUrl, description, buttonLabel } = props;

  return (
    <div className="card my-4 gap-1" style={{ width: "18rem" }}>
      <img src={imageUrl} />
      <div className="card-body mt-2 mb-4" style={{ height: "10rem" }}>
        <h4 className="card-title text-center fw-bolder">{title}</h4>
        <h5 className="card-title text-center fw-bolder">{author}</h5>
        <p className="card-text text-center" style={{ fontSize: "large" }}>
          {description.length > length
            ? description.substring(0, 55) + "..."
            : description}
        </p>
      </div>
      <div className="bg-light py-3 text-center">
        <Link to="/bookinfo">
          <button type="button" className="btn btn-secondary my-3">
            Find Out More!
          </button>
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  author: propTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
};

export default Card;
