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
}) : Promise<{priceId : string, productId : string}> {
  try {
    const product = await stripe.products.create({
      name,
      default_price_data : {
        unit_amount,
        currency,
        recurring: {
          interval
        }
      },
      description
    });

    return {
      priceId: product.default_price as string,
      productId: product.id
    }
  } catch (error : any) {
    console.error(error);
    throw error
  }
}

