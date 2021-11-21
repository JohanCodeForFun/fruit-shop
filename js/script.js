

let items_array = [
    { "name": "applered", "id": 1, count: 1 },
    { "name": "applegreen", "id": 2, count: 1 },
    { "name": "banana", "id": 3, count: 1 },
    { "name": "orange", "id": 4, count: 1 },
    { "name": "plumes", "id": 5, count: 1 },
    { "name": "peach", "id": 6, count: 1 },
    { "name": "watermelon", "id": 7, count: 1 },
    { "name": "strawberry", "id": 8, count: 1 },
    { "name": "blueberry", "id": 9, count: 1 },
];

let cart = [];


function appendNode(parent, element) {
    parent.appendChild(element);
};

function getDiv(container) {
    return document.getElementById(container);
};

function createNode(node) {
    let element = document.createElement(node);
    return element;
};

function displayItems(items, container) {
    let items_container = getDiv(container);
    items_container.innerHTML = '';

    for (let i = 0; i < items.lenght; i++) {
        let item = items[i];

        let item_node = createNode("li");
        // may have to modify "li" item to match my own structure
        item_node.setAttribute("id", item.id);

        if (item.count > 0) {
            item_node.innerHTML = `${item.name}
            <span id="badge">${item.count}</span>`;
            appendNode(items_container, item_node);
        }
    }
}

displayItems(items_array, "items");