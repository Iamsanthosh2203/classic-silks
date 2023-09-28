import Alert from "../constants/Alert";
import Header from "../constants/Header";
import Footer from "../constants/Footer";
import right from "../assets/right.svg";
import { data } from "../constants/Data";
import { Link } from "react-router-dom";
import starfull from "../assets/starfull.png";
import { useState } from "react";

function Kids() {
  return (
    <>
      <Alert />
      <Header />
      <MenSection />
      <Footer />
    </>
  );
}

function MenSection() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(false);

  const sizeOptions = ["Small", "Medium", "Large", "X-Large", "XX-Large"];

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <section className="flex md:px-20 px-3 font-primary mt-10 justify-between">
      <div
        className={`${
          selectedFilter
            ? "transition-all -translate-y-0 duration-200"
            : "transition-all -translate-y-[400%] duration-200"
        } bg-white md:relative absolute md:-translate-y-0  flex-col p-4 rounded-xl border-2 md:flex bg-[#e7e7e71a] basis-[28%]`}
      >
        <div className="flex justify-between w-full px-4 border-b-2 pb-4">
          <p className="text-xl font-bold">Filters</p>
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setSelectedFilter(false)}
          >
            <path
              d="M12.125 9.625V18.25C12.125 18.5484 12.0065 18.8345 11.7955 19.0455C11.5845 19.2565 11.2984 19.375 11 19.375C10.7016 19.375 10.4155 19.2565 10.2045 19.0455C9.99353 18.8345 9.875 18.5484 9.875 18.25V9.625C9.875 9.32663 9.99353 9.04048 10.2045 8.8295C10.4155 8.61853 10.7016 8.5 11 8.5C11.2984 8.5 11.5845 8.61853 11.7955 8.8295C12.0065 9.04048 12.125 9.32663 12.125 9.625ZM17.75 16C17.4516 16 17.1655 16.1185 16.9545 16.3295C16.7435 16.5405 16.625 16.8266 16.625 17.125V18.25C16.625 18.5484 16.7435 18.8345 16.9545 19.0455C17.1655 19.2565 17.4516 19.375 17.75 19.375C18.0484 19.375 18.3345 19.2565 18.5455 19.0455C18.7565 18.8345 18.875 18.5484 18.875 18.25V17.125C18.875 16.8266 18.7565 16.5405 18.5455 16.3295C18.3345 16.1185 18.0484 16 17.75 16ZM20 12.25H18.875V1.75C18.875 1.45163 18.7565 1.16548 18.5455 0.954505C18.3345 0.743526 18.0484 0.625 17.75 0.625C17.4516 0.625 17.1655 0.743526 16.9545 0.954505C16.7435 1.16548 16.625 1.45163 16.625 1.75V12.25H15.5C15.2016 12.25 14.9155 12.3685 14.7045 12.5795C14.4935 12.7905 14.375 13.0766 14.375 13.375C14.375 13.6734 14.4935 13.9595 14.7045 14.1705C14.9155 14.3815 15.2016 14.5 15.5 14.5H20C20.2984 14.5 20.5845 14.3815 20.7955 14.1705C21.0065 13.9595 21.125 13.6734 21.125 13.375C21.125 13.0766 21.0065 12.7905 20.7955 12.5795C20.5845 12.3685 20.2984 12.25 20 12.25ZM4.25 13C3.95163 13 3.66548 13.1185 3.4545 13.3295C3.24353 13.5405 3.125 13.8266 3.125 14.125V18.25C3.125 18.5484 3.24353 18.8345 3.4545 19.0455C3.66548 19.2565 3.95163 19.375 4.25 19.375C4.54837 19.375 4.83452 19.2565 5.0455 19.0455C5.25647 18.8345 5.375 18.5484 5.375 18.25V14.125C5.375 13.8266 5.25647 13.5405 5.0455 13.3295C4.83452 13.1185 4.54837 13 4.25 13ZM6.5 9.25H5.375V1.75C5.375 1.45163 5.25647 1.16548 5.0455 0.954505C4.83452 0.743526 4.54837 0.625 4.25 0.625C3.95163 0.625 3.66548 0.743526 3.4545 0.954505C3.24353 1.16548 3.125 1.45163 3.125 1.75V9.25H2C1.70163 9.25 1.41548 9.36853 1.2045 9.5795C0.993526 9.79048 0.875 10.0766 0.875 10.375C0.875 10.6734 0.993526 10.9595 1.2045 11.1705C1.41548 11.3815 1.70163 11.5 2 11.5H6.5C6.79837 11.5 7.08452 11.3815 7.2955 11.1705C7.50647 10.9595 7.625 10.6734 7.625 10.375C7.625 10.0766 7.50647 9.79048 7.2955 9.5795C7.08452 9.36853 6.79837 9.25 6.5 9.25ZM13.25 4.75H12.125V1.75C12.125 1.45163 12.0065 1.16548 11.7955 0.954505C11.5845 0.743526 11.2984 0.625 11 0.625C10.7016 0.625 10.4155 0.743526 10.2045 0.954505C9.99353 1.16548 9.875 1.45163 9.875 1.75V4.75H8.75C8.45163 4.75 8.16548 4.86853 7.9545 5.0795C7.74353 5.29048 7.625 5.57663 7.625 5.875C7.625 6.17337 7.74353 6.45952 7.9545 6.6705C8.16548 6.88147 8.45163 7 8.75 7H13.25C13.5484 7 13.8345 6.88147 14.0455 6.6705C14.2565 6.45952 14.375 6.17337 14.375 5.875C14.375 5.57663 14.2565 5.29048 14.0455 5.0795C13.8345 4.86853 13.5484 4.75 13.25 4.75Z"
              fill="black"
              fillOpacity="0.4"
            />
          </svg>
        </div>
        <div className="flex w-full flex-col mt-4 gap-3">
          <div className="flex w-full justify-between px-4 text-lg">
            <Link to={"/men"}>Men</Link>
            <img src={right} alt="right" />
          </div>
          <div className="flex w-full justify-between px-4 text-lg">
            <Link to={"/women"}>Women</Link>
            <img src={right} alt="right" />
          </div>
          <div className="flex w-full justify-between px-4 text-lg">
            <Link to={"/kids"}>Kids</Link>
            <img src={right} alt="right" />
          </div>
          <div className="flex w-full justify-between px-4 text-lg">
            <a href="men">Wedding</a>
            <img src={right} alt="right" />
          </div>
          <div className="flex w-full justify-between px-4 text-lg">
            <a href="men">Formals</a>
            <img src={right} alt="right" />
          </div>
          <div className="flex w-full justify-between px-4 text-lg">
            <a href="men">Casuals</a>
            <img src={right} alt="right" />
          </div>
          <div className="flex w-full justify-between px-4 text-lg">
            <a href="men">Party Wears</a>
            <img src={right} alt="right" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold px-4 mt-7">Sizes</h2>
          <div className="flex gap-2 flex-wrap">
            {sizeOptions.map((size) => (
              <button
                key={size}
                className={`px-6 py-3 rounded-3xl mt-4 ${
                  selectedSize === size ? "bg-black text-white" : "bg-[#F0F0F0]"
                }`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:basis-[70%]">
        <div className="flex justify-between">
          <h3 className="text-4xl font-bold">Kids</h3>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setSelectedFilter(true)}
          >
            <path
              d="M7.75 6.75V12.5C7.75 12.6989 7.67098 12.8897 7.53033 13.0303C7.38968 13.171 7.19891 13.25 7 13.25C6.80109 13.25 6.61032 13.171 6.46967 13.0303C6.32902 12.8897 6.25 12.6989 6.25 12.5V6.75C6.25 6.55109 6.32902 6.36032 6.46967 6.21967C6.61032 6.07902 6.80109 6 7 6C7.19891 6 7.38968 6.07902 7.53033 6.21967C7.67098 6.36032 7.75 6.55109 7.75 6.75ZM11.5 11C11.3011 11 11.1103 11.079 10.9697 11.2197C10.829 11.3603 10.75 11.5511 10.75 11.75V12.5C10.75 12.6989 10.829 12.8897 10.9697 13.0303C11.1103 13.171 11.3011 13.25 11.5 13.25C11.6989 13.25 11.8897 13.171 12.0303 13.0303C12.171 12.8897 12.25 12.6989 12.25 12.5V11.75C12.25 11.5511 12.171 11.3603 12.0303 11.2197C11.8897 11.079 11.6989 11 11.5 11ZM13 8.5H12.25V1.5C12.25 1.30109 12.171 1.11032 12.0303 0.96967C11.8897 0.829018 11.6989 0.75 11.5 0.75C11.3011 0.75 11.1103 0.829018 10.9697 0.96967C10.829 1.11032 10.75 1.30109 10.75 1.5V8.5H10C9.80109 8.5 9.61032 8.57902 9.46967 8.71967C9.32902 8.86032 9.25 9.05109 9.25 9.25C9.25 9.44891 9.32902 9.63968 9.46967 9.78033C9.61032 9.92098 9.80109 10 10 10H13C13.1989 10 13.3897 9.92098 13.5303 9.78033C13.671 9.63968 13.75 9.44891 13.75 9.25C13.75 9.05109 13.671 8.86032 13.5303 8.71967C13.3897 8.57902 13.1989 8.5 13 8.5ZM2.5 9C2.30109 9 2.11032 9.07902 1.96967 9.21967C1.82902 9.36032 1.75 9.55109 1.75 9.75V12.5C1.75 12.6989 1.82902 12.8897 1.96967 13.0303C2.11032 13.171 2.30109 13.25 2.5 13.25C2.69891 13.25 2.88968 13.171 3.03033 13.0303C3.17098 12.8897 3.25 12.6989 3.25 12.5V9.75C3.25 9.55109 3.17098 9.36032 3.03033 9.21967C2.88968 9.07902 2.69891 9 2.5 9ZM4 6.5H3.25V1.5C3.25 1.30109 3.17098 1.11032 3.03033 0.96967C2.88968 0.829018 2.69891 0.75 2.5 0.75C2.30109 0.75 2.11032 0.829018 1.96967 0.96967C1.82902 1.11032 1.75 1.30109 1.75 1.5V6.5H1C0.801088 6.5 0.610322 6.57902 0.46967 6.71967C0.329018 6.86032 0.25 7.05109 0.25 7.25C0.25 7.44891 0.329018 7.63968 0.46967 7.78033C0.610322 7.92098 0.801088 8 1 8H4C4.19891 8 4.38968 7.92098 4.53033 7.78033C4.67098 7.63968 4.75 7.44891 4.75 7.25C4.75 7.05109 4.67098 6.86032 4.53033 6.71967C4.38968 6.57902 4.19891 6.5 4 6.5ZM8.5 3.5H7.75V1.5C7.75 1.30109 7.67098 1.11032 7.53033 0.96967C7.38968 0.829018 7.19891 0.75 7 0.75C6.80109 0.75 6.61032 0.829018 6.46967 0.96967C6.32902 1.11032 6.25 1.30109 6.25 1.5V3.5H5.5C5.30109 3.5 5.11032 3.57902 4.96967 3.71967C4.82902 3.86032 4.75 4.05109 4.75 4.25C4.75 4.44891 4.82902 4.63968 4.96967 4.78033C5.11032 4.92098 5.30109 5 5.5 5H8.5C8.69891 5 8.88968 4.92098 9.03033 4.78033C9.17098 4.63968 9.25 4.44891 9.25 4.25C9.25 4.05109 9.17098 3.86032 9.03033 3.71967C8.88968 3.57902 8.69891 3.5 8.5 3.5Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 mt-5 gap-4">
          {data
            .filter((item) => item.category === "kids")
            .map((item) => (
              <Link to={`/productdetails/${item.id}`} key={item.id}>
                <img
                  className="rounded-xl h-[400px] w-full object-cover"
                  src={item.img}
                  alt={item.title}
                />
                <div className="mt-2">
                  <h5 className="text-xl font-bold px-2">{item.title}</h5>
                  <div className="flex gap-2 px-2">
                    <img src={starfull} alt="starfull" className="w-4 h-4" />
                    <img src={starfull} alt="starfull" className="w-4 h-4" />
                    <img src={starfull} alt="starfull" className="w-4 h-4" />
                    <img src={starfull} alt="starfull" className="w-4 h-4" />

                    <p>{item.rating}</p>
                  </div>
                  <p className="px-2">{item.description}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Kids;
