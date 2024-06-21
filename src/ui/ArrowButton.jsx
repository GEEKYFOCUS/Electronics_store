import { HiOutlineArrowRight } from "react-icons/hi";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useSlider } from "../contexts/Slider";

function ArrowButton() {
  const { handlePrevClick, handleNextClick } = useSlider();
  return (
    <div className="flex items-center  gap-4">
      <button
        className="px-4  py-4 rounded-full bg-stone-300"
        onClick={() => handlePrevClick()}
      >
        <HiOutlineArrowRight className="lg:text-xl" />
      </button>
      <button
        className="px-4  py-4  rounded-full bg-stone-300"
        onClick={() => handleNextClick()}
      >
        <HiOutlineArrowLeft className="lg:text-xl" />
      </button>
    </div>
  );
}

export default ArrowButton;
