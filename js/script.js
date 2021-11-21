

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

