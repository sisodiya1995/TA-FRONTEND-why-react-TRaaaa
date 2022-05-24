import color from '../data/colors.json'
function Teal(){
    return(
        <>
        {
            color.teal.map((col) => {
                return <div className="red" key={col} style={{
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

export default Teal;