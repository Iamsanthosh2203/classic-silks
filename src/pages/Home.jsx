import Alert from "../constants/Alert";
import Header from "../constants/Header";
import hero from "../assets/hero.png";
import NewArrivals from "../constants/NewArrivals";
import Customers from "../constants/Customers";
import OnSale from "../constants/OnSale";
import Footer from "../constants/Footer";

function Home() {
  return (
    <>
      <Alert />
      <Header />
      <Hero />
      <NewArrivals />
      <OnSale />
      <DressStyle />
      <Customers />
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row px-4 justify-between mt-12">
        <img src={hero} alt="hero" className="basis-[40%]" />
        <div className="basis-[40%] flex flex-col justify-center md:pr-24 gap-6">
          <h1 className="text-5xl md:text-6xl font-primary font-semibold">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>

          <p className="font-primary text-[#00000099] text-xl">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <div className="font-primary">
            <button className="w-full md:w-[40%] px-6 py-4 bg-black text-white rounded-full">
              Shop Now
            </button>
          </div>

          <div className="flex font-primary flex-wrap">
            <div className="basis-1/2 md:basis-[30%]">
              <p className="text-5xl font-bold">200+</p>
              <p>International Brands</p>
            </div>
            <div className="basis-1/2 md:basis-[30%] border-x-2 pl-6">
              <p className="text-5xl font-semibold">2,000+</p>
              <p>High Quality Products</p>
            </div>
            <div className="basis-full md:basis-[30%] pl-4 text-center">
              <p className="text-5xl font-semibold">30,000+</p>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black mt-4 text-white font-primary text-xl py-4 tracking-[7px]">
        <marquee style={{ scrollBehavior: "scroll" }} direction="rtl">
          Our Branches : Classic Junction, Koduvayur - Palakkad Rd, Koduvayur,
          Kerala 678501 & SH58, Thrisur - Pollachi Rd Kollengode, Kerala 678506
        </marquee>
      </div>
    </>
  );
}

function DressStyle() {
  return (
    <div className="font-primary md:p-12 p-4 bg-[#F0F0F0] md:mx-16 mt-6 rounded-xl">
      <h1 className="text-5xl font-bold text-center">Browse By Dress Style</h1>
      <div className="flex flex-col">
        <div className="flex justify-evenly flex-wrap">
          <div className="basis-full md:basis-[30%] h-[20em]  mt-5 rounded-xl bg-1 cursor-pointer">
            <p className="p-5 text-3xl font-bold">Casual</p>
          </div>

          <div className="basis-full md:basis-[60%] h-[20em]  mt-5 rounded-xl bg-2 cursor-pointer bg-center">
            <p className="p-5 text-3xl font-bold">Formal</p>
          </div>
        </div>

        <div className="flex flex-row-reverse justify-evenly flex-wrap">
          <div className="basis-full md:basis-[30%] h-[20em]  mt-5 rounded-xl bg-3 cursor-pointer">
            <p className="p-5 text-3xl font-bold">Kids</p>
          </div>

          <div className="basis-full md:basis-[60%] h-[20em] mt-5 rounded-xl bg-4 cursor-pointer bg-white bg-center">
            <p className="p-5 text-3xl font-bold">Wedding</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
