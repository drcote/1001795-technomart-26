let link_map = document.querySelector(".button-map");
let map = document.querySelector(".modal-map");
let close_map = document.querySelector(".close-map");

link_map.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("modal-show");
});

close_map.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.remove("modal-show");
});
