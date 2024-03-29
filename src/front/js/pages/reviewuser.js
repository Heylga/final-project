import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import Navbarlogin from '../component/navbar-login'
import { Context } from "../store/appContext";
import Rating from '../component/rating';
import Footer from '../component/footer'
import "../../styles/home.css";



export const Reviewuser = () => {
  const { store, actions } = useContext(Context);
  const [review, setReview] = useState ("")
  const [rateReview, setRateReview] = useState ([])

  const handleChange = (e) => {
    setReview (e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(review)
    setReview("")
  }
  return (
    <div>
        <Navbarlogin />
        <div className='container mt-5 mb-5'>
          <div className="col-md-6 center mx-auto">
            <div className="card p-4">
              <div>
                <h1>Rating</h1>
                <p>How was your exchange with User?</p>
              </div>
              <Rating />
              {/* <div className='col align-self-center'>
              <textarea placeholder="Write a review about your book exchange" style={{height: "100px", width: "400px"}} value= {review} onChange={handleChange}></textarea>
              </div> */}
              <div>
                <button type="button" className="btn btn-success m-3" style={{width: "100px"}} onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}
