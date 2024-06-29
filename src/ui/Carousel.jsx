import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useSlider } from "../contexts/Slider";
import { addToCart } from "../features/cart/cartSlice";
import { formatCurrency } from "../utils/helpers";
import StarRating from "./StarRating";
import TodayItem from "./TodayItem";
import CategoryItem from "./CategoryItem";
import BestSellingItem from "./BestSellingItem";
import ProductItem from "./ProductItem";

export default function Carousel({ items, type }) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log(cart);

  function handleAddToCart(item) {
    const newItem = {
      id: item.id,
      name: item.name,
      quantity: 1,
      price: item.price * 1,
      image: item.image,
    };
    dispatch(addToCart(newItem));
  }

  console.log(cart);
  const { currentIndex } = useSlider();

  const [rating, setRating] = useState("");
  console.log(rating);

  const getVisibleItems = () => {
    const start = currentIndex;
    const visibleItems = [];
    if (type === "today" || "bestSelling")
      for (let i = 0; i < 4; i++) {
        visibleItems.push(items[(start + i) % items.length]);
      }
    if (type === "category")
      for (let i = 0; i < 2; i++) {
        console.log(items.length);
        visibleItems.push(items[(start + i) % items.length]);
      }
    if (type === "products")
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
            <TodayItem item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    );
  if (type === "category")
    return (
      <div className="mt-12 px-2   flex">
        <div className=" grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] gap-4  overflow-hidden w-4/5 flex-1  ">
          {visibleItems.map((item, index) => (
            <CategoryItem item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    );
  if (type === "bestSelling")
    return (
      <div className="mt-12 flex justify-center ">
        <div className=" grid grid-cols-[1fr_1fr_1fr_1fr] gap-8  overflow-hidden w-4/5  ">
          {visibleItems.map((item, index) => (
            <BestSellingItem item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    );

  if (type === "products")
    return (
      <div className="mt-12 flex justify-center ">
        <div className=" grid grid-cols-[1fr_1fr_1fr_1fr] gap-8  overflow-hidden w-4/5  flex-1 ">
          {visibleItems.map((item, index) => (
            <ProductItem item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    );
}
