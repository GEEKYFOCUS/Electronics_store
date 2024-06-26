import { useSlider } from "../contexts/Slider";
import ArrowButton from "./ArrowButton";
import Carousel from "./Carousel";
import Categories from "./Categories";
import SalesCountDown from "./SalesCountDown";

function BestSellingSection() {
  const { bestSelling } = useSlider();
  return (
    <section className="mt-8 pt-4 pb-12    ">
      <h2 className="before:content-['-'] before:mr-4 before:rounded-md before:bg-red-500 before:h-12 before:w-6  before:inline-block   text-red-500 font-bold text-xl ">
        <span className="inline-block align-middle">This month</span>
        {/* Today's */}
      </h2>
      <div className=" flex items-center content-center justify-between gap-x-28">
        <h2 className="font-inter text-4xl  font-bold">
          {" "}
          Best Selling Product
        </h2>

        <ArrowButton type="view" />
      </div>

      <Carousel items={bestSelling} type="bestSelling" />
      {/* <div className="text-center mt-8 pb-2 ">
        <button className="  text-center text-white bg-red-500 px-4 py-2 rounded-sm font-inter font-[500]">
          View All Products
        </button>
      </div> */}
      <Categories />
    </section>
  );
}

export default BestSellingSection;
