let form = document.querySelector("form");

function handleChange(event) {
  event.preventDefault();
  let movies = [];
  console.log(form.elements.Movie.value);

  movies.push({
    movie: form.elements.Movie.value,
    watch: "to watch",
  });
  form.elements.Movie.value = "";
  createUI(movies);
}

function elm(type){
  let element = document.createElement(type)
  return element;
}
function createUI(arr) {
  arr.forEach((ele) => {
    let ul = document.querySelector(".movies");
    let div = elm('div');
    let p = elm('p')
    let button = elm('button')
    button.addEventListener("click", (event) => {
      event.preventDefault();
      if (button.innerText == "to watch") {
        button.innerText = "watched";
      } else if (button.innerText == "watched") {
        button.innerText = "to watch";
      }
    });
    p.innerText = ele.movie;
    button.innerText = ele.watch;
    div.append(p, button);
    ul.append(div);
  });
}
form.addEventListener("submit", handleChange);
