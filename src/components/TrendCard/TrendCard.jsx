import "./TrendCard.css";

const TrendCard = ({ img, price, text, location }) => {
  return (
    <div className="trend-card">
      <img src={img} className="trend-img" alt="trend img" loading="lazy" />
      <div className="card-info">
        <div className="card-text">
          <span className="price">{price}</span>
          <h5>{text}</h5>
        </div>
        <div className="card-location">
          <img src="assets/imgs/trend-location.svg" alt="location" loading="lazy" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default TrendCard;
