import React from 'react'
import './CreateAccountForm.css';


function CreateAccountForm() {
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card p-4 shadow-sm" style={{ width: "40rem", borderRadius: "10px" }}>
        <h3 className="text-center fw-bold">Join Us Today – Create Your Account!</h3>
        <p className="text-center text-muted">Please sign up to book session</p>
        <form>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="Full Name" />
            </div>
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="Gender" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="Address" />
            </div>
            <div className="col-md-6 mb-3">
              <input type="date" className="form-control" placeholder="DOB" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="Phone number" />
            </div>
            <div className="col-md-6 mb-3">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <div className="text-center">
            <button className="btn  px-4" style={{ borderRadius: "20px" }}>
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  
}

export default CreateAccountForm
