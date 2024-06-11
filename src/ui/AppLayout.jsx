import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <div className="  overflow-scroll px-8 py-12 ">
        <main className=" max-w-7xl mx-auto w-full ">
          <Outlet />
        </main>
      </div>
      <footer>Footer</footer>
    </div>
  );
}

export default AppLayout;
