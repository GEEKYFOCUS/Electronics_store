import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 px-8 py-12 overflow-auto">
        <main className="max-w-7xl mx-auto w-full">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
