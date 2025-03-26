import stripe from '../stripe.config';

export async function deleteProduct(productId : string) {
  try {
    await stripe.products.del(productId);
    return true;
  } catch (error : any) {
    return false;
  }
}