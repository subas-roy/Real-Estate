
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto font-lato">
      <Outlet />
    </div>
  );
};

export default Root;