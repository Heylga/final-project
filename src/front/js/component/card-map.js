
import React, { Component, useContext, useState } from "react";

import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import propTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

import "../../styles/card.css";
import "../../styles/home.css";


const Cardmap = (props) => {
    const { store, actions } = useContext(Context);
    const { id, title, author, book_picture, description, buttonLabel } = props;


    return (
        <div className="card my-4 gap-1" style={{ width: "18rem" }}>
            <img
                className="container align-item-center center pt-1"
                width="200px"
                height="330"
                src="https://thesecondangle.com/wp-content/uploads/schema-and-structured-data-for-wp/we-hardback-cover-9781838850586-scaled-1200x1913.jpg"
            />

            <div className="card-body mt-2 mb-4" style={{ height: "10rem" }}>
                <h4 className="card-title text-center fw-bolder">{title}</h4>
                <h5 className="card-title text-center fw-bolder">{author}</h5>
                <p className="card-text text-center" style={{ fontSize: "large" }}>
                    {description?.length > length
                        ? description.substring(0, 55) + "..."
                        : description}
                </p>
            </div>


            <div className="bg-light py-3 text-center">

                <Link to={`/book/${id}`}>
                    <button
                        type="button"
                        className="btn btn-secondary my-3"
                        onClick={() => actions.fetchBook(id)}
                    >
                        Find Out More!
                    </button>
                </Link>
            </div>
        </div>
    );
};

Cardmap.propTypes = {
    id: PropTypes.string,
    book_picture: PropTypes.string,
    title: PropTypes.string,
    author: propTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
};

export default Cardmap;
