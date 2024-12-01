import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Header() {
  const [show, setShow] = useState(false);
  const [records, setRecords] = useState<[String]>();
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category-list?limit=6")
      .then((data) => {
        console.log(data.data);
        setRecords(data.data.splice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to={"/"}>
          Dummy store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/all-products"}
              >
                Discover
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={(e) => {
                  e.preventDefault();
                  setShow(!show);
                }}
                // onBlur={() => {
                //   setShow(!show);
                // }}
              >
                Shop
              </a>
              <ul
                className={`dropdown-menu ${show ? "show" : ""}`}
                aria-labelledby="navbarDropdown"
              >
                {records?.map((cat: any) => {
                  return (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${cat}`}
                        onClick={(e) => {
                          setShow(!show);
                        }}
                      >
                        {cat.toUpperCase()}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit">
              <i className="bi-cart-fill me-1" />
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                0
              </span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
