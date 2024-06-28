import { createContext, useContext, useState } from "react";
import { todaysProduct } from "../constants/todayProduct";

const SliderContext = createContext();

function SliderProvider({ children }) {
  const items = todaysProduct;
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };
  return (
    <SliderContext.Provider
      value={{ items, currentIndex, handlePrevClick, handleNextClick }}
    >
      {children}
    </SliderContext.Provider>
  );
}

function useSlider() {
  const context = useContext(SliderContext);
  if (context === undefined)
    throw new Error("Slider Context was used outside Provider");

  return context;
}

export { SliderProvider, useSlider };
