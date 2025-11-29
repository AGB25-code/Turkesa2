// Product Page JavaScript

// Update cart count display (defined globally for reuse)
function updateCartCountDisplay() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart count on page load
    updateCartCountDisplay();

    // Thumbnail Image Switching
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));

            // Add active class to clicked thumbnail
            thumbnail.classList.add('active');

            // Update main image
            const newImage = thumbnail.getAttribute('data-image');
            mainImage.src = newImage;
        });
    });

    // Quantity Selector
    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');
    const quantityInput = document.getElementById('quantityInput');

    decreaseBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    increaseBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        const maxValue = parseInt(quantityInput.max);
        if (currentValue < maxValue) {
            quantityInput.value = currentValue + 1;
        }
    });

    // Tab Switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Add to Cart Functionality
    const addToCartBtn = document.getElementById('addToCartBtn');
    const sizeSelect = document.getElementById('sizeSelect');

    addToCartBtn.addEventListener('click', () => {
        const selectedSize = sizeSelect.value;
        const quantity = parseInt(quantityInput.value);

        if (!selectedSize) {
            alert('Por favor, selecione um tamanho');
            sizeSelect.focus();
            return;
        }

        // Get product details
        const productTitle = document.querySelector('.product-title').textContent;
        const productPriceText = document.querySelector('.product-price').textContent;
        const productImage = document.getElementById('mainImage').src;

        // Extract numeric price from text (e.g., "€89.99" -> 89.99)
        const priceMatch = productPriceText.match(/[\d,.]+/);
        const productPrice = priceMatch ? parseFloat(priceMatch[0].replace(',', '.')) : 0;

        // Get or create cart from localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Create unique ID based on product title and size
        const productId = `${productTitle}-${selectedSize}`.replace(/\s+/g, '-').toLowerCase();

        // Check if product with same size already exists in cart
        const existingItemIndex = cart.findIndex(item =>
            item.id === productId
        );

        if (existingItemIndex !== -1) {
            // Update quantity if item exists
            cart[existingItemIndex].quantity += quantity;
        } else {
            // Add new item to cart
            cart.push({
                id: productId,
                name: productTitle,
                price: productPrice,
                size: selectedSize.toUpperCase(),
                quantity: quantity,
                image: productImage
            });
        }

        // Save cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Show success message
        showAddedToCartMessage();

        // Update cart count (total items)
        updateCartCountDisplay();

        // Trigger cart update and show sidebar
        // Dispatch custom event to notify script.js to update cart
        window.dispatchEvent(new Event('cartUpdated'));

        // Show cart sidebar if function exists
        if (typeof showCartSidebar === 'function') {
            showCartSidebar();
        }
    });

    // Show "Added to Cart" message
    function showAddedToCartMessage() {
        // Create temporary message element
        const message = document.createElement('div');
        message.textContent = '✓ Produto adicionado ao carrinho!';
        message.style.cssText = `
            position: fixed;
            top: 100px;
            right: 30px;
            background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 14px;
            z-index: 10002;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 2.7s;
        `;

        document.body.appendChild(message);

        // Remove message after 3 seconds
        setTimeout(() => {
            message.remove();
        }, 3000);
    }
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
