import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineHeart } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function HeaderMenu() {
  const navigate = useNavigate();

  function handleWishList() {
    navigate("/wishlist");
  }

  const cart = useSelector((state) => state.cart.cart);
  const totalItemInCart = cart.length;
  return (
    <div className="flex     gap-x-2 md:gap-4 content-center">
      <div className="px-4 py-2 flex bg-[#F5F5F5] rounded-md">
        <input
          type="text"
          placeholder="What are you looking for"
          className="bg-transparent text-xs w-full outline-none border-none px-1 placeholder:text-xs placeholder:md:text-base"
        />
        <span>
          <IoSearchOutline className="text-xs md:text-base" />
        </span>
      </div>
<<<<<<< HEAD
      <button className="p-2" onClick={handleWishList}>
        <HiOutlineHeart className="text-xl" />
=======
      <button className="p-2">
        <HiOutlineHeart className="md:text-xl text-sm" />
>>>>>>> 8e9a510ca2bc7b979662881220b1b3dedeb39272
      </button>

      <Link
        to="/carts"
        className="p-2 inline-block text-center cursor-pointer relative "
      >
        <IoCartOutline className=" text-md md:text-xl" />
        {
          totalItemInCart > 0 ? (
            <span className="absolute -top-0 right-1 block md:text-xs text-[1rem] bg-black text-white  md:w-4 md:h-4 w-[1rem]  h-[1rem] aspect-square rounded-full ">
              {totalItemInCart}
            </span>
          ) : null

          // Add your favorite icon or badge here
        }
      </Link>
    </div>
  );
}

export default HeaderMenu;
