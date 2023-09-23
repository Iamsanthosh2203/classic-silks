import logo2 from "../assets/logo2.png";
import visa from "../assets/visa.png";
import gpay from "../assets/gpay.png";
import bank from "../assets/bank.png";
import paypal from "../assets/paypal.png";
import apple from "../assets/apple.png";

function Footer() {
  return (
    <>
      <FooterSec />
      <Copyrights />
    </>
  );
}

function FooterSec() {
  return (
    <>
      {/* i need a div to be top on this footer */}
      <div className="flex flex-col md:flex-row p-10 text-white rounded-xl md:-bottom-16 -bottom-8 relative justify-between bg-black font-primary w-[80%] mx-auto">
        <h5 className="text-4xl basis-[40%]">
          STAY UPTO DATA ABOUT OUR LATEST OFFERS
        </h5>

        <div className="w-full flex flex-col gap-3 basis-[40%]">
          <div className="flex items-center bg-white rounded-full px-5">
            {/* generate email fontawesome */}
            <i className="fa-regular fa-envelope text-black"></i>
            <input
              type="email"
              className="p-4 rounded-full bg-white focus:outline-none text-black"
              placeholder="Enter Your Email"
            />
          </div>
          <button className="p-4 md:p-4 rounded-full bg-white text-black font-bold text-sm w-full">
            SUBSCRIBE TO NEWS LETTER
          </button>
        </div>
      </div>
      <footer className="flex group-:relative p-5 md:p-20 bg-[#0000001A] font-primary items-center justify-between border-b-2 border-[#0000001A] flex-wrap">
        <div className="block md:flex flex-col gap-2 basis-full md:basis-[17em] mb-4 md:mb-0">
          <img src={logo2} alt="" />
          <p className="text-xl">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>

          <div className="flex gap-3 mt-4">
            <i className="fab fa-twitter text-2xl bg-white h-12 w-12 text-black rounded-full flex justify-center items-center hover:text-white hover:bg-black duration-200 cursor-pointer"></i>
            <i className="fab fa-facebook text-2xl bg-white h-12 w-12 text-black rounded-full flex justify-center items-center hover:text-white hover:bg-black duration-200 cursor-pointer"></i>
            <i className="fab fa-instagram text-2xl bg-white h-12 w-12 text-black rounded-full flex justify-center items-center hover:text-white hover:bg-black duration-200 cursor-pointer"></i>
            <i className="fab fa-github text-2xl bg-white h-12 w-12 text-black rounded-full flex justify-center items-center hover:text-white hover:bg-black duration-200 cursor-pointer"></i>
          </div>
        </div>

        <div className="flex flex-col gap-2 basis-1/2 md:basis-[20%]">
          <h4 className="text-3xl font-bold mb-6">Company</h4>

          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Work</a>
          <a href="">Carrer</a>
        </div>

        <div className="flex flex-col gap-2 basis-1/2 md:basis-[20%]">
          <h4 className="text-3xl font-bold mb-6">Help</h4>

          <a href="">Customer Support</a>
          <a href="">Delivery Details</a>
          <a href="">Terms / Conditions</a>
          <a href="">Privacy Policy</a>
        </div>

        <div className="flex flex-col gap-2 basis-[20%] mt-3 md:mt-0">
          <h4 className="text-3xl font-bold mb-6">FAQ</h4>

          <a href="">Account</a>
          <a href="">Manage Deliveries</a>
          <a href="">Orders</a>
          <a href="">Payments</a>
        </div>
      </footer>
    </>
  );
}

function Copyrights() {
  return (
    <div className="flex flex-col md:flex-row pt-4 font-primary bg-[#0000001A] md:px-20 justify-between items-center">
      <p>Classic Silks © 2000-2023, All Rights Reserved</p>

      <div className="flex">
        <img src={visa} alt="visa" />
        <img src={gpay} alt="gpay" />
        <img src={bank} alt="bank" />
        <img src={paypal} alt="paypal" />
        <img src={apple} alt="apple" />
      </div>
    </div>
  );
}

export default Footer;
