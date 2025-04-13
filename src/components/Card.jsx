
const Card = ({title,src,desc, classContainer}) => {
  return (
    <div className={`card ${classContainer}`}>
        <div className="head-card">
            <img src={src} alt="" />
            <h2>{title}</h2>
        </div>
        <p>{desc}</p>
    </div>
  )
}

export default Card