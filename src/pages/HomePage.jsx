import { BsChatRightQuote } from "react-icons/bs";
import Header from "../ui/Header";
import TodaysSections from "../ui/TodaysSections";
import CategoriesSection from "../ui/CategoriesSection";
import BestSellingSection from "../ui/BestSellingSection";
import ProductSection from "../ui/ProductSection";
import FeaturedSection from "../ui/FeaturedSection";

function HomePage() {
  return (
    <div>
      <Header />
      <TodaysSections />
      <CategoriesSection />
      <BestSellingSection />
      <ProductSection />
      <FeaturedSection />
    </div>
  );
}

export default HomePage;
