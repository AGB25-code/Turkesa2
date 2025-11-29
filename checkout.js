// NOTE: This is a demo implementation. For production, you need to:
// 1. Sign up for Stripe account at https://stripe.com
// 2. Get your publishable key from Stripe Dashboard
// 3. Set up a backend server to handle payment processing
// 4. Replace 'YOUR_STRIPE_PUBLISHABLE_KEY' with your actual key

// Initialize Stripe (replace with your publishable key)
// For demo purposes, this uses Stripe test mode
const stripe = Stripe('pk_test_51234567890abcdefghijklmnopqrstuvwxyz'); // Replace with your actual key
let elements;
let cardElement;

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Shipping cost
const SHIPPING_COST = 5.00;
const FREE_SHIPPING_THRESHOLD = 50.00;

// Initialize checkout page
document.addEventListener('DOMContentLoaded', () => {
    // Redirect if cart is empty
    if (cart.length === 0) {
        alert('O seu carrinho está vazio!');
        window.location.href = 'index.html';
        return;
    }

    loadOrderSummary();
    initializeStripe();
    initializePaymentMethodToggle();
    setupFormSubmission();
});

// Load Order Summary
function loadOrderSummary() {
    const orderItems = document.getElementById('orderItems');
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const totalEl = document.getElementById('total');

    // Render items
    const itemsHTML = cart.map(item => `
        <div class="order-item">
            <img src="${item.image}" alt="${item.name}" class="order-item-image">
            <div class="order-item-details">
                <div class="order-item-name">${item.name}${item.size ? ` - ${item.size}` : ''}</div>
                <div class="order-item-quantity">Quantidade: ${item.quantity}</div>
            </div>
            <div class="order-item-price">${(item.price * item.quantity).toFixed(2)}€</div>
        </div>
    `).join('');

    orderItems.innerHTML = itemsHTML;

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
    const total = subtotal + shipping;

    subtotalEl.textContent = `${subtotal.toFixed(2)}€`;
    shippingEl.textContent = shipping === 0 ? 'Grátis' : `${shipping.toFixed(2)}€`;
    totalEl.textContent = `${total.toFixed(2)}€`;
}

// Initialize Stripe Elements
function initializeStripe() {
    // Create an instance of Elements
    elements = stripe.elements();

    // Custom styling for card element
    const style = {
        base: {
            color: '#1a1a1a',
            fontFamily: '"Josefin Sans", sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '14px',
            '::placeholder': {
                color: '#999'
            }
        },
        invalid: {
            color: '#ff6b6b',
            iconColor: '#ff6b6b'
        }
    };

    // Create an instance of the card Element
    cardElement = elements.create('card', { style: style });

    // Add an instance of the card Element into the `card-element` div
    cardElement.mount('#card-element');

    // Handle real-time validation errors from the card Element
    cardElement.on('change', (event) => {
        const displayError = document.getElementById('card-errors');
        if (event.error) {
            displayError.textContent = event.error.message;
        } else {
            displayError.textContent = '';
        }
    });
}

// Initialize Payment Method Toggle
function initializePaymentMethodToggle() {
    const paymentMethodInputs = document.querySelectorAll('input[name="paymentMethod"]');
    const cardForm = document.getElementById('cardPaymentForm');
    const paypalForm = document.getElementById('paypalPaymentForm');
    const applePayForm = document.getElementById('applePayPaymentForm');
    const googlePayForm = document.getElementById('googlePayPaymentForm');

    paymentMethodInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            // Hide all payment forms
            cardForm.style.display = 'none';
            paypalForm.style.display = 'none';
            applePayForm.style.display = 'none';
            googlePayForm.style.display = 'none';

            // Show selected payment form
            switch(e.target.value) {
                case 'card':
                    cardForm.style.display = 'block';
                    break;
                case 'paypal':
                    paypalForm.style.display = 'block';
                    initializePayPal();
                    break;
                case 'applePay':
                    applePayForm.style.display = 'block';
                    initializeApplePay();
                    break;
                case 'googlePay':
                    googlePayForm.style.display = 'block';
                    initializeGooglePay();
                    break;
            }
        });
    });
}

// Setup Form Submission
function setupFormSubmission() {
    const form = document.getElementById('checkoutForm');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

        if (selectedPaymentMethod === 'card') {
            await handleCardPayment();
        } else if (selectedPaymentMethod === 'paypal') {
            handlePayPalPayment();
        } else if (selectedPaymentMethod === 'applePay') {
            handleApplePayPayment();
        } else if (selectedPaymentMethod === 'googlePay') {
            handleGooglePayPayment();
        }
    });
}

