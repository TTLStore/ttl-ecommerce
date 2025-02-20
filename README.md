# ttl-ecommerce

# Working Logs

## Feb 19, 2025

### Tasks:
- Share Subscriptions
- Join Subscriptions

### What I did:
- Share Subscription:
  - Added a new notification when successfully creating a new subscription.


- Join Subscription:
  - Updated query to compare the number of current numbers with the maximum number of subscribers. 
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