import stripe from "../stripe.config";


export async function createProduct({
  name,
  unit_amount,
  currency,
  interval,
  description
} : {
  name: string,
  unit_amount: number,
  currency: string,
  interval: 'day' | 'week' | 'month' | 'year'
  description: string | undefined
}) {
  try {
    const product = await stripe.products.create({
      name, description
    });
  
    const price = await stripe.prices.create({
      currency,
      unit_amount,
      product: product.id, 
      recurring : {
        interval : interval
      }
    });

    return {
      productId: product.id,
      priceId: price.id
    }
  } catch (error : any) {
    console.error(error);
    throw error
  }
}

