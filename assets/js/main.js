
for (i = 0; i < 100; i ++) {
    let newDiv = document.createElement("div");
    document.querySelector("div").appendChild(newDiv);
    newDiv.classList.add("item");
    newDiv.addEventListener("mouseover", function (e) {
        let min = 0,
        max = 255;
        function randomColor() {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        newDiv.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        setTimeout (function () {
                newDiv.style.backgroundColor = "lightblue";
            }, 500);
        }
    )
}
