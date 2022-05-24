import React from "react";
import color from '../data/colors.json'
function Indigo (){
    return(
        <>
        {
            color.indigo.map((col) => {
                return <div className="indiogo" key={col} style={{
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

export default Indigo;