// Handle Card Payment with Stripe
async function handleCardPayment() {
    setLoading(true);

    // Get form data
    const formData = {
        email: document.getElementById('email').value,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        postalCode: document.getElementById('postalCode').value,
        country: document.getElementById('country').value,
        phone: document.getElementById('phone').value,
        cardName: document.getElementById('cardName').value
    };

    // Calculate total
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
    const total = subtotal + shipping;

    // In a real implementation, you would:
    // 1. Send order data to your backend
    // 2. Backend creates a PaymentIntent with Stripe
    // 3. Backend returns client_secret
    // 4. Use client_secret to confirm payment

    // For demo purposes, we'll simulate a successful payment
    setTimeout(() => {
        setLoading(false);
        showPaymentSuccess();
    }, 2000);

    // Real Stripe implementation would look like this:
    /*
    try {
        // Call your backend to create PaymentIntent
        const response = await fetch('/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                amount: Math.round(total * 100), // Stripe expects amount in cents
                currency: 'eur',
                orderData: formData,
                items: cart
            })
        });

        const { clientSecret } = await response.json();

        // Confirm the payment with Stripe
        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: formData.cardName,
                    email: formData.email,
                    phone: formData.phone,
                    address: {
                        line1: formData.address,
                        city: formData.city,
                        postal_code: formData.postalCode,
                        country: formData.country
                    }
                }
            }
        });

        if (error) {
            showPaymentError(error.message);
            setLoading(false);
        } else if (paymentIntent.status === 'succeeded') {
            showPaymentSuccess();
        }
    } catch (error) {
        showPaymentError('Ocorreu um erro ao processar o pagamento.');
        setLoading(false);
    }
    */
}

// Initialize PayPal
function initializePayPal() {
    const container = document.getElementById('paypal-button-container');

    // Check if PayPal button already exists
    if (container.children.length > 0) {
        return;
    }

    // For demo purposes, show a message
    container.innerHTML = `
        <div style="text-align: center; padding: 20px; background: #ffc439; border-radius: 4px; color: #000;">
            <strong>PayPal Integration</strong><br>
            <small>Para ativar PayPal, é necessário configurar uma conta PayPal Business e adicionar o SDK do PayPal.</small>
        </div>
    `;

    // Real PayPal implementation would use PayPal SDK:
    /*
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: calculateTotal()
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                showPaymentSuccess();
            });
        }
    }).render('#paypal-button-container');
    */
}

// Handle PayPal Payment
function handlePayPalPayment() {
    showPaymentMessage('Por favor, use o botão PayPal acima para completar o pagamento.', 'error');
}

// Initialize Apple Pay
function initializeApplePay() {
    const button = document.getElementById('apple-pay-button');

    // Check if Apple Pay is available
    if (!window.ApplePaySession || !ApplePaySession.canMakePayments()) {
        button.innerHTML = '<p style="text-align: center; color: #999;">Apple Pay não está disponível neste dispositivo</p>';
        return;
    }

    button.innerHTML = 'Apple Pay';
    button.onclick = handleApplePayPayment;
}

// Handle Apple Pay Payment
function handleApplePayPayment() {
    showPaymentMessage('Apple Pay requer configuração adicional no backend com certificados Apple.', 'error');

    // Real implementation would create an Apple Pay session:
    /*
    const session = new ApplePaySession(3, paymentRequest);
    session.onvalidatemerchant = async event => {
        // Validate with your server
    };
    session.onpaymentauthorized = event => {
        // Process payment
    };
    session.begin();
    */
}

// Initialize Google Pay
function initializeGooglePay() {
    const button = document.getElementById('google-pay-button');

    button.innerHTML = `
        <div style="text-align: center; padding: 20px; background: #f1f1f1; border-radius: 4px;">
            <strong>Google Pay Integration</strong><br>
            <small>Para ativar Google Pay, é necessário configurar o Google Pay API.</small>
        </div>
    `;

    // Real implementation would use Google Pay API:
    /*
    const paymentsClient = new google.payments.api.PaymentsClient({environment: 'TEST'});
    const button = paymentsClient.createButton({onClick: onGooglePaymentButtonClicked});
    document.getElementById('google-pay-button').appendChild(button);
    */
}

// Handle Google Pay Payment
function handleGooglePayPayment() {
    showPaymentMessage('Por favor, use o botão Google Pay acima para completar o pagamento.', 'error');
}

// Calculate total
function calculateTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
    return (subtotal + shipping).toFixed(2);
}

// Show Payment Success
function showPaymentSuccess() {
    // Clear cart
    localStorage.removeItem('cart');

    // Show success message
    showPaymentMessage('Pagamento realizado com sucesso! A redirecionar...', 'success');

    // Redirect to success page after 2 seconds
    setTimeout(() => {
        window.location.href = 'order-success.html';
    }, 2000);
}

// Show Payment Error
function showPaymentError(message) {
    showPaymentMessage(message, 'error');
}

// Show Payment Message
function showPaymentMessage(message, type) {
    const messageEl = document.getElementById('payment-message');
    messageEl.textContent = message;
    messageEl.className = `payment-message ${type}`;
    messageEl.style.display = 'block';

    // Hide after 5 seconds
    setTimeout(() => {
        messageEl.style.display = 'none';
    }, 5000);
}

// Set Loading State
function setLoading(isLoading) {
    const submitBtn = document.getElementById('submitBtn');
    const buttonText = document.getElementById('button-text');
    const spinner = document.getElementById('spinner');

    if (isLoading) {
        submitBtn.disabled = true;
        buttonText.textContent = 'A processar...';
        spinner.style.display = 'inline-block';
    } else {
        submitBtn.disabled = false;
        buttonText.textContent = 'Finalizar Compra';
        spinner.style.display = 'none';
    }
}
