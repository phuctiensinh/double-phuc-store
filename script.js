const localStorage = typeof window !== 'undefined' ? window.localStorage : {
    getItem: (key) => null,
    setItem: (key, value) => {},
};

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentProduct = null;
let allProducts = [
    {
        name: 'Laptop Pro 2023',
        price: 1200,
        desc: '16GB RAM, 512GB SSD, Core i7',
        specs: {
            cpu: 'Intel Core i7-12700H',
            ram: '16GB DDR4',
            storage: '512GB NVMe SSD',
            gpu: 'Intel Iris Xe Graphics',
            display: '15.6" FHD (1920x1080) 144Hz',
            weight: '1.8kg',
            battery: '70Wh'
        },
        image: 'images/Laptop Pro 2023.jpg'
    },
    {
        name: 'Laptop Ultra 2023',
        price: 800,
        desc: '8GB RAM, 256GB SSD, Core i5',
        specs: {
            cpu: 'Intel Core i5-1235U',
            ram: '8GB DDR4',
            storage: '256GB SSD',
            gpu: 'Intel UHD Graphics',
            display: '14" FHD (1920x1080)',
            weight: '1.4kg',
            battery: '50Wh'
        },
        image: 'images/Laptop Ultra 2023.jpg'
    },
    {
        name: 'Laptop Gaming X',
        price: 2000,
        desc: '32GB RAM, 1TB SSD, RTX 3080',
        specs: {
            cpu: 'AMD Ryzen 9 5900HX',
            ram: '32GB DDR4',
            storage: '1TB NVMe SSD',
            gpu: 'NVIDIA RTX 3080 8GB',
            display: '16" QHD (2560x1440) 165Hz',
            weight: '2.3kg',
            battery: '90Wh'
        },
        image: 'images/Laptop Gaming X.jpg'
    },
    {
        name: 'Laptop Creator 2024',
        price: 1500,
        desc: '16GB RAM, 1TB SSD, RTX 3060',
        specs: {
            cpu: 'Intel Core i7-13700H',
            ram: '16GB DDR5',
            storage: '1TB NVMe SSD',
            gpu: 'NVIDIA RTX 3060 6GB',
            display: '15.6" 4K OLED (3840x2160)',
            weight: '1.9kg',
            battery: '80Wh'
        },
        image: 'images/Laptop Creator 2024.jpg'
    },
    {
        name: 'Laptop Slim 2024',
        price: 900,
        desc: '8GB RAM, 512GB SSD, Ryzen 5',
        specs: {
            cpu: 'AMD Ryzen 5 5600U',
            ram: '8GB DDR4',
            storage: '512GB SSD',
            gpu: 'AMD Radeon Graphics',
            display: '13.3" FHD (1920x1080)',
            weight: '1.2kg',
            battery: '60Wh'
        },
        image: 'images/Laptop Slim 2024.jpg'
    },
    {
        name: 'Laptop Business Pro',
        price: 1100,
        desc: '16GB RAM, 512GB SSD, Core i5',
        specs: {
            cpu: 'Intel Core i5-1240P',
            ram: '16GB DDR4',
            storage: '512GB NVMe SSD',
            gpu: 'Intel Iris Xe Graphics',
            display: '14" FHD (1920x1080) Touch',
            weight: '1.5kg',
            battery: '65Wh'
        },
        image: 'images/Laptop Business Pro.jpg'
    },
    {
        name: 'Laptop Gaming Elite',
        price: 2500,
        desc: '32GB RAM, 2TB SSD, RTX 4090',
        specs: {
            cpu: 'Intel Core i9-13900HX',
            ram: '32GB DDR5',
            storage: '2TB NVMe SSD',
            gpu: 'NVIDIA RTX 4090 16GB',
            display: '17.3" QHD (2560x1440) 240Hz',
            weight: '2.8kg',
            battery: '99Wh'
        },
        image: 'images/Laptop Gaming Elite.jpg'
    },
    {
        name: 'Laptop UltraBook',
        price: 1300,
        desc: '16GB RAM, 1TB SSD, Core i7',
        specs: {
            cpu: 'Intel Core i7-1255U',
            ram: '16GB DDR4',
            storage: '1TB SSD',
            gpu: 'Intel Iris Xe Graphics',
            display: '13.4" WQXGA (2560x1600)',
            weight: '1.3kg',
            battery: '68Wh'
        },
        image: 'images/Laptop UltraBook.jpg'
    },
    {
        name: 'Laptop Budget 2024',
        price: 600,
        desc: '8GB RAM, 256GB SSD, Ryzen 3',
        specs: {
            cpu: 'AMD Ryzen 3 5300U',
            ram: '8GB DDR4',
            storage: '256GB SSD',
            gpu: 'AMD Radeon Graphics',
            display: '15.6" HD (1366x768)',
            weight: '1.7kg',
            battery: '45Wh'
        },
        image: 'images/Laptop Budget 2024.jpg'
    },
    {
        name: 'Laptop 2-in-1 2024',
        price: 1400,
        desc: '16GB RAM, 512GB SSD, Core i7',
        specs: {
            cpu: 'Intel Core i7-1260P',
            ram: '16GB DDR4',
            storage: '512GB NVMe SSD',
            gpu: 'Intel Iris Xe Graphics',
            display: '14" FHD+ (1920x1200) Touch',
            weight: '1.6kg',
            battery: '75Wh'
        },
        image: 'images/Laptop 2-in-1 2024.jpg'
    },
    {
        name: 'Laptop Student 2025',
        price: 700,
        desc: '8GB RAM, 256GB SSD, Ryzen 3',
        specs: {
            cpu: 'AMD Ryzen 3 7320U',
            ram: '8GB DDR5',
            storage: '256GB SSD',
            gpu: 'AMD Radeon Graphics',
            display: '14" FHD (1920x1080)',
            weight: '1.5kg',
            battery: '48Wh'
        },
        image: 'images/Laptop Student 2025.jpg'
    },
    {
        name: 'Laptop Designer Pro',
        price: 1800,
        desc: '32GB RAM, 1TB SSD, RTX 3070',
        specs: {
            cpu: 'Intel Core i7-13700H',
            ram: '32GB DDR5',
            storage: '1TB NVMe SSD',
            gpu: 'NVIDIA RTX 3070 8GB',
            display: '16" WQXGA (2560x1600) 120Hz',
            weight: '2.1kg',
            battery: '85Wh'
        },
        image: 'images/Laptop Designer Pro.jpg'
    }
];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} đã được thêm vào giỏ hàng!`);
}

function addToCartFromModal() {
    if (currentProduct) {
        addToCart(currentProduct.name, currentProduct.price);
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
            <div class="flex justify-between items-center mb-4">
                <p>${item.name}</p>
                <div class="flex items-center space-x-4">
                    <p>$${item.price}</p>
                    <button onclick="removeFromCart(${index})" class="bg-red-600 text-white py-1 px-2 rounded hover:bg-red-700">Xóa</button>
                </div>
            </div>
        `;
    });

    cartTotal.textContent = total;
}

