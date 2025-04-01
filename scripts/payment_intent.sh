#!/bin/bash

# Define metadata values
USER_ID="67e664d9c4e40861f5c624f8"
HOST_ID="67e3b9d089f3d6f93bd0afd4"
POOL_ID="67e655dec4e40861f5c624c9"

stripe trigger payment_intent.succeeded \
  --add payment_intent:metadata.userId=$USER_ID \
  --add payment_intent:metadata.hostId=$HOST_ID \
  --add payment_intent:metadata.poolId=$POOL_ID \

echo 'payment_intent.succeeded triggered'