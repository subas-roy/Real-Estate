
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="mx-auto font-lato">
      <Outlet />
    </div>
  );
};

export default Root;