function displayProducts() {
    const productList = document.getElementById('product-list');
    const featuredProducts = document.getElementById('featured-products');
    const searchInput = document.getElementById('search-input');
    const priceFilter = document.getElementById('price-filter');

    function filterProducts() {
    let filteredProducts = [...allProducts];

    if (searchInput) {
        const searchTerm = searchInput.value.toLowerCase();
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.desc.toLowerCase().includes(searchTerm)
        );
    }

    if (priceFilter) {
        const priceRange = priceFilter.value;
        console.log("Price Range Selected:", priceRange);
        if (priceRange) {
            const [min, max] = priceRange.split('-').map(val => val === '+' ? Infinity : Number(val));
            console.log("Min:", min, "Max:", max);
            filteredProducts = filteredProducts.filter(product =>
                product.price >= min && (max ? product.price <= max : true)
            );
            console.log("Filtered Products:", filteredProducts);
        }
    }

    return filteredProducts;
}

    function renderProducts(productsToDisplay, container) {
        container.innerHTML = '';
        productsToDisplay.forEach((product, index) => {
            container.innerHTML += `
                <div class="bg-white p-4 shadow rounded cursor-pointer" data-product-index="${index}">
                    <img src="${product.image}" alt="${product.name}" class="w-full max-h-48 object-contain mb-4">
                    <h3 class="text-xl font-semibold">${product.name}</h3>
                    <p class="text-gray-600">${product.desc}</p>
                    <p class="text-lg font-bold text-blue-600">$${product.price}</p>
                    <button onclick="event.stopPropagation(); addToCart('${product.name}', ${product.price})" class="bg-blue-600 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700">Thêm vào giỏ</button>
                </div>
            `;
        });

        document.querySelectorAll('[data-product-index]').forEach(card => {
            card.addEventListener('click', () => {
                const index = card.getAttribute('data-product-index');
                showProductModal(allProducts[index]);
            });
        });
    }

    if (productList) {
        renderProducts(filterProducts(), productList);

        if (searchInput) {
            searchInput.addEventListener('input', () => {
                renderProducts(filterProducts(), productList);
            });
        }

        if (priceFilter) {
            priceFilter.addEventListener('change', () => {
                renderProducts(filterProducts(), productList);
            });
        }
    }

    if (featuredProducts) {
        renderProducts(allProducts.slice(0, 3), featuredProducts);
    }
}

function showProductModal(product) {
    currentProduct = product;
    const modal = document.getElementById('product-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalSpecs = document.getElementById('modal-specs');
    const modalPrice = document.getElementById('modal-price');

    modalTitle.textContent = product.name;
    modalImage.src = product.image;
    modalPrice.textContent = `$${product.price}`;

    modalSpecs.innerHTML = `
        <li><strong>CPU:</strong> ${product.specs.cpu}</li>
        <li><strong>RAM:</strong> ${product.specs.ram}</li>
        <li><strong>Storage:</strong> ${product.specs.storage}</li>
        <li><strong>GPU:</strong> ${product.specs.gpu}</li>
        <li><strong>Display:</strong> ${product.specs.display}</li>
        <li><strong>Weight:</strong> ${product.specs.weight}</li>
        <li><strong>Battery:</strong> ${product.specs.battery}</li>
    `;

    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.classList.add('hidden');
    currentProduct = null;
}

function showRegisterForm() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
}

function showLoginForm() {
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}

if (document.getElementById('cart-items')) {
    displayCart();
}

if (document.getElementById('product-list') || document.getElementById('featured-products')) {
    displayProducts();
}