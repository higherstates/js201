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

            //Fix broken images:
            if(character['id'] === 28) {
                image.src = "https://www.hollywoodreporter.com/wp-content/uploads/2016/04/mon_mothma_rogue_one_-_h_-_2016.jpg?w=681&h=383&crop=1";
            } else if (character['id'] === 61) {
                image.src = "https://i.pinimg.com/originals/d8/bc/36/d8bc36174acdf28f7bad003e1d029050.jpg";
            } else if (character['id'] === 77) {
                image.src = "https://64.media.tumblr.com/cbe777b8c2dd46f77d6c9a1acc44c44f/c62eba925919679a-54/s1280x1920/379475555be5e3336474edeeffbb091a17484f4a.png";
            } else {
                image.src = character['image'];
            }
        });
});

