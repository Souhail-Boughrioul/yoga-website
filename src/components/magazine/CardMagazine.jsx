
const CardMagazine = ({item,date,time,title,src}) => {
  return (
    <div className={`card card-${item}`}>
        <div className="img-container">
            <img src={src} alt="picture-card" />
        </div>
        <div className="card-info">
            <h2>{title}</h2>
            <p>{date} <span>{time}</span></p>
        </div>
    </div>
  )
}

export default CardMagazine