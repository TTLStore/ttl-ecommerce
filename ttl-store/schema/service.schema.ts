import { z } from 'zod';

export const ServiceSchema = z.object({
  name: z.string(),
  price: z.number(),
  pricePerMember: z.number(),
  platformFee: z.number(),
  currencyType: z.string(),
  stripePriceId: z.string().nullish(),
  stripeProductId: z.string().nullish(),
  provider: z.string(),
  max_users: z.number(),
  description: z.string(),
}).required();

export type ServiceZodType = z.infer<typeof ServiceSchema>;