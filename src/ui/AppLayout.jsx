import { Outlet } from "react-router-dom";
// <<<<<<< HEAD
// import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";

function AppLayout() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 px-8 py-12 overflow-auto">
        <main className="max-w-7xl mx-auto w-full">
          {/* import NavBar from "./NavBar";

function AppLayout() {
  return (
    <div className="relative  min-h-screen">
      <NavBar />
      <div className="  px-8   py-12 ">
        <main className=" max-w-7xl mx-auto w-full ">
>>>>>>> 9d490597e342caa0ee885ddc7b7e9790475ffb34 */}
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
