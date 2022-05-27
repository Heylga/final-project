import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import Navbar from "./navbar";
import Footer from "./footer";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
            <Navbar />
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
            <Footer />
		</div>
	);
};