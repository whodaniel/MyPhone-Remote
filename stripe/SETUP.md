# MyPhone Remote — Stripe Integration

## Products to Create in Stripe Dashboard

### 1. Free Tier
- **Type**: Free (no Stripe product needed)
- Users self-host, no payment

### 2. Pro Monthly
- **Price**: $4.99/month
- **Stripe Price ID**: (create after setup)

### 3. Pro Annual
- **Price**: $39.00/year
- **Stripe Price ID**: (create after setup)

### 4. AI Agent Monthly
- **Price**: $14.99/month
- **Stripe Price ID**: (create after setup)

### 5. AI Agent Annual
- **Price**: $119.00/year
- **Stripe Price ID**: (create after setup)

## Setup Steps

1. Go to https://dashboard.stripe.com/products
2. Create product "MyPhone Remote Pro"
   - Add monthly price: $4.99
   - Add yearly price: $39.00
3. Create product "MyPhone Remote AI Agent"
   - Add monthly price: $14.99
   - Add yearly price: $119.00
4. Create Payment Links for each price
5. Add Payment Link URLs to landing page pricing buttons
6. Set up webhook endpoint: `https://myphoneremote.com/api/stripe/webhook`
7. Events to listen for: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`

## RevenueCat Integration

Since you're already using RevenueCat for ai-arcade.xyz:
1. Create new app in RevenueCat dashboard
2. Configure App Store / Play Store connection (if adding native app later)
3. Add Stripe as a billing provider
4. Map Stripe Price IDs to RevenueCat entitlements:
   - `pro` entitlement → Pro monthly/annual
   - `ai_agent` entitlement → AI Agent monthly/annual
5. Use RevenueCat SDK in the landing page for subscription management

## Environment Variables

```
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRO_MONTHLY_PRICE_ID=price_...
STRIPE_PRO_ANNUAL_PRICE_ID=price_...
STRIPE_AI_MONTHLY_PRICE_ID=price_...
STRIPE_AI_ANNUAL_PRICE_ID=price_...
REVENUECAT_API_KEY=...
REVENUECAT_WEBHOOK_AUTH_KEY=...
```

## Checkout Flow (Landing Page)

```javascript
// Replace href="#" on pricing buttons with Stripe Payment Links
const PRICING_LINKS = {
  proMonthly: 'https://buy.stripe.com/...',   // Create in Stripe Dashboard
  proAnnual:  'https://buy.stripe.com/...',   // Create in Stripe Dashboard
  aiMonthly:  'https://buy.stripe.com/...',   // Create in Stripe Dashboard
  aiAnnual:   'https://buy.stripe.com/...',   // Create in Stripe Dashboard
};
```

After payment, Stripe redirects to `https://myphoneremote.com/thank-you?tier=pro`
