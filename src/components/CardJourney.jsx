
const CardJourney = ({step,title,desc,classContainer}) => {
  return (
    <div className={`card-journey ${classContainer}`}>
        <h1>{step}</h1>
        <div className="card-desc">
            <h2>{title}</h2>
            <p>{desc}</p>
            <button className="btn-card">Take mental health quiz</button>
        </div>
    </div>
  )
}

export default CardJourney