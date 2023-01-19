import React from "react";
import "./GoodCheap.css"
import { useNavigate } from "react-router-dom";

const GoodCheap = () => {
  const navigate = useNavigate();
    return (
    <div className="GoodCheap">
        <div className='GC_container'>
          <header className='GC_header'> 
            <img className='gcf_image' src='/images/good-cheap-fast.png' ></img>
          </header>
          <div className='GC_body'>
            <h1 className='GC_title'> Good - Cheap </h1>
            <div className='GC_content'>
              <p className="GC_text">
                Good & Cheap = Slow. High quality software will be produced; however the project tempo will be slow. Other projects will take priority over this project and interrupt its schedule frequently.
              </p>
              <img className="goodCheap" src='../images/goodCheap.png'></img>
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

export default GoodCheap