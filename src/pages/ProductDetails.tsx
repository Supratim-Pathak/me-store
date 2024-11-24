

const ProductDetails = () => {
  return (
    <div className="card">
      <div className="row">
        <aside className="col-sm-5 border-right">
          <article className="gallery-wrap">
            <div className="img-big-wrap">
              <div>
                {/* <a href="#">
                  <img src="https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png" />
                </a> */}
              </div>
            </div>
            {/* slider-product.// */}
            {/* <div className="img-small-wrap">
              <div className="item-gallery">
                <img src="https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png" />
              </div>
              <div className="item-gallery">
                <img src="https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png" />
              </div>
              <div className="item-gallery">
                <img src="https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png" />
              </div>
              <div className="item-gallery">
                <img src="https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png" />
              </div>
            </div> */}
            {/* slider-nav.// */}
          </article>
          {/* gallery-wrap .end// */}
        </aside>
        <aside className="col-sm-7">
          <article className="card-body p-5">
            <h3 className="title mb-3">
              Original Version of Some product name
            </h3>
            <p className="price-detail-wrap">
              <span className="price h3 text-warning">
                <span className="currency">US $</span>
                <span className="num">1299</span>
              </span>
              <span>/per kg</span>
            </p>
            {/* price-detail-wrap .// */}
            <dl className="item-property">
              <dt>Description</dt>
              <dd>
                <p>
                  Here goes description consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </dd>
            </dl>
            <dl className="param param-feature">
              <dt>Model#</dt>
              <dd>12345611</dd>
            </dl>
            {/* item-property-hor .// */}
            <dl className="param param-feature">
              <dt>Color</dt>
              <dd>Black and white</dd>
            </dl>
            {/* item-property-hor .// */}
            <dl className="param param-feature">
              <dt>Delivery</dt>
              <dd>Russia, USA, and Europe</dd>
            </dl>
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
              {/* col.// */}
              <div className="col-sm-7">
                <dl className="param param-inline">
                  <dt>Size: </dt>
                  <dd>
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        defaultValue="option2"
                      />
                      <span className="form-check-label">SM</span>
                    </label>
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        defaultValue="option2"
                      />
                      <span className="form-check-label">MD</span>
                    </label>
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        defaultValue="option2"
                      />
                      <span className="form-check-label">XXL</span>
                    </label>
                  </dd>
                </dl>
                {/* item-property .// */}
              </div>
              {/* col.// */}
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
