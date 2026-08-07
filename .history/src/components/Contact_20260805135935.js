import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_2rwrn3s",   // Remplaci b-Service ID mta3ek
        "template_pg14oed",  // Remplaci b-Template ID mta3ek
        form.current,
        "a6ef279FPqGxF35Rb"    // Remplaci b-Public Key mta3ek
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully! ✅");
          form.current.reset(); // Vider le formulaire
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again. ❌");
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col-12">
            <h2 className="dark-color">Contact Me</h2>
            <p className="text-muted">Feel free to reach out!</p>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Info Details */}
          <div className="col-lg-5 mb-4">
            <div className="contact-info p-4 bg-white rounded shadow-sm">
              <h4>Get in Touch</h4>
              <p className="mb-4">I am available for freelance work and full-time positions.</p>

              <p><strong>Email:</strong> <a href="mailto:jarraymassoud@gmail.com">jarraymassoud@gmail.com</a></p>
              <p><strong>Phone:</strong> +216 97 73 54 81</p>
              <p><strong>Location:</strong> Tunis, Tunisia</p>

              <hr />

              <h5>Follow Me</h5>
              <div className="d-flex gap-3 mt-3">
                <a
                  href="https://www.linkedin.com/in/massaoud-jarray-055b03154/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/jarraymassaoud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark btn-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Form EmailJS */}
          <div className="col-lg-6 mb-4">
            <form ref={form} onSubmit={sendEmail} className="p-4 bg-white rounded shadow-sm">
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                {/* Attention: attribute 'name' obligatoire pour EmailJS */}
                <input type="text" name="user_name" className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input type="email" name="user_email" className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea name="message" className="form-control" rows="4" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>

              {/* Status Message */}
              {status && <p className="mt-3 text-center font-weight-bold">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;