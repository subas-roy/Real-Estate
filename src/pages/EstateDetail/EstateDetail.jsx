import { Helmet } from "react-helmet";
import Navbar from "../../shared/Navbar/Navbar";
import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";

const EstateDetail = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const estate = estates.find(estate => estate.id == id);
  return (
    <div>
      <Helmet>
        <title>Real Estate | Estate Detail</title>
      </Helmet>
      <Navbar />

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="col-span-2">
          <div className="sm:flex gap-6 justify-between items-start my-10">
            <div>
              <div className="flex justify-start gap-6 items-center">
                <h2 className="text-3xl">{estate.estate_title}</h2>
                <span>For {estate.status}</span>
              </div>
              <p>{estate.location}</p>
            </div>
            <div>
              <h2 className="text-3xl">{estate.price}</h2>
              <p>{estate.area}</p>
            </div>
          </div>
          <div>
            <img src={estate.image} alt="" />
          </div>
          <div>
            <p className="font-bold text-lg">Description</p>
            <p>{estate.description}</p>
          </div>
        </div>

        <div>

        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default EstateDetail;