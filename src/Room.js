import React, { useState } from "react";

function Room(){
    const [isLightOn, setLight] = useState(true)

    const lighted  = isLightOn ? " light-On" : " light-Off";

    const lightOn =()=>{
        setLight(!isLightOn)
    }
    return (
        <div className={`room ${lighted}`}>
            the room is {lighted}

        <button onClick={lightOn}> Switch </button>
        </div>
    )
}


export default Room


