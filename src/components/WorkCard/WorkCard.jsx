import './WorkCard.css'

const WorkCard = ({ img, title, text }) => {
  return (
    <div className='work-card'>
      <img src={img} alt="img" loading='lazy' />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default WorkCard