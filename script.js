// Sample Product Data
const products = [
    {
        id: 1,
        name: 'Vestido Floral',
        price: 89.00,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500',
        category: 'women',
        subcategory: 'dresses',
        label: 'new',
        colors: ['#ff6b6b', '#6EDDD4', '#65C7E1']
    },
    {
        id: 2,
        name: 'Camisa Linho',
        price: 35.99,
        originalPrice: 45.99,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500',
        category: 'women',
        subcategory: 'tops',
        label: 'sale',
        colors: ['#ffffff', '#A5F4F7']
    },
    {
        id: 3,
        name: 'Calças Wide Leg',
        price: 59.99,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500',
        category: 'women',
        subcategory: 'bottoms',
        label: null,
        colors: ['#1a1a1a', '#8b7355']
    },
    {
        id: 4,
        name: 'Casaco Oversized',
        price: 89.99,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500',
        category: 'women',
        subcategory: 'outerwear',
        label: 'new',
        colors: ['#8b7355', '#1a1a1a']
    },
    {
        id: 5,
        name: 'T-shirt Básica',
        price: 19.99,
        originalPrice: 29.99,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
        category: 'men',
        label: 'sale',
        colors: ['#ffffff', '#1a1a1a', '#4a5568']
    },
    {
        id: 6,
        name: 'Camisa Casual',
        price: 44.99,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop',
        category: 'men',
        label: null,
        colors: ['#4a5568', '#ffffff']
    },
    {
        id: 7,
        name: 'Calças Chino',
        price: 54.99,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500',
        category: 'men',
        label: 'new',
        colors: ['#8b7355', '#1a1a1a']
    },
    {
        id: 8,
        name: 'Mala Estruturada',
        price: 69.99,
        originalPrice: 89.99,
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500',
        category: 'accessories',
        label: 'sale',
        colors: ['#1a1a1a', '#8b7355']
    },
    {
        id: 9,
        name: 'Óculos de Sol',
        price: 39.99,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500',
        category: 'accessories',
        label: null,
        colors: ['#1a1a1a']
    },
    {
        id: 10,
        name: 'Colar Dourado',
        price: 24.99,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500',
        category: 'accessories',
        label: 'new',
        colors: ['#ffd700']
    },
    {
        id: 11,
        name: 'Saia Midi',
        price: 42.99,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500',
        category: 'women',
        subcategory: 'bottoms',
        label: null,
        colors: ['#ff6b6b', '#1a1a1a']
    },
    {
        id: 12,
        name: 'Blazer Classic',
        price: 79.99,
        originalPrice: 99.99,
        image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500',
        category: 'women',
        subcategory: 'outerwear',
        label: 'sale',
        colors: ['#1a1a1a', '#8b7355']
    },
    {
        id: 13,
        name: 'Vestido Elegante Preto',
        price: 69.99,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500',
        category: 'women',
        subcategory: 'dresses',
        label: null,
        colors: ['#1a1a1a']
    },
    {
        id: 14,
        name: 'Vestido Casual Verão',
        price: 39.99,
        originalPrice: 54.99,
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500',
        category: 'women',
        subcategory: 'dresses',
        label: 'sale',
        colors: ['#ffffff', '#ff6b6b', '#6EDDD4']
    },
    {
        id: 15,
        name: 'Vestido Longo Festa',
        price: 89.99,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500',
        category: 'women',
        subcategory: 'dresses',
        label: 'new',
        colors: ['#8b7355', '#1a1a1a', '#ff6b6b']
    },
    {
        id: 16,
        name: 'Vestido Midi Listrado',
        price: 54.99,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500',
        category: 'women',
        subcategory: 'dresses',
        label: null,
        colors: ['#1a1a1a', '#ffffff']
    },
    {
        id: 17,
        name: 'Vestido Boho Chic',
        price: 44.99,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=500',
        category: 'women',
        subcategory: 'dresses',
        label: 'new',
        colors: ['#ff6b6b', '#A5F4F7', '#6EDDD4']
    }
];

