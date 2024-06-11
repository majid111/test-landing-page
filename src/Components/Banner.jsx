import img1 from "../assets/img1.webp";
import img3 from "../assets/img3.webp";
import img5 from "../assets/img5.webp";
import img7 from "../assets/img7.webp";
import Slider from "./Slider/Slider";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen text-white">
        {/* <img className="bg-cover" src={bg} alt="" /> */}
        <div className="hero-content flex-col lg:flex-row">
          <div className="max-w-md">
            <h1 className="text-[56px] ">
              The Easiest Way to Grow Your{" "}
              <span className="text-[#C7F7F7]"> Revenue</span>
            </h1>
            <p className="text-xl mt-12 mb-8">
              Promote your products, find new customers, and learn from seasoned
              marketing experts—all on a platform that converts five times
              better than the industry average.
            </p>
            <div className="join ">
              <input
                className="input join-item rounded-full bg-transparent border-white border-4"
                placeholder="Enter Your Email"
              />
              <button className="btn join-item rounded-full border-white border-4 text-[#603eff]">
                Start my trial
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className='rounded-tl-[60px] w-[232px] h-[232px] -mt-8'>
              <img className='rounded-tl-[60px]' src={img1} alt="" />
            </div>
            <div className="w-[212px] h-[212px] rounded-tr-[60px] ">
              <img className="w-full rounded-tr-[60px] " src={img3} alt="" />
            </div>
            <div className="w-[212px] h-[212px] rounded-bl-[60px] -mt-4 -mr-4">
              <img className="w-full rounded-bl-[60px] ml-5" src={img5} alt="" />
            </div>
            <div className="w-[232px] h-[232px] rounded-br-[60px]">
              <img className="w-full rounded-br-[60px] " src={img7} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 mb-12 flex gap-6 justify-between text-white">
        <div className="p-8 border-white border-4 rounded-tl-[50px]">
          <h1 className="text-5xl text-[#C7F7F7]">12+ leads</h1>
          <p className="text-lg mt-3">
            generated daily by each Leadpages user, on average
          </p>
        </div>
        <div className="p-8 border-white border-4">
          <h1 className="text-5xl text-[#C7F7F7]">12+ leads</h1>
          <p className="text-lg mt-3">
            generated daily by each Leadpages user, on average
          </p>
        </div>
        <div className="p-8 border-white border-4 rounded-br-[50px]">
          <h1 className="text-5xl text-[#C7F7F7]">12+ leads</h1>
          <p className="text-lg mt-3">
            generated daily by each Leadpages user, on average
          </p>
        </div>
      </div>
      <div className="bg-[url('../assets/img1.webp')] bg-cover">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quod eveniet vitae porro animi nam eum esse quam praesentium quaerat.</p>
      </div>
    </div>
  );
};

export default Banner;
