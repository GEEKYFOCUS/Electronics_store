import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineHeart } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";

function HeaderMenu() {
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
      <button className="p-2">
        <HiOutlineHeart className="text-xl" />
      </button>

      <button className="p-2">
        <IoCartOutline className="text-xl" />
      </button>
    </div>
  );
}

export default HeaderMenu;
