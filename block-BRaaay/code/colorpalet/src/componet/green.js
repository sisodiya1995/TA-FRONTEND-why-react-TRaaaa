import React from "react";
import color from '../data/colors.json'
function Green (){
    return(
        <>
        {
            color.blue.map((col) => {
                return <div className="green" key={col} style={{
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

export default Green;