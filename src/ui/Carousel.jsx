import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineEye } from "react-icons/ai";
import { formatCurrency } from "../utils/helpers";
import { BiSolidLeftArrowSquare } from "react-icons/bi";
import StarRating from "./StarRating";
import { useSlider } from "../contexts/Slider";
import { stringify } from "postcss";

export default function Carousel({ items, type }) {
  const { currentIndex } = useSlider();

  const [rating, setRating] = useState("");

  const getVisibleItems = () => {
    const start = currentIndex;
    const visibleItems = [];
    if (type === "today")
      for (let i = 0; i < 4; i++) {
        visibleItems.push(items[(start + i) % items.length]);
      }
    return visibleItems;
  };

  const visibleItems = getVisibleItems();
  if (type === "today")
    return (
      <div className="mt-12 flex justify-center ">
        <div className=" grid grid-cols-[1fr_1fr_1fr_1fr] gap-8  overflow-hidden w-4/5  ">
          {visibleItems.map((item, index) => (
            <div
              className="min-w-full   transition-transform   duration-500 ease-in-out rounded-sm "
              key={index}
              style={{
                transform: index === 4 ? "translateX(-20%)" : " ",
              }}
            >
              {/* //min-w-[15rem]  */}
              <div className="bg-stone-200 px-4 pt-4 rounded-sm ">
                <div className="flex justify-between items-center ">
                  <button className="-translate-y-6 bg-red-700 px-3 py-1 text-white/90 text-sm font-inter rounded-sm ">
                    -
                    {Math.floor(
                      ((item.price - item.discount) / item.price) * 100
                    )}
                    %
                  </button>
                  <div className="flex flex-col gap-y-2">
                    <button className="group  w-8 aspect-square rounded-full bg-white hover:bg-red-500 ">
                      <IoHeartOutline className="mx-auto   group-hover:stroke-slate-200" />
                    </button>
                    <button className="group  w-8 aspect-square rounded-full bg-white hover:bg-red-500 ">
                      <AiOutlineEye className="mx-auto  group-hover:text-white" />
                    </button>
                  </div>
                </div>

                <img
                  src={item.image}
                  alt={item.name}
                  className="max-w-40 w-full h-[10rem]  object-contain  -translate-y-8 pl-8 "
                />
              </div>
              {/* <button className="bg-black text-white w-full text-center  py-2 font-inter  hover:bg-black/70">
              <span> Add to cart</span>
            </button> */}
              <div className="flex flex-col gap-y-1 mt-3 mb-1">
                <button className="bg-black text-white w-full text-center py-2 font-inter font-[400] -translate-y-8 hover:bg-black/90">
                  Add to cart
                </button>
                <h3 className="text-md font-[500] font-poppin">{item.name}</h3>
                <p className="text-gray-600 space-x-2 ">
                  <span className="text-lg text-orange-600 font-[400]">
                    {formatCurrency(item.price - item.discount)}
                  </span>
                  <span className="text-sm text-black font-[400] !line-through">
                    {formatCurrency(item.price)}
                  </span>
                </p>
                <StarRating
                  maxRating={5}
                  size={20}
                  color="red"
                  onSetRating={setRating}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
