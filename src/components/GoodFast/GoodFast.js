import React from "react";
import "./GoodFast.css"
import { useNavigate } from "react-router-dom";

const GoodFast = () => {
  const navigate = useNavigate();
    return (
    <div className="GoodCheap">
        <div className='GC_container'>
          <header className='GC_header'> 
            <img className='gcf_image' src='/images/good-cheap-fast.png'alt="venn diagram for good-fast-cheap options" ></img>
          </header>
          <div className='GC_body'>
            <h1 className='GC_title'> Good - Fast </h1>
            <div className='GC_content'>
              <p className="GC_text">
                Good & Fast = Expensive. High quality software will be produced very qucikly to meed customers's time constraint. However, this approach will require additional staff, extended work hours, additional testing, etc. -all things that will drive up the cost of the project.</p>
              <img className="goodCheap" src='../images/goodFast.png' alt="venn diagram for good and fast circles"></img>
              </div>
            <footer className="GC_footer">
              <button 
              className='back_button'
              onClick={()=> navigate('/')}
               > Go Back </button>
            </footer>
            
        </div>
      </div>
      </div>
    )

}

export default GoodFast