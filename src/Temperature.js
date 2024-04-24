import React, { useEffect, useState } from 'react'
import "./Temperature.css"
import mobile from "./assests/mobile.jpg"


const Temperature = () => {
    const [temp, setTemp] = useState(14);

    const increaseTemp = () => {
        setTemp(temp + 1)
    };

    const decreaseTemp = () => {
        setTemp(temp - 1)
    }

    const getBackgroundColor = () => {
        if (temp >= 30){
            return "red"
        }else if (temp >=20){
            return "orange"
        }else if (temp >=10){
            return "yellow"
        }else{
            return "blue"
        }
    }

    useEffect(() => {
        console.log("Temperature Control"+ temp)
    },[temp])


  return (
    <div className="temp">
        <div className='img-temp'>
        <img src={mobile} alt='mobile'style={{width: "100%", borderRadius: "50px", 
        borderColor: "black", border: "4px solid", padding: "0.2vw"}}/>
        </div>
        <div className='temp-control'>
            <div className='celsius'style={{ backgroundColor: getBackgroundColor()}}>{temp}°C</div>
            <div className='btn-temp'>
                <button onClick={increaseTemp}>+</button>
                <button onClick={decreaseTemp}>-</button>
            </div>
        </div>  
    </div>
  )
}

export default Temperature
