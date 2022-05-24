let form = document.querySelector("form");
let ul = document.querySelector(".movies");

function handleChange(event) {
  event.preventDefault();
  let movies = [];
  console.log(movies ,'movie')
  console.log(form.elements.Movie.value);

  movies.push({
    movie: form.elements.Movie.value,
    watch: "to watch",
  });
  
  form.elements.Movie.value = "";
  createUI(movies);
}

let elm = React.createElement;
function createUI(arr) {
  let allTodes = arr.map((ele) => {
    let div = elm(
      "div",
      {},
      elm("p", {} , ele.movie),
      elm("button", {} , ele.watch)
    );

    // button.addEventListener("onClick", (event) => {
    //   event.preventDefault();
    //   if (button.innerText == "to watch") {
    //     button.innerText = "watched";
    //   } else if (button.innerText == "watched") {
    //     button.innerText = "to watch";
    //   }
    // });

    return div;
  });

  ReactDOM.render(allTodes, ul);
}
form.addEventListener("submit", handleChange);
