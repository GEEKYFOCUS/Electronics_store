import { NavLink, useLocation } from "react-router-dom";

function Carts() {
  const { pathName, path } = useLocation;
  console.log(pathName);
  console.log(path);

  return (
    <div className="px-8 m-4">
      <div className="flex items-center gap-2">
        <NavLink>Home /</NavLink>
        <NavLink>Carts</NavLink>
      </div>
    </div>
  );
}

export default Carts;
