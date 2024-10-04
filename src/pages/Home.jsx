import { Helmet } from "react-helmet";
import Navbar from "../shared/Navbar/Navbar";
import Slider from "../shared/Slider/Slider";
import { useLoaderData } from "react-router-dom";
import Estate from "./Estate";
import Footer from "../shared/Footer/Footer";

const Home = () => {
  const estates = useLoaderData()
  return (
    <div>
      <Helmet>
        <title>Real Estate | Home</title>
      </Helmet>
      <Navbar/>
      <Slider/>
      <div className="my-20">
        <h2 className="text-4xl text-center my-10">Estates</h2>
        <div className="grid grid-cols-4 gap-4">
          {
            estates.map(estate => <Estate key={estate.id} estate={estate}/>)
          }
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;