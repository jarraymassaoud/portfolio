import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Fade } from "react-animation-components";

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_2rwrn3s", // Service ID
        "template_pg14oed", // Template ID
        form.current,
        "a6ef279FPqGxF35Rb" // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully! ✅");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again. ❌");
        }
      );
  };

  return (
    <Fade in>
      <section className="contact section" id="contact">
        <div className="container">
          {/* Section Header */}
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="text-white fw-bold">Contact Me</h2>
              <div
                className="mx-auto mb-2"
                style={{
                  width: "60px",
                  height: "3px",
                  backgroundColor: "var(--primary-blue, #1f5297)",
                }}
              ></div>
              <p className="text-light">Feel free to reach out!</p>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            {/* Info Details Carré */}
            <div className="col-lg-5">
              <div
                className="p-4 rounded shadow-sm h-100 border border-light border-opacity-25"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <h4 className="text-warning mb-3 fw-bold">Get in Touch</h4>
                <p className="text-light mb-4">
                  I am available for freelance work and full-time positions.
                </p>

                <p className="text-light">
                  <strong className="text-white">Email:</strong>{" "}
                  <a
                    href="mailto:jarraymassoud@gmail.com"
                    className="text-warning text-decoration-none"
                  >
                    jarraymassoud@gmail.com
                  </a>
                </p>
                <p className="text-light">
                  <strong className="text-white">Phone:</strong> +216 97 73 54
                  81
                </p>
                <p className="text-light">
                  <strong className="text-white">Location:</strong> Tunis,
                  Tunisia
                </p>

                <hr className="border-light opacity-25 my-4" />

                <h5 className="text-white fw-bold mb-3">Follow Me</h5>
                <div className="d-flex gap-3">
                  {/* LinkedIn Button in Blue */}
                  <a
                    href="https://www.linkedin.com/in/massaoud-jarray/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn  btn-outline-light  btn-sm fw-bold"
                    style={{ backgroundColor: "var(--primary-blue, #0a66c2)" }}
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/jarraymassaoud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-sm fw-bold"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Form EmailJS Carré */}
            <div className="col-lg-6">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="p-4 rounded shadow-sm border border-light border-opacity-25"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <div className="mb-3">
                  <label className="form-label text-white fw-bold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    className="form-control bg-transparent text-white border-light border-opacity-50"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-white fw-bold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className="form-control bg-transparent text-white border-light border-opacity-50"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-white fw-bold">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="form-control bg-transparent text-white border-light border-opacity-50"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-warning w-100 fw-bold">
                  Send Message
                </button>

                {/* Status Message */}
                {status && (
                  <p className="mt-3 text-center fw-bold text-warning">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Contact;
