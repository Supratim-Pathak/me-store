import axios from "axios";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";
interface Product {
  [x: string]: any;
  id: number;
  title: string;
  images: string;
  price: string;
  discountPercentage: string;
}

const fetchProduct = async () => {
  const data = await axios.get(
    "https://dummyjson.com/products?limit=6"
  );

  console.log(data.data);
  const ProductData = data.data;
  return ProductData;
};

export default function Products() {
  const [product, setProduct] = useState<Product | undefined>();
  const [error, setError] = useState<null | string>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const productData = await fetchProduct();
        setProduct(productData.products);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch products"); // Handle errors
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, []);

  return (
    <>
      {/* Section*/}
      <section className="py-5">
        {loading && (
          <>
            <div className="d-flex align-items-center justify-content-center">
              <RotatingLines
                visible={true}
                width="96"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
              />
            </div>
          </>
        )}
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {product &&
              product?.map((productData: Product) => {
                return (
                  <div className="col mb-5">
                    <div className="card h-100">
                      {/* Product image*/}
                      <img
                        className="card-img-top"
                        src={productData.images}
                        alt="..."
                      />
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
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <Link
                            className="btn btn-outline-dark mt-auto"
                            to={`/product-details/${productData.id}`}
                          >
                            View options
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
