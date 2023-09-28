import Header from "../constants/Header";
import Footer from "../constants/Footer";

function Cart({ cart, setCart }) {
  console.log(cart);

  // Function to handle item deletion
  const handleDeleteItem = (itemId) => {
    // Filter the cart array to remove the item with the specified id
    const updatedCart = cart.filter((item) => item.id !== itemId);
    // Update the cart state with the new cart array
    setCart(updatedCart);
  };

  return (
    <>
      <Header />
      <CartSection cart={cart} onDelete={handleDeleteItem} />
      <Footer />
    </>
  );
}

function CartSection({ cart, onDelete }) {
  // Check if the cart is empty
  if (cart.length === 0) {
    return (
      <section className="flex flex-col font-primary px-7 md:px-44 mt-8 h-[40vh] justify-center items-center text-center">
        <h1 className="text-4xl font-semibold">Your Cart</h1>
        <p className="text-xl">
          Your cart is empty. Add items to your cart to see them here.
        </p>
      </section>
    );
  }

  return (
    <section className="flex flex-col font-primary px-7 md:px-44 mt-8">
      <h1 className="text-4xl font-semibold">Your Cart</h1>

      <div className="flex flex-col gap-3">
        {cart.map((item) => (
          <>
            <div
              key={item.id}
              className="p-4 flex rounded-xl border justify-between gap-3"
            >
              <div className="flex md:flex-row gap-5 flex-col">
                <img
                  className="rounded-xl h-[200px] w-[200px] mx-auto"
                  src={item.img}
                  alt={item.description}
                />
                <div className="ml-4 flex flex-col justify-center gap-2">
                  <h2 className="text-xl">{item.description}</h2>
                  <p>
                    Size : <span className="text-[#919191]">{item.size}</span>
                  </p>
                  <p>
                    Color : <span className="text-[#919191]">White</span>
                  </p>
                  <p>
                    Quantity :{" "}
                    <span className="text-[#919191]">{item.quantity}</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                {/* trash sign in fontawesome */}
                <i
                  className="fas fa-trash-alt"
                  onClick={() => onDelete(item.id)} // Call onDelete with the item id
                ></i>
              </div>
            </div>
          </>
        ))}

        <button className="group text-white bg-black md:w-1/2 w-full mx-auto rounded-full py-4 flex justify-center items-center gap-2">
          Go To Checkout
          {/* fontawesome right arrow */}
          <i className="group-hover:translate-x-4 duration-200 fas fa-arrow-right ml-4 text-xl"></i>
        </button>
      </div>
    </section>
  );
}

export default Cart;
