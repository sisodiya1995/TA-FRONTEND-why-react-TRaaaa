import color from "../data/colors.json";
function Cyan() {
  return (
    <>
      {color.cyan.map((col,i) => {
        return (
          <div
            className="cyan"
            key={col}
            style={{
              backgroundColor: `${col}`,
              width: "100px",
              height: "100px",
            }}
          >
            <div className="num">
              
              <p>{count(i)}</p>
              <p>{col}</p>
            </div>
        

          </div>
        );
      })}
    </>
  );
}

function count(i) {
    // let arr = color.blue;
  
    if (i === 0) {
      return 50;
    } else {
      return 100 * i;
    }
  }

export default Cyan;
