import React from "react";
import { useState, useEffect } from "react";
import "./Homepage.css"
import Popupalert from "../Popupalert/Popupalert";
import { useNavigate } from "react-router-dom";



const Homepage =() => {
    
        const [areCircleChosen, setareCircleChosen] = useState([false, false, false]);
        const navigate = useNavigate();
        
        const selectCircle =(key)=> {
          let chosenCircle = [...areCircleChosen];
          chosenCircle[key] = !areCircleChosen[key]
          setareCircleChosen(chosenCircle)
        };
        
        const [isAlertModalOpened, setIsAlertModalOpened] = useState(false);
        const allTrue = areCircleChosen.every(val => val === true)

      
        const diagramGenerator = () => {
          if (allTrue === true) {
             setIsAlertModalOpened(true)
          }  else if (areCircleChosen[0] === true && areCircleChosen[1]=== true){
            navigate('/good-cheap', {replace: true})
          } else if (areCircleChosen[0] === true && areCircleChosen[2]=== true){
            navigate('/good-fast', {replace: true})
          } else {
            navigate('/fast-cheap', {replace: true})
          }
          }

          const [isButtonDisabled, setIsButtonDisabled] = useState(true);

          const checkButtonDisabled = () => {
            if (
              (areCircleChosen[0] === true && areCircleChosen[1]=== true) ||
              (areCircleChosen[0] === true && areCircleChosen[2]=== true) ||
              (areCircleChosen[1] === true && areCircleChosen[2]=== true) ||
              (allTrue === true)
              ) {
                setIsButtonDisabled(false)
              } else {
                setIsButtonDisabled(true)
              }
          }

          useEffect(()=> {
            checkButtonDisabled()
          }, [areCircleChosen])
      
       
      
        return (
          <div className="App">
            <div className='container'>

              <header className='app_header'> 
                <img className='gcf_image' src='/images/good-cheap-fast.png' alt="venn diagram for good-fast-cheap options"></img>
              </header>
              <div className='app_body'>
                <h1 className='app_title'> Pick two options!</h1>
                <div className='circles'>
                  <div 
                  className={areCircleChosen[0] === true ? 'selected-good' : 'circle-good'}
                  onClick={()=> selectCircle(0)}
                  > 
                  GOOD 
                  {areCircleChosen[0] === true && <span style={{color: "#38FF00"}}>&#10003;</span>}
                  </div>
                  <div
                  className={areCircleChosen[1] === true ? 'selected-cheap' : 'circle-cheap'}
                  onClick={()=> selectCircle(1)}
                  > 
                  CHEAP
                  {areCircleChosen[1] === true  && <span style={{color: "#38FF00"}}>&#10003;</span>}
                  </div>
                  <div
                  className={areCircleChosen[2] === true ? 'selected-fast' : 'circle-fast'}
                  onClick={()=> selectCircle(2)}
                  > 
                  FAST
                  {areCircleChosen[2] === true && <span style={{color: "#38FF00"}}>&#10003;</span>}
                  </div>
                </div>
                <button 
                className='submit_button'
                type='submit'
                disabled={isButtonDisabled}
                onClick={() => diagramGenerator()}>
                  GENERATE DIAGRAM
                </button>
              </div>
            </div>
          <Popupalert isModalOpened={isAlertModalOpened} closeAction={setIsAlertModalOpened}  
          setAreCircleChosen={setareCircleChosen}
           />
          </div>
        );
      }


export default Homepage