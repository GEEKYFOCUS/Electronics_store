import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <h3>Header</h3>
      <div className="  overflow-scroll">
        <main className=" max-w-7xl">
          <Outlet />
        </main>
      </div>
      <footer>Footer</footer>
    </div>
  );
}

export default AppLayout;
