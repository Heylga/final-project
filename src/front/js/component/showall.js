import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Card from "./card.js";
import Search from "./search.js";
import { Catcher } from "./../../img/catcher.jpg";
import { Crime } from "./../../img/crime.jpg";
import { littleprince } from "./../../img/littleprince.jpg";
import { we } from "./../../img/we.jpg";
import { Context } from "../store/appContext";
import "../../styles/home.css";


const ShowAll = () => {
  const { store, actions } = useContext(Context);

  console.log(`booksInSeach`, store.booksInSeach, 'books', store.books)

  const books = store.booksInSeach.length > 0 ? store.booksInSeach : store.books;

  const listOfCards = books.map((cardItem, index) => {
    return (
      <div className="col" key={index}>
        <Card
          key={index}
          id={cardItem.id}
          title={cardItem.title}
          author={cardItem.author}
          imageUrl={cardItem.imageUrl}
          description={cardItem.description}
          buttonLabel={cardItem.buttonLabel}
        />
      </div>
    );
  });

  // return <div className="conteiner center">{listOfCards}</div>;
  return (
    <div>
      <h1 className="text-center pt-5">All Books</h1>
      <br />
      <div className="container">
        <Search />
        <div className="row row-cols-auto">{listOfCards}</div>
      </div>
    </div>
  );
};
 
export default ShowAll;
