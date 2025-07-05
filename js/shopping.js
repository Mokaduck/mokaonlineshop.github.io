const products = [
    {
        name: "Edelweiss",
        image: "../img/Edelweiss.png",
        link: "#"
    },
    {
        name: "Pearl",
        image: "../img/Pearl.png",
        link: "#"
    },
    {
        name: "Columbine",
        image: "../img/Columbine.png",
        link: "#"
    },
    {
        name: "Lavender",
        image: "../img/Lavender.png",
        link: "#"
    },
    {
        name: "Pka butterflies",
        image: "../img/Pka butterflies.png",
        link: "#"
    },
    {
        name: "Snake",
        image: "../img/Snake.png",
        link: "#"
    },
    {
        name: "Sweety",
        image: "../img/Sweety.png",
        link: "#"
    },
    {
        name: "Dahlia",
        image: "../img/Dahlia.png",
        link: "#"
    },
    {
        name: "Daisy",
        image: "../img/Daisy.png",
        link: "#"
    },
    {
        name: "Startflower",
        image: "../img/Startflower.png",
        link: "#"
    },
    {
        name: "Almond",
        image: "../img/Almond.png",
        link: "#"
    },
    {
        name: "Berry Sliver",
        image: "../img/Berry Sliver.png",
        link: "#"
    },
    {
        name: "Pinks",
        image: "../img/Pinks.png",
        link: "#"
    },
    {
        name: "Pka ribbon",
        image: "../img/Pka ribbon.png",
        link: "#"
    },
    {
        name: "Strom",
        image: "../img/Strom.png",
        link: "#"
    },
    {
        name: "Strawberry",
        image: "../img/Strawberry.png",
        link: "#"
    },
    {
        name: "Glowing",
        image: "../img/Glowing.png",
        link: "#"
    },
    {
        name: "Sliver",
        image: "../img/Sliver.png",
        link: "#"
    },
    {
        name: "Blink",
        image: "../img/Blink.png",
        link: "#"
    },
    {
        name: "Red",
        image: "../img/Red.png",
        link: "#"
    },
    {
        name: "Moon flower",
        image: "../img/Moon flower.png",
        link: "#"
    },
    {
        name: "Diamond",
        image: "../img/Diamond.png",
        link: "#"
    },
    {
        name: "Heart",
        image: "../img/Heart.png",
        link: "#"
    },
    {
        name: "Shining",
        image: "../img/Shining.png",
        link: "#"
    },
    {
        name: "White",
        image: "../img/White.png",
        link: "#"
    },
    {
        name: "Iris",
        image: "../img/Iris.png",
        link: "#"
    }
];

// Function to create a product card
function createProductCard(product, index) {
    return `
        <a href="${product.link}" class="link-offset-2 link-underline link-underline-opacity-0" data-bs-toggle="modal" data-bs-target="#imageModal" onclick="openImageModal(${index})">
            <div class="card m-2" style="width: 9rem;">
                <img class="card-img-top" src="${product.image}" alt="${product.name}">
                <div class="card-body">
                    <h6 class="card-title">${product.name}</h6>
                </div>
            </div>
        </a>
    `;
}

// Insert all product cards into the product-list container
const productListContainer = document.getElementById("product-list");
products.forEach((product, index) => {
    productListContainer.innerHTML += createProductCard(product, index);
});

// Function to open the modal and display the clicked product's image and name
function openImageModal(index) {
    const product = products[index];

    // Set the product name and image in the modal
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalImage').src = product.image;
}