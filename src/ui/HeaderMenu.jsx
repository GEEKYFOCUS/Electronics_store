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
    <div className="flex gap-4 content-center">
      <div className="px-4 py-2 flex bg-[#F5F5F5] rounded-md">
        <input
          type="text"
          placeholder="What are you looking for"
          className="bg-transparent text-xs outline-none border-none px-1"
        />
        <span>
          <IoSearchOutline />
        </span>
      </div>
      <button className="p-2" onClick={handleWishList}>
        <HiOutlineHeart className="text-xl" />
      </button>

      <Link
        to="/carts"
        className="p-2 inline-block text-center cursor-pointer relative "
      >
        <IoCartOutline className="text-xl" />
        {
          totalItemInCart > 0 ? (
            <span className="absolute -top-0 right-1 block text-xs bg-black text-white  w-4 h-4 aspect-square rounded-full ">
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
