import stripe from '../stripe.config';

export async function deleteProduct(productId : string) {
  try {
    const res = await stripe.products.update(productId, {
      active: false
    });
    
    return true;
  } catch (error : any) {
    console.error(error);
    return false;
  }
}