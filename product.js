// 從 URL 獲取商品 ID
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// 商品數據（這裡應該從服務器獲取，但為了示例，我們使用硬編碼的數據）
const products = [
    { id: 1, name: '商品 1', price: 100, image: 'image/demo-product.jpg', description: '這是商品 1 的詳細描述。' },
    { id: 2, name: '商品 2', price: 200, image: 'image/demo-product.jpg', description: '這是商品 2 的詳細描述。' },
    { id: 3, name: '商品 3', price: 300, image: 'image/demo-product.jpg', description: '這是商品 3 的詳細描述。' },
    { id: 4, name: '商品 4', price: 400, image: 'image/demo-product.jpg', description: '這是商品 4 的詳細描述。' },
];

// 顯示商品詳情
function displayProductDetails() {
    const product = products.find(p => p.id === productId);
    if (!product) {
        document.getElementById('product-details').innerHTML = '<h2>商品未找到</h2>';
        return;
    }

    // 更新麵包屑導航中的商品名稱
    document.getElementById('product-name').textContent = product.name;

    const productDetails = document.getElementById('product-details');
    productDetails.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${product.image}" class="img-fluid" alt="${product.name}">
            </div>
            <div class="col-md-6">
                <h2>${product.name}</h2>
                <p><i class="fas fa-tag me-2"></i>價格: $${product.price}</p>
                <p>${product.description}</p>
                <button class="btn btn-primary btn-lg" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus me-2"></i>加入購物車
                </button>
            </div>
        </div>
    `;
}

// 添加商品到購物車（這裡應該與主頁面的購物車同步，但為了簡單起見，我們只更新計數）
function addToCart(productId) {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = parseInt(cartCount.textContent) + 1;
    alert('商品已添加到購物車！');
}

// 頁面加載時顯示商品詳情
window.onload = displayProductDetails;
