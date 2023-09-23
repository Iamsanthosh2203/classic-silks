import logo from "../assets/logo.png";
import down from "../assets/down.png";

function Header() {
  return (
    <header className="px-3 md:px-12 justify-between md:justify-around items-center flex font-primary text-xl">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:hidden"
      >
        <path
          d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12ZM3.75 7.125H20.25C20.5484 7.125 20.8345 7.00647 21.0455 6.7955C21.2565 6.58452 21.375 6.29837 21.375 6C21.375 5.70163 21.2565 5.41548 21.0455 5.2045C20.8345 4.99353 20.5484 4.875 20.25 4.875H3.75C3.45163 4.875 3.16548 4.99353 2.9545 5.2045C2.74353 5.41548 2.625 5.70163 2.625 6C2.625 6.29837 2.74353 6.58452 2.9545 6.7955C3.16548 7.00647 3.45163 7.125 3.75 7.125ZM20.25 16.875H3.75C3.45163 16.875 3.16548 16.9935 2.9545 17.2045C2.74353 17.4155 2.625 17.7016 2.625 18C2.625 18.2984 2.74353 18.5845 2.9545 18.7955C3.16548 19.0065 3.45163 19.125 3.75 19.125H20.25C20.5484 19.125 20.8345 19.0065 21.0455 18.7955C21.2565 18.5845 21.375 18.2984 21.375 18C21.375 17.7016 21.2565 17.4155 21.0455 17.2045C20.8345 16.9935 20.5484 16.875 20.25 16.875Z"
          fill="black"
        />
      </svg>

      <img src={logo} alt="logo" />
      <ol className="hidden md:flex gap-4">
        <div className="flex items-center gap-2">
          <li>Men</li>
          <img src={down} alt="down" className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-2">
          <li>Women</li>
          <img src={down} alt="down" className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-2">
          <li>Kids</li>
          <img src={down} alt="down" className="w-4 h-4" />
        </div>
      </ol>
      <div className="hidden md:flex items-center bg-[#F0F0F0] rounded-full px-5">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          className=" p-4 rounded-full bg-[#F0F0F0] focus:outline-none"
          placeholder="Search For Prodcuts"
        />
      </div>
      <div className="flex gap-6">
        <i className="fa-solid fa-cart-shopping"></i>
        <i className="fa-regular fa-user"></i>
      </div>
    </header>
  );
}

export default Header;
