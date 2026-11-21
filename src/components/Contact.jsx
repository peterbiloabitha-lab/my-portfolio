import { useState } from "react";

import {
  Mail,
  MapPin,
  Send
} from "lucide-react";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  }

  function handleSubmit(e) {

    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setStatus("Please complete all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(form.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent(
      "Portfolio enquiry from " + form.name
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href =
      `mailto:your-email@example.com?subject=${subject}&body=${body}`;

    setStatus("Opening your email application...");

  }

  return (
    <section className="section" id="contact">

      <div className="section-title">


        <h2>
          Let's <span className="gradient-text">Connect</span>
        </h2>

      </div>

      <div className="contact-layout">

        <div className="contact-copy">

          <h3>
            Let's create something meaningful together.
          </h3>

          <p>
            I'm interested in frontend opportunities and
            exciting projects. Send me a message and let's talk.
          </p>

          <div className="contact-item">

            <Mail />

            <div>
              <small>EMAIL</small>
              <p>peterbiloabitha@gmail.com</p>
            </div>

          </div>

          <div className="contact-item">

            <MapPin />

            <div>
              <small>LOCATION</small>
              <p>Chennai, India</p>
            </div>

          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <label>
            Your name

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </label>

          <label>
            Email address

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </label>

          <label>
            Your message

            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
            />
          </label>

          <button className="btn btn-primary" type="submit">
            Send Message <Send size={17} />
          </button>

          {status && (
            <p className="form-status">{status}</p>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;