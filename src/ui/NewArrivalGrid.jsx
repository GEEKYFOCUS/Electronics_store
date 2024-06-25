import { Link } from "react-router-dom";

function NewArrivalGrid() {
  return (
    <div className="py-12 grid grid-cols-[1fr_1fr_1fr_1fr] gap-4 grid-rows-2 h-[40rem] text-white/90">
      <div className=" col-span-2 row-span-2 bg-[url('/img/newarrival1.png')] rounded-md px-12  relative  bg-origin-content  bg-black  bg-no-repeat  bg-auto bg-center ">
        <div className="absolute bottom-12  space-y-1">
          <h3 className="font-poppin font-[800] text-2xl">Play Station 5</h3>
          <p className="font-inter text-xs text-white/70">
            Black and White version of the PS5 <br /> coming out on sale.
          </p>
          <Link
            className="space-x-2 flex items-center content-center font-inter hover:text-white/45"
            to=""
          >
            <span className="pb-1 border-b border-b-white/95 "> Shop now</span>
            {/* <span className="text-2xl">&rarr;</span> */}
          </Link>
        </div>
      </div>
      <div className=" col-start-3 col-end-5 px-6  relative  bg-black rounded-md">
        <div className=" w-full h-full    bg-[url('/img/newarrival2.png')]  bg-no-repeat bg-auto bg-bottom ">
          <div className="absolute bottom-4 space-y-1">
            <h2 className="font-poppin font-[800] text-2xl">
              Women’s Collections
            </h2>
            <p className="font-inter text-xs text-white/70">
              Featured woman collections that <br /> give you another vibe.
            </p>
            <Link
              className="space-x-2 flex items-center content-center font-inter hover:text-white/45"
              to=""
            >
              <span className="pb-1 border-b border-b-white/95 ">Shop now</span>
              {/* <span className="text-2xl">&rarr;</span> */}
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black relative px-6 rounded-md">
        <div className="  h-full bg-[url('/img/newarrival3.png')] bg-no-repeat bg-center bg-conain ">
          <div className="absolute bottom-4 space-y-1">
            <h2 className="font-poppin font-[800] text-2xl">Speaker</h2>
            <p className="font-inter text-xs text-white/70">
              Amazon wireless speakers
            </p>
            <Link
              className="space-x-2 flex items-center content-center font-inter hover:text-white/45"
              to=""
            >
              <span className="pb-1 border-b border-b-white/95 ">Shop now</span>
              {/* <span className="text-2xl">&rarr;</span> */}
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black px-6 relative  rounded-md">
        <div className="  h-full bg-[url('/img/newarrival4.png')] bg-no-repeat bg-center bg-conain ">
          <div className="absolute bottom-16 space-y-1">
            <h2 className="font-poppin font-[800] text-2xl">Perfume</h2>
            <p className="font-inter text-xs text-white/70">
              GUCCI INTENSE OUD EDP
            </p>
            <Link
              className="space-x-2 flex items-center content-center font-inter hover:text-white/45"
              to=""
            >
              <span className="pb-1 border-b border-b-white/95 ">Shop now</span>
              {/* <span className="text-2xl">&rarr;</span> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrivalGrid;
