import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

const ToolCard = ({title,first,second,classContainer}) => {
  return (
    <div className={`${classContainer}-info`}>
        <div className={`${classContainer}-desc`}>
            <h3>{title}</h3>
            <ul>
                <li>{first}</li>
                <li>{second}</li>
            </ul>   
        </div>
        <button className={`btn-${classContainer}`}><MdArrowOutward /></button> 
    </div>
  )
}

export default ToolCard