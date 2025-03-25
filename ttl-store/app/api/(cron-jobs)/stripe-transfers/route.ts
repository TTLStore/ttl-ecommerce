import createTransfer from "@/libs/stripe/createTransfer";
import transactionController from "@/db/controllers/transactionControllers";
export async function GET () {
  try {
    // verify steps

    // get all transfers
    const transactions = await transactionController.getTransactions();
    for (const transaction of transactions) {
      try {
        await createTransfer({
          amount: transaction.amount,
          currency: 'usd', //transaction.hostId.country,
          destination: transaction.hostId.stripe_connected_id,
        });
        await transactionController.updateTransaction({ transactionId: transaction._id });
      } catch (error : any) {
        console.error(error);
      }
    }

  } catch (error : any) {
    console.error(error);
    return new Response(error.message, { status: error.status || 500 });
  }
}