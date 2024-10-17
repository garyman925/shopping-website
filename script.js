// 商品數據
const products = [
    { id: 1, name: '商品 1', price: 100, image: 'image/demo-product.jpg', description: '這是商品 1 的描述。' },
    { id: 2, name: '商品 2', price: 200, image: 'image/demo-product.jpg', description: '這是商品 2 的描述。' },
    { id: 3, name: '商品 3', price: 300, image: 'image/demo-product.jpg', description: '這是商品 3 的描述。' },
    { id: 4, name: '商品 4', price: 400, image: 'image/demo-product.jpg', description: '這是商品 4 的描述。' },
];

// 購物車
let cart = [];

// 顯示商品
function displayProducts() {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('col-md-3', 'mb-4');
        productElement.innerHTML = `
            <a href="product.html?id=${product.id}" class="product-link">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text"><i class="fas fa-tag me-2"></i>價格: $${product.price}</p>
                        <button class="btn btn-add-to-cart" onclick="addToCart(${product.id}); event.preventDefault();">
                            <i class="fas fa-cart-plus me-2"></i>加入購物車
                        </button>
                    </div>
                </div>
            </a>
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

// 更新購物車數量
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// 頁面加載時顯示商品
window.onload = displayProducts;
