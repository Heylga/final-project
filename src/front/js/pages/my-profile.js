import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Booklist from "../component/booklist.js";
import { Link, useParams } from "react-router-dom";
import propTypes from "prop-types";
import { Redirect } from "react-router-dom";
import "../../styles/home.css";


import Navbarlogin from "../component/navbar-login";
import Footer from "../component/footer.js";
import "../../styles/index.css";


export const MyProfile = (props) => {
  const { store, actions } = useContext(Context);
  const [loggedIn, setLoggedIn] = useState(false);
  const [book, setBook] = useState("");
  const [bookList, setbookList] = useState("");


  const addBook = (e) => {
    setBook(e.target.value);
    console.log(e.target.value);
  }

	const submitBook = (e) => {
		e.preventDefault();
		setbookList([...bookList, { label: setBook, id: Math.random() * 1000 }]);
		setBook("");
	};

	function removeItem(item) {
		const newBook = bookList.filter((key) => key !== item);
		setbookList(newBook);
		console.log(newBook);
	}

  const params = useParams();
  console.log('params', params)
  console.log("User from user store flux", store.user);

  return (

    <div className="">

      <Navbarlogin />

      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          {/* Profile photo starts */}
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
            </div>
            <div className="mt-5 text-center">
              <Link to="/edit-profile">
                <button
                  className="btn btn-primary edit-profile-button"
                  type="button"
                >
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
          {/* Profile photo ends */}
          {/* Profile Info starts */}
          <div className="col-md-5 border-right border border-dark">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Info</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels"><bold><strong>Name</strong></bold></label>
                  <p>{store.user.name}</p>
                </div>
              </div>


              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels"><strong>Email</strong></label>
                  <p>{store.user.email}</p>
                </div>
                <div className="col-md-12">
                  <label className="labels"><strong>Mobile Phone</strong></label>
                  <p>Mobile Number</p>
                </div>
                <div className="col-md-12">
                  <label className="labels"><strong>Birthday</strong></label>
                  <p>Day / Month / Year</p>
                </div>
                <div className="col-md-12">
                  <label className="labels"><strong>Address Line</strong></label>
                  <p>Address Line</p>
                </div>
                <div className="col-md-12">
                  <label className="labels"><strong>Postcode</strong></label>
                  <p>Postcode</p>
                </div>
                <div className="col-md-12">
                  <label className="labels"><strong>State</strong></label>
                  <p>State</p>
                </div>
                <div className="col-md-12">
                  <label className="labels"><strong>City</strong></label>
                  <p>{store.user.city}</p>
                </div>
                <div className="col-md-12">
                  <label className="labels"><strong>Country</strong></label>
                  <p>Country</p>
                </div>
              </div>
            </div>
          </div>
          {/* Profile Info ends */}
          {/* Book History starts */}
          <div className="col-md-4 border border-dark">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center book-history ">
                <h4 className="text-right ">My books</h4>
              </div>
              <br />
              <div className="col-md-12">
                {/* <label className="labels"><strong>My Books</strong></label>
                <input type="text" className="d-flex justify-content-center list-group-item " 
                onChange={addBook} 
                value={book} />
                
                <button type="submit" onClick={submitBook}></button> */}
         
                <ul>
                  <li>
                    {/* {store.book.title} */}
                  </li>
                  <li>
                    {/* {store.book.title} */}
                    </li>
                  <li>
                    {/* {store.book.title} */}
                  </li> 
                </ul> 
                {/* <Booklist
                  id={store.book.book_id}
                  title={store.book.title}
                /> */}
              </div>

              <Link to={`/offerbook`}>
                <button
                  type="submit"
                  className="btn btn-primary m-5 "
                >
                  Add Book
                </button>
              </Link>
              <hr />

              {/* <div className="col-md-12">
                <label className="labels"><strong>My Swapped Books</strong></label>
                <ul>
                  <li>{store.book.title}</li>
                  <li>{store.book.title}</li>
                  <li>Random book 3</li>
                </ul>
              </div> */}

            </div>
          </div>
          {/* Book History Ends */}
        </div>
      </div>

      <Footer />
    </div>
  );

  // Profile.propTypes = {
  //   first_name: propTypes.string,
  //   user_name: propTypes.string,
  //   email: propTypes.string,
  //   id: propTypes.string,
  // }
};
