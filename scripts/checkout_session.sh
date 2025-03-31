#!/bin/bash

# Define metadata values
USER_ID="123"
HOST_ID="456"
POOL_ID="sub_789"

# Trigger Stripe webhook with metadata overrides
stripe trigger checkout.session.completed \
  --add checkout_session:metadata.userId=$USER_ID \
  --add checkout_session:metadata.hostId=$HOST_ID \
  --add checkout_session:metadata.poolId=$POOL_ID \
  --add checkout_session:payment_intent_data.metadata.userId=$USER_ID

# Print confirmation
echo "✅ Stripe checkout.session.completed event triggered with metadata:"
echo "   - User ID: $USER_ID"
echo "   - Host ID: $HOST_ID"
echo "   - Subscription ID: $POOL_ID"