import Header from "../constants/Header";
import Footer from "../constants/Footer";
import Alert from "../constants/Alert";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { data } from "../constants/Data";
import PropTypes from "prop-types";
import { useState } from "react";
import Customers from "../constants/Customers";
import RandomItems from "../constants/RandomItems";

function Productdetails({ cart, setCart }) {
  const { itemId } = useParams();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'auto' for instant scrolling
    });
  }

  scrollToTop();

  const id = data[itemId - 1];
  console.log(id);
  return (
    <>
      <Alert />
      <Header />
      <Productdetail id={id} setCart={setCart} cart={cart} />
      <Customers />
      <RandomItems />
      <Footer />
    </>
  );
}

function Productdetail({ id, cart, setCart }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [number, setNumber] = useState(1);

  const handlePurchaseClick = () => {
    // Check if a size is selected before adding to the cart
    if (selectedSize) {
      // Create a new cart item object
      const newItem = {
        id: id.id, // You can customize this based on your data structure
        size: selectedSize,
        quantity: number,
        description: id.description,
        img: id.img,
        title: id.title,
      };

      // Update the cart state by adding the new item
      setCart([...cart, newItem]);

      // Optionally, you can reset the selected size and quantity after adding to the cart
      setSelectedSize(null);
      setNumber(1);
    } else {
      // Show an alert or message indicating that a size must be selected
      alert("Please select a size before adding to the cart.");
    }
  };

  if (id.category === "men") {
    id.description =
      "Elevate your everyday attire with our exclusive men's pants collection. Discover a wide range of meticulously crafted pants designed to offer the perfect blend of comfort and style. From classic chinos for a polished look to rugged cargo pants for your outdoor adventures, our selection caters to every occasion and taste. Explore a variety of fits, materials, and colors to find the ideal pair that complements your personal style. Upgrade your wardrobe with our men's pants and experience a new level of confidence and sophistication";
    id.title = "Ultimate Comfort and Style: Men's Pants Collection";
  }

  if (id.category === "women") {
    id.description =
      "Discover the epitome of grace and style with our exquisite Women's Chudithar collection. Immerse yourself in a world of vibrant colors, intricate designs, and comfortable fabrics that redefine traditional Indian fashion. Embrace timeless elegance and make a statement wherever you go with our handpicked Chudithar ensembles, tailored to perfection for the modern woman. Elevate your wardrobe and celebrate the beauty of Indian ethnic wear with our stunning Chudithar collection today.";
    id.title = "Elegance Redefined: Women's Chudithar Collection";
  }

  if (id.category === "saree") {
    id.description =
      " Dive into the world of exquisite craftsmanship and tradition with our collection of women's sarees. Discover the artistry in every weave, the allure in every drape, and the grace in every silhouette. Our sarees are a celebration of femininity, offering a seamless blend of tradition and contemporary fashion. Whether you're attending a special occasion or simply want to make a statement, our sarees are designed to enhance your beauty and confidence. Explore a spectrum of colors, fabrics, and designs that cater to your unique style. Elevate your wardrobe with the timeless allure of sarees and embrace the epitome of Indian heritage and elegance.";
    id.title = "Elegance Unveiled: The Timeless Charm of Women's Sarees";
  }

  if (id.category === "kids") {
    id.description =
      "Discover a world of enchanting fashion for your little ones with our Whimsical Wonders kids' clothing collection. From adorable animal prints to magical fairy-tale designs, our clothing is specially crafted to ignite your child's imagination and keep them looking stylish and comfortable. Explore a colorful range of outfits that are perfect for playdates, school, or any adventure your child embarks on. Let your kids express their unique personalities with our delightful and durable clothing line that's designed with love for the little wonders in your life.";
    id.title = "Whimsical Wonders: Kids' Clothing Collection";
  }

  return (
    <section className="flex flex-col md:flex-row px-12 my-4 font-primary justify-evenly">
      <img
        className="rounded-xl h-auto md:h-96 basis-[20%]"
        src={id.img}
        alt={id.title}
      />
      <div className="flex flex-col basis-[30%]">
        <div className="py-6 border-y-2 mt-3">
          <h2 className="text-4xl my-2">{id.title}</h2>
          <p className="text-[#00000099] text-lg my-2">{id.description}</p>
        </div>

        <div className="flex flex-col gap-3 my-5">
          <p>Choose Size</p>
          <div className="flex gap-3 border-b-2 pb-6">
            <button
              className={`rounded-full text-[15px] p-2 md:py-4 md:px-8 font-bold md:text-lg ${
                selectedSize === "small"
                  ? "bg-black text-white"
                  : "bg-[#F0F0F0] text-[#00000099]"
              }`}
              onClick={() => setSelectedSize("small")}
            >
              Small
            </button>
            <button
              className={`rounded-full text-[16px] p-2 md:py-4 md:px-8 font-bold md:text-lg ${
                selectedSize === "medium"
                  ? "bg-black text-white"
                  : "bg-[#F0F0F0] text-[#00000099]"
              }`}
              onClick={() => setSelectedSize("medium")}
            >
              Medium
            </button>
            <button
              className={`rounded-full text-[16px] p-2 md:py-4 md:px-8 font-bold md:text-lg ${
                selectedSize === "large"
                  ? "bg-black text-white"
                  : "bg-[#F0F0F0] text-[#00000099]"
              }`}
              onClick={() => setSelectedSize("large")}
            >
              Large
            </button>
            <button
              className={`rounded-full text-[16px] p-2 md:py-4 md:px-8 font-bold md:text-lg ${
                selectedSize === "x-large"
                  ? "bg-black text-white"
                  : "bg-[#F0F0F0] text-[#00000099]"
              }`}
              onClick={() => setSelectedSize("x-large")}
            >
              X-Large
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center justify-between text-2xl gap-6 bg-[#F0F0F0] py-2 px-8 rounded-full">
            <button className="text-2xl font-bold">
              {/* generate font awesome minus symbol */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black hover:text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() =>
                  number <= 1 ? setNumber : setNumber(number - 1)
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </button>
            <p>{number}</p>
            <button className="">
              {/* generate add symbol */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black hover:text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setNumber(number + 1)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>

          <Link
            to={"/cart"}
            className="p-4 w-full hover:bg-[#d2d2d2] hover:text-black bg-black text-white rounded-full duration-300 text-center"
            onClick={handlePurchaseClick}
          >
            Purchase This Product
          </Link>
        </div>
      </div>
    </section>
  );
}

Productdetail.propTypes = {
  id: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    // Define other properties of 'id' here if needed
  }).isRequired,
};

export default Productdetails;
