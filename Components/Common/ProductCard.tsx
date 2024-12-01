import { Link } from "react-router-dom";

export default function ProductCard(props: any) {
  const productData = props.productData;

  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* Product image*/}
        <img className="card-img-top" src={productData.images} alt="..." />
        {/* Product details*/}
        <div className="card-body p-4">
          <div className="text-center">
            {/* Product name*/}
            <h5 className="fw-bolder">{productData.title}</h5>
            {/* Product price*/}
            <span className="badge rounded-pill bg-dark">
              {productData.discountPercentage}% discount
            </span>
            <br />
            <span className="fw-bolder discountPercentage">
              ${productData.price}
            </span>
          </div>
        </div>
        {/* Product actions*/}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent fs-1">
          <div className="d-flex justify-content-between">
            <Link
              className="btn btn-outline-dark mt-auto me-2"
              style={{ fontSize: "14px" }}
              to={`/product-details/${productData.id}`}
            >
              View options
            </Link>
            <Link
              className="btn btn-outline-dark mt-auto"
              to={"#"}
              style={{ fontSize: "14px" }}
            >
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
