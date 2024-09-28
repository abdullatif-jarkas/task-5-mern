import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import Tabs from "../Tabs/Tabs";
import "./RealEstate.css";
import { tabsData } from "../../data/tabsData";
import EstateCard from "./EstateCard/EstateCard";

const RealEstate = ({ data }) => {
  return (
    <div className="real-estate">
      <Container>
        <SectionTitle
          title="Best Real Estate Deals"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
        />
        <Tabs data={tabsData} />
        <div className="estates-content">
          {data.map((item, index) => (
            <EstateCard key={index} img={item.img} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default RealEstate;
