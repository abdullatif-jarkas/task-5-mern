import "./HeroInfo.css";

const HeroInfo = ({ data }) => {
  return (
    <div className="hero-info">
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <div className="info-img">
              <img src={item.img} alt="img" loading="lazy" />
            </div>
            <div className="info-text">
              <h5>{item.title}</h5>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroInfo;
