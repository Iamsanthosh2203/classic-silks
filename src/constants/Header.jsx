import logo from "../assets/logo.png";
import down from "../assets/down.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function Header() {
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [kids, setKids] = useState(false);

  const [menu, setMenu] = useState(false);

  const headerRef = useRef(null); // Ref to the header element

  useEffect(() => {
    // Function to close menus when clicking outside
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMen(false);
        setWomen(false);
        setKids(false);
      }
    }

    // Add event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Remove the event listener when component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function menFunction() {
    setMen(!men);
    setKids(false);
    setWomen(false);
  }

  function womenFunction() {
    setWomen(!women);
    setKids(false);
    setMen(false);
  }

  function kidsFunction() {
    setKids(!kids);
    setWomen(false);
    setMen(false);
  }

  return (
    <header
      ref={headerRef}
      className="px-3 md:px-12 justify-between md:justify-around items-center flex font-primary text-xl"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:hidden"
        onClick={() => setMenu(!menu)}
      >
        <path
          d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12ZM3.75 7.125H20.25C20.5484 7.125 20.8345 7.00647 21.0455 6.7955C21.2565 6.58452 21.375 6.29837 21.375 6C21.375 5.70163 21.2565 5.41548 21.0455 5.2045C20.8345 4.99353 20.5484 4.875 20.25 4.875H3.75C3.45163 4.875 3.16548 4.99353 2.9545 5.2045C2.74353 5.41548 2.625 5.70163 2.625 6C2.625 6.29837 2.74353 6.58452 2.9545 6.7955C3.16548 7.00647 3.45163 7.125 3.75 7.125ZM20.25 16.875H3.75C3.45163 16.875 3.16548 16.9935 2.9545 17.2045C2.74353 17.4155 2.625 17.7016 2.625 18C2.625 18.2984 2.74353 18.5845 2.9545 18.7955C3.16548 19.0065 3.45163 19.125 3.75 19.125H20.25C20.5484 19.125 20.8345 19.0065 21.0455 18.7955C21.2565 18.5845 21.375 18.2984 21.375 18C21.375 17.7016 21.2565 17.4155 21.0455 17.2045C20.8345 16.9935 20.5484 16.875 20.25 16.875Z"
          fill="black"
        />
      </svg>

      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <ol className="hidden md:flex gap-4">
        <div
          className="relative flex items-center gap-2 cursor-pointer"
          onClick={menFunction}
        >
          <li>Men</li>
          <img
            src={down}
            alt="down"
            className={
              men
                ? "rotate-180 w-4 h-4 duration-200"
                : "rotate-0 w-4 h-4 duration-200"
            }
          />
          <SubcategoryMen men={men} />
        </div>
        <div
          className="relative flex items-center gap-2 cursor-pointer"
          onClick={womenFunction}
        >
          <li>Women</li>
          <img
            src={down}
            alt="down"
            className={
              women
                ? "rotate-180 w-4 h-4 duration-200"
                : "rotate-0 w-4 h-4 duration-200"
            }
          />
          <SubcategoryWomen women={women} />
        </div>
        <div
          className="cursor-pointer relative flex items-center gap-2"
          onClick={kidsFunction}
        >
          <li>Kids</li>
          <img
            src={down}
            alt="down"
            className={
              kids
                ? "rotate-180 w-4 h-4 duration-200"
                : "rotate-0 w-4 h-4 duration-200"
            }
          />
          <SubcategoryKids kids={kids} />
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
        <div className="flex gap-2">
          <Link to={"/cart"} className="fa-solid fa-cart-shopping"></Link>
        </div>
        <i className="fa-regular fa-user"></i>
      </div>

      {/* Menu on Mobile */}
      <div
        className={
          menu
            ? "duration-200 z-10 translate-x-0 absolute left-0 top-0 h-screen w-[70vw] bg-black text-white"
            : "-translate-x-full duration-200 absolute left-0 top-0 h-screen w-[50vw] bg-black text-white z-10"
        }
      >
        <div className="flex p-10 flex-col">
          {/* create an btn with X mark in it */}
          <svg
            width="30"
            height="34"
            viewBox="0 0 24 24"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
            className="md:hidden mb-7"
            onClick={() => setMenu(!menu)}
          >
            <path d="M19.5 6L6 19.5" stroke="white" strokeWidth="2" />
            <path d="M6 6L19.5 19.5" stroke="white" strokeWidth="2" />
          </svg>

          <div className="indent-8 flex flex-col gap-4 text-2xl font-bold">
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
          </div>
        </div>
      </div>
    </header>
  );
}

