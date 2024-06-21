import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function AppLayout() {
  return (
    <div className="relative  min-h-screen">
      <NavBar />
      <div className="  px-8   py-12 ">
        <main className=" max-w-7xl mx-auto w-full ">
          <Outlet />
        </main>
      </div>
      <footer>Footer</footer>
    </div>
  );
}

export default AppLayout;
