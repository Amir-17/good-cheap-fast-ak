import React from "react";
import "./FastCheap.css"
import { useNavigate } from "react-router-dom";

const FastCheap = () => {
  const navigate = useNavigate();
    return (
    <div className="GoodCheap">
        <div className='GC_container'>
          <header className='GC_header'> 
            <img className='gcf_image' src='/images/good-cheap-fast.png' alt="venn diagram for good-fast-cheap options"></img>
          </header>
          <div className='GC_body'>
            <h1 className='GC_title'> Fast - Cheap </h1>
            <div className='GC_content'>
              <p className="GC_text">
                Fast & Cheap = Poor Quality. The project will be done quickly and on a shoestring budget, and you will get what you pay for. Don't expect all of the requirements to be met and expect some bugs and unpredictable behavior because the development team didn't have the time or resources to thoroughly design or test the software. </p>
              <img className="goodCheap" src='../images/fastCheap.png' alt="venn diagram for fast and cheap circles"></img>
              </div>
            <footer className="GC_footer">
              <button 
              className='back_button'
              onClick={()=> navigate('/')}
               > Go Back</button>
            </footer>
            
        </div>
      </div>
      </div>
    )

}

export default FastCheap