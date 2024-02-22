import {makeShopItem, handleDrop} from "./functions.js"

window.addEventListener('load', function () {
	let baskets = document.querySelectorAll("section.basket");
	let items = document.querySelectorAll("section.basket>.item");
	let outerBox = document.getElementById("outerBox");
	let basketOver = null;

	makeShopItem({name: "Carrot", img: "./assets/carrot.png", count:3}, baskets[0]);
	outerBox.addEventListener("dragstart", function(e) {
		e.target.classList.add("isDragging")
	});
	outerBox.addEventListener("dragend", function(e) {
		e.target.classList.remove("isDragging")
	});

	baskets.forEach(function(basket) {
		basket.ondragenter = function(e) { e.preventDefault() };
		basket.ondragover = function(e) { e.preventDefault() };
		basket.ondrop = function(e) { 
			let droppedItem = document.querySelector(".isDragging")
			droppedItem.classList.remove("isDragging");
			handleDrop(droppedItem, this);
		};
	})
});//end of load
