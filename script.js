// 商品數據
const products = [
    { id: 1, name: 'Product 1', price: 100, image: 'image/demo-product.jpg', description: '這是商品 1 的簡短描述。' },
    { id: 2, name: 'Product 2', price: 200, image: 'image/demo-product.jpg', description: '這是商品 2 的簡短描述。' },
    { id: 3, name: 'Product 3', price: 300, image: 'image/demo-product.jpg', description: '這是商品 3 的簡短描述。' },
    { id: 4, name: 'Product 4', price: 400, image: 'image/demo-product.jpg', description: '這是商品 4 的簡短描述。' },
    { id: 5, name: 'Product 5', price: 500, image: 'image/demo-product.jpg', description: '這是商品 5 的簡短描述。' },
    { id: 6, name: 'Product 6', price: 600, image: 'image/demo-product.jpg', description: '這是商品 6 的簡短描述。' },
    { id: 7, name: 'Product 7', price: 700, image: 'image/demo-product.jpg', description: '這是商品 7 的簡短描述。' },
    { id: 8, name: 'Product 8', price: 800, image: 'image/demo-product.jpg', description: '這是商品 8 的簡短描述。' },
    { id: 9, name: 'Product 9', price: 900, image: 'image/demo-product.jpg', description: '這是商品 9 的簡短描述。' },
    { id: 10, name: 'Product 10', price: 1000, image: 'image/demo-product.jpg', description: '這是商品 10 的簡短描述。' },
];

// 購物車
let cart = [];

// 每頁顯示的商品數量
const productsPerPage = 8;
let currentPage = 1;

// 顯示商品
function displayProducts(page) {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const productsToDisplay = products.slice(start, end);

    const productsContainer = document.getElementById('products');
    
    if (page === 1) {
        productsContainer.innerHTML = ''; // 清空容器，僅在第一頁時執行
    }

    // 創建一個新的行容器
    let rowContainer = document.createElement('div');
    rowContainer.className = 'row';

    productsToDisplay.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('col-md-3', 'mb-4');
        productElement.innerHTML = `
            <a href="product.html?id=${product.id}" class="product-link">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text product-description">${product.description}</p>
                        <p class="card-text">HK$${product.price}</p>
                        <button class="btn btn-add-to-cart" onclick="addToCart(${product.id}); event.preventDefault();">
                            <i class="fas fa-cart-plus me-2"></i>加入購物車
                        </button>
                    </div>
                </div>
            </a>
        `;
        rowContainer.appendChild(productElement);

        // 每4個商品或在最後一個商品時，將行添加到容器中並創建新的行
        if ((index + 1) % 4 === 0 || index === productsToDisplay.length - 1) {
            productsContainer.appendChild(rowContainer);
            rowContainer = document.createElement('div');
            rowContainer.className = 'row';
        }
    });

    updateLoadMoreButton();
}

// 更新"加載更多"按鈕
function updateLoadMoreButton() {
    let loadMoreButton = document.getElementById('load-more-button');
    if (!loadMoreButton) {
        loadMoreButton = document.createElement('button');
        loadMoreButton.id = 'load-more-button';
        loadMoreButton.classList.add('btn', 'btn-primary', 'mt-4', 'mb-4', 'd-block', 'mx-auto');
        document.getElementById('products').after(loadMoreButton);
    }

    const remainingProducts = products.length - (currentPage * productsPerPage);
    if (remainingProducts > 0) {
        loadMoreButton.textContent = `加載更多 (還有 ${remainingProducts} 件商品)`;
        loadMoreButton.onclick = () => {
            currentPage++;
            displayProducts(currentPage);
        };
        loadMoreButton.style.display = 'block';
    } else {
        loadMoreButton.style.display = 'none';
    }
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
window.onload = () => displayProducts(currentPage);
