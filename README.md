# ttl-ecommerce

# Working Logs

## Mar 25, 2025
### Tasks:
- Payment
### What I did:
- Implemented the payment feature using Stripe.
- API routes: 
  - Accounts : create stripe connected account
  - account-links: create account link for onboarding
  - create-checkout-sessions: create checkout session for each subscription
  - transfers: create transfer inside Stripe Connect

## Mar 12, 2025
### Tasks:
- Join Sub
- Payment
### What I did:
- Join Sub: 
  - Correctly display subscription available
- Payment
  - Research on how to use stripe
### What to do next:
- Continue research on how to use stripe, user account - connected account to accept payout

## Mar 6, 2025
### Tasks:
- Share SubScriptions
- Manage Subscription

### What I did:
- Share Subscription:
  - added Service Routes, allows creating, updating, and deleting services
  - Created new routes to handle sharing subscription more intuitive using Context and subRoutes
- Manage Subscription:
  - Added components for Subscription Mangament
  
### What left to do:
- Payment


## Mar 5, 2025
### Tasks:
- Share SubScriptions

### What I did:
- Share Subscription:
  - Added route to create new services.
  
### What left to do:
- Share Subscription: 
  - Request the service type from server.
  - Change the form based on the service type.


## Feb 28, 2025
### Tasks:
- Share SubScriptions
- Join SubScriptions
- Manage SubScriptions
### What I did:
- Manage Subscriptions:
  - Added a new section for user to manage their subscriptions.
  - Loaded the user's subscriptions.
  - Added detail page for each subscription.

### What left to do:
- Share Subscription: nothing
- Join Subscription: 
  - Add a confirmation dialog when joining a subscription.
  - Test the pagination.
- Manage Subscriptions:
  - Add a button to delete or cancel a subscription.
  - Add a button to edit a subscription.

## Feb 26, 2025
### Tasks:
- Share SubScriptions
- Join SubScriptions
### What I did:
- Join Subscription: 
  - Removed the subscription that user has already joined from the list of subscriptions.
  - Added pagination to the list of subscriptions.
- Added new section for user to manage their subscriptions.
### What left to do:
- Share Subscription: nothing
- Join Subscription: 
  - Add a confirmation dialog when joining a subscription.
  - Test the pagination.
- Manage Subscriptions:
  - Load the user's subscriptions.
## Feb 24, 2025
### Tasks:
- Share SubScriptions
- Join SubScriptions

### What I did:
- Share Subscription: nothing
- Join Subscription: 
  - Refactored API routes to use controllers.
  - Made a card for each subscription
  - Created a button to join a subscription
  - Asked for confirmation before joining a subscription

### What left to do:
- Join Subscription: 
  - Add a confirmation dialog when joining a subscription.
  - remove the subscription that user has already joined from the list of subscriptions.
  - add pagination to the list of subscriptions.

## Feb 19, 2025

### Tasks:
- Share Subscriptions
- Join Subscriptions

### What I did:
- Share Subscription:
  - Added a new notification when successfully creating a new subscription.


- Join Subscription:
  - Updated query to compare the number of current numbers with the maximum number of subscribers. 


### What left to do:
- Create a new subscription using two calls.
- Join a subscription.
  - Make a card for each subscription.
  - Create a button to join a subscription.
  - Ask for confirmation before joining a subscription.
--- 



## Feb 18, 2025

### Tasks:
- Share Subscriptions
- Join Subscriptions

### What I did:
- Successfully create new subscription only used one call. However, the target is to use two calls. One is for when the user selects the type of service, and the other is when submitting the form. The first call will be used to get the subscription details and the second call will be used to create the subscription.
- Successfully search for a type of service and display the results in an array.

### What left to do:
- Create a new subscription using two calls.
- Join a subscription.
  - Make a card for each subscription.
  - Create a button to join a subscription.
  - Ask for confirmation before joining a subscription.