// Cart State
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeProducts();
    initializeNovidadesCarousel();
    initializeCart();
    initializeCookieBanner();
    initializeMobileNav();
    initializeEventListeners();
    initializeAnnouncementBarScroll();
});

// Listen for cart updates from other scripts (like product.js)
window.addEventListener('cartUpdated', () => {
    // Reload cart from localStorage
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Update display
    renderCart();
    updateCartCount();
});

// Initialize Products
function initializeProducts() {
    const productGrid = document.getElementById('productGrid');
    if (productGrid) {
        renderProducts(products);
    }
}

// Initialize Novidades Carousel
function initializeNovidadesCarousel() {
    const novidadesTrack = document.getElementById('novidadesTrack');
    if (!novidadesTrack) return;

    // Get only new products
    const newProducts = products.filter(p => p.label === 'new');

    // Render product cards in carousel
    newProducts.forEach(product => {
        const card = createNovidadeCard(product);
        novidadesTrack.appendChild(card);
    });

    // Setup carousel navigation
    setupCarouselNavigation();
}

// Create Novidade Card
function createNovidadeCard(product) {
    const card = document.createElement('div');
    card.className = 'novidade-card';

    card.innerHTML = `
        <div class="novidade-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="novidade-info">
            <div class="novidade-name">${product.name}</div>
            <div class="novidade-price">€${product.price.toFixed(2)}</div>
            <a href="${product.id === 1 ? 'product.html' : '#'}" class="btn-view">Ver</a>
        </div>
    `;

    return card;
}

// Setup Carousel Navigation
function setupCarouselNavigation() {
    const track = document.getElementById('novidadesTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!track || !prevBtn || !nextBtn) return;

    const trackContainer = track.parentElement;
    let currentPosition = 0;
    const getCardWidth = () => {
        const firstCard = track.children[0];
        if (!firstCard) return 325;
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.columnGap || style.gap || '0') || 0;
        return firstCard.getBoundingClientRect().width + gap;
    };

    const getMaxPosition = (cardWidthOverride) => {
        const cardWidth = cardWidthOverride || getCardWidth();
        const visibleCards = Math.max(1, Math.floor((trackContainer?.offsetWidth || window.innerWidth) / cardWidth));
        const hiddenCards = track.children.length - visibleCards;
        if (hiddenCards <= 0) return 0;
        return -(hiddenCards * cardWidth);
    };

    function updateButtons() {
        const maxPosition = getMaxPosition();
        prevBtn.disabled = currentPosition >= 0;
        nextBtn.disabled = currentPosition <= maxPosition;
    }

    function moveTrack(direction) {
        const step = getCardWidth();
        const maxPosition = getMaxPosition(step);
        currentPosition += direction * step;
        if (currentPosition < maxPosition) currentPosition = maxPosition;
        if (currentPosition > 0) currentPosition = 0;
        track.style.transform = `translateX(${currentPosition}px)`;
        updateButtons();
    }

    // Next button
    nextBtn.addEventListener('click', () => {
        moveTrack(-1);
    });

    // Previous button
    prevBtn.addEventListener('click', () => {
        moveTrack(1);
    });

    // Initialize button states
    updateButtons();

    // Update on window resize
    window.addEventListener('resize', () => {
        currentPosition = 0;
        track.style.transform = `translateX(0)`;
        updateButtons();
    });
}

// Render Products
function renderProducts(productsToRender) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    productsToRender.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;
    card.dataset.subcategory = product.subcategory || '';
    card.dataset.label = product.label || '';

    const priceHTML = product.originalPrice
        ? `<div class="product-price sale">
             <span class="original">${product.originalPrice.toFixed(2)}€</span>
             <span class="discounted">${product.price.toFixed(2)}€</span>
           </div>`
        : `<div class="product-price">${product.price.toFixed(2)}€</div>`;

    const labelHTML = product.label
        ? `<span class="product-label ${product.label}">${product.label === 'new' ? 'Novo' : 'Sale'}</span>`
        : '';

    const colorsHTML = product.colors.map(color =>
        `<span class="color-swatch" style="background-color: ${color}"></span>`
    ).join('');

    card.innerHTML = `
        <div class="product-image">
            ${labelHTML}
            <img src="${product.image}" alt="${product.name}">
            <button class="quick-view" onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            ${priceHTML}
            <div class="color-swatches">${colorsHTML}</div>
        </div>
    `;

    // Add click event to view product details (for Vestido Floral)
    if (product.id === 1) { // Vestido Floral
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            // Don't navigate if clicking the "Add to Cart" button
            if (!e.target.classList.contains('quick-view')) {
                window.location.href = 'product.html';
            }
        });
    }

    return card;
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    updateCart();
    showCartSidebar();
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCart();
    }
}

