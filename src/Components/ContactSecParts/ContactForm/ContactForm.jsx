import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className="contact-us-left col-md-6 col-sm-12">
      <div className="contact-us-form">
        <h2 className="fw-bold">Online Appointment</h2>
        <form>
          <div className="inputsCont d-flex align-items-center">
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label className="d-flex align-items-center" htmlFor="floatingInput">Your Name</label>
            </div>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingPassword" placeholder="Password" />
              <label className="d-flex align-items-center" htmlFor="floatingPassword">Your Email</label>
            </div>
          </div>
          <div className="inputsCont d-flex align-items-center">
            <div className="form-floating">
              <input type="number" className="form-control p" id="floatingInputNumber" placeholder="name@example.com" />
              <label className="d-flex align-items-center" htmlFor="floatingInputNumber">Your Number</label>
            </div>
            <div className="form-floating">
              <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <label htmlFor="floatingSelect">Works with selects</label>
            </div>
          </div>
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
            <label htmlFor="floatingTextarea2">Comments</label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn form-submit-btn rounded-0">Submit Now</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm