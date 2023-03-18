import Footer from "./Footer";
import SideNav from "./SideNav";
import TopNav from "./TopVav";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-72">
        <SideNav />
      </div>
      <div className="w-full flex flex-col">
        <TopNav />
        <div className="flex-grow bg-gray-100">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
