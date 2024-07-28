import { z } from 'zod';

import { MAX_POOL_MEMBERS, SERVICES } from '@/constants';

export const PoolSchema = z.object({
  id: z.string(),
  poolType: z.enum(SERVICES),
  createdBy: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  maxMembers: z.number({
    required_error: 'Max members is required',
  }).min(1).max(MAX_POOL_MEMBERS),
  currentMembers: z.number().min(1).max(MAX_POOL_MEMBERS),
  isOpen: z.boolean(),
  isPublic: z.boolean(),
  description: z.string(),
});

export type Pool = z.infer<typeof PoolSchema>;

