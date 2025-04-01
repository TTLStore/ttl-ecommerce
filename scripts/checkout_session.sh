#!/bin/bash

# Define metadata values
USER_ID="67e664d9c4e40861f5c624f8"
HOST_ID="67e3b9d089f3d6f93bd0afd4"
POOL_ID="67e655dec4e40861f5c624c9"

# Trigger Stripe webhook with metadata overrides
stripe trigger checkout.session.completed \
  --add checkout_session:metadata.userId=$USER_ID \
  --add checkout_session:metadata.poolId=$POOL_ID \
  --add checkout_session:payment_intent_data.metadata.userId=$USER_ID \
  --add checkout_session:payment_intent_data.metadata.poolId=$USER_ID

# Print confirmation
echo "✅ Stripe checkout.session.completed event triggered with metadata:"
echo "   - User ID: $USER_ID"
echo "   - Host ID: $HOST_ID"
echo "   - Subscription ID: $POOL_ID"