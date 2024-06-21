import { FaRegTrashAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

function WishList() {
  return (
    <div className="md:px-8">
      <div className="flex justify-between py-6">
        <h1 className="text-2xl font-semibold">Wishlist (4)</h1>
        <button className="border py-2 px-6 font-semibold mx-12">
          Move All To Bag
        </button>
      </div>

      {/* items */}
      <div className="grid grid-cols-4">
        <div>
          <div className="bg-[#f5f5f5] rounded-md w-fit h-fit">
            <div className="flex justify-between px-3 py-3 items-center">
              <span className="bg-[#db4444] px-2 rounded-lg text-white">
                -35%
              </span>
              <span>
                <FaRegTrashAlt className="cursor-pointer bg-white p-[0.4rem] size-8 rounded-full" />
              </span>
            </div>

            <div className="py-[2.3rem] px-10">
              <img src="img/bag.png" alt="bag" className="w-fit object-cover" />
            </div>

            <div className="flex bg-black text-white items-center gap-2 py-3 rounded-b-md justify-center">
              <IoCartOutline />
              <button>Add to cart</button>
            </div>
          </div>
          <div className="py-2 font-semibold">
            <p>Gucci duffle bag</p>
            <p className="text-[#db4444] py-1">
              $960 <s className="text-stone-600">$1160</s>
            </p>
          </div>
        </div>

        <div>
          <div className="bg-[#f5f5f5] rounded-md w-fit h-fit ">
            <div className="flex justify-between px-3 py-2 items-center">
              <span className="bg-[#db4444] px-2 rounded-lg text-white">
                -35%
              </span>
              <span>
                <FaRegTrashAlt className="cursor-pointer bg-white p-[0.4rem] size-8 rounded-full" />
              </span>
            </div>

            <div className="py-4 px-10">
              <img
                src="img/speaker.png"
                alt="bag"
                className="w-fit object-cover"
              />
            </div>

            <div className="flex bg-black text-white items-center gap-2 py-3 rounded-b-md justify-center">
              <IoCartOutline />
              <button>Add to cart</button>
            </div>
          </div>
          <div className="py-2 font-semibold">
            <p>RGB liquid CPU Cooler</p>
            <p className="text-[#db4444] py-1">$1960</p>
          </div>
        </div>

        <div>
          <div className="bg-[#f5f5f5] rounded-md w-fit h-fit">
            <div className="flex justify-between px-3 py-2 items-center">
              <span className="bg-[#db4444] px-2 rounded-lg text-white">
                -35%
              </span>
              <span>
                <FaRegTrashAlt className="cursor-pointer bg-white p-[0.4rem] size-8 rounded-full" />
              </span>
            </div>

            <div className="py-4 px-10">
              <img
                src="img/game.png"
                alt="bag"
                className="w-fit object-cover"
              />
            </div>

            <div className="flex bg-black text-white items-center gap-2 py-3 rounded-b-md justify-center">
              <IoCartOutline />
              <button>Add to cart</button>
            </div>
          </div>
          <div className="py-2 font-semibold">
            <p>GP11 Shooter USB Gamepad</p>
            <p className="text-[#db4444] py-1">$550</p>
          </div>
        </div>

        <div>
          <div className="bg-[#f5f5f5] rounded-md w-fit h-fit">
            <div className="flex justify-between px-3 py-2 items-center">
              <span className="bg-[#db4444] px-2 rounded-lg text-white">
                -35%
              </span>
              <span>
                <FaRegTrashAlt className="cursor-pointer bg-white p-[0.4rem] size-8 rounded-full" />
              </span>
            </div>

            <div className="py-4 px-10">
              <img
                src="img/jacket.png"
                alt="bag"
                className="w-fit object-cover"
              />
            </div>

            <div className="flex bg-black text-white items-center gap-2 py-3 rounded-b-md justify-center">
              <IoCartOutline />
              <button>Add to cart</button>
            </div>
          </div>

          <div className="py-2 font-semibold">
            <p>Quilted Satin Jacket</p>
            <p className="text-[#db4444] py-1">$750</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between my-16">
        <div className="flex gap-4">
          <div className="bg-[#db4444] w-5 rounded-l-md"></div>
          <h1 className="text-2xl font-semibold">Just For You</h1>
        </div>
        <button className="border py-2 px-6 font-semibold mx-12">
          See All
        </button>
      </div>

      {/* view product */}

      <div className="grid grid-cols-4 my-6 py-8">
        <div>
          <div className="bg-[#f5f5f5] rounded-md w-fit h-fit ">
            <div className="flex justify-between px-3 py-2 items-center">
              <span className="bg-[#db4444] px-2 rounded-lg text-white">
                -35%
              </span>
              <span>
                <LuEye className="cursor-pointer bg-white p-[0.4rem] size-8 rounded-full" />
              </span>
            </div>

            <div className="py-4 px-10">
              <img
                src="img/screen.png"
                alt="bag"
                className="w-fit object-cover"
              />
            </div>

            <div className="flex bg-black text-white items-center gap-2 py-3 rounded-b-md justify-center">
              <IoCartOutline />
              <button>Add to cart</button>
            </div>
          </div>
          <div className="py-2 font-semibold">
            <p>IPS LCD Gaming Monitor</p>
            <p className="text-[#db4444] py-1">
              $1960 <s className="text-stone-600">$1160</s>
            </p>
            <span className="flex items-center gap-2">
              <img
                src="img/star.png"
                alt="bag"
                className="w-fit object-cover"
              />
              <p>(65)</p>
            </span>
          </div>
        </div>

        <div>
          <div className="bg-[#f5f5f5] rounded-md w-fit h-fit ">
            <div className="flex justify-end px-3 py-2 items-center">
              <span>
                <LuEye className="cursor-pointer bg-white p-[0.4rem] size-8 rounded-full" />
              </span>
            </div>

            <div className="py-6 px-[3.5rem]">
              <img src="img/pc.png" alt="bag" className="w-fit object-cover" />
            </div>

            <div className="flex bg-black text-white items-center gap-2 py-3 rounded-b-md justify-center">
              <IoCartOutline />
              <button>Add to cart</button>
            </div>
          </div>
          <div className="py-2 font-semibold">
            <p>ASUS FHD Gaming Laptop</p>
            <p className="text-[#db4444] py-1">$960</p>
            <span className="flex items-center gap-2">
              <img
                src="img/star.png"
                alt="bag"
                className="w-fit object-cover"
              />
              <p>(65)</p>
            </span>
          </div>
        </div>

        <div>
          <div className="bg-[#f5f5f5] rounded-md w-fit h-fit">
            <div className="flex justify-between px-3 py-2 items-center">
              <span className="bg-green-500 px-2 rounded-lg text-white">
                NEW
              </span>
              <span>
                <LuEye className="cursor-pointer bg-white p-[0.4rem] size-8 rounded-full" />
              </span>
            </div>

            <div className="py-8 px-14">
              <img
                src="img/redpad.png"
                alt="bag"
                className="w-fit object-cover"
              />
            </div>

            <div className="flex bg-black text-white items-center gap-2 py-3 rounded-b-md justify-center">
              <IoCartOutline />
              <button>Add to cart</button>
            </div>
          </div>
          <div className="py-2 font-semibold">
            <p>HAVIT HV-G92 Gamepad</p>
            <p className="text-[#db4444] py-1">$960</p>
            <span className="flex items-center gap-2">
              <img
                src="img/star.png"
                alt="bag"
                className="w-fit object-cover"
              />
              <p>(65)</p>
            </span>
          </div>
        </div>

        <div>
          <div className="bg-[#f5f5f5] rounded-md w-fit h-fit ">
            <div className="flex justify-end px-3 py-2 items-center">
              <span>
                <LuEye className="cursor-pointer bg-white p-[0.4rem] size-8 rounded-full" />
              </span>
            </div>

            <div className="py-4 px-10">
              <img
                src="img/keyboard.png"
                alt="bag"
                className="w-fit object-cover"
              />
            </div>

            <div className="flex bg-black text-white items-center gap-2 py-3 rounded-b-md justify-center">
              <IoCartOutline />
              <button>Add to cart</button>
            </div>
          </div>
          <div className="py-2 font-semibold">
            <p>AK-900 Wired Keyboard</p>
            <p className="text-[#db4444] py-1">$200</p>
            <span className="flex items-center gap-2">
              <img
                src="img/star.png"
                alt="bag"
                className="w-fit object-cover"
              />
              <p>(65)</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishList;
