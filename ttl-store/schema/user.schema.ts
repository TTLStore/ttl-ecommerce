import { z } from 'zod';

export const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  image: z.string().url().optional(),
  emailVerified: z.date().optional(),
  password: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});