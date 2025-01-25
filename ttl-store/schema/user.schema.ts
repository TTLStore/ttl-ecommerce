import { z } from 'zod';

export const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  image: z.string().url().optional(),
  emailVerified: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});