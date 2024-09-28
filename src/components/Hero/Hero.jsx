import './Hero.css'
import HeroInfo from './HeroInfo/HeroInfo'
import { heroData } from '../../data/heroData'
import SectionTitle from '../SectionTitle/SectionTitle'

const Hero = ({ title, text }) => {
  return (
    <div className='hero'>
      <SectionTitle title={title} text={text} />
      <HeroInfo data={heroData} />
    </div>
  )
}

export default Hero