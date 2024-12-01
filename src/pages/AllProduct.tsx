import axios from "axios";
import ProductCard from "../../Components/Common/ProductCard";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

interface Product {
  [x: string]: any;
  id: number;
  title: string;
  images: string;
  price: string;
  discountPercentage: string;
}
const fetchProduct = async (limit: number = 12, offSet: number = 0) => {
  const data = await axios.get(
    `https://dummyjson.com/products?limit=${limit}&skip=${offSet}`
  );

  console.log(data.data);
  const ProductData = data.data;
  return ProductData;
};

function AllProduct() {
  const [product, setProduct] = useState<Product | undefined>();
  // const [error, setError] = useState<null | string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(12);
  // ${limit}&skip=${skip
  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      try {
        const productData = await fetchProduct(limit, 0);
        setProduct(productData.products);
      } catch (err) {
        console.log(err);
        // setError("Failed to fetch products"); // Handle errors
      } finally {
        setLoading(false);
        setLoading(false);
      }
    };

    loadProduct();
  }, [limit]);

  const nextHandeler = () => {
    setLimit(limit + 12);
  };
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {product &&
            product?.map((productData: Product) => {
              return <ProductCard productData={productData} />;
            })}
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item" style={{ cursor: "pointer" }}>
                {!loading && (
                  <a
                    className="page-link"
                    onClick={(e) => {
                      e.stopPropagation;
                      nextHandeler();
                    }}
                  >
                    Load more..
                  </a>
                )}
                {loading && (
                  <RotatingLines
                    visible={true}
                    width="96"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                  />
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default AllProduct;
