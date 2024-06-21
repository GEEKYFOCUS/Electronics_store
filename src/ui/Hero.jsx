import { ImAppleinc } from "react-icons/im";
import { Link } from "react-router-dom";
import { Product_preview } from "../constants/product_preview";
import { useState } from "react";
function Hero() {
  const [activeContent, setActiveContent] = useState(0);
  console.log(activeContent);
  function handleClick(id) {
    // console.log(index);
    setActiveContent(id);
  }
  const productSlider = Product_preview.at(activeContent);

  console.log(productSlider);
  return (
    <div className=" pt-16  pl-8 flex-1 relative">
      <div className="bg-black flex pt-12 py-5 justify-center font-poppin  rounded-sm ">
        <div className="text-white space-y-1 pt-12">
          <h3 className="flex gap-4 text-4xl  items-center ">
            <ImAppleinc className="text-5xl" />
            <span className="text-xl">{productSlider.name}</span>
          </h3>
          <p className="text-6xl font-[400] leading-snug tracking-wide">
            Up to {productSlider.discount}% <br /> off Voucher
          </p>
          <Link
            className="space-x-2 flex items-center content-center font-inter hover:text-white/45"
            to=""
          >
            <span className="pb-1 border-b border-b-white/95 "> Shop now</span>
            <span className="text-2xl">&rarr;</span>
          </Link>
        </div>
        <div>
          <img src={productSlider.image} alt="Slider_Product " height={40} />
        </div>
      </div>
      <EllipseIcon handleClick={handleClick} currentContent={activeContent} />
    </div>
  );
}

function EllipseIcon({ handleClick, currentContent }) {
  const sliderIcon = Product_preview;
  return (
    <div className="flex gap-2  justify-center absolute bottom-4  left-[45%]">
      {sliderIcon.map((icon, i) => (
        <div
          key={icon.id}
          className={`h-3 aspect-square rounded-full ${
            currentContent === icon.id ? "bg-orange-400" : "bg-white/90"
          }`}
          onClick={() => handleClick(icon.id)}
        ></div>
      ))}
    </div>
  );
}
export default Hero;
