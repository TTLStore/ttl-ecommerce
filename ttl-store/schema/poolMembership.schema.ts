import { z } from 'zod';

export const PoolMembershipSchema = z.object({
  id: z.string(),
  poolId: z.coerce.string({
    required_error: 'Pool Id is required',
  }),
  userId: z.string({
    required_error: 'User Id is required',
  }),
  createdAt: z.coerce.date({
    required_error: 'Created At is required',
  }),
  updatedAt: z.coerce.date({
    required_error: 'Updated At is required',
  }),
});

export type PoolMembership = z.infer<typeof PoolMembershipSchema>;
