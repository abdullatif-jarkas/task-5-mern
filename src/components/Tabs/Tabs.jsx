import { useState } from 'react'
import './Tabs.css'

const Tabs = ({ data, filter }) => {

  const [active, setActive] = useState(0)

  return (
    <div className='tabs'>
      {
        data.map((item, index) => (
          <button key={index} className={`tab ${active == index? "active" : ""}`} onClick={() => setActive(index) & filter(item.cat)}>{item.category}</button>
        ))
      }
    </div>
  )
}

export default Tabs