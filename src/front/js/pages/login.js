import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import Navbar from "./../component/navbar";
import Footer from "./../component/footer";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (

	    <div className="container">
            <Navbar />
			<br />
            <div className="container center m-5">

            <form>

            <div className="row">

                        <div className="col-md-6 ">

                        <h1>Log In</h1>
                            <label for="exampleInputEmail1" className="form-label m-2">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email Address" aria-describedby="emailHelp" />

                            <label for="exampleInputPassword1" className="form-label m-2 mt-4">Password</label>
                            <input type="password" className="form-control" placeholder="Password" id="exampleInputPassword1" />
 
                        </div>

						</div>
   
   
						<div className="row">

						<div className="col-md-6">

						<div class="col text-center">
                            <button type="submit" className="btn btn-primary text-center mt-5">Submit</button>
                            </div>

							</div>


						</div>

						<div className="row mt-5">

						<div className="col-md-9">

							<h6>You are registered? 
							
							<Link to="/signup">
							<a>Sign Up here</a>
							</Link> 
							</h6>


							</div>
							</div>


							<div className="row">

					<div className="col-md-9">

					<h6>You forgot your password 
	
						<Link to="/">
						<a>Click here</a>
						</Link> 
					</h6>


					</div>
					</div>



            </form>

{/* 
			<Link to="/">
				<button className="btn btn-primary justify-content-center m-5">Back home</button>
			</Link> */}

		</div>

        <Footer />
        </div>

        
	);
};
