import membershipControllers from "@/db/controllers/membershipControllers"
import poolControllers from "@/db/controllers/poolControllers";
import userControllers from "@/db/controllers/userControllers";
import generateMessageForHost from "@/libs/nodemailer/notifyHost";
import sendEmailTo from "@/libs/nodemailer/sendEmailTo";

/**
 * Handle checkout session completed
 * add membership entry to membership doc
 * @param userId - id of the member who wants to join
 * @param poolId - id of the shared subscription
 * @returns - true if success
 */
export async function handleCheckoutCompleted({
  userId,
  hostId,
  poolId
}: {
  userId: string,
  hostId: string,
  poolId: string
}): Promise<boolean> {
  // create an entry in poolMemberShip with confirmedPayment to be true, and verified to be false - only true when: 1. Host has sent out invite and then 2. User has accepted host's invite
  try {
    await poolControllers.handlePatchPool({userId, poolId}) 
    await membershipControllers.handleUpdateMembership({userId, poolId, update : {
      confirmedPayment: true
    }});

    // TODO: notify host to send out invite
    const [hostInfo, userInfo] = await Promise.all([
      userControllers.handleGetUser(hostId),
      userControllers.handleGetUser(userId)
    ]);

    const message = generateMessageForHost({
      hostEmail : hostInfo.email,
      memberEmail: userInfo.email,
    });

    sendEmailTo(message);
    return true;
  } catch (error) {
    throw error
  }
}

