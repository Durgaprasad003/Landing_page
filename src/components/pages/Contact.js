import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card p-5 shadow-lg rounded"
        style={{
          maxWidth: '600px',
          width: '100%',
          marginTop: '-110px', // Adjust this value to move the card up
        }}
      >
        <h1 className="text-center mb-4">Please Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">Sign In</button>
        </form>
        <p className="mt-4 text-muted text-center">© 2017–2022</p>
      </div>
    </div>
  );
};

export default Contact;
