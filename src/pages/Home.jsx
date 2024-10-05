import { Helmet } from "react-helmet";
import Navbar from "../shared/Navbar/Navbar";
import Slider from "../shared/Slider/Slider";
import { useLoaderData } from "react-router-dom";
import Estate from "./Estate";
import Footer from "../shared/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
  const estates = useLoaderData()
  return (
    <div>
      <Helmet>
        <title>Real Estate | Home</title>
      </Helmet>
      <Navbar/>
      <Slider/>
      <div className="my-32 max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-10 font-semibold">Estates</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-duration="1000">
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