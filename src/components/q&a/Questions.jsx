import { FaArrowDown, FaArrowUp } from "react-icons/fa"
import './Questions.css'
import { QUESTIONS } from "../../constants"
import QuestionCard from "./QuestionCard"

const Questions = () => {
  return (
    <div className="questions">
        <div className="container questions-content">
            <h1>Frequently asked <span>questions</span></h1>
            <div className="q-a">
                {QUESTIONS.map((card,index)=>(
                    <QuestionCard qst={card.qst} desc={card.desc} key={index} item={card.id}/>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Questions