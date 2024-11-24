import CategoryListing from "../../Components/Common/CategoryListing";
import Hero from "../../Components/Common/Hero";
import Newsletter from "../../Components/Common/Newsletter";
import Testimonials from "../../Components/Common/Testimonials";
import Videos from "../../Components/Common/Videos";
import Products from "../../Components/Products";

export default function Home() {

  return (
    <>
      <Hero />
      <Products />
      <Videos />
      <Testimonials />
      <CategoryListing />
      <Newsletter />
    </>
  );
}
