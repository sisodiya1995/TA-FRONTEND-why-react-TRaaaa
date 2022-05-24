import React from "react";
import color from '../data/colors.json'
function Voilet (){
    return(
        <>
        {
            color.violet.map((col) => {
                return <div className="voilet" key={col} style={{
                    backgroundColor: `${col}`,
                    width: '100px',
                    height: '100px'
                  }}>
                      <p>{col}</p>
                  </div>
            })
        }
        </>
    )
}

export default Voilet;