import { useState } from "react"
import { FaArrowDown, FaArrowUp } from "react-icons/fa"

const QuestionCard = ({qst,desc,item}) => {
    const [show, setShow] = useState(false);
    const [isClicked, setIsClicked] = useState(false)

    const showDesc = ()=>{
        
        setShow(prev=> !prev)
        setIsClicked(prev=> !prev)
    }

  return (
    <div onClick={showDesc} className={`q-a-card ${isClicked ? 'clicked' : ''}`}>
        <div className="header-card">
            <h2>{qst}</h2>
            <button  className="btn-card">{show ? <FaArrowUp /> : <FaArrowDown />}</button>
        </div>
        {show ? <p className="desc-card">{desc}</p>  : ''}
            
    </div>
  )
}

export default QuestionCard