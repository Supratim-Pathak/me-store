import axios from "axios";
import ProductCard from "./Common/ProductCard";
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
  const data = await axios.get("https://dummyjson.com/products?limit=6");

  console.log(data.data);
  const ProductData = data.data;
  return ProductData;
};

export default function Products() {
  const [product, setProduct] = useState<Product | undefined>();
  // const [error, setError] = useState<null | string>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const productData = await fetchProduct();
        setProduct(productData.products);
      } catch (err) {
        console.log(err);
        // setError("Failed to fetch products"); // Handle errors
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
                return <ProductCard productData={productData} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
}
