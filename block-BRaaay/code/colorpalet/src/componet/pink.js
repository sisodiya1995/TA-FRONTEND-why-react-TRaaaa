import React from "react";
import color from '../data/colors.json'
function Pink(){
    return(
        <>
        {
            color.pink.map((col) => {
                return <div className="pink" key={col} style={{
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

export default Pink;