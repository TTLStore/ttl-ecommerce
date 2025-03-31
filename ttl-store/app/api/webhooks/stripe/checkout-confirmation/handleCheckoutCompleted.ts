import membershipControllers from "@/db/controllers/membershipControllers"
import poolControllers from "@/db/controllers/poolControllers";


/**
 * Handle checkout session completed
 * @param userId - id of the member who wants to join
 * @param poolId - id of the shared subscription
 * @returns - true if success
 */
export async function handleCheckoutCompleted({
  userId,
  poolId
}: {
  userId: string,
  poolId: string
}): Promise<boolean> {
  // TODO: create an entry in poolMemberShip with confirmedPayment to be true, and verified to be false - only true when: 1. Host has sent out invite and then 2. User has accepted host's invite
  try {
    return await poolControllers.handlePatchPool({userId, poolId})
  } catch (error) {
    throw error
  }

  // TODO: notify host to send out invite
}