import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import WorkCard from "../WorkCard/WorkCard";
import "./HowItWorks.css";

const HowItWorks = ({ data }) => {
  return (
    <div className="how-it-works">
      <Container>
        <SectionTitle
          title="How it Works"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
        />
        <div className="works-cards">
          {data.map((card, index) => (
            <WorkCard
              key={index}
              img={card.img}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HowItWorks;
