import Banner from "./Banner";
import Navbar from "./Navbar";
import Slider from "./Slider/Slider";

const Header = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      </div>
    </div>
  );
};

export default Header;
