import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";
import { Axios } from "axios";
import "../../styles/home.css";

import Footer from "./../component/footer";
import Navbarlogin from "../component/navbar-login";


export const Offerbook = () => {
  const { store, actions } = useContext(Context);
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [publisher, setPublisher] = useState();
  const [genre, setGenre] = useState();
  const [language, setLanguage] = useState();
  const [description, setDescription] = useState();
  const [owner_user_id, setowner_user_id] = useState();
  const [book_picture, setBookPicture] = useState();
  const [baseImage, setBaseImage] = useState("");



  const URLbase = process.env.BACKEND_URL;

  const onSubmit = () => {
    console.log("submit working");

    if (title && author && publisher && genre && language && description && baseImage) {
      // hacemos el fetch
      FetchOfferBook(title, author, publisher, genre, language, description, baseImage);
      alert("Your book has been added");
      // <Redirect to="/my-profile" />
    } else {
      //te faltan datos
      alert("Information is missing");
    }
  };

  const FetchOfferBook = (
    title,
    author,
    publisher,
    genre,
    language,
    description,
    book_picture
  ) => {
    // fetch

    console.log(book_picture, "Esta es la imagen")
    const post = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        author: author,
        publisher: publisher,
        genre: genre,
        language: language,
        description: description,
        owner_name: store.user.name,
        book_picture: book_picture,
        // owner_name: store.user.name
      }),
    };

    console.log("info after fetch --->", post);

    fetch(`${URLbase}/api/offerbook`, post)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const onTypeTitle = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const onTypeAuthor = (e) => {
    console.log(e.target.value);
    setAuthor(e.target.value);
  };

  const onTypePublisher = (e) => {
    console.log(e.target.value);
    setPublisher(e.target.value);
  };

  const onTypeGenre = (e) => {
    console.log(e.target.value);
    setGenre(e.target.value);
  };

  const onTypeLanguage = (e) => {
    console.log(e.target.value);
    setLanguage(e.target.value);
  };

  const onTypeDescription = (e) => {
    console.log(e.target.value);
    setDescription(e.target.value);
  };

  const onPicture = (e) => {
    console.log(e.target.value);
    setBookPicture(e.target.value);
  };



  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    console.log(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const [imageSelected, setImageSelected] = useState("");

  // const uploadImage = () => {
  //   console.log(imageSelected)
  //   const formData = new FormData()
  //   formData.append("file", imageSelected)
  //   formData.append("upload_preset", "uwpqshnd")

  //   Axios.post("thttps://api.cloudinary.com/v1_1/josesoares/image/upload",
  //     formData
  //   ).then((response) => {
  //     console.log(response);
  //   });

  // };

  return (
    <div>

      <Navbarlogin />
      <div className=" container card center mt-5 mb-5">
        <div className="card-body">
          <form>
            <div className="row mb-3">
              <label for="bookTitle" className="col-sm-2 col-form-label">
                Title of the book
              </label>
              <div className="col-sm-10">
                <input
                  type="title"
                  className="form-control"
                  id="bookTitle"
                  placeholder="Title of the Book"
                  value={title}
                  onChange={onTypeTitle}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label for="author" className="col-sm-2 col-form-label">
                Author
              </label>
              <div className="col-sm-10">
                <input
                  type="author"
                  className="form-control"
                  id="author"
                  placeholder="Author"
                  value={author}
                  onChange={onTypeAuthor}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label for="publisher" className="col-sm-2 col-form-label">
                Publisher
              </label>
              <div className="col-sm-10">
                <input
                  type="publisher"
                  className="form-control"
                  id="publisher"
                  placeholder="Publisher"
                  value={publisher}
                  onChange={onTypePublisher}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label for="genre" className="col-sm-2 col-form-label">
                Genre
              </label>
              <div className="col-sm-10">
                <input
                  type="genre"
                  className="form-control"
                  id="genre"
                  placeholder="Genre"
                  value={genre}
                  onChange={onTypeGenre}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label for="language" className="col-sm-2 col-form-label">
                Language
              </label>
              <div className="col-sm-10">
                <input
                  type="language"
                  className="form-control"
                  id="language"
                  placeholder="Language"
                  value={language}
                  onChange={onTypeLanguage}
                />
              </div>
            </div>
            <div className="mb-3">
              <label for="descriptn" className="form-label">
                Description
              </label>
              <input
                type="description"
                className="form-control"
                id="description"
                placeholder="Describe briefly the synopsis of the book"
                value={description}
                onChange={onTypeDescription}
              />
            </div>

            <div className="container d-flex">
              <div className="mb-3">
                <label for="formFileMultiple" className="form-label">
                  Upload file(s)
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFileMultiple"
                  multiple
                  onChange={(e) => {
                    uploadImage(e);
                  }}
                />

                {/* <input
                  className="form-control"
                  type="file"
                  id="formFileMultiple"
                  multiple
                  onChange={(event) => {
                    setImageSelected(event.target.files[0]);
                  }} /> */}
              </div>

            </div>
            <div className="col text-center">
              <button
                type="submit"
                className="btn btn-primary float-end mt-5 me-5"
                onClick={() => { onSubmit() }}
              >
                Submit
              </button>
            </div>
            <br></br>
            <img src={baseImage} height="200px" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
