import CardMagazine from '../../components/magazine/CardMagazine'
import { MAGAZINE } from '../../constants'
import './Health.css'
import '../../components/magazine/Magazine.css'
import '../../index.css'

const Health = () => {
  return (
    <>
        <div className="magazines">
            <div className="magazines-content">
                <h1 className='title-mag'><span>Health</span> Magazine</h1>
                <p className='desc-mag'>Select the category that matches your goals – Mental for mindfulness and inner peace, or Physical for strength and vitality.</p>
                <form className='form-mag'>
                    <input className='input-mag' type="text" placeholder='name@example.com'/>
                    <button className='btn-mag' onClick={(e)=> e.preventDefault()}>Subscribe</button>
                </form>
            </div>
        </div>

        {/* mental section */}
        <div className="mentals">
            <div className="mentals-content">
                <div className="header-mental">
                    <h2 className='title-mental'>Mental</h2>
                    <button className='btn-mental'>See All</button>
                </div>
                <div className="cards-container">
                    {MAGAZINE.slice(1,4).map((card,index)=>(
                        <CardMagazine date={card.date} time={card.time} key={index} item={card.id} title={card.title} src={card.src} />
                    ))}                
                </div>
            </div>
        </div>

        {/* workbook bottom */}
        <div className="workbooks">
            <div className="tool-footer">
                <div className="workbook-container">
                    <h2 className='title'>Get the Thought <br /> Workbook for <span>FREE</span></h2>
                    <p className='desc'>Healthily achieve balance and happiness with our free self-help workbook created by mental health experts to fill your life with peace.</p>
                    <button className='btn'>Get Workbook</button>
                </div>
                <img className='tool-img' src="src/assets/workbook-banner.webp" alt="" />
            </div>
        </div>
    </>
  )
}

export default Health