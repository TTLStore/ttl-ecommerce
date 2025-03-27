import stripe from '../stripe.config';

export async function updateProducts({
  productId,
  payload
} : {
  productId : string,
  payload: any
}) {
  try {
    await stripe.products.update(productId, {
      ...payload
    })
  } catch (error : any) {
    console.error("update products error", error);
    throw error;
  }
}