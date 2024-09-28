import './App.css'
import DreamHome from './components/DreamHome/DreamHome'
import Header from './components/Header/Header'
import HowItWorks from './components/HowItWorks/HowItWorks'
import MostTrending from './components/MostTrending/MostTrending'
import { worksData } from './data/worksData'
import { trendingData } from './data/trendingData'
import RealEstate from './components/RealEstate/RealEstate'
import { estatesData } from './data/estatesData'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <HowItWorks data={worksData} />
      <DreamHome />
      <MostTrending data={trendingData} />
      <RealEstate data={estatesData} />
      <Footer />
    </>
  )
}

export default App
