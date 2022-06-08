import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Navbar from "../component/navbar";
import ShowAll from "../component/showall.js";
import Footer from "../component/footer.js";
import "../../styles/index.css";

export const AllBooks = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="">
      <Navbar />
      <ShowAll />
      <Footer />
    </div>
  );
};
