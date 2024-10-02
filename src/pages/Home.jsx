import { Helmet } from "react-helmet";
import Navbar from "../shared/Navbar/Navbar";
import Slider from "../shared/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Real Estate | Home</title>
      </Helmet>
      <Navbar/>
      <Slider/>
    </div>
  );
};

export default Home;