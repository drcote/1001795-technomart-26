let link_write_us = document.querySelector(".button-write-us");
let write_us = document.querySelector(".modal-write-us");
let close_write_us = document.querySelector(".close-write-us");

link_write_us.addEventListener("click", function (evt) {
    evt.preventDefault();
    write_us.classList.add("modal-show");
});

close_write_us.addEventListener("click", function (evt) {
    evt.preventDefault();
    write_us.classList.remove("modal-show");
});

