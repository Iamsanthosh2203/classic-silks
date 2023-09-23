import { useState } from "react";
import x from "../assets/x.svg";

function Alert() {
  const [openAlert, setOpenAlert] = useState(true);

  return (
    openAlert && (
      <div className="flex py-4 px-8 md:px-24 justify-between bg-black text-white mb-2 font-primary tracking-wider font-semibold md:text-xl items-center">
        <div className="flex-grow text-center">
          Shop and get 20% off your first order.
        </div>
        <div
          onClick={() => setOpenAlert(false)}
          className="self-center cursor-pointer"
        >
          <img src={x} alt="close" />
        </div>
      </div>
    )
  );
}

export default Alert;