// Update Cart
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

// Render Cart
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">O seu carrinho está vazio</p>';
        cartTotal.textContent = '0.00€';
        return;
    }

    const cartHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}${item.size ? ` - ${item.size}` : ''}</div>
                <div class="cart-item-price">${item.price.toFixed(2)}€</div>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">Remover</button>
            </div>
        </div>
    `).join('');

    cartItems.innerHTML = cartHTML;

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `${total.toFixed(2)}€`;
}

// Update Cart Count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (!cartCount) return;
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Initialize Cart
function initializeCart() {
    renderCart();
    updateCartCount();
}

// Show Cart Sidebar
function showCartSidebar() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Hide Cart Sidebar
function hideCartSidebar() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize Cookie Banner
function initializeCookieBanner() {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
        setTimeout(() => {
            document.getElementById('cookieConsent').classList.add('show');
        }, 1000);
    }
}

// Accept Cookies
function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookieConsent').classList.remove('show');
}

// Manage Cookies (placeholder)
function manageCookies() {
    alert('Funcionalidade de gestão de cookies em desenvolvimento. Por agora, pode aceitar todos os cookies.');
    acceptCookies();
}

// Filter Products
function filterProducts(filter) {
    const allProducts = document.querySelectorAll('.product-card');
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (filter === 'all') {
        allProducts.forEach(product => product.style.display = 'block');
    } else if (filter === 'new') {
        allProducts.forEach(product => {
            product.style.display = product.dataset.label === 'new' ? 'block' : 'none';
        });
    } else if (filter === 'sale') {
        allProducts.forEach(product => {
            product.style.display = product.dataset.label === 'sale' ? 'block' : 'none';
        });
    }
}

// Filter Products by Category with smooth transitions
function filterByCategory(category, subcategory = null) {
    const allProducts = document.querySelectorAll('.product-card');
    const productsHeader = document.querySelector('.products-header h2');
    const productGrid = document.getElementById('productGrid');
    const productsSection = document.getElementById('products');
    const breadcrumbCategory = document.getElementById('breadcrumbCategory');

    // Toggle filtering mode (hide hero/categories sections)
    const isFiltering = category !== 'all' || subcategory !== null;
    if (isFiltering) {
        document.body.classList.add('filtering-active');
    } else {
        document.body.classList.remove('filtering-active');
    }

    // Add loading state
    productGrid.classList.add('loading');

    // Fade out products that will be hidden
    allProducts.forEach(product => {
        const productCategory = product.dataset.category;
        const productSubcategory = product.dataset.subcategory;
        let shouldShow = false;

        if (category === 'all') {
            shouldShow = true;
        } else if (subcategory) {
            shouldShow = (productCategory === category && productSubcategory === subcategory);
        } else {
            shouldShow = productCategory === category;
        }

        if (!shouldShow) {
            product.classList.add('hiding');
        }
    });

    // Wait for fade out animation, then filter
    setTimeout(() => {
        let visibleCount = 0;

        allProducts.forEach(product => {
            const productCategory = product.dataset.category;
            const productSubcategory = product.dataset.subcategory;
            let shouldShow = false;

            if (category === 'all') {
                shouldShow = true;
            } else if (subcategory) {
                shouldShow = (productCategory === category && productSubcategory === subcategory);
            } else {
                shouldShow = productCategory === category;
            }

            // Update display and remove hiding class
            product.style.display = shouldShow ? 'block' : 'none';
            product.classList.remove('hiding');

            if (shouldShow) visibleCount++;
        });

        // Remove any existing "no products" message
        const existingMessage = productGrid.querySelector('.no-products-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Show message if no products found
        if (visibleCount === 0) {
            const message = document.createElement('div');
            message.className = 'no-products-message';
            message.style.cssText = 'grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #666; font-size: 18px;';
            message.textContent = 'Nenhum produto encontrado nesta categoria.';
            productGrid.appendChild(message);
        }

        // Remove loading state
        productGrid.classList.remove('loading');

        // Update section title based on filter
        if (productsHeader) {
            const titles = {
                'all': 'Produtos em Destaque',
                'women': 'Mulher',
                'women-dresses': 'Vestidos',
                'women-tops': 'Tops & Camisas',
                'women-bottoms': 'Calças & Saias',
                'women-outerwear': 'Casacos',
                'women-knitwear': 'Malhas',
                'men': 'Homem',
                'accessories': 'Acessórios'
            };

            const breadcrumbTitles = {
                'all': 'Produtos',
                'women': 'Mulher',
                'women-dresses': 'Mulher / Vestidos',
                'women-tops': 'Mulher / Tops & Camisas',
                'women-bottoms': 'Mulher / Calças & Saias',
                'women-outerwear': 'Mulher / Casacos',
                'women-knitwear': 'Mulher / Malhas',
                'men': 'Homem',
                'accessories': 'Acessórios'
            };

            const pageTitles = {
                'all': 'Turkesa - Fashion Store',
                'women': 'Mulher - Turkesa',
                'women-dresses': 'Vestidos - Mulher - Turkesa',
                'women-tops': 'Tops & Camisas - Mulher - Turkesa',
                'women-bottoms': 'Calças & Saias - Mulher - Turkesa',
                'women-outerwear': 'Casacos - Mulher - Turkesa',
                'women-knitwear': 'Malhas - Mulher - Turkesa',
                'men': 'Homem - Turkesa',
                'accessories': 'Acessórios - Turkesa'
            };

            const titleKey = subcategory ? `${category}-${subcategory}` : category;
            productsHeader.textContent = titles[titleKey] || 'Produtos em Destaque';

            // Update breadcrumb
            if (breadcrumbCategory) {
                breadcrumbCategory.textContent = breadcrumbTitles[titleKey] || 'Produtos';
            }

            // Update page title for SEO
            document.title = pageTitles[titleKey] || 'Turkesa - Fashion Store';
        }

        // Smart scrolling based on context
        if (isFiltering) {
            // When filtering, scroll to top to show clean product listing
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // When showing all products (landing page), check if we need to scroll
            const rect = productsSection.getBoundingClientRect();
            const isInView = rect.top >= 0 && rect.top <= window.innerHeight;

            if (!isInView) {
                productsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }, 300);
}

// Handle Hash Navigation
function handleHashNavigation() {
    const hash = window.location.hash;
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    // Check for query parameter first (e.g., ?category=women-dresses)
    if (category) {
        if (category.startsWith('women-')) {
            const subcategory = category.replace('women-', '');
            filterByCategory('women', subcategory);
        } else if (category === 'women' || category === 'men' || category === 'accessories') {
            filterByCategory(category);
        } else {
            filterByCategory('all');
        }
    }
    // Otherwise check hash navigation
    else if (hash.startsWith('#women-')) {
        const subcategory = hash.replace('#women-', '');
        filterByCategory('women', subcategory);
    } else if (hash === '#women') {
        filterByCategory('women');
    } else if (hash === '#men') {
        filterByCategory('men');
    } else if (hash === '#accessories') {
        filterByCategory('accessories');
    } else if (hash === '#products' || hash === '') {
        // Only filter to all if not already filtered
        const currentTitle = document.querySelector('.products-header h2')?.textContent;
        if (!currentTitle || currentTitle === 'Produtos em Destaque') {
            // Don't re-filter if already showing all products
        }
    }
}

function resetMobileSubmenus() {
    document.querySelectorAll('.nav-item.has-submenu').forEach(item => {
        const submenu = item.querySelector('.submenu');
        item.classList.remove('open');
        if (submenu) {
            submenu.style.maxHeight = null;
            submenu.style.opacity = '';
        }
    });
}

function setupMobileSubmenus() {
    // Mobile menu links are now handled by the general smooth scroll handler
    // This function is kept for any future mobile-specific submenu logic
}

function initializeMobileNav() {
    const navbarContainer = document.querySelector('.navbar .container');
    const mainNav = document.getElementById('mainNav');

    let toggleBtn = document.getElementById('mobileMenuToggle');

    // If there's no nav to open, hide/remove the toggle and exit early
    if (!navbarContainer || !mainNav) {
        if (toggleBtn) {
            toggleBtn.style.display = 'none';
        }
        return;
    }

    // Create the toggle if markup was not present
    if (!toggleBtn) {
        toggleBtn = document.createElement('button');
        toggleBtn.className = 'mobile-menu-toggle';
        toggleBtn.id = 'mobileMenuToggle';
        toggleBtn.setAttribute('aria-label', 'Abrir menu');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = '<span></span><span></span><span></span>';
        navbarContainer.insertBefore(toggleBtn, navbarContainer.firstChild);
    }

    let overlay = document.getElementById('mobileNavOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'mobileNavOverlay';
        overlay.className = 'mobile-nav-overlay';
        document.body.appendChild(overlay);
    }

    const closeMenu = () => {
        mainNav.classList.remove('open');
        overlay.classList.remove('active');
        toggleBtn.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
        resetMobileSubmenus();
    };

    // Expose closeMenu for other handlers (e.g., submenu links)
    window.turkesaCloseMobileMenu = closeMenu;

    const openMenu = () => {
        mainNav.classList.add('open');
        overlay.classList.add('active');
        toggleBtn.classList.add('active');
        toggleBtn.setAttribute('aria-expanded', 'true');
        document.body.classList.add('menu-open');
    };

    toggleBtn.addEventListener('click', () => {
        if (mainNav.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    overlay.addEventListener('click', closeMenu);

    document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape' && mainNav.classList.contains('open')) {
            closeMenu();
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.dataset.mobileCloseBound === 'true') return;
        link.dataset.mobileCloseBound = 'true';

        link.addEventListener('click', () => {
            const hasUsableSubmenu = link.parentElement.classList.contains('has-submenu') && link.parentElement.querySelector('.submenu');
            if (window.innerWidth <= 980 && !hasUsableSubmenu) {
                closeMenu();
            }
        });
    });

    document.querySelectorAll('.submenu a').forEach(link => {
        if (link.dataset.mobileSubCloseBound === 'true') return;
        link.dataset.mobileSubCloseBound = 'true';

        link.addEventListener('click', () => {
            if (window.innerWidth <= 980) {
                closeMenu();
            }
        });
    });

    setupMobileSubmenus();

    window.addEventListener('resize', () => {
        if (window.innerWidth > 980) {
            closeMenu();
        }
    });
}

// Initialize Event Listeners
function initializeEventListeners() {
    // Cart Button
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', showCartSidebar);
    }

    // Close Cart
    const closeCart = document.getElementById('closeCart');
    if (closeCart) {
        closeCart.addEventListener('click', hideCartSidebar);
    }

    // Cart Overlay
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', hideCartSidebar);
    }

    // Cookie Consent
    const acceptCookiesBtn = document.getElementById('acceptCookies');
    if (acceptCookiesBtn) {
        acceptCookiesBtn.addEventListener('click', acceptCookies);
    }

    const manageCookiesBtn = document.getElementById('manageCookies');
    if (manageCookiesBtn) {
        manageCookiesBtn.addEventListener('click', manageCookies);
    }

    // Filter Buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.target.dataset.filter;
            filterProducts(filter);
        });
    });

    // Breadcrumb Home Link
    const breadcrumbHome = document.getElementById('breadcrumbHome');
    if (breadcrumbHome) {
        breadcrumbHome.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.hash = '';
            filterByCategory('all');
        });
    }

    // Logo Link - Return to Landing Page
    const logoLink = document.getElementById('logoLink');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.hash = '';
            filterByCategory('all');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Search Button - Open Modal
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            showSearchModal();
        });
    }

    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            alert(`Obrigado por subscrever! Enviaremos novidades para ${email}`);
            e.target.reset();
        });
    }

    // Smooth Scroll and Category Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Handle category/subcategory links
            if (href.startsWith('#women-') || href === '#women' || href === '#men' || href === '#accessories') {
                e.preventDefault();
                window.location.hash = href;
                handleHashNavigation();
            } else {
                // Handle regular smooth scroll
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }

                // Close mobile menu if open and on mobile
                if (window.innerWidth <= 980 && typeof window.turkesaCloseMobileMenu === 'function') {
                    setTimeout(() => window.turkesaCloseMobileMenu(), 300);
                }
            }
        });
    });

    // Hash Change Event
    window.addEventListener('hashchange', handleHashNavigation);

    // Initial hash navigation on page load
    if (window.location.hash) {
        handleHashNavigation();
    }
}

// Checkout - Redirect to checkout page
document.addEventListener('DOMContentLoaded', () => {
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('O seu carrinho está vazio!');
                return;
            }
            // Redirect to checkout page
            window.location.href = 'checkout.html';
        });
    }
});

// Initialize Announcement Bar Scroll Behavior
function initializeAnnouncementBarScroll() {
    const announcementBar = document.querySelector('.announcement-bar');
    if (!announcementBar) return;

    // Check if we're on a policy page by checking body class
    const isPolicyPage = document.body.classList.contains('policy-page');

    let lastScrollTop = 0;
    let hideThreshold = 50; // Hide after scrolling 50px down
    let showThreshold = 5; // Show when scrolling back to within 5px of top
    let ticking = false; // Throttle scroll events

    function updateAnnouncementBar(scrollTop) {
        if (isPolicyPage) {
            // On policy pages: hide when scrolling down and keep it hidden
            if (scrollTop > hideThreshold) {
                if (!announcementBar.classList.contains('hidden')) {
                    announcementBar.classList.add('hidden');
                }
            } else if (scrollTop <= showThreshold) {
                // Only show at the very top
                if (announcementBar.classList.contains('hidden')) {
                    announcementBar.classList.remove('hidden');
                }
            }
        } else {
            // On other pages: show/hide based on scroll direction with hysteresis
            if (scrollTop > hideThreshold) {
                if (scrollTop > lastScrollTop + 5) {
                    // Scrolling down - hide announcement bar
                    if (!announcementBar.classList.contains('hidden')) {
                        announcementBar.classList.add('hidden');
                    }
                } else if (scrollTop < lastScrollTop - 5) {
                    // Scrolling up - show announcement bar
                    if (announcementBar.classList.contains('hidden')) {
                        announcementBar.classList.remove('hidden');
                    }
                }
            } else if (scrollTop <= showThreshold) {
                // At top of page - always show
                if (announcementBar.classList.contains('hidden')) {
                    announcementBar.classList.remove('hidden');
                }
            }
        }

        lastScrollTop = scrollTop;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateAnnouncementBar(scrollTop);
            });
            ticking = true;
        }
    }, { passive: true });
}

// Discount Popup Functionality
function initDiscountPopup() {
    const popupOverlay = document.getElementById('discountPopupOverlay');
    const emailInput = document.getElementById('popupEmail');
    const submitBtn = document.getElementById('popupSubmit');
    const noBtn = document.querySelector('.popup-btn-no');
    const popupLangBtns = document.querySelectorAll('.popup-lang-btn');

    if (!popupOverlay) return;

    // Initialize popup language selector with current language
    function initPopupLanguage() {
        const currentLang = window.TurkesaLanguage?.getCurrentLanguage() || localStorage.getItem('turkesa-language') || 'pt';
        popupLangBtns.forEach(btn => {
            if (btn.getAttribute('data-popup-lang') === currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Handle popup language switching
    popupLangBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const selectedLang = btn.getAttribute('data-popup-lang');

            // Update active state
            popupLangBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update language globally
            if (window.TurkesaLanguage) {
                window.TurkesaLanguage.setLanguage(selectedLang);
                localStorage.setItem('turkesa-language', selectedLang);
            }
        });
    });

    // Initialize language selector
    initPopupLanguage();

    // Check if popup has been shown before
    const popupShown = sessionStorage.getItem('discountPopupShown');

    // Show popup after 1 second if not shown in this session
    if (!popupShown) {
        setTimeout(() => {
            popupOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            // Ensure language is initialized when popup shows
            initPopupLanguage();
        }, 1000);
    }

    // Close popup function
    function closePopup() {
        popupOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
        sessionStorage.setItem('discountPopupShown', 'true');
    }

    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Submit button - accept discount with email
    if (submitBtn && emailInput) {
        submitBtn.addEventListener('click', () => {
            const email = emailInput.value.trim();

            if (!email) {
                emailInput.style.borderColor = '#ff6b6b';
                emailInput.focus();
                return;
            }

            if (!isValidEmail(email)) {
                emailInput.style.borderColor = '#ff6b6b';
                emailInput.focus();
                return;
            }

            // Valid email - process discount
            console.log('User accepted 10% discount with email:', email);
            // You can add your discount code logic here
            // For example: send email to newsletter, apply discount code, etc.
            // window.location.href = '/shop?discount=FIRST10&email=' + encodeURIComponent(email);

            closePopup();
        });

        // Reset border color on input
        emailInput.addEventListener('input', () => {
            emailInput.style.borderColor = '#e0e0e0';
        });
    }

    // No button - decline discount
    if (noBtn) {
        noBtn.addEventListener('click', closePopup);
    }

    // Prevent closing by clicking outside - user must use buttons
    popupOverlay.addEventListener('click', (e) => {
        // Do nothing - user must click one of the buttons
        e.stopPropagation();
    });

    // Allow clicking inside the modal without closing
    const popupModal = document.querySelector('.popup-modal');
    if (popupModal) {
        popupModal.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
}

// Initialize discount popup when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDiscountPopup);
} else {
    initDiscountPopup();
}

// Search Modal Functionality
function showSearchModal() {
    const searchModalOverlay = document.getElementById('searchModalOverlay');
    const searchModalInput = document.getElementById('searchModalInput');

    if (searchModalOverlay) {
        searchModalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Focus on input after a short delay to allow animation
        setTimeout(() => {
            if (searchModalInput) {
                searchModalInput.focus();
            }
        }, 100);
    }
}

function hideSearchModal() {
    const searchModalOverlay = document.getElementById('searchModalOverlay');
    const searchModalInput = document.getElementById('searchModalInput');

    if (searchModalOverlay) {
        searchModalOverlay.classList.remove('active');
        document.body.style.overflow = '';

        // Clear input
        if (searchModalInput) {
            searchModalInput.value = '';
        }
    }
}

function performSearch() {
    const searchModalInput = document.getElementById('searchModalInput');
    const searchTerm = searchModalInput ? searchModalInput.value.trim() : '';

    if (searchTerm) {
        const filteredProducts = products.filter(p =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        renderProducts(filteredProducts);

        // Close modal
        hideSearchModal();

        // Scroll to products section
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// Initialize Search Modal
function initSearchModal() {
    const searchModalOverlay = document.getElementById('searchModalOverlay');
    const searchModalClose = document.getElementById('searchModalClose');
    const searchModalBtn = document.getElementById('searchModalBtn');
    const searchModalInput = document.getElementById('searchModalInput');

    // Close button
    if (searchModalClose) {
        searchModalClose.addEventListener('click', hideSearchModal);
    }

    // Search button
    if (searchModalBtn) {
        searchModalBtn.addEventListener('click', performSearch);
    }

    // Enter key in input
    if (searchModalInput) {
        searchModalInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // Click overlay to close
    if (searchModalOverlay) {
        searchModalOverlay.addEventListener('click', (e) => {
            if (e.target === searchModalOverlay) {
                hideSearchModal();
            }
        });
    }
}

// Initialize search modal when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearchModal);
} else {
    initSearchModal();
}
