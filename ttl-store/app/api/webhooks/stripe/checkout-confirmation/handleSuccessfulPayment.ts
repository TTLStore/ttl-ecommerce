import membershipControllers from "@/db/controllers/membershipControllers";

export default async function handleSuccessfulPayment({
  userId,
  poolId
}: {
  userId : string,
  poolId : string
}) {
  try {
    const success = await membershipControllers.handleUpdateMembership({
      userId, poolId, update: {confirmedPayment : true}
    });

    // TODO : notify host to send out invite

    return success;
  } catch (error : any) {
    console.error(`handleSuccessfulpayment Error : ${error}`);
    throw error;
  }
}