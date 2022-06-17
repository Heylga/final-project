import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Navbar from "./../component/navbar.js";
import Jumbotron from "./../component/jumbotron.js";
import ListCards from "./../component/listCards.js";
import Map from "./../component/map.js";
import Footer from "./../component/footer.js";
import Popup from "../component/Popup";



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container center">
			<Navbar />
			<Jumbotron />
			<ListCards />
			<Map />
			<Popup />
			<Footer />
		</div>
	);
};