// eslint-disable-next-line react/prop-types
function SubcategoryMen({ men }) {
  return (
    <div
      className={
        men
          ? "z-10 transform translate-y-0 duration-200 font-primary block absolute -bottom-64 bg-[#fafafa] p-4 shadow-xl w-[70vh] rounded-xl "
          : "z-10 transform -translate-y-[300%] duration-200 font-primary block absolute -bottom-20 bg-[#fafafa] p-4 shadow-xl w-[70vh]"
      }
    >
      <div className="flex justify-between">
        <ol className="list-disc p-3 pl-10">
          <li>
            <Link to="/men">Formal & Casual Shirts</Link>
          </li>
          <li>
            <Link to="/men">Formal & Casual Trousers</Link>
          </li>
          <li>
            <Link to="/men">Silk Shirts & Dhoti Set</Link>
          </li>
          <li>
            <Link to="/men">Cotton Shirts & Dhoti Set</Link>
          </li>
          <li>
            <Link to="/men">T-shirts</Link>
          </li>
          <li>
            <Link to="/men">Shorts</Link>
          </li>
        </ol>

        <ol className="list-disc p-3">
          <li>
            <Link to="/men">Blazers</Link>
          </li>
          <li>
            <Link to="/men">Lungis</Link>
          </li>
          <li>
            <Link to="/men">Cotton Dhotis</Link>
          </li>
          <li>
            <Link to="/men">Silk Dhotis</Link>
          </li>
          <li>
            <Link to="/men">Sutings & Shirtings</Link>
          </li>
          <li>
            <Link to="/men">Ethnic Wear</Link>
          </li>
        </ol>
      </div>
    </div>
  );
}

function SubcategoryWomen({ women }) {
  return (
    <div
      className={
        women
          ? "z-10 transform translate-y-0 duration-200 font-primary block absolute -bottom-72 bg-[#fafafa] p-4 shadow-xl min-w-[73vh] rounded-xl"
          : "z-10 transform -translate-y-[300%] duration-200 font-primary block absolute -bottom-20 bg-[#fafafa] p-4 shadow-xl w-[80vh]"
      }
    >
      <div className="flex justify-between">
        <ol className="list-disc p-3 pl-10">
          <li>
            <a href="/women">Party Wear Designer</a>
          </li>
          <li>
            <a href="/women">Sarees</a>
          </li>
          <li>
            <a href="/women">Fancy Sarees</a>
          </li>
          <li>
            <a href="/women">Cotton Sarees</a>
          </li>
          <li>
            <a href="/women">Silk Cotton Saree</a>
          </li>
          <li>
            <a href="/women">Pre-Stiched Sarees</a>
          </li>
        </ol>

        <ol className="list-disc p-3">
          <li>
            <a href="/women">Kerala Sarees</a>
          </li>
          <li>
            <a href="/women">Uniform Sarees</a>
          </li>
          <li>
            <a href="/women">Tops</a>
          </li>
          <li>
            <a href="/women">Salwar Kameez</a>
          </li>
          <li>
            <a href="/women">Long Gowns</a>
          </li>
          <li>
            <a href="/women">Lehenga Chaoli</a>
          </li>
        </ol>

        <ol className="list-disc p-3">
          <li>
            <a href="/women">Dress Material</a>
          </li>
          <li>
            <a href="/women">Shawl</a>
          </li>
          <li>
            <a href="/women">Sweatshirt&apos;s &amp; Sweater&rsquo;s</a>
          </li>
          <li>
            <a href="/women">Women Nightwear</a>
          </li>
          <li>
            <a href="/women">Readymade Blouse</a>
          </li>
          <li>
            <a href="/women">Maternity Dresses</a>
          </li>
        </ol>
      </div>
    </div>
  );
}

function SubcategoryKids({ kids }) {
  return (
    <div
      className={
        kids
          ? "z-10 transform translate-y-0 duration-200 font-primary block absolute -bottom-64 bg-[#fafafa] p-4 shadow-xl w-[70vh] rounded-xl"
          : "z-10 transform -translate-y-[300%] duration-200 font-primary block absolute -bottom-20 bg-[#fafafa] p-4 shadow-xl w-[70vh]"
      }
    >
      <div className="flex justify-between">
        <ol className="list-disc p-3 pl-10">
          <h2 className="text-xl font-bold">Girls Clothing</h2>
          <li>
            <a href="/kids">Western Dresses</a>
          </li>
          <li>
            <a href="/kids">Frocks</a>
          </li>
          <li>
            <a href="/kids">Party Wear Dresses</a>
          </li>
          <li>
            <a href="/kids">Girls Tops</a>
          </li>
          <li>
            <a href="/kids">Salwar</a>
          </li>
          <li>
            <a href="/kids">Firls Bottom Wear</a>
          </li>
        </ol>

        <ol className="list-disc p-3">
          <h2 className="text-xl font-bold">Boys Clothing</h2>
          <li>
            <a href="/kids">Boys Dhoti Sets</a>
          </li>
          <li>
            <a href="/kids">Boys Dress</a>
          </li>
          <li>
            <a href="/kids">Boys Shirts</a>
          </li>
          <li>
            <a href="/kids">Boys Trousers</a>
          </li>
          <li>
            <a href="/kids">Boys T-Shirts</a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Header;
