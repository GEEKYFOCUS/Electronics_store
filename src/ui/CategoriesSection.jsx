import { useSlider } from "../contexts/Slider";
import ArrowButton from "./ArrowButton";
import Carousel from "./Carousel";

function CategoriesSection() {
  const { categoryItems } = useSlider();
  return (
    <section className="mt-8 pt-4 pb-12  border-b ">
      <h2 className="before:content-['-'] before:mr-4 before:rounded-md before:bg-red-500 before:h-12 before:w-6  before:inline-block   text-red-500 font-bold text-xl ">
        <span className="inline-block align-middle">Categories</span>
        {/* Today's */}
      </h2>
      <div className=" flex items-center content-center justify-between gap-x-28">
        <h2 className="font-inter text-4xl  font-bold mt-2">
          Browse By Category
        </h2>

        <ArrowButton type="arrow" />
      </div>

      <Carousel type="category" items={categoryItems} />
    </section>
  );
}

export default CategoriesSection;
