import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="relative  min-h-screen">
      <Header />
      <div className=" flex-1  px-8   py-12 ">
        <main className=" max-w-7xl mx-auto w-full ">
          <Outlet />
        </main>
      </div>
      <footer>Footer</footer>
    </div>
  );
}

export default AppLayout;
