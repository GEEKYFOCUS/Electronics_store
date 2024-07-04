import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useSlider } from "../contexts/Slider";
import { addToCart } from "../features/cart/cartSlice";
import { formatCurrency } from "../utils/helpers";
import BestSellingItem from "./BestSellingItem";
import CategoryItem from "./CategoryItem";
import ProductItem from "./ProductItem";
import StarRating from "./StarRating";
import TodayItem from "./TodayItem";
<<<<<<< HEAD
=======
import CategoryItem from "./CategoryItem";
import BestSellingItem from "./BestSellingItem";
import ProductItem from "./ProductItem";
import useScreenWidth from "../hooks/useScreenWidth";
>>>>>>> 8e9a510ca2bc7b979662881220b1b3dedeb39272

export default function Carousel({ items, type }) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log(cart);
  const resize = useScreenWidth();
  console.log(resize);
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
  // const [cartItems, setCartItems] = useState();

  // <<<<<<< HEAD
  // =======
  const [rating, setRating] = useState("");
  console.log(rating);
  // >>>>>>> 398a0c0184624c13c9897a5a1f1fd1fadbc05ca6

  const getVisibleItems = () => {
    const start = currentIndex;
    const visibleItems = [];
    if (type === "today" || "bestSelling") {
      let maxDisplay;
      if (resize <= 768) maxDisplay = 2;
      if (resize <= 648) maxDisplay = 1;
      if (resize >= 800) maxDisplay = 2;
      if (resize >= 768) maxDisplay = 4;
      for (let i = 0; i < maxDisplay; i++) {
        visibleItems.push(items[(start + i) % items.length]);
      }
    }
    if (type === "category") {
      let maxDisplay;
      if (resize <= 768) maxDisplay = 2;
      if (resize <= 648) maxDisplay = -1;
      if (resize >= 1024) maxDisplay = 2;
      if (resize >= 800 && resize <= 1023) maxDisplay = 0;
      if (resize >= 768 && resize <= 800) maxDisplay = -1;
      for (let i = 0; i < maxDisplay; i++) {
        console.log(items.length);
        visibleItems.push(items[(start + i) % items.length]);
      }
    }
    if (type === "products") {
      let maxDisplay;
      if (resize <= 768) maxDisplay = 2;
      if (resize <= 648) maxDisplay = -1;
      if (resize >= 1024) maxDisplay = 4;
      if (resize >= 800 && resize <= 1023) maxDisplay = 0;
      if (resize >= 768 && resize <= 800) maxDisplay = -1;
      for (let i = 0; i < maxDisplay; i++) {
        visibleItems.push(items[(start + i) % items.length]);
      }
<<<<<<< HEAD
    // setCartItems(visibleItems);
=======
    }
>>>>>>> 8e9a510ca2bc7b979662881220b1b3dedeb39272
    return visibleItems;
  };

  // const { id, image, name, price } = visibleItems;
  // console.log(cartItems);

  function handleCart(id) {
    console.log(id.target);
  }

  const visibleItems = getVisibleItems();
  if (type === "today")
    return (
      <div className="mt-12 flex justify-center ">
        <div className=" grid lg:grid-cols-[1fr_1fr_1fr_1fr] md:grid-cols-[1fr_1fr]  grid-cols-[1fr] gap-8  overflow-hidden w-4/5  ">
          {visibleItems.map((item, index) => (
            <TodayItem item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    );
  if (type === "category")
    return (
      <div className="mt-12 px-2   flex">
        <div className=" grid lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr] grid-cols-[1fr] gap-4  overflow-hidden w-4/5 flex-1  ">
          {visibleItems.map((item, index) => (
            <CategoryItem item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    );
  if (type === "bestSelling")
    return (
      <div className="mt-12 flex justify-center ">
        <div className=" grid lg:grid-cols-[1fr_1fr_1fr_1fr] md:grid-cols-[1fr_1fr] grid-cols-[1fr]  gap-8  overflow-hidden w-4/5  ">
          {visibleItems.map((item, index) => (
            <BestSellingItem item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    );

  if (type === "products")
    return (
      <div className="mt-12 flex justify-center ">
        <div className=" grid lg:grid-cols-[1fr_1fr_1fr_1fr] md:grid-cols-[1fr_1fr] grid-cols-[1fr] gap-8  overflow-hidden w-4/5  flex-1 ">
          {visibleItems.map((item, index) => (
            <ProductItem item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    );
}
