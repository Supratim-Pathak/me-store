import { useLoaderData } from "react-router-dom";
import StarRating from "../../Components/StarRating";
const ProductDetails = () => {
  const details = useLoaderData() as any;

  return (
    <div className="card">
      <div className="row">
        <aside className="col-sm-5 border-right text-center mt-2">
          <article className="gallery-wrap">
            {/* Big Image */}
            <div className="img-big-wrap">
              <img
                src={details.images[0]}
                alt="Product"
                className="img-fluid"
              />
            </div>

            {/* Small Images */}
            <div className="img-small-wrap mt-3 d-flex justify-content-center">
              {details?.images?.length > 0 ? (
                details.images.map((image: string, index: number) => (
                  <div
                    key={index}
                    className="item-gallery m-1"
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="img-thumbnail"
                      // onClick={() => setActiveImage(image)}
                      style={{ width: 60, height: 60 }}
                    />
                  </div>
                ))
              ) : (
                <div>No images available</div>
              )}
            </div>
          </article>
        </aside>
        <aside className="col-sm-7">
          <article className="card-body p-5">
            <h3 className="title ">{details.title}</h3>
            <div className="mb-2 d-flex">
              <StarRating rating={details.rating} />
              <span
                className="px-2 fw-bold text-decoration-underline text-info pe-auto"
                style={{ cursor: "pointer" }}
              >
                Review
              </span>
            </div>
            <div className="price-detail-wrap d-flex">
              <div className="">
                <span className="price h3 text-warning">
                  <span className="currency">US $</span>
                  <span className="num">{details.price}</span>
                </span>
              </div>
              <div className="mt-1">
                <span className="badge rounded-pill bg-danger mx-3">
                  {details.discountPercentage}% discount
                </span>
              </div>
            </div>

            {/* price-detail-wrap .// */}
            <dl className="item-property mt-3">
              <dt>Description</dt>
              <dd>
                <p>{details.description}</p>
              </dd>
            </dl>
            <div className="param param-feature">
              <span className="fw-bold">Tags#</span>
              <div>
                {details.tags.map((data: string | null | undefined) => {
                  return (
                    <span className="badge rounded-pill bg-info m-1">
                      {data}
                    </span>
                  );
                })}
              </div>
            </div>
            {/* item-property-hor .// */}
            {/* <dl className="param param-feature">
              <dt>Color</dt>
              <dd>Black and white</dd>
            </dl> */}
            {/* item-property-hor .// */}
            {/* <dl className="param param-feature">
              <dt>Delivery</dt>
              <dd>Russia, USA, and Europe</dd>
            </dl> */}
            {/* item-property-hor .// */}
            <hr />

            <div className="row">
              <div className="col-sm-5">
                <dl className="param param-inline">
                  <dt>Quantity: </dt>
                  <dd>
                    <select
                      className="form-control form-control-sm"
                      style={{ width: 70 }}
                    >
                      <option> 1 </option>
                      <option> 2 </option>
                      <option> 3 </option>
                    </select>
                  </dd>
                </dl>
                {/* item-property .// */}
              </div>
            </div>
            {/* row.// */}
            <hr />
            <a href="#" className="btn btn-lg btn-primary text-uppercase">
              Buy now
            </a>
            <a
              href="#"
              className="btn btn-lg btn-outline-primary text-uppercase"
            >
              <i className="fas fa-shopping-cart" /> Add to cart
            </a>
          </article>
          {/* card-body.// */}
        </aside>
        {/* col.// */}
      </div>
      {/* row.// */}
    </div>
  );
};

export default ProductDetails;
