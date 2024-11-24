

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        {/* Top Section */}
        <div className="row">
          {/* Logo & About */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Your Store</h5>
            <p>
              Your one-stop destination for all your e-commerce needs. Shop with
              confidence and discover amazing deals on quality products.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-white text-decoration-none">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/returns" className="text-white text-decoration-none">
                  Returns Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Customer Service</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/shipping" className="text-white text-decoration-none">
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="/track-order"
                  className="text-white text-decoration-none"
                >
                  Track Order
                </a>
              </li>
              <li>
                <a href="/support" className="text-white text-decoration-none">
                  Support Center
                </a>
              </li>
              <li>
                <a href="/terms" className="text-white text-decoration-none">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Subscribe to Our Newsletter</h5>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button type="submit" className="btn btn-danger w-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 text-secondary" />

        {/* Bottom Section */}
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Your Store. All rights reserved.
          </p>
          <div>
            <a href="#" className="text-white me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-white">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
