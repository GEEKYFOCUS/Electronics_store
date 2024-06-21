import { useState } from "react";
import { todaysProduct } from "../constants/todayProduct";
import Carousel from "./Carousel";
import SalesCountDown from "./SalesCountDown";
import ArrowButton from "./ArrowButton";
import { useSlider } from "../contexts/Slider";

const items = todaysProduct;

function TodaysSections() {
  const { items } = useSlider();
  return (
    <section className="mt-8 pt-4 pb-12 border-b   ">
      <h2 className="before:content-['-'] before:mr-4 before:rounded-md before:bg-red-500 before:h-12 before:w-6  before:inline-block   text-red-500 font-bold text-xl ">
        <span className="inline-block align-middle"> Today's</span>
        {/* Today's */}
      </h2>
      <div className=" flex items-center content-center justify-center gap-x-28">
        <h2 className="font-inter text-4xl  font-bold"> Flash Sales</h2>
        <SalesCountDown />
        <ArrowButton />
      </div>

      <Carousel items={items} type="today" />
      <div className="text-center mt-8 pb-2 border-b">
        <button className="  text-center text-white bg-red-500 px-4 py-2 rounded-sm font-inter font-[500]">
          View All Products
        </button>
      </div>
    </section>
  );
}

export default TodaysSections;
