let links_add_goods = document.querySelectorAll(".buy");
let add_goods = document.querySelector(".modal-add-goods");
let close_add_goods = document.querySelector(".close-add-goods");

links_add_goods.forEach(function (link_add_goods) {
    link_add_goods.addEventListener("click", function (evt) {
        evt.preventDefault();
        add_goods.classList.add("modal-show");
    })
});

close_add_goods.addEventListener("click", function (evt) {
    evt.preventDefault();
    add_goods.classList.remove("modal-show");
});