import z from 'zod';
import { coinSchema } from 'schema';

export type CoinType = z.infer<typeof coinSchema>;
