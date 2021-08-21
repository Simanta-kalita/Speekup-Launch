import React from "react";
import { useState } from "react";
import moment from "moment";

const Subscribe = () => {

  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  }

  const sendData = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/email", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          date: moment(new Date()).format('MMMM Do YYYY'),
          email: email
        })
      })

      const data = await res.ok;

      try {
        if (!data) {
          window.alert("Invalid Registration");
          console.log("Invalid Registration");
        } else {
          window.alert("Registration successful");
          console.log('Registration successful');
        }
      } catch {
        console.log("error")
      }
    } catch {
      console.log("error in loading")
    }
  }


  return (
    <section className="mailchimp-one">
      <div className="container wow fadeInUp" data-wow-duration="1500ms">
        <div className="inner-container">
          <div className="mailchimp-one-title">
            <h2>Subscribe Newsletter</h2>
          </div>
          <form method="POST" action="" onSubmit={sendData} className="mailchimp-one__form">
            <input
              type="text"
              placeholder="Enter your email address"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <button className="thm-btn mailchimp-one__btn" type="submit">
              <span>Register Now</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
