import React, { useState } from "react";

export const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="contact-title"> Contact</h2>

        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form className="email-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
                <div className="validate"></div>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="name">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />
                <div className="validate"></div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="name">Message</label>
              <textarea
                className="form-control"
                name="message"
                rows="10"
                data-rule="required"
                data-msg="Please write something htmlFor us"
              ></textarea>
              <div className="validate"></div>
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">{status}</button>
            </div>
          </form>
        </div>

        <div className="col-lg-5"></div>
      </div>
    </section>
  );
};
export default Contact;
