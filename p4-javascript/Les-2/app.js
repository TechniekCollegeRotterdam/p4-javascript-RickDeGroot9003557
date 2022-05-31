//Oefening angry-birds
//.class #id niks voor tags
const bird = document.querySelector(".bird");
let pixels = 0

bird.addEventListener("click", function() {
    pixels += 50;
    bird.style.left = pixels + "px";
});

window.addEventListener("keydown", function(e){
    console.log(e.key)
    if(e.key === "ArrowLeft") {
        pixels -= 50;
        bird.style.left = pixels + "px";
        document.getElementById("birdImage").src="img/b-left.svg";
    }

    if(e.key === "ArrowRight") {
        pixels += 50;
        bird.style.left = pixels + "px";
        document.getElementById("birdImage").src="img/b-right.svg";
    }

    if(e.key === "ArrowUp") {
        pixels += 50;
        bird.style.bottom = pixels + "px";
        document.getElementById("birdImage").src="img/b-up.svg";
    }

    if(e.key === "ArrowDown") {
        pixels -= 50;
        bird.style.bottom = pixels + "px";
        document.getElementById("birdImage").src="img/b-down.svg";
    }

});