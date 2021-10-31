const name = document.getElementById("name");
const height = document.getElementById("height");
const planet = document.getElementById("planet");
const movies = document.getElementById("species");
const image = document.getElementById("image");


const button = document.querySelector(".getRandomCharacter");

button.addEventListener("click", (e) => {
    e.preventDefault();
    name.innerHTML = 'Loading...';
    height.innerHTML = 'Loading...';
    planet.innerHTML = 'Loading...';
    movies.innerHTML = 'Loading...';
    image.innerHTML = 'Loading...';

    const randomNumber = Math.ceil(Math.random() * 88);
    fetch(`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`)
        .then(response => response.json())
        .then(character => {
            console.log(character)
            name.innerHTML = character['name'];
            height.innerHTML = character['height'] + ' m';
            planet.innerHTML = character['homeworld'];
            movies.innerHTML = character['species'];
            image.src = character['image'];
        });
})

