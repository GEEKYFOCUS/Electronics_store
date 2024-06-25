import { Link } from "react-router-dom";
import SalesCountDown from "./SalesCountDown";

function Categories() {
  return (
    <div className=" pt-16  pl-4 flex-1 relative mt-4">
      <div className="bg-black flex pt-12 py-12 gap-x-6   justify-center font-poppin  rounded-sm ">
        <div className="text-white space-y-6 pt-12">
          <h3 className="text-4xl  items-center ">
            <span className="text-xl text-green-500">Categories</span>
          </h3>
          <p className="text-5xl font-[400]  leading-snug tracking-wide">
            Enhance Your <br /> Music Experience
          </p>
          <SalesCountDown type="categories" />
          <Link
            className="  inline-block text-center transition-all duration-150 ease-in-out bg-green-500  hover:bg-white/90  font-inter px-8  py-3  hover:text-green-500 text-white text-md rounded-sm"
            to=""
          >
            Buy Now!
          </Link>
        </div>
        <div className=" flex items-center justify-center ">
          <img
            src="/img/Category.png"
            alt="Categories "
            // height={40}
            className=" h-76  bg-gradient-radial"
          />
        </div>
      </div>
    </div>
  );
}

export default Categories;
