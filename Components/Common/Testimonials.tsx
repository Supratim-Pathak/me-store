
const Testimonials = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4">What Our Customers Say</h2>
        <div className="row">
          <div className="col-md-4">
            <blockquote className="blockquote">
              <p>"Excellent service and great quality!"</p>
              <footer className="blockquote-footer">John Doe</footer>
            </blockquote>
          </div>
          <div className="col-md-4">
            <blockquote className="blockquote">
              <p>"Fast shipping and amazing deals!"</p>
              <footer className="blockquote-footer">Jane Smith</footer>
            </blockquote>
          </div>
          <div className="col-md-4">
            <blockquote className="blockquote">
              <p>"Highly recommend this store!"</p>
              <footer className="blockquote-footer">Emily Brown</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
