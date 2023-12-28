import Nav from "../components/Nav";
import Footer from "../sections/Footer";
import { Outlet } from "react-router-dom";
const PagesLayout = () => {
  return (
    <div className="h-screen snap-y snap-proximity overflow-auto scroll-smooth">
      <Nav />
      <Outlet />
      <section className="padding-x padding-t snap-center bg-gray-200 pb-8">
        <Footer />
      </section>
    </div>
  );
};

export default PagesLayout;
