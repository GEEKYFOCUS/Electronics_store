import Delivery from "./Delivery";
import NewArrivalGrid from "./NewArrivalGrid";

function FeaturedSection() {
  return (
    <section className="mt-8 pt-4 pb-12  border-b ">
      <h2 className="before:content-['-'] before:mr-4 before:rounded-md before:bg-red-500 before:h-12 before:w-6  before:inline-block   text-red-500 font-bold text-xl ">
        <span className="inline-block align-middle">Featured</span>
        {/* Today's */}
      </h2>
      <div className="">
        <h2 className="font-inter text-4xl  font-bold mt-2">New Arrival</h2>
      </div>
      <NewArrivalGrid />
      <Delivery />
    </section>
  );
}

export default FeaturedSection;
