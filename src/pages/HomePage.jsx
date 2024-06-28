import CategoriesSection from "../ui/CategoriesSection";
import Header from "../ui/Header";
import TodaysSections from "../ui/TodaysSections";

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
