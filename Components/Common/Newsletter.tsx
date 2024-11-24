import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="mb-4">Subscribe to Our Newsletter</h2>
        <form className="d-flex justify-content-center">
          <input
            type="email"
            className="form-control me-2"
            placeholder="Enter your email"
          />
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
