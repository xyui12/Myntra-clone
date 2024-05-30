let bagItems = [];
displayItemsOnHomePage();

function addToBag(item) {
    bagItems.push(item);
    dispalyBagIcon();
}

function dispalyBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    bagItemCountElement.innerText = bagItems.length;
}

function displayItemsOnHomePage() {
    let itemContainerElement = document.querySelector('.items-container');

    let innerHTML = '';
    items.forEach(item => {
        innerHTML += `
            <div class="item-container">
                <img class="item-image" src="${item.image}" alt="item image">
                <div class="rating">
                    ${item.rating.stars}⭐ | ${item.rating.count}
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">Rs ${item.current_price}</span>
                    <span class="original-price">Rs ${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button> 
            </div>`;
    });
    itemContainerElement.innerHTML = innerHTML;
}
