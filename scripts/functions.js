export const makeShopItem = function(itemObj, parentElem=false){
	let itemElem = document.createElement("div");
	itemElem.classList.add("item");
	itemElem.draggable = true; 
	itemElem.innerHTML = `<p>${itemObj.name}</p>
<img draggable=false src="${itemObj.img}">
<p><span>${itemObj.count}</span></p>`

	if (parentElem) parentElem.append(itemElem);
	return itemElem;
}

export const handleDrop = function(item, intoBasket) {
	let fromBasket = item.parentElement;
	if (fromBasket == intoBasket) return 0;

	let available = [...intoBasket.querySelectorAll(".item")];
	let itemTitle = item.querySelector("p").innerText;
	let twinItem = available.find((item) => item.innerHTML.includes(itemTitle));

	// increment the available item or make one
	if (twinItem)
	{
		twinItem.querySelector("span").innerText++;
		if (twinItem.classList.contains("dimmed"))
		{
			twinItem.draggable = true;
			twinItem.classList.remove("dimmed");
		}
	}
	else
	{
		twinItem = item.cloneNode(4);
		twinItem.querySelector("span").innerText = 1;
		intoBasket.append(twinItem);
	}

	// case of last item
	let counter = item.querySelector("span");
	counter.innerText--
	if (counter.innerText == 0)
	{
		if (fromBasket.classList.contains("dim"))
		{
			item.draggable = false;
			item.classList.add("dimmed");
		}
		else item.remove();
	}
} // handle drop
