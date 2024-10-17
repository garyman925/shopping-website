// 商品數據
const products = [
    { id: 1, name: '商品 1', price: 100, image: 'product1.jpg' },
    { id: 2, name: '商品 2', price: 200, image: 'product2.jpg' },
    { id: 3, name: '商品 3', price: 300, image: 'product3.jpg' },
    { id: 4, name: '商品 4', price: 400, image: 'product4.jpg' },
];

// 購物車
let cart = [];

// 顯示商品
function displayProducts() {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>價格: $${product.price}</p>
            <button onclick="addToCart(${product.id})">加入購物車</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// 添加商品到購物車
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
}

// 更新購物車數���
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// 頁面加載時顯示商品
window.onload = displayProducts;
