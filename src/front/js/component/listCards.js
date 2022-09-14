import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Card from "./card.js";
import { Catcher } from "./../../img/catcher.jpg";
import { Crime } from "./../../img/crime.jpg";
import { littleprince } from "./../../img/littleprince.jpg";
import { we } from "./../../img/we.jpg";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.css";

const listCards = () => {
  const { store, actions } = useContext(Context);

  const listOfCards = store.books.map((cardItem, index) => {
    return (
      <Card
        key={index}
        id={cardItem.id}
        title={cardItem.title}
        author={cardItem.author}
        book_picture={cardItem.book_picture}
        description={cardItem.description}
        buttonLabel={cardItem.buttonLabel}
      />
    );
  });
  return (
    <div className="conteiner center">
      <h1 className="text-center pt-5">Recent Books Added</h1>
      <br></br>
      <div
        className="d-flex gap-2 m-1"
        style={{
          justifyContent: "center",
        }}
      >
        {" "}
        {listOfCards.slice(-4)}{" "}
      </div>
    </div>
  );
};

export default listCards;
