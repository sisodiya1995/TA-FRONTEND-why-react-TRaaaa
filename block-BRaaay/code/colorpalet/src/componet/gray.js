import React from "react";
import color from '../data/colors.json'
function Gray(){
    return(
        <>
        {
            color.gray.map((col) => {
                return <div className="gray" key={col} style={{
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

export default Gray;