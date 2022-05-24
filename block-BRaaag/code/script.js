let form = document.querySelector("form");
let ul = document.querySelector(".movies");
function handleChange(event) {
  event.preventDefault();
  let movi = [];
  //console.log(form.elements.Movie.value);
  console.log(movi)
  movi.push({
    movie: form.elements.Movie.value,
    watch: "to watch",
  });

  form.elements.Movie.value = "";
   
  createUI(movi);
}

//let elm = React.createElement;
function createUI(arr) {
  let allTodes = arr.map((ele) => {
    
    return (
        <div>
            <p>{ele.movie}</p>
            <button>{ele.watch}</button>
        </div>
    );
  });

  ReactDOM.render(allTodes, ul);
}
form.addEventListener("submit", handleChange);
