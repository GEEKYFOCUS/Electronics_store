import { NavLink, useLocation } from "react-router-dom";
import Button from "../ui/Button";
import RedButton from "../ui/RedButton";

function Carts() {
  const { pathName, path } = useLocation;
  console.log(pathName);
  console.log(path);

  return (
    <div className="md:px-12 my-24">
      <div className="flex items-center gap-2">
        <NavLink>Home /</NavLink>
        <NavLink>Carts</NavLink>
      </div>

      <div className="my-16">
        <div className="grid grid-cols-4 font-semibold md:space-x-10 space-x-4 shadow-sm drop-shadow-lg shadow-gray-500 py-4 md:px-6 px-2">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        <div className="py-6 grid my-8 grid-cols-4 items-center md:space-x-10 space-x-4 md:px-6">
          <div className="flex items-center md:gap-4 gap-2">
            <img src="img/screen.png" alt="" className="md:w-[20%] w-[35%]" />
            <p>LCD Monitor</p>
          </div>
          <p>$650</p>
          <input
            type="number"
            name=""
            id=""
            value="01"
            className="w-[22%] border md:px-3 md:py-2 border-black rounded-sm"
          />
          <p>$650</p>
        </div>
        <div className="py-6 grid my-8 grid-cols-4 items-center md:space-x-10 space-x-4 md:px-6">
          <div className="flex items-center md:gap-4 gap-2">
            <img src="img/redpad.png" alt="" className="w-[20%]" />
            <p>H1 Gamepad</p>
          </div>
          <p>$550</p>
          <input
            type="number"
            name=""
            id=""
            value="02"
            className="w-[22%] border md:px-3 md:py-2 border-black rounded-sm"
          />
          <p>$1110</p>
        </div>
      </div>

      <div className="flex justify-between py-6">
        <Button>Return To Shop</Button>
        <Button>Update Cart</Button>
      </div>

      <div className="md:flex justify-between my-14 md:my-24">
        <div className="space-x-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="rounded-md border px-4 py-3 outline-none"
          />
          <RedButton>Apply Coupon</RedButton>
        </div>

        <div className="border border-black px-6 md:w-[40%] py-8 my-10 md:my-0">
          <h1 className="font-semibold text-lg">Cart Total</h1>
          <div className="flex justify-between border-b border-slate-600 py-4 items-center gap-12">
            <p>Subtotal:</p>
            <p>$1750</p>
          </div>
          <div className="flex justify-between border-b border-slate-600 py-4 items-center gap-12">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between font-semibold py-4 items-center gap-12">
            <p>Total:</p>
            <p>$1750</p>
          </div>
          <button className="border py-3 px-12 my-2 flex justify-center mx-auto bg-[#db4444] cursor-pointer text-white rounded-md">
            Proceed to checkout{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carts;
