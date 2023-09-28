import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data } from "../constants/Data";
import { Link } from "react-router-dom";

import starfull from "../assets/starfull.png";

const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="carousel-button-group mb-4 gap-4 flex justify-between items-center w-full mt-4">
      <h1 className="text-4xl font-bold basis-[100%] text-center font-primary">
        NEW ARRIVALS
      </h1>
      <div className="flex">
        <button className="block p-3 " onClick={() => previous()}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.70406 4.4541L2.95406 11.2041C2.84918 11.3086 2.76597 11.4328 2.70919 11.5696C2.6524 11.7063 2.62317 11.8529 2.62317 12.001C2.62317 12.149 2.6524 12.2957 2.70919 12.4324C2.76597 12.5691 2.84918 12.6933 2.95406 12.7979L9.70406 19.5479C9.91541 19.7592 10.2021 19.8779 10.5009 19.8779C10.7998 19.8779 11.0865 19.7592 11.2978 19.5479C11.5092 19.3365 11.6279 19.0499 11.6279 18.751C11.6279 18.4521 11.5092 18.1654 11.2978 17.9541L6.46875 13.125L20.25 13.125C20.5484 13.125 20.8345 13.0065 21.0455 12.7955C21.2565 12.5846 21.375 12.2984 21.375 12C21.375 11.7017 21.2565 11.4155 21.0455 11.2045C20.8345 10.9936 20.5484 10.875 20.25 10.875L6.46875 10.875L11.2987 6.04598C11.5101 5.83463 11.6288 5.54799 11.6288 5.2491C11.6288 4.95022 11.5101 4.66357 11.2987 4.45223C11.0874 4.24088 10.8008 4.12215 10.5019 4.12215C10.203 4.12215 9.91634 4.24088 9.705 4.45223L9.70406 4.4541Z"
              fill="black"
            />
          </svg>
        </button>
        <button onClick={() => next()}>
          <span className="block p-3 ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2959 4.4541L21.0459 11.2041C21.1508 11.3086 21.234 11.4328 21.2908 11.5696C21.3476 11.7063 21.3768 11.8529 21.3768 12.001C21.3768 12.149 21.3476 12.2957 21.2908 12.4324C21.234 12.5691 21.1508 12.6933 21.0459 12.7979L14.2959 19.5479C14.0846 19.7592 13.7979 19.8779 13.4991 19.8779C13.2002 19.8779 12.9135 19.7592 12.7022 19.5479C12.4908 19.3365 12.3721 19.0499 12.3721 18.751C12.3721 18.4521 12.4908 18.1654 12.7022 17.9541L17.5313 13.125L3.75 13.125C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5846 2.625 12.2984 2.625 12C2.625 11.7017 2.74353 11.4155 2.95451 11.2045C3.16548 10.9936 3.45163 10.875 3.75 10.875L17.5313 10.875L12.7013 6.04598C12.4899 5.83463 12.3712 5.54799 12.3712 5.2491C12.3712 4.95022 12.4899 4.66357 12.7013 4.45223C12.9126 4.24088 13.1992 4.12215 13.4981 4.12215C13.797 4.12215 14.0837 4.24088 14.295 4.45223L14.2959 4.4541Z"
                fill="black"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

ButtonGroup.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  carouselState: PropTypes.shape({
    currentSlide: PropTypes.number.isRequired,
  }).isRequired,
};

const NewArrivals = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="w-[85%] mx-auto relative flex flex-col-reverse mb-5 pb-5">
        <Carousel
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
        >
          {data
            .filter((item) => item.category === "men")
            .map((item) => (
              <Link
                key={item.id}
                className="cursor-pointer mx-9 font-primary"
                to={`/productdetails/${item.id}`}
                onClick={() => console.log(item.id)}
              >
                <img src={item.img} className="rounded-xl" />
                <h3 className=" text-lg font-bold">{item.title}</h3>
                <div className="flex gap-2">
                  <img src={starfull} alt="starfull" className="w-4 h-4" />
                  <img src={starfull} alt="starfull" className="w-4 h-4" />
                  <img src={starfull} alt="starfull" className="w-4 h-4" />
                  <img src={starfull} alt="starfull" className="w-4 h-4" />

                  <p>{item.rating}</p>
                </div>
              </Link>
            ))}
        </Carousel>
      </div>
      <div className="flex justify-center items-center mb-4 border-b-2 pb-3 mx-16">
        <button className="  p-3 px-24 bg-white rounded-full border-2 text-black">
          See More
        </button>
      </div>
    </>
  );
};

export default NewArrivals;
