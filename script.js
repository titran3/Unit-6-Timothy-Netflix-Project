// Declare your genre arrays here
let action = ["https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_1710_b7d39b03.jpeg?region=0%2C0%2C540%2C810", "https://amc-theatres-res.cloudinary.com/v1681480635/amc-cdn/production/2/movies/73300/73266/PosterDynamic/151325.jpg"];
let horror = ["https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_FMjpg_UX1000_.jpg", "https://cdn.shopify.com/s/files/1/0799/0083/products/scream2022.jpg?v=1640131390"];
let superhero = ["https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg", "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"];

// Make sure to declare your HTML elements as variables! 
let genreInput = document.querySelector(".genre");
let urlInput = document.querySelector(".url");

// Submit Button 
let submitButton = document.querySelector(".submit"); 

submitButton.onclick = function() {
  let who = document.querySelector(".who");

  // Get the value of the genre input field at the time of the button click
  let genre = genreInput
  .value.toLowerCase();
  
  let selectedGenre = [];
  if (genre === "horror") {
    selectedGenre = horror;
    who.style.display = "block";
    window.scrollTo(0,document.body.scrollHeight);
  } else if (genre === "action") {
    selectedGenre = action;
    who.style.display = "block";
    window.scrollTo(0,document.body.scrollHeight);
  } else if (genre === "superhero") {
    selectedGenre = superhero;
    who.style.display = "block";
    window.scrollTo(0,document.body.scrollHeight);
  } else if (genre === ""){
    submitButton.innerHTML = "You can't leave it blank!";
  }

  document.getElementById("1").src = selectedGenre[0];
  document.getElementById("2").src = selectedGenre[1];
};
let suggestButton = document.querySelector(".suggest");

suggestButton.onclick = function() {
    if (urlInput.value === "")
    {
    suggestButton.innerHTML= "You can't leave it blank!";
    }
    else {
    suggestButton.innerHTML= "Thanks for your suggestion! Check the console to see that it was added!";
    horror.push(urlInput.value);
    superhero.push(urlInput.value);
    action.push(urlInput.value);
    console.log(action);
    console.log(superhero);
    console.log(horror);
    }
};
