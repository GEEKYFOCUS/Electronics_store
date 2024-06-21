import { BsChatRightQuote } from "react-icons/bs";
import Header from "../ui/Header";
import TodaysSections from "../ui/TodaysSections";
import CategoriesSection from "../ui/CategoriesSection";

function HomePage() {
  return (
    <div>
      <Header />
      <TodaysSections />
      <CategoriesSection />
    </div>
  );
}

export default HomePage;
