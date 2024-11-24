import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <div className="">
        {/* Navigation*/}
        <Header />
        {/* Header*/}
        <Outlet />

        {/* Footer*/}
        <Footer />
      </div>
    </>
  );
}
