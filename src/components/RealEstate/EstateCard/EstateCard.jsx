import "./EstateCard.css";

const EstateCard = ({ img }) => {
  return (
    <div className="estate-card">
      <div className="badges">
        <span>Featured</span>
        <span>3D</span>
      </div>
      <img src={img} alt="estate img" loading="lazy" />
    </div>
  );
};

export default EstateCard;
