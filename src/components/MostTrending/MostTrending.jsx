import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'
import TrendCard from '../TrendCard/TrendCard'
import './MostTrending.css'

const MostTrending = ({ data }) => {
  return (
    <div className='most-trending'>
      <Container>
        <SectionTitle title="Most Trending" text="Lorem ipsum dolor sit amet, consectetur adipiscing eli" />
        <div className="cards-container">
          {
            data.map((card, index) => (
              <TrendCard key={index} img={card.img} price={card.price} text={card.text} location={card.location} />
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default MostTrending