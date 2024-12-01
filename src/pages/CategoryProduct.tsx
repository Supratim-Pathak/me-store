import axios from "axios";
import ProductCard from "../../Components/Common/ProductCard";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useParams } from "react-router-dom";

interface Product {
  [x: string]: any;
  id: number;
  title: string;
  images: string;
  price: string;
  discountPercentage: string;
}
const fetchProduct = async (category: string | undefined, limit: number) => {
  const data = await axios.get(
    `https://dummyjson.com/products/category/${category}`
  );

  console.log(data.data);
  const ProductData = data.data;
  return ProductData;
};  

function CategoryProduct() {
  const [product, setProduct] = useState<Product | undefined>();
  // const [error, setError] = useState<null | string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(12);

  const { category } = useParams();
  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      try {
        const productData = await fetchProduct(category, limit);
        setProduct(productData.products);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
        setLoading(false);
      }
    };

    loadProduct();

    return () => {
      setLimit(12);
    };
  }, [limit, category]);

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

export default CategoryProduct;
