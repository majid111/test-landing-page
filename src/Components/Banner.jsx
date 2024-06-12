import img1 from "../assets/img1.webp";
import img3 from "../assets/img3.webp";
import img5 from "../assets/img5.webp";
import img7 from "../assets/img7.webp";
import Slider from "./Slider/Slider";
import Slider01 from "./custom Slider/Slider01";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen text-white">
        {/* <img className="bg-cover" src={bg} alt="" /> */}
        <div className="hero-content flex-col gap-24 lg:flex-row">
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
            <div className="relative rounded-tl-[60px] w-[232px] h-[232px] -mt-8">
            <div>
                <img
                  className="w-full rounded-tl-[60px] "
                  src={img1}
                  alt=""
                />
              </div>
              <div className="absolute rounded-tl-[60px] text-center bottom-0 w-full  bg-gradient-to-b from-transparent to-gray-500 text-white">
                <h2 className="text-lg font-bold">Geni Ramos </h2>
                <p className="text-sm font-bold">DIGITAL MARKETER</p>
              </div>
              <div className="absolute top-8 -left-20 bg-white text-black space-y-3 p-4 shadow-lg">
                <h2 className="text-3xl text-[#603eff] font-bold">300k+</h2>
                <p className="text-sm">TOTAL LEADS</p>
              </div>
            </div>
            <div className="relative w-[212px] h-[212px] rounded-tr-[60px] ">
            <div>
                <img
                  className="w-full rounded-tr-[60px] "
                  src={img3}
                  alt=""
                />
              </div>
              <div className="absolute rounded-br-[60px] text-center bottom-0 w-full  bg-gradient-to-b from-transparent to-gray-500 text-white">
                <h2 className="text-lg font-bold">Matt Giovanisci</h2>
                <p className="text-sm font-bold">CEO, FOUNDER</p>
              </div>
              <div className="absolute top-8 -right-20 bg-white text-black space-y-3 p-4 shadow-lg">
                <h2 className="text-3xl text-[#603eff] font-bold">10.8k+</h2>
                <p className="text-sm max-w-32">LEADS FROM ONE LANDING PAGE</p>
              </div>
            </div>
            <div className="w-[212px] h-[212px] rounded-bl-[60px] -mt-4 -mr-4 relative">
              <div>
                <img
                  className="w-full rounded-bl-[60px] ml-5"
                  src={img5}
                  alt=""
                />
              </div>
              <div className="absolute rounded-bl-[60px] text-center bottom-0 w-full left-4 bg-gradient-to-b from-transparent to-gray-500 text-white">
                <h2 className="text-lg font-bold">Mattia Di Stasi</h2>
                <p className="text-sm font-bold">BUSSINESS COACH</p>
              </div>
              <div className="absolute top-8 -left-20 bg-white text-black space-y-3 p-4 shadow-lg">
                <h2 className="text-3xl text-[#603eff] font-bold">$20k+ </h2>
                <p className="text-sm max-w-32">SALES FROM ONE LANDING PAGE</p>
              </div>
            </div>
            <div className="relative w-[232px] h-[232px] rounded-br-[60px]">
              <div>
                <img
                  className="w-full rounded-bl-[60px]"
                  src={img7}
                  alt=""
                />
              </div>
              <div className="absolute rounded-br-[60px] text-center bottom-0 w-full  bg-gradient-to-b from-transparent to-gray-500 text-white">
                <h2 className="text-lg font-bold">Alex Cattoni</h2>
                <p className="text-sm font-bold">COPYWRITING COACH</p>
              </div>
              <div className="absolute top-8 -right-20 bg-white text-black space-y-3 p-4 shadow-lg">
                <h2 className="text-3xl text-[#603eff] font-bold">200k+ </h2>
                <p className="text-sm ">TOTAL LEADS</p>
              </div>
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
    </div>
  );
};

export default Banner;
