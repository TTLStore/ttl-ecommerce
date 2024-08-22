import { z } from 'zod';

import { MAX_POOL_MEMBERS, SERVICES } from '@/constants';

export const PoolSchema = z.object({
  poolType: z.enum(SERVICES).nullish(),
  maxMembers: z.number({
    required_error: 'Max members is required',
  }).min(1).max(MAX_POOL_MEMBERS),
  isOpen: z.boolean(),
  isPublic: z.boolean(),
  description: z.string(),
});

export type PoolZodType = z.infer<typeof PoolSchema>;

