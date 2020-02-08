const container = document.querySelector(".container");

const coffees = [
  { name: "ICT", image: "image/20200126_175957.jpg" },
  { name: "LR", image: "image/20200126_181031.jpg" },
  { name: "Library", image: "image/20200126_180544.jpg" },
  { name: "Amphi", image: "image/20200126_181121.jpg" },
  { name: "Rocks", image: "image/20200126_175610.jpg" },
  { name: "Bethel River", image: "image/20200126_181406.jpg" },
  { name: "Schu Ladies", image: "image/20200126_182002.jpg" },
  { name: "Schu men", image: "image/20200126_182128.jpg" },
  { name: "Bethel", image: "image/20200126_181838.jpg" }
];

const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Tour</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
