import ToolCard from "./ToolCard"

const Tool = () => {
  return (
    <div id="tool" className="tool">
        <div className="container tool-content">
            <div className="tool-header">
                <div className="tool-info">
                    <h1><span>Free</span> Tools</h1>
                    <p>Take your first steps towards a healthier lifestyle.</p>
                </div>
                <div className="anxiety-container">
                    <ToolCard classContainer="anxiety" title="Anxiety Test" first="Developed by mental health professionals" second="Quick and accurate assessment for free"/>
                </div>
            </div>

            <div className="tool-body">
                <div className="adhd-container">
                    <ToolCard classContainer="adhd" title="ADHD Test" first="Brought to you by ADHD experts" second="No registration, no fees – get your result instantly"/>
                </div>

                <div className="adhd-container calorie-container">
                    <ToolCard classContainer="adhd" title="Calorie Planning Test" first="Designed by nutrition experts" second="Instantly discover your ideal daily calorie intake for your goals"/>
                </div>
            </div>
            
            <div className="tool-footer">
                <div className="workbook-container">
                    <h2>Get the Thought <br /> Workbook for <span>FREE</span></h2>
                    <p>Healthily achieve balance and happiness with our free self-help workbook created by mental health experts to fill your life with peace.</p>
                    <button>Get Workbook</button>
                </div>
                <img src="src/assets/workbook-banner.webp" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Tool