import { Link } from "react-router-dom";

const Estate = ({estate}) => {
  const {id, estate_title, image, location, area, status, facilities, price} = estate;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <Link to={`/estate/${id}`}><h2 className="card-title">{estate_title}</h2></Link>
        <p>{location}</p>
        <div className="card-actions justify-end">
          <p>{price}</p>
          <p>{area}</p>
        </div>
      </div>
    </div>
  );
};

export default Estate;