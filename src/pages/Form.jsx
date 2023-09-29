import Header from "../constants/Header";
import Footer from "../constants/Footer";

function Form() {
  return (
    <>
      <Header />
      <FormSection />
      <Footer />
    </>
  );
}

function FormSection() {
  return (
    <div className="px-5 md:px-44 font-primary my-10">
      <h1 className="text-4xl">Enquiry Form</h1>
      <form className="text-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-3 text-xl mt-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="fname">
              First Name <span>*</span>
            </label>
            <input
              required
              type="text"
              id="fname"
              name="fname"
              placeholder="Your First Name"
              className="p-3 border-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lname">
              Last Name <span>*</span>
            </label>
            <input
              required
              type="text"
              id="lname"
              placeholder="Your Last Name"
              name="lname"
              className="p-3 border-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="cname">Company Name</label>
            <input
              type="text"
              name="cname"
              id="cname"
              placeholder="Company Name"
              className="p-3 border-2 rounded-md"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          <label htmlFor="address">
            Street Address <span>*</span>
          </label>
          <textarea
            required
            name="address"
            id="address"
            className="border-2 rounded-md p-3"
            rows="3"
          ></textarea>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-12 mt-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="State">
              State <span>*</span>
            </label>
            <input
              required
              type="text"
              name="State"
              id="State"
              placeholder="State"
              className="p-3 border-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="city">
              County / Region <span>*</span>
            </label>
            <input
              required
              type="text"
              name="city"
              id="city"
              placeholder="Country / Region"
              className="p-3 border-2 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
          <div className="mt-4 flex flex-col">
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              required
              type="email"
              name="email"
              className="p-3 border-2 rounded-md mt-2"
              id="email"
              placeholder="Email Address"
            />
          </div>
          <div className="mt-4 flex flex-col">
            <label htmlFor="number">
              Phone Number <span>*</span>
            </label>
            <input
              placeholder="Phone Number"
              required
              type="number"
              name="number"
              className="p-3 border-2 rounded-md mt-2"
              id="number"
            />
          </div>
        </div>

        <h2 className="text-4xl mt-12">Additional Info</h2>
        <div className="flex flex-col mt-3">
          <label htmlFor="message">
            Order Notes <span className="text-base ml-2">(Optional)</span>
          </label>
          <textarea
            name="message"
            id="message"
            className="border-2 rounded-md p-3"
            rows="3"
          ></textarea>
        </div>

        <div className="flex justify-center w-full mt-8">
          <button className="p-5 text-white w-1/2 bg-black rounded-xl">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
