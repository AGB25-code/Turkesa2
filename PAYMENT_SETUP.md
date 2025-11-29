# Payment Integration Setup Guide

## Overview
The Turkesa e-commerce website includes a complete payment integration system supporting multiple payment methods:
- Credit/Debit Cards (Visa, Mastercard, American Express, Maestro)
- PayPal
- Apple Pay
- Google Pay

## Current Status
The frontend is fully implemented with a demo/test mode. To go live with real payments, you need to complete the backend integration.

## Setup Instructions

### 1. Stripe Integration (Card Payments)

#### Step 1: Create a Stripe Account
1. Go to [https://stripe.com](https://stripe.com)
2. Sign up for a free account
3. Complete your business profile

#### Step 2: Get Your API Keys
1. Go to Stripe Dashboard → Developers → API Keys
2. Copy your **Publishable Key** (starts with `pk_test_` for test mode)
3. Copy your **Secret Key** (starts with `sk_test_` for test mode)

#### Step 3: Update the Frontend
1. Open `checkout.js`
2. Find line 8: `const stripe = Stripe('pk_test_...');`
3. Replace with your actual Publishable Key

#### Step 4: Create a Backend Server
You need a backend server to securely process payments. Here's a basic Node.js example:

```javascript
// server.js (Node.js with Express)
const express = require('express');
const stripe = require('stripe')('YOUR_SECRET_KEY'); // Use your Secret Key
const app = express();

app.use(express.json());

// Create payment intent
app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency, orderData, items } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Amount in cents
      currency: currency,
      metadata: {
        order_data: JSON.stringify(orderData),
        items: JSON.stringify(items)
      }
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

#### Step 5: Install Dependencies
```bash
npm install express stripe cors
```

#### Step 6: Uncomment Real Implementation
In `checkout.js`, uncomment the real Stripe implementation code (around line 180-230)

---

### 2. PayPal Integration

#### Step 1: Create PayPal Business Account
1. Go to [https://developer.paypal.com](https://developer.paypal.com)
2. Sign up for a business account
3. Create an app in the Dashboard

#### Step 2: Get Your Client ID
1. Go to Dashboard → My Apps & Credentials
2. Copy your **Client ID**

#### Step 3: Add PayPal SDK
Add this script to `checkout.html` (before closing `</body>` tag):
```html
<script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&currency=EUR"></script>
```

#### Step 4: Uncomment PayPal Code
In `checkout.js`, uncomment the PayPal implementation in `initializePayPal()` function

---

### 3. Apple Pay Integration

#### Requirements:
- Apple Developer Account ($99/year)
- Domain verification
- SSL certificate (HTTPS)

#### Steps:
1. Register your domain with Apple
2. Create a Merchant ID
3. Download Apple Pay certificate
4. Configure Stripe for Apple Pay
5. Uncomment Apple Pay code in `checkout.js`

**Documentation:** [https://stripe.com/docs/apple-pay](https://stripe.com/docs/apple-pay)

---

### 4. Google Pay Integration

#### Requirements:
- Google Pay Business Console account
- Stripe account (Google Pay works through Stripe)

#### Steps:
1. Sign up for Google Pay
2. Add Google Pay API script to `checkout.html`:
```html
<script src="https://pay.google.com/gp/p/js/pay.js"></script>
```
3. Configure Google Pay in Stripe Dashboard
4. Uncomment Google Pay code in `checkout.js`

**Documentation:** [https://stripe.com/docs/google-pay](https://stripe.com/docs/google-pay)

---

## Security Considerations

### IMPORTANT - Never expose your Secret Keys:
- ❌ Never put Secret Keys in frontend JavaScript
- ✅ Always keep Secret Keys on the backend server
- ✅ Use environment variables for keys
- ✅ Enable HTTPS for production

### Backend Requirements:
1. **Server-side payment processing** - All payment confirmations must happen on your backend
2. **Webhook handlers** - Set up webhooks to handle payment events
3. **Database** - Store order information securely
4. **Email service** - Send confirmation emails to customers

---

## Testing

### Test Card Numbers (Stripe):
- **Successful payment:** 4242 4242 4242 4242
- **Requires authentication:** 4000 0025 0000 3155
- **Declined card:** 4000 0000 0000 9995

Use any future expiry date and any 3-digit CVC.

### Test Mode:
- Current implementation runs in demo mode
- No real charges are made
- Perfect for testing the user experience

---

## Going Live

### Checklist:
1. ✅ Complete Stripe account verification
2. ✅ Set up backend server
3. ✅ Replace test keys with live keys
4. ✅ Enable HTTPS
5. ✅ Set up webhooks
6. ✅ Test all payment methods
7. ✅ Configure email notifications
8. ✅ Set up order management system
9. ✅ Review and accept payment processor terms
10. ✅ Test refund process

---

## Current Demo Mode

The website currently works in **demo mode**:
- Cart functionality works perfectly
- Checkout form collects all information
- Payment UI is fully functional
- After 2 seconds, simulates successful payment
- Redirects to order success page

This allows you to:
- Test the complete user flow
- Show clients the design and UX
- Develop other features while payment integration is in progress

---

## Costs

### Transaction Fees:
- **Stripe:** 1.4% + €0.25 per European card
- **PayPal:** 2.9% + €0.35 per transaction
- **Apple Pay/Google Pay:** Same as Stripe (they process through Stripe)

### Additional Costs:
- **Apple Developer:** €99/year (for Apple Pay)
- **SSL Certificate:** Free with Let's Encrypt or included with hosting
- **Server Hosting:** €5-50/month depending on traffic

---

## Support & Documentation

- **Stripe Docs:** [https://stripe.com/docs](https://stripe.com/docs)
- **PayPal Docs:** [https://developer.paypal.com/docs](https://developer.paypal.com/docs)
- **Stripe Testing:** [https://stripe.com/docs/testing](https://stripe.com/docs/testing)

---

## Files Structure

```
turkesa/
├── index.html           # Main store page
├── checkout.html        # Checkout page with payment forms
├── checkout.css         # Checkout styling
├── checkout.js          # Payment processing logic
├── order-success.html   # Success confirmation page
├── styles.css           # Main styles
├── script.js            # Main functionality
└── PAYMENT_SETUP.md     # This file
```

---

## Questions?

If you need help with the integration, the Stripe and PayPal teams offer excellent support:
- Stripe Support: Available in dashboard
- PayPal Support: developer.paypal.com/support

For local Portuguese payment methods, consider:
- Multibanco (via Stripe)
- MB Way (via specialized providers)
